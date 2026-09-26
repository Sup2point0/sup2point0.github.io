import { MediaSearchFilter } from "../filter.media.svelte";

import { type BooksData } from ".";


export class BookSearchFilter extends MediaSearchFilter<BooksData>
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
