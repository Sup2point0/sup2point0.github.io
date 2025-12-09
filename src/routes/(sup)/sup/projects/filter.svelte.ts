import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";

import { Lang, Tool, Flavour, Kind, State } from "./projects";
import type { ProjectData } from "./projects";


export class ProjectSearchFilter extends SearchFilter<ProjectData>
{
  toggles = $state({
    language: {
      ...Object.fromEntries(
        [...Object.values(Lang), ...Object.values(Tool)].map(lang => [lang, true])
      )
    },
    flavour: {
      ...Object.fromEntries(Object.values(Flavour).map(flavour => [flavour, true]))
    },
    kind: {
      ...Object.fromEntries(Object.values(Kind).map(kind => [kind, true]))
    },
    state: {
      ...Object.fromEntries(Object.values(State).map(state => [state, true]))
    },
  });

  apply(projects: ProjectData[]): ProjectData[]
  {
    return super.sort(projects,
      project => Math.max(
        partial_ratio(this.query, project.name),
        partial_ratio(this.query, project.tech.join(" ")),
        project.desc ? partial_ratio(this.query, project.desc) : 0,
        project.tech ? partial_ratio(this.query, project.tech.join(" ")) : 0,
        project.tags ? partial_ratio(this.query, project.tags.join(" ")) : 0,
      )
    );
  }
}
