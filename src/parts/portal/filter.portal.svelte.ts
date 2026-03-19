import { ratio, partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";
import type { Searchable } from "#scripts/search-filter.svelte";

import { routes_list } from "#routes";
import { shortcuts_data, shortcuts_list } from "./shortcuts";
import { tracks_list } from "#sup/music/create/create";
import { sites_data } from "#routes/sites";

import { goto } from "$app/navigation";


export interface PortalSearchResult
{
  title:    string;
  capt:     string;
  desc?:    string;
  action:   () => any;
  colour?:  string;
  element?: HTMLElement;
}


enum PortalFlavour
{
  Shortcut   = "shortcut",
  Navigating = "navigating",
  Vibing     = "vibing",
  Warping    = "warping",
}


export class PortalSearchFilter extends SearchFilter<Searchable>
{
  mode: PortalFlavour = $derived(
      this.query.startsWith("/") && !this.query.includes(" ") ? PortalFlavour.Shortcut
    : this.query.at(1)?.toLowerCase() === shortcuts_data.VIBES.key ? PortalFlavour.Vibing
    : this.query.at(1)?.toLowerCase() === shortcuts_data.WARP.key ? PortalFlavour.Warping
    : PortalFlavour.Navigating
  );

  focused_idx: number = $state(0);


  update_focus(results: PortalSearchResult[])
  {
    if (this.focused_idx < 0) {
      this.focused_idx = results.length - 1
    } else if (this.focused_idx >= results.length) {
      this.focused_idx = 0;
    }

    let target = results[this.focused_idx].element;
    requestAnimationFrame(() => target?.scrollIntoView({ behavior: "smooth" }));
  }


  apply(): PortalSearchResult[]
  {
    switch (this.mode) {
      case PortalFlavour.Shortcut:
        return this.show_shortcuts();

      case PortalFlavour.Navigating:
        return this.show_routes();

      case PortalFlavour.Vibing:
        return this.show_tracks();

      case PortalFlavour.Warping:
        return this.show_sites();
    }
  }

  show_shortcuts(): PortalSearchResult[]
  {
    return (
      super.sort(shortcuts_list, {
        scorer: shortcut => Math.max(
          ratio(this.query, shortcut.title),
          100 * ~~(this.query.at(1)?.toLowerCase() === shortcut.key),
        ),
      })
      .map(shortcut => ({
        title: shortcut.title,
        capt:  shortcut.key.toUpperCase(),
        desc:  shortcut.desc,
        action: () => { this.query = `/${shortcut.key} ` },
      }))
    );
  }

  show_routes(): PortalSearchResult[]
  {
    return (
      super.sort(routes_list, {
        scorer: route => Math.max(
          partial_ratio(this.query, route.link),
          partial_ratio(this.query, route.title),
        ),
      })
      .map(route => ({
        title: route.title,
        capt:  route.dirs.slice(0, -1).join(" × "),
        desc:  `The quick brown fox jumps over the lazy dog`,
        action: () => goto(route.link),
      }))
    );
  }

  show_tracks(): PortalSearchResult[]
  {
    let tracks = tracks_list.filter(track => !track.is_preview);

    return (
      super.sort(tracks, {
        scorer: track => Math.max(
          partial_ratio(this.query, track.shard ?? ""),
          partial_ratio(this.query, track.name),
          partial_ratio(this.query, track.genres?.join(" ")),
        ),
      })
      .map(track => ({
        title: track.name,
        capt:  track.album.name,
        action: () => undefined,
      }))
    )
  }

  show_sites(): PortalSearchResult[]
  {
    return (
      super.sort(sites_data, {
        scorer: site => Math.max(
          partial_ratio(this.query, site.name),
          partial_ratio(this.query, site.intern),
        )
      })
      .map(site => ({
        title:  site.name,
        capt:   `https://sup2point0.github.io/${site.intern}`,
        desc:   site.desc,
        colour: site.colour,
        action: () => { window.open(`https://sup2point0.github.io/${site.intern}`, "_blank"); },
      }))
    );
  }
}
