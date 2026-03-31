import { persisted } from "svelte-persisted-store";

import { pick_random } from "#scripts/utils";
import type { int, filepath } from "#scripts/types";

import { routes_list } from "#routes";

import { SvelteSet } from "svelte/reactivity";


const links_init = [
  ...routes_list.filter(route => route.link.includes("/loves/")).map(route => route.link)
].map(qualify);


interface NavData
{
  visits:     int;
  visited:    SvelteSet<filepath>;
  directions: SvelteSet<filepath>;
}

/** Persisted data on which pages the user has visited, so that we can let them know about pages they haven't visited yet! */
export const nav = persisted<NavData>(
  "sup.nav",
  {
    visits:     0,
    visited:    new SvelteSet(),
    directions: new SvelteSet(links_init),
  },
  {
    serializer: {
      parse: json => {
        let out = JSON.parse(json);
        out.visited = new SvelteSet(out.visited);
        out.directions = new SvelteSet(out.directions);
        return out;
      },
      stringify: data => JSON.stringify({
        visits:     data.visits,
        visited:    Array.from(data.visited),
        directions: Array.from(data.directions),
      }),
    },
    syncTabs: true,
  }
);


/** Mark a page on the site as having been visited, and unlock new directions for the user. */
export function save_visited(path: filepath)
{
  nav.update(n => {
    n.visited.add(path);
    n.directions.delete(path);

    for (let next of link_chains[path] ?? []) {
      if (n.visited.has(next)) continue;
      n.directions.add(next);
    }

    let unvisited = links_core.filter(link => !n.visited.has(link));
    
    let shown = 0;

    for (let link of n.directions) {
      if (unvisited.includes(link)) shown++;
    }

    if (shown < 2) {
      n.directions.add(pick_random(unvisited));
    }

    return n;
  });
}


const links_core = [
  "info",
  "loves",
  "music",
  "projects",
  "dev",
].map(qualify);

const link_chains: Record<filepath, filepath[]> = Object.fromEntries(
  Object.entries({
    "music":                       ["music/listen", "music/create"],
    "music/listen":                ["music/listen/chronicle"],
    "music/listen/chronicle":      ["music/listen/artists"],
    "music/listen/artists":        ["music/listen/genres"],
    "music/create":                ["music/create/tracks"],
    "music/create/tracks":         ["music/create/albums"],
    "music/create/albums":         ["music/create/albums/cortex"],
    "music/create/albums/cortex":  ["music/create/albums/elysion"],
    "music/create/albums/elysion": ["music/create/albums/algo-vision"],
  })
  .map(([checkpoint, next]) => [qualify(checkpoint), next.map(qualify)])
);

function qualify(path: filepath): filepath
{
  return path.startsWith("/sup/") ? path : `/sup/${path}`;
}
