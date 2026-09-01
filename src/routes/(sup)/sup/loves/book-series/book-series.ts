import { prep_groups } from "#scripts/search";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface BookSeriesData extends MediaData
{
  books: number;
  fields: {
    author: string | string[];
    books?: number;
    favourite?:   string;
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


const data: Groups<BookSeriesData> =
{
  "All-Time Favourites": [
    {
      name:   "Legend",
      date:   [2011, 2019],
      books:  4,
      cover:  "legend.jpg",
      genres: [Genre.DYSTOPIAN, Genre.ROMANCE],
      themes: [Theme.SOCIETY],
      fields: {
        author:    "Marie Lu",
        favourite: "Legend",
      },
    }, {
      name:   "Power of Five",
      date:   [2005, 2012],
      books:  5,
      cover:  "oblivion.jpg",
      genres: [Genre.FANTASY, Genre.DYSTOPIAN],
      themes: [Theme.OCCULT],
      fields: {
        author:    "Anthony Horowitz",
        favourite: "Oblivion",
      },
    }, {
      name:   "The Heroes of Olympus",
      date:   [2010, 2014],
      books:  5,
      cover:  "mark-of-athena.jpg",
      genres: [Genre.FANTASY, Genre.ADVENTURE],
      themes: [Theme.MYTHOLOGY],
      fields: {
        author:    "Rick Riordan",
        favourite: "The Mark of Athena",
      },
    }, {
      name:   "Harry Potter",
      date:   [1997, 2007],
      books:  7,
      cover:  "half-blood-prince.jpg",
      genres: [Genre.FANTASY, Genre.SLICE_OF_LIFE, Genre.DRAMA],
      themes: [Theme.MAGIC, Theme.COMING_OF_AGE],
      fields: {
        author:    "J.K. Rowling",
        favourite: "The Half-Blood Prince",
      },
    },
  ],
  "Soul-Enrapturing": [
    {
      name:   "Red Queen",
      date:   [2015, 2018],
      books:  4,
      cover:  "red-queen.jpg",
      genres: [Genre.FANTASY, Genre.ROMANCE, Genre.DYSTOPIAN],
      themes: [Theme.MAGIC, Theme.SOCIETY],
      fields: {
        author:    "Victoria Aveyard",
        favourite: "Red Queen",
      },
    }, {
      name:   "The Maze Runner",
      date:   [2009, 2016],
      books:  5,
      cover:  "fever-code.jpg",
      genres: [],
      themes: [],
      fields: {
        author:    "James Dashner",
        favourite: "The Fever Code",
      },
    }, {
      name:   "The Hunger Games",
      date:   [2008, 2020],
      books:  4,
      cover:  "hunger-games.jpg",
      genres: [],
      themes: [],
      fields: {
        author:    "Suzanne Collins",
        favourite: undefined,
      },
    },
  ],
  "Beautiful": [
    {
      name:   "Secret Breakers",
      date:   [2012, 2014],
      books:  6,
      cover:  "secret-breakers.jpg",
      genres: [Genre.MYSTERY],
      themes: [],
      fields: {
      author:    "H.L. Dennis",
        favourite: undefined,
      },
    }, {
      name:   "Captain Underpants",
      date:   [1997, 2015],
      books:  12,
      cover:  "turbo-toilet-2000.jpg",
      genres: [],
      themes: [],
      fields: {
        author:    "Dav Pilkey",
        favourite: undefined,
      },
    },
  ],
  "Plenty Enjoyable": [
    {
      name:   "Alex Rider",
      date:   [2000, 2023],
      books:  13,
      cover:  "scorpia-rising.jpg",
      genres: [],
      themes: [],
      fields: {
        author:    "Anthony Horowitz",
        favourite: "Scorpia Rising",
      },
    }
  ],
  "Guilty Pleasures": [
    {
      name:   "Shatter Me",
      date:   [2011, 2020],
      books:  6,
      cover:  "shatter-me.webp",
      genres: [Genre.FANTASY, Genre.ROMANCE, Genre.DYSTOPIAN],
      themes: [Theme.MAGIC, Theme.SOCIETY],
      fields: {
        author:    "Tahereh Mafi",
        favourite: undefined,
      },
      is_shown: false,
    },
  ],
};

prep_groups(data);
export const book_series_data: Groups<BookSeriesData> = data;
export const book_series_list: BookSeriesData[] = Object.values(data).flat();
