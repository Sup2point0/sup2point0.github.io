import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte.ts";
import type { TrackData } from "#scripts/types";


export class TrackSearchFilter extends SearchFilter<TrackData>
{
  include_previews: boolean = $state(false);


  apply(tracks: TrackData[]): TrackData[]
  {
    let out = [...tracks];

    if (!this.include_previews) {      
      out = out.filter(track => track.is_preview !== true);
    }

    super.apply(out, track => Math.max(
      partial_ratio(this.query, track.name),
      partial_ratio(this.query, track.album.name),
    ));

    return out;
  }
}
