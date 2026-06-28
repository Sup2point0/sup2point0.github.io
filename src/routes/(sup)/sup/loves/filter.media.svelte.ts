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

  get groups(): string[] {
    return ["default", "date", "genres", "themes"];
  }


  apply(data: Groups<Media>): FilterResults<Media>
  {
    if (this.is_clear) {
      return super.grouped_results(super.filter_mandatory(data));
    }

    let media = Object.values(data).flat();
    let filtered = this.filter_media(media);

    if (this.group_by !== "default") {
      return super.grouped_results(this.#group_and_sort(filtered));
    }
    else if (this.sort_by !== "default" || this.query) {
      return super.flat_results(this.sort_media(filtered));
    }
    else {
      return super.flat_results(filtered);
    }
  }

  protected filter_media(media: Media[]): Media[]
  {
    return super.filter(media);
  }

  protected sort_media(media: Media[]): Media[]
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

  #group_and_sort(media: Media[]): Grouped<Media>
  {
    let grouper;

    // FIXME why switch here?
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
      entity_sorter: this.sort_media.bind(this),
    })
  }
}
