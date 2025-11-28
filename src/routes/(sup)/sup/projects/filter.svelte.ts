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
        project.desc ? partial_ratio(this.query, project.desc) : 0,
        project.tech ? partial_ratio(this.query, project.tech.join(" ")) : 0,
        project.tags ? partial_ratio(this.query, project.tags.join(" ")) : 0,
      )
    );
  }
}
