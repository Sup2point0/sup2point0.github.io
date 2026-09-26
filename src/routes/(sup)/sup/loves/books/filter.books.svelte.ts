import { MediaSearchFilter } from "../filter.media.svelte";

import { type BookSeriesData } from ".";


export class BookSearchFilter extends MediaSearchFilter<BookSeriesData>
{
	constructor()
	{
		super();

		this.sorts.push("books count");

		this.sorters_specific["books count"] = series => super.sort(series, {
			scorer: s => s.books,
		});
	}
}
