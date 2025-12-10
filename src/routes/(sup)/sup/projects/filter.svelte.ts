import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { any, all, get_enabled, datepoint_to_date } from "#scripts/utils";

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
    return ["default", "date", "tech", "flavour", "kind", "state"];
  }


  apply(projects: ProjectData[]): FilterResults<ProjectData>
  {    
    let out: FilterResults<ProjectData> = this.#filter(projects);
    
    if (this.group_by !== "default") {
      out = this.#group_and_sort(out);
    }
    else if (this.sort_by !== "default" || this.query) {      
      out = this.#sort(out);
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

  #sort(projects: ProjectData[]): ProjectData[]
  {
    switch (this.sort_by) {
      case "date":
        return super.sort(projects, {
          scorer: proj => {
            if (Array.isArray(proj.date)) {
              return Math.min(...datepoint_to_date(proj.date) as number[]);
            }
            return datepoint_to_date(proj.date) as number;
          }
        });

      default:
        return super.sort(projects, {
          /* @ts-ignore */
          scorer: (proj => Math.max(
            partial_ratio(this.query, proj.name),
            partial_ratio(this.query, proj.tech.join(" ")),
            proj.desc ? partial_ratio(this.query, proj.desc) : 0,
            proj.tech ? partial_ratio(this.query, proj.tech.join(" ")) : 0,
            proj.tags ? partial_ratio(this.query, proj.tags.join(" ")) : 0,
          )).bind(this),
        });
    }
  }

  #sort_groups<Key extends PropertyKey>(
    groups: [Key, ProjectData[]][],
  ): [Key, ProjectData[]][]
  {
    if (this.sort_by === "date") {
      return groups.toSorted(
        ([g1, e1], [g2, e2]) => (g2 as number) - (g1 as number)
      );
    }

    if (this.dirtiness > 1) {
      return groups.toSorted(
        ([group, projects]) => {
          if (this.query) {
            return (
              projects
              .map(proj => proj._score_ ?? 0)
              .reduce((acc, n) => acc + n, 0)
            );
          }
          return projects.length;
        }
      );
    }
    
    let toggles = Object.keys(this.toggles);
    
    if (toggles.includes(this.group_by)) {
      return groups.toSorted(
        ([g1, e1], [g2, e2]) => {
          let prot = Object.keys(this[this.group_by]).indexOf(g1 as string);
          let deut = Object.keys(this[this.group_by]).indexOf(g2 as string);

          if (prot === -1 && deut !== -1) return 1;
          if (prot !== -1 && deut === -1) return -1;
          return prot - deut;
        }
      );
    }

    return groups;
  }

  #group_and_sort(projects: ProjectData[]): [string, ProjectData[]][]
  {
    let grouper;

    switch (this.group_by) {
      case "date":
        /* @ts-ignore */
        grouper = proj => {
          let value = datepoint_to_date(proj.date);
          return Array.isArray(value) ? Math.min(...value.map(Math.floor)) : Math.floor(value);
        }
        break;

      default:
        /* @ts-ignore */
        grouper = proj => {
          let value = proj[this.group_by];
          return Array.isArray(value) ? value[0] : value;
        };
    }

    return super.group(projects, {
      grouper: grouper.bind(this),
      entity_sorter: this.#sort.bind(this),
      group_sorter: this.#sort_groups.bind(this),
    });
  }
}
