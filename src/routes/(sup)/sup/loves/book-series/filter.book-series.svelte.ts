import { MediaSearchFilter } from "../filter.media.svelte";

import { type BookSeriesData } from "./book-series";


export class BookSeriesSearchFilter extends MediaSearchFilter<BookSeriesData>
{
  constructor()
  {
    super();

    this.sorts.push("books count");

    this.sorters_specific["books count"] = series => super.sort(series, {
      scorer: s => Number(s.books) ?? 0,
    });
  }
}
