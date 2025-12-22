import { type MediaData, Genre, Theme } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface FilmData extends MediaData {}


export const films_data: Groups<FilmData> = {
  "All-Time Favourites": [
    {
      name: "Alita: Battle Angel",
      date: 2019,
      cover: "alita-battle-angel.jpg",
    }, {
      name: "Doctor Strange",
      date: 2016,
      cover: "doctor-strange.jpg",
      genres: [Genre.SUPERHERO, Genre.FANTASY, Genre.ACTION],
    }, {
      name: "Dune: Part One",
      date: 2021,
      cover: "dune-part-1.jpg",
      genres: [Genre.SPACE_OPERA, Genre.EPIC],
    }, {
      name: "Dune: Part Two",
      date: 2024,
      cover: "dune-part-2.jpg",
      genres: [Genre.SPACE_OPERA, Genre.EPIC],
    }, {
      name: "Fantastic Beasts and Where To Find Them",
      date: 2016,
      cover: "fantastic-beasts.jpg",
      genres: [Genre.FANTASY],
    }, {
      name: "How To Train Your Dragon: The Hidden World",
      date: 2019,
      cover: "the-hidden-world.jpg",
      genres: [Genre.FANTASY],
    }, {
      name: "Interstellar",
      date: 2014,
      cover: "interstellar.jpg",
      genres: [Genre.SCI_FI, Genre.EPIC],
      themes: [Theme.SPACE],
    }, {
      name: "Love & Monsters",
      date: 2020,
      cover: "love-and-monsters.jpg",
      genres: [Genre.ADVENTURE],
    }, {
      name: "Ready Player One",
      date: 2018,
      cover: "ready-player-one.jpg",
      genres: [Genre.ACTION, Genre.ADVENTURE, Genre.DYSTOPIAN],
    }, {
      name: "Rogue One: A Star Wars Story",
      date: 2016,
      cover: "rogue-one.jpg",
      genres: [Genre.SPACE_OPERA],
      themes: [Theme.GRIT],
    }, {
      name: "Spider-Man: Homecoming",
      date: 2017,
      cover: "spider-man-homecoming.jpg",
      genres: [Genre.SUPERHERO, Genre.ACTION],
    }, {
      name: "Spider-Man: Into the Spider-Verse",
      date: 2018,
      cover: "into-the-spider-verse.jpg",
      genres: [Genre.SUPERHERO, Genre.ACTION],
    }, {
      name: "The Wild Robot",
      date: 2024,
      cover: "the-wild-robot.jpg",
      genres: [Genre.ADVENTURE],
    }, {
      name: "哪吒",
      date: 2019,
      cover: "ne-zha-1.jpg",
      genres: [Genre.ADVENTURE, Genre.COMEDY],
      themes: [Theme.MYTHOLOGY],
    },
  ],
  "Peak Cinema": [
    {
      name: "Avengers: Endgame",
      date: 2019,
      cover: undefined,
    }, {
      name: "Avengers: Infinity War",
      date: 2018,
      cover: undefined,
    }, {
      name: "Big Hero 6",
      date: 2014,
      cover: undefined,
    }, {
      name: "How To Train Your Dragon",
      date: 2010,
      cover: undefined,
    }, {
      name: "Spider-Man: Across the Spider-Verse",
      date: 2023,
      cover: undefined,
    }, {
      name: "Spider-Man: Far From Home",
      date: 2019,
      cover: undefined,
    }, {
      name: "The Hunger Games",
      date: 2012,
      cover: undefined,
    }, {
      name: "The Matrix",
      date: 1999,
      cover: undefined,
    }, {
      name: "The Maze Runner",
      date: 2014,
      cover: undefined,
    }, {
      name: "流浪地球II",
      date: 2023,
      cover: undefined,
    }, {
      name: "南京照相馆",
      date: 2025,
      cover: undefined,
    }, {
      name: "哪吒2",
      date: 2025,
      cover: undefined,
    }, {
      name: "抓娃娃",
      date: 2024,
      cover: undefined,
      genres: [Genre.COMEDY],
      desc: "Successor",
    },
  ],
  "Plenty Enjoyable": [
    {
      name: "A.I.",
      date: 2001,
      cover: undefined,
    }, {
      name: "Eighth Grade",
      date: 2018,
      cover: undefined,
    }, {
      name: "Guardians of the Galaxy Vol. 2",
      date: 2017,
      cover: undefined,
    }, {
      name: "Kingsman: The Secret Service",
      date: 2014,
      cover: undefined,
    }, {
      name: "Maleficent",
      date: 2014,
      cover: undefined,
    }, {
      name: "Onward",
      date: 2020,
      cover: undefined,
    }, {
      name: "Shang-Chi and the Legend of the Ten Rings",
      date: 2021,
      cover: undefined,
    }, {
      name: "Thor: Ragnarok",
      date: 2017,
      cover: undefined,
    }, {
      name: "Uncharted",
      date: 2022,
      cover: undefined,
      genres: [Genre.ADVENTURE, Genre.COMEDY],
    }, {
      name: "Venom",
      date: 2018,
      cover: undefined,
    }, {
      name: "流浪地球",
      date: 2019,
      cover: undefined,
    }, {
      name: "追风捉影",
      date: 2025,
      cover: undefined,
    },
  ],
  "Timeless": [
    {
      name: "Avatar",
      date: 2009,
      cover: undefined,
      genres: [Genre.SCI_FI, Genre.EPIC, Genre.ACTION],
    }, {
      name: "Back to the Future",
      date: 1985,
      cover: undefined,
    }, {
      name: "Frozen",
      date: 2013,
      cover: undefined,
    }, {
      name: "The Boss Baby",
      date: 2017,
      cover: undefined,
    }, {
      name: "The LEGO Movie",
      date: 2014,
      cover: undefined,
    }, {
      name: "Life of Pi",
      date: 2012,
      cover: undefined,
      genres: [Genre.ADVENTURE, Genre.DRAMA],
    }, {
      name: "The Truman Show",
      date: 1998,
      cover: undefined,
    }, {
      name: "Up",
      date: 2009,
      cover: undefined,
    }, {
      name: "WALL-E",
      date: 2008,
      cover: undefined,
    },
  ],
  "Guilty Pleasures": [
    {
      name: "Barbie in Rock N’ Royals",
      date: 2015,
      cover: undefined,
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
