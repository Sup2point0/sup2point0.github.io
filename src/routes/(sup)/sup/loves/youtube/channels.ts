import { prep_groups, type Searchable } from "#scripts/search-filter.svelte";
import type { Love, Dates, Groups } from "#scripts/types";


export interface YouTubeChannelData extends Searchable
{
  name:  string;
  love:  Love;
  date?: Dates;

  icon?: string;

  topics: string[];

  desc?: string[];
}


const _template = [
    {
      shard: "",
      name: "",
      love: 0,
      date: undefined,
      icon: undefined,
      topics: [],
      desc: [
        ``,
      ],
    },
];


const data: Groups<YouTubeChannelData> =
{
  "dev": [
    {
      shard: "kevin-fang",
      name: "Kevin Fang",
      love: 2,
      date: undefined,
      icon: undefined,
      topics: ["software"],
      desc: [
        ``,
      ],
    }
  ],
  "stem": [
    {
      shard: "3b1b",
      name: "3Blue1Brown",
      love: 3,
      date: undefined,
      icon: undefined,
      topics: ["maths"],
      desc: [
        ``,
      ],
    },
  ],
};

prep_groups(data);
export const channels_data: Groups<YouTubeChannelData> = data;
export const channels_list: YouTubeChannelData[] = Object.values(data).flat();
