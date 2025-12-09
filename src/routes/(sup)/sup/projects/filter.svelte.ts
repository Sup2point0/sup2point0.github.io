import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { any, all, get_enabled } from "#scripts/utils";

import { Lang, Tool, Flavour, Kind, State } from "./projects";
import type { ProjectData } from "./projects";


function init_states(states: object): Record<string, boolean>
{
  return {
    ...Object.fromEntries(Object.values(states).map(s => [s, true]))
  };
}


export class ProjectSearchFilter extends SearchFilter<ProjectData>
{
  filter_by = $state({
    "on github": false,
    "has site": false,
  });

  tech    = $state({ ...init_states(Lang), ...init_states(Tool) })
  flavour = $state(init_states(Flavour));
  kind    = $state(init_states(Kind));
  state   = $state(init_states(State));

  [prop: string]: Record<string, boolean> | any;
  

  get previews(): [string, string][]
  {
    return [
      ...this.if_selected("tech"),
      ...get_enabled(this.flavour).map(opt => ["flavour", opt]),
      ...this.if_selected("kind"),
      ...this.if_selected("state"),
    ] as [string, string][];
  }

  private if_selected(prop: string): [string, string][]
  {
    /* @ts-ignore */
    let enabled: string[]           = !all(this[prop]) ? get_enabled(this[prop]) : [];
    let out:     [string, string][] = enabled.map(opt => [prop, opt]);

    return out;
  }

  get toggles(): Record<string, Record<string, boolean>>
  {
    return {
      tech: this.tech,
      flavour: this.flavour,
      kind: this.kind,
      state: this.state,
    };
  }

  get groups(): string[]
  {
    return [
      "default",
      "date",
      "tech",
      "flavour",
      "kind",
      "state",
    ];
  }

  project_scorer(proj: ProjectData): number
  {
    return Math.max(
      partial_ratio(this.query, proj.name),
      partial_ratio(this.query, proj.tech.join(" ")),
      proj.desc ? partial_ratio(this.query, proj.desc) : 0,
      proj.tech ? partial_ratio(this.query, proj.tech.join(" ")) : 0,
      proj.tags ? partial_ratio(this.query, proj.tags.join(" ")) : 0,
    );
  }

  group_scorer(group: string, projects: ProjectData[]): number
  {
    if (this.query) {
      return (
        projects
        .map(proj => proj._score_ ?? 0)
        .reduce((acc, n) => acc + n, 0)
      );
    }
    else {
      return projects.length;
    }
  }


  apply(projects: ProjectData[]): FilterResults<ProjectData>
  {    
    let out: FilterResults<ProjectData> = this.#filter(projects);
    
    if (this.group_by !== "default") {
      out = this.#group_and_sort(out);
    }
    else if (this.query) {
      out = super.sort(out, this.project_scorer);
    }

    return out;
  }

  #filter(projects: ProjectData[]): ProjectData[]
  {
    let out = projects.filter(
      proj => {
        proj._score_ = 0;
        let filtered = false;

        if (this.filter_by["on github"] && !proj.links?.github) return false;
        if (this.filter_by["has site"] && !proj.links?.site) return false;        

        for (let [prop, states] of Object.entries(this.toggles)) {
          if (all(states) || !any(states)) continue;

          let hit = false;

          for (let [toggle, state] of Object.entries(states)) {
            if (state) {
              if (Array.isArray(proj[prop])) {
                let matches = proj[prop].filter(p => p === toggle).length;
                if (matches > 0) {
                  hit = true;
                  proj._score_ += matches ** 2;
                }
              }
              else if (proj[prop] === toggle) {
                hit = true;
                proj._score_++;
              }
            }
          }

          if (!hit) return false;
          filtered = true;
        }

        return (proj._score_ > 0 || !filtered);
      }
    );

    if (out.length === 0 && this.query) {
      out = projects;
    }

    return out;
  }

  #group_and_sort(projects: ProjectData[]): [string, ProjectData[]][]
  {
    return super.group(projects, {
      grouper: proj => {
        let value = proj[this.group_by];
        return Array.isArray(value) ? value[0] : value;
      },
      entity_scorer: this.project_scorer.bind(this),
      group_scorer: this.group_scorer.bind(this),
    });
  }
}
