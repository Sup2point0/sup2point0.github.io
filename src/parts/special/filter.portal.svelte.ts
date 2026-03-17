import { SearchFilter } from "#scripts/search-filter.svelte";
import type { FilterResults, Searchable } from "#scripts/search-filter.svelte";

import { routes_list, type RouteData } from "#routes";
import { partial_ratio } from "fuzzball";


export interface PortalSearchResult
{
  title: string;
  capt:  string;
  desc:  string;
  action: () => void;
}


enum PortalFlavour
{
  Shortcut,
  Navigating,
}


export class PortalSearchFilter extends SearchFilter<Searchable>
{
  mode: PortalFlavour = $derived(
    this.query.startsWith("/") && !this.query.includes(" ") ? PortalFlavour.Shortcut
    : PortalFlavour.Navigating);


  apply(): FilterResults<PortalSearchResult>
  {
    switch (this.mode) {
      case PortalFlavour.Shortcut:
        return this.show_shortcuts();

      case PortalFlavour.Navigating:
        return this.show_routes();
    }
  }

  show_shortcuts(): FilterResults<PortalSearchFilter>
  {
    return [];  // TODO
  }

  show_routes(): FilterResults<PortalSearchResult>
  {
    return (
      super.sort(routes_list, {
        scorer: (route => Math.max(
          partial_ratio(this.query, route.link),
          partial_ratio(this.query, route.title),
        )),
      })
      .map(route => ({
        title: route.title,
        capt:  route.dirs.slice(0, -1).join(" × "),
        desc:  `The quick brown fox jumps over the lazy dog`,
        action: () => { window.location.href = route.link; },
      }))
    );
  }
}
