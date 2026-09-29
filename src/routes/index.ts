import type { Searchable } from "#scripts/search";
import type { filepath, url } from "#scripts/types";


export interface RouteData extends Searchable
{
  link:  url
  dirs:  url[]
  title: string
}


export const routes_data = {
  sup: {
    _t: "sup",

    info:     { _t: "Info" },
    projects: { _t: "Projects" },

    loves: {
      _t: "Loves",

      games:    { _t: "Games" },
      puzzles:  { _t: "Puzzles" },
      films:    { _t: "Films" },
      series:   { _t: "Shows / Series", _s: "Series" },
      anime:    { _t: "Anime" },
      books:    { _t: "Books" },
      webtoons: { _t: "Webtoons" },
      youtube:  { _t: "YouTube" },
    },

    music: { _t: "Music",
      listen: { _t: "Music I Listen To", _s: "Listen",
        chronicle: { _t: "Music? It’s Complicated", _s: "Chronicle" },
        artists:   { _t: "Artists I Listen To", _s: "Artists" },
        genres:    { _t: "Genres I Listen To", _s: "Genres" },
      },
      create: { _t: "Music I Create", _s: "Create",
        tracks: { _t: "My Tracks", _s: "Tracks" },
        albums: { _t: "My Albums", _s: "Albums",
          singles: { _t: "Singles" },
          "algo-origins": { _t: "Algorhythm Origins" },
          "algo-roots":   { _t: "Algorhythm Roots" },
          "algo-vision":  { _t: "Algorhythm Vision" },
          elysion:        { _t: "ELYSION" },
          cortex:         { _t: "Cortex" },
          integral:       { _t: "Integral" },
          stranded:       { _t: "Stranded" },
          archives: { _t: "Archives",
            garageband: { _t: "GarageBand" },
            musescore:  { _t: "MuseScore" },
          }
        }
      },
    },
  },
};

export const routes_list: RouteData[] = (() =>
{
  let out: RouteData[] = [];

  function go(route: filepath, parents: string[], source: object)
  {
    for (let [dir, children] of Object.entries(source)) {
      if (dir === "_t" || dir === "_s") continue;

      let link = `${route}/${dir}`;
      let dirs = parents.concat([dir.toUpperCase()]);
      let title = children._t;

      // @ts-expect-error: `RouteData` is the only `Searchable` to exclude `.name`
      out.push({ link, dirs, title });
      go(link, dirs, children);
    }
  }

  go("/sup", [], routes_data.sup);

  return out;
})();
