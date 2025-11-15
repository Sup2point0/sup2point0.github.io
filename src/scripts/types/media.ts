import type { Searchable } from "#scripts/search-filter.svelte";
import type { DatePoint } from "./index";


export type Genre =
    "action"
  | "adventure"
  | "cartoon"
  | "comedy"
  | "drama"
  | "dystopian"
  | "epic"
  | "fantasy"
  | "mystery"
  | "romance"
  | "sci-fi"
  | "slice of life"
  | "space opera"
  | "superhero"
  | "tragedy"
;

export type Theme =
    "coming of age"
  | "esports"
  | "grit"
  | "mythology"
  | "space"
;


export interface MediaData extends Searchable
{
  name: string;
  date?: DatePoint | DatePoint[];

  genres?: Genre[];
  themes?: Theme[];

  cover?: string;

  desc?: string | string[];
}
