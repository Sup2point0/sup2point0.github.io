import type { Groups, DatePoint } from "#scripts/types";
import type { Searchable } from "#scripts/search-filter.svelte";


type Genre = "action" | "adventure" | "comedy" | "drama" | "dystopian" | "epic" | "fantasy" | "sci-fi" | "space opera" | "superhero";
type Theme = "grit" | "mythology" | "space";


export interface FilmData extends Searchable
{
  shard?: string;
  name: string;
  date: DatePoint | DatePoint[];

  cover?:string;

  genres?: Genre[];
  themes?: Theme[];

  desc?: string | string[];

  collection?: string;
  _score_?: number;
}


export const films_data: Groups<FilmData> = {
  "All-Time Favourites": [
    {
      name: "Alita: Battle Angel",
      date: 2019,
    }, {
      name: "Doctor Strange",
      date: 2016,
      genres: ["superhero", "fantasy", "action"],
    }, {
      name: "Dune: Part One",
      date: 2021,
      genres: ["space opera", "epic"],
    }, {
      name: "Dune: Part Two",
      date: 2024,
      genres: ["space opera", "epic"],
    }, {
      name: "Fantastic Beasts and Where To Find Them",
      date: 2016,
      genres: ["fantasy"],
    }, {
      name: "How To Train Your Dragon: The Hidden World",
      date: 2019,
      genres: ["fantasy"],
    }, {
      name: "Interstellar",
      date: 2014,
      genres: ["sci-fi", "epic"],
      themes: ["space"],
    }, {
      name: "Love & Monsters",
      date: 2020,
      genres: ["adventure"],
    }, {
      name: "Ready Player One",
      date: 2018,
      genres: ["action", "adventure", "dystopian"],
    }, {
      name: "Rogue One: A Star Wars Story",
      date: 2016,
      genres: ["space opera"],
      themes: ["grit"],
    }, {
      name: "Spider-Man: Homecoming",
      date: 2017,
      genres: ["superhero", "action"],
    }, {
      name: "Spider-Man: Into the Spider-Verse",
      date: 2018,
      genres: ["superhero", "action"],
    }, {
      name: "The Wild Robot",
      date: 2024,
      genres: ["adventure"],
    }, {
      name: "哪吒",
      date: 2019,
      genres: ["adventure", "comedy"],
      themes: ["mythology"],
    },
  ],
  "Peak Cinema": [
    {
      name: "Avengers: Endgame",
      date: 2019,
    }, {
      name: "Avengers: Infinity War",
      date: 2018,
    }, {
      name: "Big Hero 6",
      date: 2014,
    }, {
      name: "How To Train Your Dragon",
      date: 2010,
    }, {
      name: "Spider-Man: Across the Spider-Verse",
      date: 2023,
    }, {
      name: "Spider-Man: Far From Home",
      date: 2019,
    }, {
      name: "The Hunger Games",
      date: 2012,
    }, {
      name: "The Matrix",
      date: 1999,
    }, {
      name: "The Maze Runner",
      date: 2014,
    }, {
      name: "流浪地球II",
      date: 2023,
    }, {
      name: "南京照相馆",
      date: 2025,
    }, {
      name: "哪吒2",
      date: 2025,
    }, {
      name: "抓娃娃",
      date: 2024,
      genres: ["comedy"],
      desc: "Successor",
    },
  ],
  "Plenty Enjoyable": [
    {
      name: "A.I.",
      date: 2001,
    }, {
      name: "Eighth Grade",
      date: 2018,
    }, {
      name: "Guardians of the Galaxy Vol. 2",
      date: 2017,
    }, {
      name: "Kingsman: The Secret Service",
      date: 2014
    }, {
      name: "Maleficent",
      date: 2014,
    }, {
      name: "Onward",
      date: 2020,
    }, {
      name: "Shang-Chi and the Legend of the Ten Rings",
      date: 2021,
    }, {
      name: "Thor: Ragnarok",
      date: 2017,
    }, {
      name: "Uncharted",
      date: 2022,
      genres: ["adventure", "comedy"],
    }, {
      name: "Venom",
      date: 2018,
    }, {
      name: "流浪地球",
      date: 2019,
    }, {
      name: "追风捉影",
      date: 2025,
    },
  ],
  "Timeless": [
    {
      name: "Avatar",
      date: 2009,
      genres: ["sci-fi", "epic", "action"],
    }, {
      name: "Back to the Future",
      date: 1985,
    }, {
      name: "Frozen",
      date: 2013,
    }, {
      name: "The Boss Baby",
      date: 2017,
    }, {
      name: "The LEGO Movie",
      date: 2014,
    }, {
      name: "Life of Pi",
      date: 2012,
      genres: ["adventure", "drama"],
    }, {
      name: "The Truman Show",
      date: 1998,
    }, {
      name: "Up",
      date: 2009,
    }, {
      name: "WALL-E",
      date: 2008,
    },
  ],
  "Guilty Pleasures": [
    {
      name: "Barbie in Rock N’ Royals",
      date: 2015,
    },
  ],
};

export const films_list: FilmData[] = (
  () => {
    for (let [collection, films] of Object.entries(films_data)) {
      for (let film of films) {
        film.collection = collection;
        film._score_ = 0;
      }
    }

    return Object.values(films_data).flatMap(c => c);
  }
)();
