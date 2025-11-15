import { partial_ratio } from "fuzzball";

import type { Groups } from "#scripts/types";
import { SearchFilter } from "#scripts/search-filter.svelte";

import type { FilmData } from "./films";


export class FilmSearchFilter extends SearchFilter<FilmData>
{
  apply(films: FilmData[]): FilmData[]
  {
    super.sort(films, film => partial_ratio(this.query, film.name));

    return out;
  }
}
