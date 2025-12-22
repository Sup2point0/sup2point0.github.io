import type { Searchable } from "#scripts/search-filter.svelte";
import type { DatePoint } from "./index";


export enum Genre {
  ACTION = "action",
  ADVENTURE = "adventure",
  CARTOON = "cartoon",
  COMEDY = "comedy",
  DRAMA = "drama",
  DYSTOPIAN = "dystopian",
  EPIC = "epic",
  FANTASY = "fantasy",
  MYSTERY = "mystery",
  ROMANCE = "romance",
  SCI_FI = "sci-fi",
  SLICE_OF_LIFE = "slice of life",
  SPACE_OPERA = "space opera",
  SUPERHERO = "superhero",
  TRAGEDY = "tragedy",
}

export enum Theme {
  COMING_OF_AGE = "coming of age",
  ESPORTS = "esports",
  GRIT = "grit",
  MYTHOLOGY = "mythology",
  SPACE = "space",
}


export interface MediaData extends Searchable
{
  name: string;
  date?: DatePoint | DatePoint[];

  genres?: Genre[];
  themes?: Theme[];

  cover?: string;

  desc?: string | string[];
}
