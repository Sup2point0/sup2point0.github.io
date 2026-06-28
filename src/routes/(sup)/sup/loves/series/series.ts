import { prep_groups } from "#scripts/search-filter.svelte.ts";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface SeriesData extends MediaData {}


const data: Groups<SeriesData> =
{
  "All-Time Favourites": [
    {
      shard:  "the-kings-avatar",
      name:   "« 全职高手 »",
      date:   2019,
      cover:  "the-kings-avatar.png",
      genres: [Genre.DRAMA, Genre.COMEDY, Genre.SLICE_OF_LIFE],
      themes: [Theme.ESPORTS],
      desc:   `The King’s Avatar (live action)`,
    },
    {
      name:   "Arcane: Season 1",
      date:   2021,
      cover:  "arcane-s1.jpg",
      genres: [Genre.DYSTOPIAN, Genre.FANTASY],
      themes: [Theme.TRAGEDY],
    },
    {
      name:   "The Mandalorian: Season 1",
      date:   2019,
      cover:  "the-mandalorian.jpg",
      desc:   `Star Wars`,
    },
    {
      name:   "Andor: Season 1",
      date:   2022,
      cover:  "andor-s1.webp",
      desc:   `Star Wars`,
    }
  ],
  "children’s shows I unironically love": [
    {
      shard:  "boonie-bears",
      name:   "« 熊出没 »",
      genres: [Genre.CARTOON, Genre.COMEDY],
      desc:   `Boonie Bears`,
    },
    {
      name:   "Ben & Holly’s Little Kingdom",
    },
    {
      name:   "Octonauts",
    },
    {
      name:   "Barbie: Life in the Dreamhouse",
      date:   [2012, 2015],
    },
    {
      name:   "Peppa Pig",
    }
  ],
  "Peak Cinema": [
    {
      name:   "Sex Education",
      genres: [Genre.DRAMA, Genre.COMEDY],
      themes: [Theme.COMING_OF_AGE],
    },
    {
      name:   "The Big Bang Theory",
      genres: [Genre.COMEDY, Genre.SLICE_OF_LIFE],
    },
  ],
  "My Little Pony": [
    {
      name:   "Equestria Girls – Rainbow Rocks",
      date:   2014,
    },
    {
      name:   "Equestria Girls – Legend of Everfree",
      date:   2016,
    },
    {
      name:   "Equestria Girls – Friendship Games",
      date:   2015,
    },
    {
      name:   "Friendship is Magic – Season 1",
      date:   2010,
    },
    {
      name:   "Friendship is Magic",
      date:   [2010, 2019],
    },
    {
      name:   "Equestria Girls – Better Together",
      date:   [2017, 2020],
    },
  ],
  "Plenty Enjoyable": [
    {
      shard:  "go-go-squid",
      name:   "« 亲爱的、热爱的 »",
      date:   2019,
      genres: [Genre.ROMANCE, Genre.DRAMA, Genre.SLICE_OF_LIFE],
      desc:   `Go Go Squid`,
    },
    {
      shard:  "a-little-reunion",
      name:   "« 小欢喜 »",
      date:   2019,
      genres: [Genre.DRAMA, Genre.SLICE_OF_LIFE],
      themes: [Theme.COMING_OF_AGE, "高考 (gaokao)" as Theme],
      desc:   `A Little Reunion`,
    },
  ],
};

prep_groups(data);
export const series_data: Groups<SeriesData> = data;
export const series_list: SeriesData[] = Object.values(data).flat();
