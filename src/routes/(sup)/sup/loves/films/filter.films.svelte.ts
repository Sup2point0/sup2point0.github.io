import { MediaSearchFilter } from "../filter.media.svelte";
import type { States } from "#scripts/types";

import { Franchise, Flags, type FilmData } from "./films";


export class FilmSearchFilter extends MediaSearchFilter<FilmData>
{
  franchises = $state(MediaSearchFilter.init_states(Franchise));


  get toggles(): Record<string, States>
  {
    return {
      ...super.toggles,
      franchises: this.franchises,
    }
  }

  filter_by = $state({
    ...MediaSearchFilter.init_states(Flags, false)
  });
  

  protected override filter_media(films: FilmData[]): FilmData[]
  {
    return super.filter(films,
      film => {
        for (let [flag, state] of Object.entries(this.filter_by)) {
          if (state && !film.flags?.includes(flag as Flags)) return true;
        }
        return false;
      }
    );
  }
}
