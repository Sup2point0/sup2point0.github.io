import type { Searchable } from "#scripts/search-filter.svelte";
import type { ProjectData } from "#routes/(sup)/sup/projects/projects";
import type { Shard } from "#scripts/types";


export interface DevEntity extends Searchable {  
  colour: string;
}


export interface LangData extends DevEntity {
  name: string;

  icon: string;
}


export interface TechData extends DevEntity {
  name: string;

  icon: string;
}
