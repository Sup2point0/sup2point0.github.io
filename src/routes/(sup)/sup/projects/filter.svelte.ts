import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";

import type { ProjectData } from "./projects";


export class ProjectSearchFilter extends SearchFilter<ProjectData>
{
  apply(projects: ProjectData[]): ProjectData[]
  {
    return super.sort(projects,
      project => Math.max(
        partial_ratio(this.query, project.name),
        partial_ratio(this.query, project.tech.join(" ")),
        partial_ratio(this.query, project.desc),
      )
    );
  }
}
