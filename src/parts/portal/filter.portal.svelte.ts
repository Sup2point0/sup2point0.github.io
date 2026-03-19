import { ratio, partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";
import type { Searchable } from "#scripts/search-filter.svelte";

import { routes_list } from "#routes";
import { shortcuts_data, shortcuts_list } from "./shortcuts";
import { tracks_list } from "#sup/music/create/create";
import { sites_data } from "#routes/sites";

import { goto } from "$app/navigation";
import { socials_list } from "#src/routes/(sup)/(home)/socials";


export interface PortalSearchResult
{
  title:    string;
  capt:     string;
  desc?:    string;
  action:   () => any;
  colour?:  string;
}


enum PortalFlavour
{
  Shortcut   = "shortcut",
  Navigating = "navigating",
  Warping    = "warping",
  Vibing     = "vibing",
  Socials    = "socialising",
}


export class PortalSearchFilter extends SearchFilter<Searchable>
{
  mode: PortalFlavour = $derived.by(() => {
    if (this.query.at(0) !== "/") return PortalFlavour.Navigating;

    if (!this.query.includes(" ")) return PortalFlavour.Shortcut;

    switch (this.query.at(1)) {
      case shortcuts_data.WARP.key: return PortalFlavour.Warping;
      case shortcuts_data.MUSIC.key: return PortalFlavour.Vibing;
      case shortcuts_data.SOCIALS.key: return PortalFlavour.Socials;
      default: return PortalFlavour.Navigating;
    }
  });

  focused_idx: number = $state(0);


  update_focus(results: PortalSearchResult[], buttons: HTMLButtonElement[])
  {
    if (this.focused_idx < 0) {
      this.focused_idx = results.length - 1
    } else if (this.focused_idx >= results.length) {
      this.focused_idx = 0;
    }

    requestAnimationFrame(() => buttons[this.focused_idx]?.scrollIntoView({ behavior: "smooth" }));
  }


  apply(): PortalSearchResult[]
  {
    switch (this.mode) {
      case PortalFlavour.Shortcut:   return this.show_shortcuts();
      case PortalFlavour.Navigating: return this.show_routes();
      case PortalFlavour.Warping:    return this.show_sites();
      case PortalFlavour.Vibing:     return this.show_tracks();
      case PortalFlavour.Socials:    return this.show_socials();
    }
  }

  show_shortcuts(): PortalSearchResult[]
  {
    let filtered = shortcuts_list.filter(shortcut => this.query.includes(shortcut.key) || this.query === "/");
    let shortcuts = filtered.length ? filtered : shortcuts_list;

    return (
      super.sort(shortcuts, {
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
        action: () => alert("Working on it, coming soon!"),
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

  show_socials(): PortalSearchResult[]
  {
    return (
      super.sort(socials_list, {
        scorer: social => Math.max(
          partial_ratio(this.query, social.title),
          partial_ratio(this.query, social.capt),
        )
      })
      .map(social => ({
        title:  social.title,
        capt:   social.capt,
        desc:   social.desc,
        colour: social.colour,
        action: () => { window.open(social.link, "_blank"); },
      }))
    );
  }
}
