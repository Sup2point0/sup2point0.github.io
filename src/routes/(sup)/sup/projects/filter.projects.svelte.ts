import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search";
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

  override get previews() {
    return [
      ...this.#if_selected("tech"),
      ...get_enabled(this.flavour).map(opt => ["flavour", opt] as [string, string]),
      ...this.#if_selected("kind"),
      ...this.#if_selected("state"),
    ];
  }


  constructor()
  {
    super();

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


  override filter(
    source: ProjectData[],
    exclude_if?: (project: ProjectData) => boolean,
  ): ProjectData[]
  {
    return super.filter(source, proj => (
        exclude_if?.(proj)
      || this.filter_by["on github"] && !proj.links?.github
      || this.filter_by["has site"] && !proj.links?.site
    ));
  }
  

  protected override sort_default(projects: ProjectData[]): ProjectData[]
  {
    return super.sort(projects, {
      scorer: ((proj: ProjectData) => Math.max(
        partial_ratio(this.query, proj.name),
        proj.desc ? partial_ratio(this.query, proj.desc) : 0,
        proj.tech ? partial_ratio(this.query, proj.tech.join(" ")) : 0,
        proj.tags ? partial_ratio(this.query, proj.tags.join(" ")) : 0,
      )).bind(this),
    });
  }
}
