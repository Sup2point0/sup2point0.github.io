import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups, Grouped, States } from "#scripts/types";


export class MediaSearchFilter<Media extends MediaData> extends SearchFilter<Media>
{
  genres = $state(SearchFilter.init_states(Genre));
  themes = $state(SearchFilter.init_states(Theme));


  override get toggles(): Record<string, States> {
    return {
      genres: this.genres,
      themes: this.themes,
    };
  }

  override get groups() {
    return ["default", "date", "genres", "themes"];
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
    else {
      return shuffle(media);
    }
  }
}
