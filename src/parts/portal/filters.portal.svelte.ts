import { ratio, partial_ratio } from "fuzzball";

import { play_tune } from "#scripts/state";
import { SearchFilter, type Searchable } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";
import type { TrackData } from "#scripts/types/music/create";
import type { int, filepath } from "#scripts/types";

import { Shortcut, type ShortcutData } from "./shortcuts";
import { routes_list } from "#routes";
import { tracks_list } from "#sup/music/create/create";
import { sites_data } from "#routes/sites";
import { projects_list } from "#sup/projects/projects";
import { socials_list } from "#routes/(sup)/(home)/socials";

import { page } from "$app/state";
import { goto } from "$app/navigation";


export interface PortalSearchResult
{
  title:    string;
  capt:     string;
  desc?:    string;
  icon?:    filepath
  action:   () => any;
  colour?:  string;
}


export class PortalSearchFilter extends SearchFilter<Searchable>
{
  shortcut: ShortcutData = $derived.by(() => {
    if (this.query.at(0) !== "/") return Shortcut.Navigate;
    if (!this.query.includes(" ")) return Shortcut.Shortcuts;

    let key = this.query.at(1);

    return (
      Object.values(Shortcut)
      .find(data => data.key === key)
    ) ?? Shortcut.Navigate;
  });

  /** Which search result is currently focused. */
  focused_idx: number = $state(0);

  /** Which search result (if any) has been triggered. */
  triggered_idx: number | null = $state(null);

  #trigger_timeout = 0;


  update_focus(results: PortalSearchResult[], buttons: HTMLButtonElement[])
  {
    if (this.focused_idx < 0) {
      this.focused_idx = results.length - 1
    } else if (this.focused_idx >= results.length) {
      this.focused_idx = 0;
    }

    requestAnimationFrame(() => buttons[this.focused_idx]?.scrollIntoView({ behavior: "smooth" }));
  }

  trigger(index: int)
  {
    this.triggered_idx = index;
    if (this.#trigger_timeout) clearTimeout(this.#trigger_timeout);
    this.#trigger_timeout = setTimeout(() => { this.triggered_idx = null; }, 100);
  }


  apply(): PortalSearchResult[]
  {
    switch (this.shortcut) {
      case Shortcut.Navigate: return this.show_routes();
      case Shortcut.Warp:     return this.show_sites();
      case Shortcut.Music:    return this.show_tracks();
      case Shortcut.Projects: return this.show_projects();
      case Shortcut.Socials:  return this.show_socials();
      default:                return this.show_shortcuts();
    }
  }

  show_shortcuts(): PortalSearchResult[]
  {
    let filtered = Object.values(Shortcut).filter(shortcut =>
      shortcut.key !== "/"
      && (this.query.includes(shortcut.key) || this.query === "/")
    );
    let shortcuts = filtered.length ? filtered : Object.values(Shortcut);

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
        scorer: route => (
          this.query === ""
          ? partial_ratio(page.url.pathname, route.link)
          : Math.max(
            partial_ratio(this.query, route.link),
            partial_ratio(this.query, route.title),
          ) + (route.link.startsWith(page.url.pathname))
        ),
      })
      .map(route => ({
        title: route.title,
        capt:  route.dirs.slice(0, -1).join(" × "),
        action: () => goto(route.link),
      }))
    );
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

  show_tracks(): PortalSearchResult[]
  {
    // TODO just use a `TrackSearchFilter`, wouldn't that be cool!
    let tracks = tracks_list
      .filter(track => !track.is_preview)
      .toSorted((prot, deut) => prot.name.localeCompare(deut.name));

    return (
      super.sort(tracks, {
        scorer: track => (
          /* NOTE: Prioritise tracks whose name starts with the same letter as the query */
          (track.name.at(0).toLowerCase() === this.query.at(3)?.toLowerCase() ? 100 : 0)
          + Math.max(
            partial_ratio(this.query, track.shard ?? ""),
            partial_ratio(this.query, track.name),
            partial_ratio(this.query, track.album.name),
            partial_ratio(this.query, track.genres?.join(" ")),
          )
        ),
      })
      .map(track => ({
        title: track.name,
        capt:  track.album.name,
        icon:  `/covers/music/create/${track.cover}`,
        action: () => play_tune(track as TrackData),
      }))
    )
  }

  show_projects(): PortalSearchResult[]
  {
    let projects = shuffle(projects_list.filter(proj => proj.links?.github));
    
    return (
      super.sort(projects, {
        scorer: proj => Math.max(
          partial_ratio(this.query, proj.title),
          partial_ratio(this.query, proj.capt) / 2,
        )
      })
      .map(proj => ({
        title:  proj.name,
        capt:   proj.links.github.replace("https://github.com/Sup2point0/", ""),
        desc:   proj.desc,
        action: () => { window.open(proj.links.github, "_blank"); },
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
