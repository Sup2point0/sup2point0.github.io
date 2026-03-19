import type { Searchable } from "#scripts/search-filter.svelte";
import type { Path } from "#scripts/types";


export interface RouteData extends Searchable
{
  link:  Path;
  dirs:  string[];
  title: string[];
}


export const routes_data = {
  sup: {
    _title: null,

    info:     { _title: "Info" },
    projects: { _title: "Projects" },

    loves: {
      _title: "Loves",

      games:         { _title: "Games" },
      films:         { _title: "Films" },
      series:        { _title: "Shows / Series" },
      anime:         { _title: "Anime" },
      "book-series": { _title: "Book Series" },
      youtube:       { _title: "YouTube" },
    },

    music: { _title: "Music",
      listen: { _title: "Music I Listen To",
        chronicle: { _title: "Music? It’s Complicated" },
        artists:   { _title: "Artists I Listen To" },
        genres:    { _title: "Genres I Listen To" },
      },
      create: { _title: "Music I Create",
        tracks: { _title: "My Tracks" },
        albums: { _title: "My Albums",
          singles: { _title: "Singles" },
          "algo-origins": { _title: "Algorhythm Origins" },
          "algo-roots":   { _title: "Algorhythm Roots" },
          "algo-vision":  { _title: "Algorhythm Vision" },
          elysion:        { _title: "ELYSION" },
          cortex:         { _title: "Cortex" },
          integral:       { _title: "Integral" },
          stranded:       { _title: "Stranded" },
          archives: { _title: "Archives",
            garageband: { _title: "GarageBand" },
            musescore:  { _title: "MuseScore" },
          }
        }
      },
    },
  },
};

export const routes_list: RouteData[] = (() =>
{
  let out: RouteData[] = [];

  function go(route: Path, parents: string[], source: object)
  {
    for (let [dir, children] of Object.entries(source)) {
      if (dir === "_title") continue;

      let link = `${route}/${dir}`;
      let dirs = parents.concat([dir.toUpperCase()]);
      let title = children._title;

      out.push({ link, dirs, title });
      go(link, dirs, children);
    }
  }

  go("/sup", [], routes_data.sup);

  return out;
})();
