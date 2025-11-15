import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte.ts";
import type { TrackData } from "#scripts/types";


export class TrackSearchFilter extends SearchFilter<TrackData>
{
  include_previews: boolean = $state(false);


  apply(tracks: TrackData[]): TrackData[]
  {
    if (!this.include_previews) {      
      tracks = tracks.filter(track => track.is_preview !== true);
    }

    return super.sort(tracks,
      track => Math.max(
        partial_ratio(this.query, track.name),
        partial_ratio(this.query, track.album.name),
      )
    );
  }
}
