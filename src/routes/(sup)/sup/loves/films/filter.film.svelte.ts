import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";

import type { FilmData } from "./films";


export class FilmSearchFilter extends SearchFilter<FilmData>
{
  apply(films: FilmData[]): FilterResults<FilmData>
  {
    let out: FilterResults<FilmData> = super.sort(films,
      film => Math.max(
        partial_ratio(this.query, film.name),
        film.collection ? partial_ratio(this.query, film.collection) : 0,
      )
    );

    if (this.group_by) {
      out = super.group(out,
        /* @ts-ignore */
        film => film[this.group_by!] ?? film.collection
      );

      if (this.query === "") {
        out.forEach(
          ([collection, films]) => [collection, shuffle(films)]
        );
      }
    }

    return out;
  }
}
