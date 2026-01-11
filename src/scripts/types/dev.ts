import type { Searchable } from "#scripts/search-filter.svelte";
import type { DatePoint } from "#scripts/types";


export enum Fluency {
  LEARN  = "Would Like to Learn",
  TIER_1 = "New",
  TIER_2 = "Comfortable",
  TIER_3 = "Absolutely Comfortable",
  TIER_4 = "Beyond Comfortable",
}


export interface DevEntity extends Searchable {  
  date:      DatePoint;
  versions?: string[];

  love:     3 | 2 | 1 | null;
  fluency?: Fluency;

  colour?:  string;
  related?: string[];

  details?: string | string[];
  desc?:    string | string[];
  lore?:    string | string[];

  has_projects?: boolean;
}


export interface LangData extends DevEntity {
  name: string;

  icon: string;
}


export interface TechData extends DevEntity {
  name: string;

  icon: string;
}
