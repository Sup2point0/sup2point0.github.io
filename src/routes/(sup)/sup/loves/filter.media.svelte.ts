import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search";
import { shuffle } from "#scripts/utils";
import { Genre, Theme, type MediaData } from "#scripts/types/media";


export class MediaSearchFilter<Media extends MediaData> extends SearchFilter<Media>
{
	genres = $state(SearchFilter.init_states(Genre));
	themes = $state(SearchFilter.init_states(Theme));


	constructor()
	{
		super()

		this.toggles = {
			genres: this.genres,
			themes: this.themes,
		};

		this.groups.push("date", "genres", "themes");
	}


	protected override sort_default(media: Media[]): Media[]
	{
		if (this.query) {
			return super.sort(media, {
				/* @ts-ignore */
				scorer: (each => Math.max(
					partial_ratio(this.query, each.name),
					each.collection ? partial_ratio(this.query, each.collection) : 0,
					each.genres ? partial_ratio(this.query, each.genres.join(" ")) : 0,
					each.themes ? partial_ratio(this.query, each.themes.join(" ")) : 0,
				)).bind(this),
			})
		}
		
		return media;
	}
}
