/**
 * Exports the `search_data` reactive object for storing search data.
 */

import type { Project } from "./projects";


export class SearchData
{
  query: string = $state("");

  kind: ProjectKind = new ProjectKind();

  sort:
    "rank" | "scale" | "date"
  = $state("rank");

  lang:
    null |
    "py" | "cs" | "rb" | "html" | "css" | "scss" | "js" | "ts"
  = $state(null);

  tech:
    null |
    "svelte" | "svelte-kit" | "unity"
  = $state(null);


  apply(projects: Project[]): Project[]
  {
    return projects;
  }
}


class ProjectKind
{
  personal: boolean = $state(true);
  dev: boolean = $state(true);
}


export let search_data = new SearchData();
