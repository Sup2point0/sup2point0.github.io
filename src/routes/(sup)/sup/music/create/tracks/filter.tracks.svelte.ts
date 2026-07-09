import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search";
import { datepoint_to_prec, DATE_PREC_MAJOR } from "#scripts/utils";
import type { TrackData } from "#scripts/types/music/create";


export class TrackSearchFilter extends SearchFilter<TrackData>
{
  override filter_by = $state({
    "is preview": false,
  });

  override sort_by = $state("default");


  constructor()
  {
    super();

    this.groups.push("album", "date", "genre");
    this.sorts = ["default", "random", "name", "date", "album"];
    delete this.extra["expand all"];

    this.sorters_specific["album"] = (
      tracks => tracks.sort((prot, deut) => prot.album.name.localeCompare(deut.album.name))
    );

    this.groupers_specific = {
      "album": track => track.album.name,

      "date": track => {
          let value = datepoint_to_prec(track.date);

          return (Array.isArray(value) ?
              Math.max(...value.map(d => Math.floor(d / DATE_PREC_MAJOR)))
            : Math.floor(value / DATE_PREC_MAJOR)
          );
        },

      "genre": track => track.genres?.[Math.floor(Math.random() * track.genres.length)],
    };
  }


  protected override exclude_default(track: TrackData): boolean
  {
    return (
      this.filter_by["is preview"] === true ?
        track.is_preview !== true
      : track.is_preview === true
    );
  }

  protected override sort_default(tracks: TrackData[]): TrackData[]
  {
    if (!this.query) return tracks;

    return super.sort(tracks, {
      scorer: track => (
        /* @ts-ignore */
        100 * (track.name.at(0)?.toLowerCase() === this.query[0].toLowerCase())
        +
        Math.max(
          partial_ratio(this.query, track.shard ?? ""),
          partial_ratio(this.query, track.name),
          partial_ratio(this.query, track.album.name),
          partial_ratio(this.query, track.genres?.join(" ") ?? ""),
        )
      )
    });
  }
}
