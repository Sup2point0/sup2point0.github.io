import { prep_groups } from "#scripts/search";
import { Genre, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface WebtoonData extends MediaData {}


const data: Groups<WebtoonData> =
{
  "Favourites": [
    {
      name:   "You’re No Good",
      date:   2020,
      cover:  undefined,
      genres: [],
    },
    {
      name:   "Our Secret Alliance",
      date:   undefined,
      cover:  undefined,
      genres: [],
    },
    {
      name:   "Nice To Meet You",
      date:   undefined,
      cover:  undefined,
      genres: [],
    },
  ],
  "Enjoyable": [
    {
      name:   "Maybe Meant To Be",
      date:   undefined,
      cover:  undefined,
      genres: [],
    },
    {
      name:   "Swimming Lessons For A Mermaid",
      date:   undefined,
      cover:  undefined,
      genres: [],
    },
  ],
  "Guilty Pleasures": [
    {
      name:   "Close As Neighbours",
      date:   undefined,
      cover:  undefined,
      genres: [],
      is_shown: false,
    },
    {
      name:   "Collapse and Unwind",
      date:   2020,
      cover:  undefined,
      genres: [],
      is_shown: false,
    },
  ],
};

// Springtime for Blossom
// Annoying Alice

prep_groups(data);
export const webtoons_data: Groups<WebtoonData> = data;
export const webtoons_list: WebtoonData[] = Object.values(data).flat();
