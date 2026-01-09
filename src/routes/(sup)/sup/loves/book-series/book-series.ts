import { prep } from "#scripts/search-filter.svelte.ts";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface BookSeriesData extends MediaData
{
  author: string | string[];
  books?: number;
  fav?:   string;
}


const _template = [
{
  name:   "",
  author: "",
  date:   [],
  books:  0,
  fav:    undefined,
  cover:  undefined,
  genres: [],
  themes: [],
},
];


const data: Groups<BookSeriesData> =
{
  "All-Time Favourites": [
    {
      name:   "Legend",
      author: "Marie Lu",
      date:   [2011, 2019],
      books:  4,
      fav:    "Legend",
      cover:  "legend.jpg",
      genres: [Genre.DYSTOPIAN, Genre.ROMANCE],
      themes: [Theme.SOCIETY],
    }, {
      name:   "Power of Five",
      author: "Anthony Horowitz",
      date:   [2005, 2012],
      books:  5,
      fav:    "Oblivion",
      cover:  "oblivion.jpg",
      genres: [Genre.FANTASY, Genre.DYSTOPIAN],
      themes: [Theme.OCCULT],
    }, {
      name:   "The Heroes of Olympus",
      author: "Rick Riordan",
      date:   [2010, 2014],
      books:  5,
      fav:    "The Mark of Athena",
      cover:  "mark-of-athena.jpg",
      genres: [Genre.FANTASY, Genre.ADVENTURE],
      themes: [Theme.MYTHOLOGY],
    }, {
      name:   "Harry Potter",
      author: "J.K. Rowling",
      date:   [1997, 2007],
      books:  7,
      fav:    "The Half-Blood Prince",
      cover:  "half-blood-prince.jpg",
      genres: [Genre.FANTASY, Genre.SLICE_OF_LIFE, Genre.DRAMA],
      themes: [Theme.MAGIC, Theme.COMING_OF_AGE],
    },
  ],
  "Soul-Enrapturing": [
    {
      name:   "Red Queen",
      author: "Victoria Aveyard",
      date:   [2015, 2018],
      books:  4,
      fav:    "Red Queen",
      cover:  "red-queen.jpg",
      genres: [Genre.FANTASY, Genre.ROMANCE, Genre.DYSTOPIAN],
      themes: [Theme.MAGIC, Theme.SOCIETY],
    }, {
      name:   "The Maze Runner",
      author: "James Dashner",
      date:   [2009, 2016],
      books:  5,
      fav:    "The Fever Code",
      cover:  "fever-code.jpg",
      genres: [],
      themes: [],
    }, {
      name:   "The Hunger Games",
      author: "Suzanne Collins",
      date:   [2008, 2020],
      books:  4,
      fav:    undefined,
      cover:  "hunger-games.jpg",
      genres: [],
      themes: [],
    },
  ],
  "Beautiful": [
    {
      name:   "Secret Breakers",
      author: "H.L. Dennis",
      date:   [2012, 2014],
      books:  6,
      cover:  "secret-breakers.jpg",
      genres: [Genre.MYSTERY],
      themes: [],
    }, {
      name:   "Captain Underpants",
      author: "Dav Pilkey",
      date:   [1997, 2015],
      books:  12,
      cover:  "turbo-toilet-2000.jpg",
      genres: [],
      themes: [],
    },
  ],
  "Plenty Enjoyable": [
    {
      name:   "Alex Rider",
      author: "Anthony Horowitz",
      date:   [2000, 2023],
      books:  13,
      fav:    "Scorpia Rising",
      cover:  "scorpia-rising.jpg",
      genres: [],
      themes: [],
    }
  ],
  "Guilty Pleasures": [
    {
      name:   "Shatter Me",
      author: "Tahereh Mafi",
      date:   [2011, 2020],
      books:  6,
      cover:  "shatter-me.webp",
      genres: [Genre.FANTASY, Genre.ROMANCE, Genre.DYSTOPIAN],
      themes: [Theme.MAGIC, Theme.SOCIETY],
    },
  ],
};

prep(data);
export const book_series_data: Groups<BookSeriesData> = data;
export const book_series_list: BookSeriesData[] = Object.values(data).flat();
