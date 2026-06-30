import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";
import { any, all, get_enabled } from "#scripts/utils";
import type { States } from "#scripts/types";

import type { ProjectData } from "./projects";
import { Lang } from "#sup/dev/dev.langs";
import { Tech } from "#sup/dev/dev.techs";
import { Flavour, Kind, State } from "#scripts/types/dev";


export class ProjectSearchFilter extends SearchFilter<ProjectData>
{
  tech = $state(
    Object.fromEntries(
      Object.entries({
        ...SearchFilter.init_shard_states(Lang),
        ...SearchFilter.init_shard_states(Tech),
      })
      .toSorted(
        (prot, deut) => prot[0].localeCompare(deut[0])
      )
    )
  );

  flavour = $state(SearchFilter.init_states(Flavour));
  kind    = $state(SearchFilter.init_states(Kind));
  state   = $state(SearchFilter.init_states(State));
  
  filter_by = $state({
    "on github": false,
    "has site": false,
  });
  
  [prop: string]: States | any;


  constructor()
  {
    super();

    this.previews = [
      ...this.#if_selected("tech"),
      ...get_enabled(this.flavour).map(opt => ["flavour", opt] as [string, string]),
      ...this.#if_selected("kind"),
      ...this.#if_selected("state"),
    ];

    this.toggles = {
      tech:    this.tech,
      flavour: this.flavour,
      kind:    this.kind,
      state:   this.state,
    };

    this.groups.push("date", "tech", "flavour", "kind", "state");
  }

  #if_selected(prop: string): [string, string][]
  {
    /* @ts-ignore */
    let enabled = !all(this[prop]) ? get_enabled(this[prop]) : [];
    let out = enabled.map(opt => [prop, opt] as [string, string]);

    return out;
  }


  // TODO refactor to use common `.filter()`
  #filter(projects: ProjectData[]): ProjectData[]
  {
    let out = projects.filter(
      proj => {
        proj._score = 0;
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
                  proj._score += matches ** 2;
                }
              }
              else if (proj[prop] === toggle) {
                hit = true;
                proj._score++;
              }
            }
          }

          if (!hit) return false;
          filtered = true;
        }

        return (proj._score > 0 || !filtered);
      }
    );

    if (out.length === 0 && this.query) {
      out = projects;
    }

    return out;
  }

  protected override sort_default(projects: ProjectData[]): ProjectData[]
  {
    return super.sort(projects, {
      /* @ts-ignore */
      scorer: (proj => Math.max(
        partial_ratio(this.query, proj.name),
        proj.desc ? partial_ratio(this.query, proj.desc) : 0,
        proj.tech ? partial_ratio(this.query, proj.tech.join(" ")) : 0,
        proj.tags ? partial_ratio(this.query, proj.tags.join(" ")) : 0,
      )).bind(this),
    });
  }
}
