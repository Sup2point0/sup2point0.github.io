import type { Searchable } from "#scripts/search-filter.svelte";
import type { Shard } from "./index";


export interface LangData extends Searchable {
  name: string;

  icon: string;
}


export interface TechData extends Searchable {
  name: string;

  icon: string;
}
