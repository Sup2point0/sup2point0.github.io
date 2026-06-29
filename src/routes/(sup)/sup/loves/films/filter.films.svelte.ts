import { MediaSearchFilter } from "../filter.media.svelte";
import type { States } from "#scripts/types";

import { Franchise, Flag, type FilmData } from "./films";


export class FilmSearchFilter extends MediaSearchFilter<FilmData>
{
  override shuffle_by_default = true;

  franchise = $state(MediaSearchFilter.init_states(Franchise));

  override filter_by = $state({
    ...MediaSearchFilter.init_states(Flag, false)
  });

  override get toggles(): Record<string, States> {
    return {
      ...super.toggles,
      franchise: this.franchise,
    }
  }
  

  override filter(films: FilmData[]): FilmData[]
  {
    return super.filter(films,
      film => {
        for (let [flag, state] of Object.entries(this.filter_by)) {
          if (state && !film.flags?.includes(flag as Flag)) return true;
        }
        return false;
      }
    );
  }
}
