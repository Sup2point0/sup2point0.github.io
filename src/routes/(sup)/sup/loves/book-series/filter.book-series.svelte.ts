import { MediaSearchFilter } from "../filter.media.svelte";

import { type BookSeriesData } from "./book-series";


export class BookSeriesSearchFilter extends MediaSearchFilter<BookSeriesData>
{
  override get sorts(): string[] {
    return [...super.sorts, "books count"];
  }


  constructor()
  {
    super();
    this.sorters_specific["books count"] = series => super.sort(series, {
      scorer: s => Number(s.books) ?? 0,
    });
  }
}
