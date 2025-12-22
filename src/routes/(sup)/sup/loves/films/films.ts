import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export enum Franchise {
  DUNE = "Dune",
  HARRY_POTTER = "Harry Potter",
  MARVEL = "Marvel",
  STAR_WARS = "Star Wars",
}

export enum Flags {
  ANIMATED = "animated",
  BOOK = "based on book",
  CHINESE = "Chinese",
  SEQUEL = "is a sequel",

  /* We'll define a series to have min 3 entries */
  FIRST = "first of series",
  SERIES = "part of series",
}


export interface FilmData extends MediaData
{
  franchise?: Franchise;
  flags?: Flags[];
}


export const films_data: Groups<FilmData> = {
  "All-Time Favourites": [
    {
      name:   "Alita: Battle Angel",
      date:   2019,
      cover:  "alita-battle-angel.jpg",
    }, {
      name:   "Doctor Strange",
      date:   2016,
      cover:  "doctor-strange.jpg",
      genres: [Genre.SUPERHERO, Genre.FANTASY, Genre.ACTION],
      franchise: Franchise.MARVEL,
      flags:  [],
    }, {
      name:   "Dune: Part One",
      date:   2021,
      cover:  "dune-part-1.jpg",
      genres: [Genre.SPACE_OPERA, Genre.EPIC],
      franchise: Franchise.DUNE,
      flags:  [],
    }, {
      name:   "Dune: Part Two",
      date:   2024,
      cover:  "dune-part-2.jpg",
      genres: [Genre.SPACE_OPERA, Genre.EPIC],
      franchise: Franchise.DUNE,
      flags:  [Flags.SEQUEL],
    }, {
      name:   "Fantastic Beasts and Where To Find Them",
      date:   2016,
      cover:  "fantastic-beasts.jpg",
      genres: [Genre.FANTASY],
      franchise: Franchise.HARRY_POTTER,
      flags:  [Flags.FIRST, Flags.SERIES],
    }, {
      name:   "How To Train Your Dragon: The Hidden World",
      date:   2019,
      cover:  "hidden-world.jpg",
      genres: [Genre.FANTASY],
      flags:  [Flags.ANIMATED, Flags.SEQUEL, Flags.SERIES],
    }, {
      name:   "Interstellar",
      date:   2014,
      cover:  "interstellar.jpg",
      genres: [Genre.SCI_FI, Genre.EPIC],
      themes: [Theme.SPACE],
    }, {
      name:   "Love & Monsters",
      date:   2020,
      cover:  "love-and-monsters.jpg",
      genres: [Genre.ADVENTURE],
    }, {
      name:   "Ready Player One",
      date:   2018,
      cover:  "ready-player-one.jpg",
      genres: [Genre.ACTION, Genre.ADVENTURE, Genre.DYSTOPIAN],
      flags:  [Flags.BOOK],
    }, {
      name:   "Rogue One: A Star Wars Story",
      date:   2016,
      cover:  "rogue-one.jpg",
      genres: [Genre.SPACE_OPERA],
      themes: [Theme.GRIT],
      franchise: Franchise.STAR_WARS,
      flags:  [Flags.SERIES],
    }, {
      name:   "Spider-Man: Homecoming",
      date:   2017,
      cover:  "spider-man-homecoming.jpg",
      genres: [Genre.SUPERHERO, Genre.ACTION],
      franchise: Franchise.MARVEL,
      flags:  [Flags.FIRST, Flags.SERIES],
    }, {
      name:   "Spider-Man: Into the Spider-Verse",
      date:   2018,
      cover:  "into-the-spider-verse.jpg",
      genres: [Genre.SUPERHERO, Genre.ACTION],
      franchise: Franchise.MARVEL,
      flags:  [Flags.ANIMATED, Flags.FIRST, Flags.SERIES],
    }, {
      name:   "The Wild Robot",
      date:   2024,
      cover:  "wild-robot.jpg",
      genres: [Genre.ADVENTURE],
      flags:  [Flags.ANIMATED],
    }, {
      shard:  "ne-zha",
      name:   "哪吒",
      date:   2019,
      cover:  "ne-zha-1.jpg",
      genres: [Genre.ADVENTURE, Genre.COMEDY],
      themes: [Theme.MYTHOLOGY],
      flags:  [Flags.ANIMATED, Flags.CHINESE, Flags.FIRST, Flags.SERIES],
    },
  ],
  "Peak Cinema": [
    {
      name:   "Avengers: Endgame",
      date:   2019,
      cover:  "endgame.webp",
      franchise: Franchise.MARVEL,
      flags:  [Flags.SEQUEL, Flags.SERIES],
    }, {
      name:   "Avengers: Infinity War",
      date:   2018,
      cover:  "infinity-war.jpg",
      franchise: Franchise.MARVEL,
      flags:  [Flags.SERIES],
    }, {
      name:   "Big Hero 6",
      date:   2014,
      cover:  "big-hero-6.jpeg",
      flags:  [Flags.ANIMATED],
    }, {
      name:   "How To Train Your Dragon",
      date:   2010,
      cover:  "how-to-train-your-dragon.jpg",
      flags:  [Flags.ANIMATED, Flags.FIRST, Flags.SERIES],
    }, {
      name:   "Spider-Man: Across the Spider-Verse",
      date:   2023,
      cover:  "across-the-spider-verse.jpg",
      franchise: Franchise.MARVEL,
      flags:  [Flags.ANIMATED, Flags.SEQUEL, Flags.SERIES],
    }, {
      name:   "Spider-Man: Far From Home",
      date:   2019,
      cover:  "far-from-home.jpg",
      franchise: Franchise.MARVEL,
      flags:  [Flags.SEQUEL, Flags.SERIES],
    }, {
      name:   "The Hunger Games",
      date:   2012,
      cover:  "the-hunger-games.webp",
      flags:  [Flags.BOOK, Flags.FIRST, Flags.SERIES],
    }, {
      name:   "The Matrix",
      date:   1999,
      cover:  "the-matrix.jpg",
      flags:  [Flags.FIRST, Flags.SERIES],
    }, {
      name:   "The Maze Runner",
      date:   2014,
      cover:  "maze-runner.jpg",
      flags:  [Flags.BOOK, Flags.FIRST, Flags.SERIES],
    }, {
      shard:  "wandering-earth-ii",
      name:   "流浪地球II",
      date:   2023,
      cover:  "wandering-earth-ii.jpg",
      flags:  [Flags.CHINESE, Flags.SEQUEL, Flags.SERIES],
    }, {
      shard:  "dead-to-rights",
      name:   "南京照相馆",
      date:   2025,
      cover:  "dead-to-rights.jpg",
      genres: [Genre.HISTORY],
      themes: [Theme.GRIT],
      flags:  [Flags.CHINESE],
    }, {
      shard:  "ne-zha-2",
      name:   "哪吒 2",
      date:   2025,
      cover:  "ne-zha-2.jpg",
      genres: [Genre.ADVENTURE, Genre.COMEDY],
      themes: [Theme.MYTHOLOGY],
      flags:  [Flags.ANIMATED, Flags.CHINESE, Flags.SEQUEL, Flags.SERIES],
    }, {
      shard:  "successor",
      name:   "抓娃娃",
      date:   2024,
      cover:  "successor.jpg",
      genres: [Genre.COMEDY],
      flags:  [Flags.CHINESE],
      desc:   "Successor",
    },
  ],
  "Plenty Enjoyable": [
    {
      name:   "A.I.",
      date:   2001,
      cover:  "ai.jpg",
      genres: [Genre.SCI_FI, Genre.DYSTOPIAN],
      themes: [Theme.TRAGEDY],
    }, {
      name:   "Eighth Grade",
      date:   2018,
      cover:  "eighth-grade.jpg",
      genres: [Genre.SLICE_OF_LIFE, Genre.COMEDY],
      themes: [Theme.COMING_OF_AGE],
    }, {
      name:   "Guardians of the Galaxy Vol. 2",
      date:   2017,
      cover:  "guardians-of-the-galaxy-2.jpg",
      franchise: Franchise.MARVEL,
      flags:  [Flags.SEQUEL, Flags.SERIES],
    }, {
      name:   "Kingsman: The Secret Service",
      date:   2014,
      cover:  "kingsman.jpg",
      genres: [Genre.ACTION, Genre.COMEDY],
    }, {
      name:   "Maleficent",
      date:   2014,
      cover:  "maleficent.jpg",
      genres: [Genre.FANTASY, Genre.FAIRYTALE],
      themes: [Theme.TRAGEDY]
    }, {
      name:   "Onward",
      date:   2020,
      cover:  "onward.jpg",
      flags:  [Flags.ANIMATED],
    }, {
      name:   "Shang-Chi and the Legend of the Ten Rings",
      date:   2021,
      cover:  "shang-chi.jpg",
      franchise: Franchise.MARVEL,
    }, {
      name:   "Thor: Ragnarok",
      date:   2017,
      cover:  "thor-ragnarok.jpg",
      franchise: Franchise.MARVEL,
      flags:  [Flags.SERIES],
    }, {
      name:   "Uncharted",
      date:   2022,
      cover:  "uncharted.jpg",
      genres: [Genre.ADVENTURE, Genre.ACTION, Genre.COMEDY],
    }, {
      name:   "Venom",
      date:   2018,
      cover:  "venom.jpg",
      franchise: Franchise.MARVEL,
      flags:  [Flags.FIRST, Flags.SERIES],
    }, {
      shard:  "wandering-earth",
      name:   "流浪地球",
      date:   2019,
      cover:  "wandering-earth.jpg",
      flags:  [Flags.CHINESE, Flags.FIRST, Flags.SERIES],
    }, {
      shard:  "shadows-edge",
      name:   "追风捉影",
      date:   2025,
      cover:  "shadows-edge.png",
      flags:  [Flags.CHINESE],
    },
  ],
  "Timeless": [
    {
      name:   "Avatar",
      date:   2009,
      cover:  undefined,
      genres: [Genre.SCI_FI, Genre.EPIC, Genre.ACTION],
      flags:  [Flags.FIRST, Flags.SERIES],
    }, {
      name:   "Back to the Future",
      date:   1985,
      cover:  undefined,
      flags:  [Flags.FIRST, Flags.SERIES],
    }, {
      name:   "Frozen",
      date:   2013,
      cover:  undefined,
      flags:  [Flags.ANIMATED, Flags.FIRST, Flags.SERIES],
    }, {
      name:   "The Boss Baby",
      date:   2017,
      cover:  undefined,
      flags:  [Flags.ANIMATED, Flags.FIRST],
    }, {
      name:   "The LEGO Movie",
      date:   2014,
      cover:  undefined,
      flags:  [Flags.ANIMATED],
    }, {
      name:   "Life of Pi",
      date:   2012,
      cover:  undefined,
      genres: [Genre.ADVENTURE, Genre.DRAMA],
    }, {
      name:   "The Truman Show",
      date:   1998,
      cover:  undefined,
    }, {
      name:   "Up",
      date:   2009,
      cover:  undefined,
      flags:  [Flags.ANIMATED],
    }, {
      name:   "WALL-E",
      date:   2008,
      cover:  undefined,
      flags:  [Flags.ANIMATED],
    },
  ],
  "Guilty Pleasures": [
    {
      name:   "Barbie in Rock N’ Royals",
      date:   2015,
      cover:  undefined,
      flags:  [Flags.ANIMATED],
    },
  ],
};

export const films_list: FilmData[] = (
  () => {
    for (let [i, [collection, films]] of Object.entries(films_data).entries()) {
      for (let [j, film] of films.entries()) {
        film.collection = collection;
        film._score_ = 0;
        if (film.shard === undefined) {
          film.shard = `${i.toString()}-${j.toString()}`;
        }
      }
    }

    return Object.values(films_data).flatMap(c => c);
  }
)();
