import { prep_groups } from "#scripts/search";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface WebtoonData extends MediaData {}


const data: Groups<WebtoonData> =
{
  "Favourites": [
    {
      name:   "You’re No Good",
      date:   2020,
      cover:  "youre-no-good.jpg",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE],
      themes: [Theme.COMING_OF_AGE],
    },
    {
      name:   "Our Secret Alliance",
      date:   undefined,
      cover:  "our-secret-alliance.jpg",
      genres: [Genre.ROMANCE],
      themes: [Theme.ENEMIES_TO_LOVERS],
    },
    {
      name:   "Nice To Meet You",
      date:   undefined,
      cover:  "nice-to-meet-you.jpg",
      genres: [Genre.ROMANCE],
    },
  ],
  "Enjoyable": [
    {
      name:   "Maybe Meant To Be",
      date:   undefined,
      cover:  "maybe-meant-to-be.webp",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE],
    },
    {
      name:   "Swimming Lessons For A Mermaid",
      date:   undefined,
      cover:  "swimming-lessons-mermaid.jpg",
      genres: [],
    },
  ],
  "Guilty Pleasures": [
    {
      name:   "Close As Neighbours",
      date:   undefined,
      cover:  undefined,
      genres: [Genre.ROMANCE, Genre.SEXUAL],
      is_shown: false,
    },
  ],
};

// Collapse and Rewind
// Springtime for Blossom
// Annoying Alice

prep_groups(data);
export const webtoons_data: Groups<WebtoonData> = data;
export const webtoons_list: WebtoonData[] = Object.values(data).flat();
