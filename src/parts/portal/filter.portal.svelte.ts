import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";
import type { FilterResults, Searchable } from "#scripts/search-filter.svelte";

import { routes_list } from "#routes";
import { shortcuts_list, type ShortcutData } from "./shortcuts";

import { goto } from "$app/navigation";


export interface PortalSearchResult
{
  title: string;
  capt:  string;
  desc:  string;
  action: () => boolean | void;
  element?: HTMLElement;
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

  focused_idx: number = $state(0);


  jump_next(results: PortalSearchResult[])
  {
    if (this.focused_idx === null || this.focused_idx >= results.length - 1) {
      this.focused_idx = 0;
    } else {
      this.focused_idx++;
    }

    let target = results[this.focused_idx].element;
    target?.focus();
    requestAnimationFrame(() => target?.scrollIntoView({ behavior: "smooth" }));
  }

  jump_prev(results: PortalSearchResult[])
  {
    if (this.focused_idx === null || this.focused_idx === 0) {
      this.focused_idx = results.length - 1;
    } else {
      this.focused_idx--;
    }

    let target = results[this.focused_idx].element;
    target?.focus();
    requestAnimationFrame(() => target?.scrollIntoView({ behavior: "smooth" }));
  }


  apply(): FilterResults<PortalSearchResult>
  {
    switch (this.mode) {
      case PortalFlavour.Shortcut:
        return this.show_shortcuts();

      case PortalFlavour.Navigating:
        return this.show_routes();
    }
  }

  show_shortcuts(): FilterResults<PortalSearchResult>
  {
    return (
      super.sort(shortcuts_list, {
        scorer: (shortcut => Math.max(
          partial_ratio(this.query, shortcut.title),
        )),
      })
      .map(shortcut => ({
        title: shortcut.title,
        capt:  shortcut.key,
        desc:  shortcut.desc,
        action: () => { this.query = `/${shortcut.key} ` },
      }))
    );
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
        action: () => goto(route.link),
      }))
    );
  }
}
