import { prep_groups } from "#scripts/search-filter.svelte.ts";
import { i } from "#scripts/utils";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export enum Franchise {
  DUNE = "Dune",
  HARRY_POTTER = "Harry Potter",
  MARVEL = "Marvel",
  STAR_WARS = "Star Wars",
}

export enum Flag {
  ANIMATED = "animated",
  BOOK     = "based on book",
  CHINESE  = "Chinese",
  LONG     = "3+ hours",
  MANGA    = "based on manga",
  SEQUEL   = "is a sequel",

  /* We'll define a series to have min 3 entries */
  FIRST  = "first of series",
  SERIES = "part of series",
}


export interface FilmData extends MediaData
{
  franchise?: Franchise;
  flags?: Flag[];
}


const data: Groups<FilmData> =
{
  "All-Time Favourites": [
    {
      name:   "Alita: Battle Angel",
      date:   2019,
      cover:  "alita-battle-angel.jpg",
      genres: [Genre.ACTION, Genre.DYSTOPIAN],
      flags:  [Flag.MANGA],
    },
    {
      name:   "Doctor Strange",
      date:   2016,
      cover:  "doctor-strange.jpg",
      genres: [Genre.SUPERHERO, Genre.FANTASY, Genre.ACTION],
      franchise: Franchise.MARVEL,
      flags:  [],
    },
    {
      name:   "Dune: Part One",
      date:   2021,
      cover:  "dune-part-1.jpg",
      genres: [Genre.SPACE_OPERA, Genre.EPIC],
      franchise: Franchise.DUNE,
      flags:  [],
      desc: [
        `y’know, I first watched this on my crappy iPhone 5s screen. Absolute blasphemy, I know. It was all I could do at the time.`,

        `It’s so interesting, there’s this distinct divide between ${i("before")} something and ${i("after")} something. At first you have no expectations, no knowledge, no attachment. Then you watch the film, and you can’t look at the cover the same. You know the world, you know the characters, it is all familiar. You can try to remember that innocent feeling of not knowing, but it fades faster than ever.`,

        `iirc I didn’t even clock after watching Dune what I’d just witnessed. It took the score getting stuck in my head, finding out Hans Zimmer had written it, and watching some YouTube videos on it for me to realise ...holy crap, that was cinema.`,

        `I’m an absolute sucker for worldbuilding, and the universe of Dune is so unimaginably rich. It’s certainly intensitied by the epic (in the true sense of the word) storytelling by Denis Villeneuve and soulful score by Hans Zimmer. I consider this one of the most exquisitely crafted films I’ve ever watched, with the way it draws you into the world, immerses you in its conflicts and envelopes your heart.`,

        `As always, I don’t like favourites, but when people ask... oh man, this is the one I usually go for.`,
      ],
    },
    {
      name:   "Dune: Part Two",
      date:   2024,
      cover:  "dune-part-2.jpg",
      genres: [Genre.SPACE_OPERA, Genre.EPIC],
      franchise: Franchise.DUNE,
      flags:  [Flag.SEQUEL],
      desc: [
        `After my experience with Dune I, when Dune II was announced it was the first time in a long time that I found myself properly hyped for a film. Still calmly, patiently hyped, y’know, but it was one of the few films I actively went “I’m seeing this when it releases. In IMAX, no negotiations.”`,

        `I saw it twice, both in IMAX. It was otherworldly. I love this, it had such a strong ${i("sequel")} energy. While Dune I was bright, innocent, and slow (for the most part), Dune II was dark, vivid, and intense. You could tell it was a sequel.`,

        `There’s one word I think of when I remember Dune II. ${i("Ambitious")}. While my thoughts on the plot were mixed at first, I could feel the weight of the world, the developments, the emotions. Compared to Dune I, the scale and stakes exploded folds. I was stunned by so many of the character and plot developments. Not everything was smooth or made sense in the moment, but it was a wild ride.`,

        `Dune I and II together form perhaps my most memorable cinematic experience I’ve ever had. I wonder how Dune III will do...`,
      ],
    },
    {
      name:   "Fantastic Beasts and Where To Find Them",
      date:   2016,
      cover:  "fantastic-beasts.jpg",
      genres: [Genre.FANTASY],
      franchise: Franchise.HARRY_POTTER,
      flags:  [Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "How To Train Your Dragon: The Hidden World",
      date:   2019,
      cover:  "hidden-world.jpg",
      genres: [Genre.FANTASY],
      flags:  [Flag.ANIMATED, Flag.SEQUEL, Flag.SERIES],
    },
    {
      name:   "Interstellar",
      date:   2014,
      cover:  "interstellar.jpg",
      genres: [Genre.SCI_FI, Genre.EPIC],
      themes: [Theme.SPACE],
    },
    {
      name:   "Love & Monsters",
      date:   2020,
      cover:  "love-and-monsters.jpg",
      genres: [Genre.ADVENTURE],
    },
    {
      name:   "Ready Player One",
      date:   2018,
      cover:  "ready-player-one.jpg",
      genres: [Genre.ACTION, Genre.ADVENTURE, Genre.DYSTOPIAN],
      flags:  [Flag.BOOK],
    },
    {
      name:   "Rogue One: A Star Wars Story",
      date:   2016,
      cover:  "rogue-one.jpg",
      genres: [Genre.SPACE_OPERA],
      themes: [Theme.GRIT],
      franchise: Franchise.STAR_WARS,
      flags:  [Flag.SERIES],
    },
    {
      name:   "Spider-Man: Homecoming",
      date:   2017,
      cover:  "spider-man-homecoming.jpg",
      genres: [Genre.SUPERHERO, Genre.ACTION],
      franchise: Franchise.MARVEL,
      flags:  [Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "Spider-Man: Into the Spider-Verse",
      date:   2018,
      cover:  "into-the-spider-verse.jpg",
      genres: [Genre.SUPERHERO, Genre.ACTION],
      franchise: Franchise.MARVEL,
      flags:  [Flag.ANIMATED, Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "The Wild Robot",
      date:   2024,
      cover:  "wild-robot.jpg",
      genres: [Genre.ADVENTURE],
      flags:  [Flag.ANIMATED],
    },
    {
      shard:  "ne-zha",
      name:   "哪吒",
      date:   2019,
      cover:  "ne-zha-1.jpg",
      genres: [Genre.ADVENTURE, Genre.COMEDY],
      themes: [Theme.MYTHOLOGY],
      flags:  [Flag.ANIMATED, Flag.CHINESE, Flag.FIRST, Flag.SERIES],
    },
  ],
  "Peak Cinema": [
    {
      name:   "Avengers: Endgame",
      date:   2019,
      cover:  "endgame.webp",
      genres: [Genre.SUPERHERO, Genre.ACTION, Genre.COMEDY],
      franchise: Franchise.MARVEL,
      flags:  [Flag.LONG, Flag.SEQUEL, Flag.SERIES],
    },
    {
      name:   "Avengers: Infinity War",
      date:   2018,
      cover:  "infinity-war.jpg",
      genres: [Genre.SUPERHERO, Genre.ACTION, Genre.COMEDY],
      franchise: Franchise.MARVEL,
      flags:  [Flag.SERIES],
    },
    {
      name:   "Big Hero 6",
      date:   2014,
      cover:  "big-hero-6.jpeg",
      flags:  [Flag.ANIMATED],
    },
    {
      name:   "How To Train Your Dragon",
      date:   2010,
      cover:  "how-to-train-your-dragon.jpg",
      flags:  [Flag.ANIMATED, Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "Spider-Man: Across the Spider-Verse",
      date:   2023,
      cover:  "across-the-spider-verse.jpg",
      franchise: Franchise.MARVEL,
      flags:  [Flag.ANIMATED, Flag.SEQUEL, Flag.SERIES],
    },
    {
      name:   "Spider-Man: Far From Home",
      date:   2019,
      cover:  "far-from-home.jpg",
      genres: [Genre.SUPERHERO, Genre.ACTION, Genre.SLICE_OF_LIFE],
      franchise: Franchise.MARVEL,
      flags:  [Flag.SEQUEL, Flag.SERIES],
    },
    {
      name:   "The Hunger Games",
      date:   2012,
      cover:  "the-hunger-games.webp",
      flags:  [Flag.BOOK, Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "The Matrix",
      date:   1999,
      cover:  "the-matrix.jpg",
      flags:  [Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "The Maze Runner",
      date:   2014,
      cover:  "maze-runner.jpg",
      genres: [Genre.DYSTOPIAN, Genre.ACTION, Genre.ROMANCE],
      flags:  [Flag.BOOK, Flag.FIRST, Flag.SERIES],
    },
    {
      shard:  "wandering-earth-ii",
      name:   "流浪地球II",
      date:   2023,
      cover:  "wandering-earth-ii.jpg",
      genres: [Genre.SCI_FI, Genre.DYSTOPIAN, Genre.ACTION],
      flags:  [Flag.CHINESE, Flag.SEQUEL, Flag.SERIES],
    },
    {
      shard:  "dead-to-rights",
      name:   "南京照相馆",
      date:   2025,
      cover:  "dead-to-rights.jpg",
      genres: [Genre.HISTORY],
      themes: [Theme.GRIT],
      flags:  [Flag.CHINESE],
    },
    {
      shard:  "ne-zha-2",
      name:   "哪吒 2",
      date:   2025,
      cover:  "ne-zha-2.jpg",
      genres: [Genre.ADVENTURE, Genre.COMEDY],
      themes: [Theme.MYTHOLOGY],
      flags:  [Flag.ANIMATED, Flag.CHINESE, Flag.SEQUEL, Flag.SERIES],
    },
    {
      shard:  "successor",
      name:   "抓娃娃",
      date:   2024,
      cover:  "successor.jpg",
      genres: [Genre.COMEDY],
      themes: [Theme.FAMILY],
      flags:  [Flag.CHINESE],
      desc:   [
        `Successor`,
      ],
    },
  ],
  "Plenty Enjoyable": [
    {
      name:   "A.I.",
      date:   2001,
      cover:  "ai.jpg",
      genres: [Genre.SCI_FI, Genre.DYSTOPIAN],
      themes: [Theme.TRAGEDY],
    },
    {
      name:   "Eighth Grade",
      date:   2018,
      cover:  "eighth-grade.jpg",
      genres: [Genre.SLICE_OF_LIFE, Genre.COMEDY],
      themes: [Theme.COMING_OF_AGE],
    },
    {
      name:   "Guardians of the Galaxy Vol. 2",
      date:   2017,
      cover:  "guardians-of-the-galaxy-2.jpg",
      franchise: Franchise.MARVEL,
      flags:  [Flag.SEQUEL, Flag.SERIES],
    },
    {
      name:   "Kingsman: The Secret Service",
      date:   2014,
      cover:  "kingsman.jpg",
      genres: [Genre.ACTION, Genre.COMEDY],
    },
    {
      name:   "Maleficent",
      date:   2014,
      cover:  "maleficent.jpg",
      genres: [Genre.FANTASY, Genre.FAIRYTALE],
      themes: [Theme.TRAGEDY]
    },
    {
      name:   "Onward",
      date:   2020,
      cover:  "onward.jpg",
      genres: [Genre.FANTASY, Genre.ADVENTURE, Genre.COMEDY],
      themes: [Theme.COMING_OF_AGE],
      flags:  [Flag.ANIMATED],
    },
    {
      name:   "Shang-Chi and the Legend of the Ten Rings",
      date:   2021,
      cover:  "shang-chi.jpg",
      genres: [Genre.SUPERHERO],
      franchise: Franchise.MARVEL,
    },
    {
      name:   "Thor: Ragnarok",
      date:   2017,
      cover:  "thor-ragnarok.jpg",
      genres: [Genre.SUPERHERO],
      franchise: Franchise.MARVEL,
      flags:  [Flag.SERIES],
    },
    {
      name:   "Uncharted",
      date:   2022,
      cover:  "uncharted.jpg",
      genres: [Genre.ADVENTURE, Genre.ACTION, Genre.COMEDY],
    },
    {
      name:   "Venom",
      date:   2018,
      cover:  "venom.jpg",
      genres: [Genre.SUPERHERO],
      franchise: Franchise.MARVEL,
      flags:  [Flag.FIRST, Flag.SERIES],
    },
    {
      shard:  "wandering-earth",
      name:   "流浪地球",
      date:   2019,
      cover:  "wandering-earth.jpg",
      genres: [Genre.SCI_FI, Genre.ADVENTURE, Genre.DYSTOPIAN],
      themes: [Theme.FAMILY, Theme.COMING_OF_AGE],
      flags:  [Flag.CHINESE, Flag.FIRST, Flag.SERIES],
    },
    {
      shard:  "shadows-edge",
      name:   "追风捉影",
      date:   2025,
      cover:  "shadows-edge.png",
      flags:  [Flag.CHINESE],
    },
  ],
  "Timeless": [
    {
      name:   "Avatar",
      date:   2009,
      cover:  undefined,
      genres: [Genre.SCI_FI, Genre.EPIC, Genre.ACTION],
      flags:  [Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "Back to the Future",
      date:   1985,
      cover:  undefined,
      flags:  [Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "Frozen",
      date:   2013,
      cover:  undefined,
      flags:  [Flag.ANIMATED, Flag.FIRST, Flag.SERIES],
    },
    {
      name:   "The Boss Baby",
      date:   2017,
      cover:  undefined,
      flags:  [Flag.ANIMATED, Flag.FIRST],
    },
    {
      name:   "The LEGO Movie",
      date:   2014,
      cover:  undefined,
      flags:  [Flag.ANIMATED],
    },
    {
      name:   "Life of Pi",
      date:   2012,
      cover:  undefined,
      genres: [Genre.ADVENTURE, Genre.DRAMA],
    },
    {
      name:   "The Truman Show",
      date:   1998,
      cover:  undefined,
    },
    {
      name:   "Up",
      date:   2009,
      cover:  undefined,
      flags:  [Flag.ANIMATED],
    },
    {
      name:   "WALL-E",
      date:   2008,
      cover:  undefined,
      flags:  [Flag.ANIMATED],
    },
  ],
  "Guilty Pleasures": [
    {
      name:   "Barbie in Rock N’ Royals",
      date:   2015,
      cover:  undefined,
      flags:  [Flag.ANIMATED],
      is_hidden: true,
    },
  ],
};

prep_groups(data);
export const films_data: Groups<FilmData> = data;
export const films_list: FilmData[] = Object.values(data).flat();
