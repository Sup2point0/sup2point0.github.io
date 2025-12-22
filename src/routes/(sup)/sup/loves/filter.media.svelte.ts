import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { any, all, sum, shuffle } from "#scripts/utils";
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
    let out: FilterResults<MediaData> = this.#filter(media);

    if (this.group_by !== "default") {
      out = this.#group_and_sort(out);
    }
    else if (this.sort_by !== "default" || this.query) {
      out = this.#sort(out);
    }

    return out;
  }

  #filter(media: MediaData[]): MediaData[]
  {
    let out = media.filter(
      each => {
        each._score_ = 0;
        let filtered = false;

        for (let [prop, states] of Object.entries(this.toggles)) {
          if (all(states) || !any(states)) continue;

          let hit = false;

          for (let [toggle, state] of Object.entries(states)) {
            if (state) {
              if (Array.isArray(each[prop])) {
                let matches = each[prop].filter(p => p === toggle).length;
                if (matches > 0) {
                  hit = true;
                  each._score_ += matches ** 2;
                }
              }
              else if (each[prop] === toggle) {
                hit = true;
                each._score_++;
              }
            }
          }

          if (!hit) return false;
          filtered = true;
        }

        return (each._score_ > 0 || !filtered);
      }
    );

    if (out.length === 0 && this.query) {
      out = media;
    }

    return out;
  }

  #sort(media: MediaData[]): MediaData[]
  {
    switch (this.sort_by) {
      case "date":
        return super.sort_date(media);
      
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

  #sort_groups<Key extends PropertyKey>(
    groups: [Key, MediaData[]][],
  ): [Key, MediaData[]][]
  {
    if (this.sort_by === "date") {
      return groups.toSorted(
        ([g1, e1], [g2, e2]) => (g2 as number) - (g1 as number)
      );
    }

    if (this.dirtiness > 1) {
      return groups.toSorted(
        ([group, media]) => {
          if (this.query) {
            return sum(
              media.map(each => each._score_ ?? 0)
            );
          }
          return media.length;
        }
      );
    }

    let toggles = Object.keys(this.toggles);

    if (toggles.includes(this.group_by)) {
      return groups.toSorted(
        ([g1, e1], [g2, e2]) => {
          let prot = Object.keys(this[this.group_by]).indexOf(g1 as string);
          let deut = Object.keys(this[this.group_by]).indexOf(g2 as string);

          if (prot === -1 && deut !== -1) return 1;
          if (prot !== -1 && deut === -1) return -1;
          return prot - deut;
        }
      )
    }

    return groups;
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
      group_sorter: this.#sort_groups.bind(this),
    })
  }
}
