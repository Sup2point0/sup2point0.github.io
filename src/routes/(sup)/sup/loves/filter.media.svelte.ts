import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";
import { Genre, Theme } from "#scripts/types";
import type { MediaData, States } from "#scripts/types";


export class MediaSearchFilter extends SearchFilter<MediaData>
{
  genres = $state(SearchFilter.init_states(Genre));
  themes = $state(SearchFilter.init_states(Theme));


  get toggles(): Record<string, States>
  {
    return {
      genres: this.genres,
      themes: this.themes,
    };
  }

  get groups(): string[]
  {
    return ["default", "date", "genres"];
  }


  apply(media: MediaData[]): FilterResults<MediaData>
  {
    let out: FilterResults<MediaData> = this.filter_media(media);

    if (this.group_by !== "default") {
      out = this.#group_and_sort(out);
    }
    else if (this.sort_by !== "default" || this.query) {
      out = this.#sort(out);
    }

    return out;
  }

  protected filter_media(media: MediaData[]): MediaData[]
  {
    return super.filter(media);
  }

  #sort(media: MediaData[]): MediaData[]
  {
    switch (this.sort_by) {
      case "date": return super.sort_date(media);
      case "name": return super.sort_name(media);
      
      default:
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
        return shuffle(media);
    }
  }

  #group_and_sort(media: MediaData[]): [string, MediaData[]][]
  {
    let grouper;

    switch (this.group_by) {
      default:
        /* @ts-ignore */
        grouper = proj => {
          let value = proj[this.group_by];
          return Array.isArray(value) ? value[0] : value;
        };
    }

    return super.group(media, {
      grouper: grouper.bind(this),
      entity_sorter: this.#sort.bind(this),
    })
  }
}
