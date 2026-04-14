import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte.ts";
import { shuffle, datepoint_to_prec } from "#scripts/utils";
import type { TrackData } from "#scripts/types/music/create";
import type { States } from "#scripts/types";


export class TrackSearchFilter extends SearchFilter<TrackData>
{
  get groups() {
    return ["default", "album", "year", "genre"];
  }

  filter_by = $state({
    "is preview": false,
  });

  sort_by = $state("random");

  get sorts() {
    return ["random", "name", "year", "album"];
  }


  apply(tracks: TrackData[]): FilterResults<TrackData>
  {
    let cands: FilterResults<TrackData> = super.filter(tracks,
      track => (
        (this.filter_by["is preview"] === true)
        ? track.is_preview !== true
        : track.is_preview === true
      )
    );

    if (this.group_by !== "default") {
      return this.#group_and_sort(cands);
    } else {
      return this.#sort(cands);
    }
  }

  #sort(tracks: TrackData[]): TrackData[]
  {
    switch (this.sort_by) {
      case "name": return super.sort_name(tracks);
      case "year": return super.sort_date(tracks);
      case "album": return tracks.sort((prot, deut) => prot.album.name.localeCompare(deut.album.name));
    }

    if (this.query === "") {
      return shuffle(tracks);
    }

    return super.sort(tracks, {
      scorer: track => Math.max(
        partial_ratio(this.query, track.shard ?? ""),
        partial_ratio(this.query, track.name),
        partial_ratio(this.query, track.album.name),
        partial_ratio(this.query, track.genres?.join(" ") ?? ""),
      )
    });
  }

  #group_and_sort(tracks: TrackData[]): [string, TrackData[]][]
  {
    let grouper: (track: TrackData) => any;

    switch (this.group_by) {
      case "album":
        grouper = track => track.album.name;
        break;
      
      case "year":
        grouper = track => {
          let value = datepoint_to_prec(track.date);
          return Array.isArray(value) ? Math.max(...value.map(d => Math.floor(d / 10000))) : Math.floor(value / 10000);
        }
        break;

      case "genre":
        grouper = track => track.genres?.[Math.floor(Math.random() * track.genres.length)];

      default:
        /* @ts-ignore */
        grouper = track => {
          let value = track[this.group_by];
          return Array.isArray(value) ? value[0] : value;
        };
    }

    return super.group(tracks, {
      grouper: grouper.bind(this),
      entity_sorter: this.#sort.bind(this),
    });
  }
}
