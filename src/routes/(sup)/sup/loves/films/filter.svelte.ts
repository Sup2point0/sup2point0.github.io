import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";

import type { FilmData } from "./films";


export class FilmSearchFilter extends SearchFilter<FilmData>
{
  apply(films: FilmData[]): FilterResults<FilmData>
  {
    let out: FilterResults<FilmData> = super.sort(films,
      film => partial_ratio(this.query, film.name)
    );

    if (this.group_by) {
      out = super.group(out,
        film => film[this.group_by!] ?? film.collection
      );
    }

    return out;
  }
}
