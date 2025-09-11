import type { TrackData } from "#scripts/types";


export class TrackSearchFilter
{
  query: string = $state("");

  include_previews: boolean = $state(false);


  apply(tracks: TrackData[]): TrackData[]
  {
    let out = [...tracks];

    if (!this.include_previews) {      
      out = out.filter(track => track.is_preview !== true);
    }

    return out;
  }
}
