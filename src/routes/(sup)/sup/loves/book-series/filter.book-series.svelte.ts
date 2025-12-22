import { MediaSearchFilter } from "../filter.media.svelte";

import { type BookSeriesData } from "./book-series";


export class BookSeriesSearchFilter extends MediaSearchFilter<BookSeriesData>
{
  get sorts(): string[] {
    return [...super.sorts, "books count"];
  }

  override sort_media(series: BookSeriesData[]): BookSeriesData[]
  {
    switch (this.sort_by) {
      case "books count": {
        return super.sort(series, {
          scorer: s => Number(s.books) ?? 0,
        });
      }

      default:
        return super.sort_media(series);
    }
  }
}
