import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";
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
  tech    = $state({ ...init_states(Lang), ...init_states(Tool) })
  flavour = $state(init_states(Flavour));
  kind    = $state(init_states(Kind));
  state   = $state(init_states(State));

  [prop: string]: Record<string, boolean> | any;
  

  get_toggles(): Record<string, Record<string, boolean>>
  {
    return {
      tech: this.tech,
      flavour: this.flavour,
      kind: this.kind,
      state: this.state,
    };
  }

  get_previews(): [string, string][]
  {
    return [
      ...this.if_selected("tech"),
      ...this.if_selected("flavour"),
      ...get_enabled(this.kind).map(opt => ["kind", opt]),
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

  apply(projects: ProjectData[]): ProjectData[]
  {    
    let out = projects.filter(
      proj => {
        proj._score_ = 0;

        for (let [prop, states] of Object.entries(this.get_toggles())) {
          if (all(states) || !any(states)) {
            continue;
          }

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

          if (!hit) {
            return false;
          }
        }
        return (proj._score_ > 0);
      }
    );

    if (out.length === 0) {
      out = projects;
    }

    if (this.query) {
      out = super.sort(out,
        proj => Math.max(
          partial_ratio(this.query, proj.name),
          partial_ratio(this.query, proj.tech.join(" ")),
          proj.desc ? partial_ratio(this.query, proj.desc) : 0,
          proj.tech ? partial_ratio(this.query, proj.tech.join(" ")) : 0,
          proj.tags ? partial_ratio(this.query, proj.tags.join(" ")) : 0,
        )
      );
    }

    return out;
  }
}
