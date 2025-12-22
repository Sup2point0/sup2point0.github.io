import { MediaSearchFilter } from "../filter.media.svelte";


export class FilmSearchFilter extends MediaSearchFilter
{
  filter_by = $state({
    animated: false,
    "based on book": false,
    "part of series": false,
    sequel: false,
    marvel: false,
    chinese: false,
  });
}
