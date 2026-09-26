import { prep_groups } from "#scripts/search";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { int, Arrayable, Groups } from "#scripts/types";


export interface BooksData extends MediaData
{
  fields: {
    author: Arrayable<string>
    books?: int
    favourite?: string
  },
}


const _template = [
    {
      name:   "",
      date:   [],
      cover:  undefined,
      genres: [],
      themes: [],
      fields: {
        author:    "",
        books:     0,
        favourite: undefined,
      },
    },
];


const data: Groups<BooksData> =
{
  "All-Time Favourites": [
    {
      name:   "Legend",
      date:   "childhood",
      cover:  "legend.jpg",
      genres: [Genre.DYSTOPIAN, Genre.ROMANCE],
      themes: [Theme.SOCIETY],
      fields: {
        author:    "Marie Lu",
        books:     4,
        favourite: "Legend",
      },
    },
    {
      name:   "Power of Five",
      date:   "childhood",
      cover:  "oblivion.jpg",
      genres: [Genre.FANTASY, Genre.DYSTOPIAN],
      themes: [Theme.OCCULT],
      fields: {
        author:    "Anthony Horowitz",
        books:     5,
        favourite: "Oblivion",
      },
    },
    {
      name:   "Harry Potter",
      date:   "eternal",
      cover:  "half-blood-prince.jpg",
      genres: [Genre.FANTASY, Genre.SLICE_OF_LIFE, Genre.DRAMA],
      themes: [Theme.MAGIC, Theme.COMING_OF_AGE],
      fields: {
        author:    "J.K. Rowling",
        books:     7,
        favourite: "The Half-Blood Prince",
      },
    },
    {
      name:   "Alchemised",
      date:   "2026 September",
      cover:  "alchemised.jpg",
      genres: [Genre.DYSTOPIAN, Genre.FANTASY, Genre.ROMANCE],
      themes: [Theme.ENEMIES_TO_LOVERS, Theme.MAGIC],
      fields: {
        author:    "SenLinYu",
        books:     1,
      },
    },
  ],
  "Soul-Enrapturing": [
    {
      name:   "The Heroes of Olympus",
      date:   "childhood",
      cover:  "mark-of-athena.jpg",
      genres: [Genre.FANTASY, Genre.ADVENTURE],
      themes: [Theme.MYTHOLOGY],
      fields: {
        author:    "Rick Riordan",
        books:     5,
        favourite: "The Mark of Athena",
      },
    },
    {
      name:   "Red Queen",
      date:   2021,
      cover:  "red-queen.jpg",
      genres: [Genre.FANTASY, Genre.ROMANCE, Genre.DYSTOPIAN],
      themes: [Theme.MAGIC, Theme.SOCIETY],
      fields: {
        author:    "Victoria Aveyard",
        books:     4,
        favourite: "Red Queen",
      },
    },
    {
      name:   "Skulduggery Pleasant",
      date:   [2017, 2022],
      cover:  "dying-of-the-light.jpg",
      genres: [Genre.FANTASY, Genre.ACTION, Genre.COMING_OF_AGE],
      themes: [Theme.MAGIC, Theme.COMING_OF_AGE],
      fields: {
        author:    "Derek Landy",
        books:     15,
        favourite: "Dying of the Light",
      },
    },
    {
      name:   "Ventura Saga",
      date:   2020,
      cover:  "truth-different-skies.jpg",
      genres: [Genre.ROMANCE, Genre.DYSTOPIAN, Genre.COMING_OF_AGE],
      themes: [Theme.SPACE, Theme.SOCIETY],
      fields: {
        author:    "Kate Ling",
        books:     3,
        favourite: "The Truth of Different Skies",
      },
    },
  ],
  "Enjoyable": [
    {
      name:   "The Maze Runner",
      date:   "childhood",
      cover:  "fever-code.jpg",
      genres: [Genre.DYSTOPIAN, Genre.ROMANCE],
      themes: [Theme.APOCALYPSE],
      fields: {
        author:    "James Dashner",
        books:     5,
        favourite: "The Fever Code",
      },
    },
    {
      name:   "The Hunger Games",
      date:   "childhood",
      cover:  "hunger-games.jpg",
      genres: [Genre.DYSTOPIAN],
      themes: [Theme.SOCIETY],
      fields: {
        author:    "Suzanne Collins",
        books:     4,
        favourite: undefined,
      },
    },
    {
      name:   "Secret Breakers",
      date:   "childhood",
      cover:  "secret-breakers.jpg",
      genres: [Genre.MYSTERY],
      themes: [],
      fields: {
        author:    "H.L. Dennis",
        books:     6,
        favourite: undefined,
      },
    },
    {
      name:   "Captain Underpants",
      date:   "childhood",
      cover:  "turbo-toilet-2000.jpg",
      genres: [Genre.ACTION],
      themes: [],
      fields: {
        author:    "Dav Pilkey",
        books:     12,
        favourite: undefined,
      },
    },
    {
      name:   "Alex Rider",
      date:   "childhood",
      cover:  "scorpia-rising.jpg",
      genres: [Genre.ACTION, Genre.COMING_OF_AGE],
      themes: [],
      fields: {
        author:    "Anthony Horowitz",
        books:     13,
        favourite: "Scorpia Rising",
      },
    }
  ],
  "Guilty Pleasures": [
    {
      name:   "Shatter Me",
      date:   2023,
      cover:  "shatter-me.webp",
      genres: [Genre.DYSTOPIAN, Genre.FANTASY, Genre.ROMANCE, Genre.EROTICA],
      themes: [Theme.MAGIC, Theme.SOCIETY],
      fields: {
        author:    "Tahereh Mafi",
        books:     6,
        favourite: undefined,
      },
      is_shown: false,
    },
  ],
};

prep_groups(data);
export const books_data: Groups<BooksData> = data;
export const books_list: BooksData[] = Object.values(data).flat();
