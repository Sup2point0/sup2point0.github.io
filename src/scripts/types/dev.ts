import type { Searchable } from "#scripts/search-filter.svelte";
import type { Shard, DatePoint } from "#scripts/types";


export enum Fluency {
  TIER_4 = "Beyond Comfortable",
  TIER_3 = "Absolutely Comfortable",
  TIER_2 = "Comfortable",
  TIER_1 = "New",
}


export interface DevEntity extends Searchable {  
  date: DatePoint;
  love: 3 | 2 | 1 | null;
  fluency: Fluency;

  colour?: string;
  related?: string[];

  details?: string[];
  desc?: string;
}


export interface LangData extends DevEntity {
  name: string;

  icon: string;
}


export interface TechData extends DevEntity {
  name: string;

  icon: string;
}
