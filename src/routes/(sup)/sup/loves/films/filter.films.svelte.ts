import { MediaSearchFilter } from "../filter.media.svelte";

import { Franchise, Flags } from "./films";


export class FilmSearchFilter extends MediaSearchFilter
{
  filter_by = $state({
    ...MediaSearchFilter.init_states(Flags, false)
  });
}
