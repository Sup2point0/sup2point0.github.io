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
      shard:  "",
      name:   "",
      love:   0,
      date:   undefined,
      icon:   undefined,
      topics: [],
      desc: [
        ``,
      ],
    },
];


const data: Groups<YouTubeChannelData> =
{
  "video essays": [
    {
      shard:  "cinema-wins",
      name:   "CinemaWins",
      love:   3,
      date:   undefined,
      icon:   undefined,
      topics: ["films"],
      desc: [
        ``
      ],
    },
    {
      shard:  "good-work",
      name:   "Good Work",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["news"],
      desc: [
        ``
      ],
    },
    {
      shard:  "chris-spargo",
      name:   "Chris Spargo",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["uk"],
      desc: [
        ``
      ],
    },
    {
      shard:  "cgp-grey",
      name:   "CGP Grey",
      love:   3,
      date:   undefined,
      icon:   undefined,
      topics: ["society", "stem"],
      desc: [
        ``
      ],
    },
    {
      shard:  "a-show-about-the-news",
      name:   "A Show About The News",
      love:   2,
      date:   ["late 2025", "present"],
      icon:   undefined,
      topics: ["news"],
      desc: [
        ``
      ],
    },
    {
      shard:  "siliconversations",
      name:   "Siliconversations",
      love:   1,
      date:   ["early 2026", "present"],
      icon:   undefined,
      topics: ["society", "ai"],
      desc: [
        ``
      ],
    },
    {
      shard:  "the-cursed-judge",
      name:   "The Cursed Judge",
      love:   1,
      date:   undefined,
      icon:   undefined,
      topics: ["games"],
      desc: [
        ``
      ],
    },
    {
      shard:  "schnee",
      name:   "schnee",
      love:   1,
      date:   undefined,
      icon:   undefined,
      topics: ["films"],
      desc: [
        ``
      ],
    },
    {
      shard:  "vsauce",
      name:   "Vsauce",
      love:   3,
      date:   undefined,
      icon:   undefined,
      topics: ["society", "stem", "life"],
      desc: [
        ``
      ],
    },
    {
      shard:  "tom-scott",
      name:   "Tom Scott",
      love:   3,
      date:   undefined,
      icon:   undefined,
      topics: ["everything", "uk", "stem"],
      desc: [
        ``
      ],
    },
    {
      shard:  "thomas-flight",
      name:   "Thomas Flight",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["films"],
      desc: [
        ``
      ],
    },
    {
      shard:  "lemmino",
      name:   "LEMMiNO",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["everything"],
      desc: [
        ``
      ],
    },
    {
      shard:  "jay-and-mark",
      name:   "Jay and Mark",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["uk", "world"],
      desc: [
        ``
      ],
    },
  ],
  "dev": [
    {
      shard:  "code-aesthetic",
      name:   "Code Aesthetic",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["code", "software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "code-to-the-moon",
      name:   "Code to the Moon",
      love:   null,
      date:   undefined,
      icon:   undefined,
      topics: ["rust", "software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "fireship",
      name:   "Fireship",
      love:   1,
      date:   undefined,
      icon:   undefined,
      topics: ["software", "news"],
      desc: [
        ``
      ],
    },
    {
      shard:  "game-makers-toolkit",
      name:   "Game Maker’s Toolkit",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["gamedev", "software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "joma-tech",
      name:   "Joma Tech",
      love:   1,
      date:   undefined,
      icon:   undefined,
      topics: ["software", "comedy"],
      desc: [
        ``
      ],
    },
    {
      shard:  "kevin-fang",
      name:   "Kevin Fang",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["software", "news"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "logan-smith",
      name:   "Logan Smith",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["rust", "software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "mcoding",
      name:   "mcoding",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["python", "code", "software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "no-boilerplate",
      name:   "No Boilerplate",
      love:   3,
      date:   undefined,
      icon:   undefined,
      topics: ["rust", "code", "software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "philomatics",
      name:   "Philomatics",
      love:   undefined,
      date:   undefined,
      icon:   undefined,
      topics: ["software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "simon-dev",
      name:   "SimonDev",
      love:   undefined,
      date:   undefined,
      icon:   undefined,
      topics: ["software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "spanning-tree",
      name:   "Spanning Tree",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["computer science", "software"],
      desc: [
        ``
      ],
    },
  ],
  "stem": [
    {
      shard:  "3b1b",
      name:   "3Blue1Brown",
      love:   3,
      date:   undefined,
      icon:   undefined,
      topics: ["maths", "computer science"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "2swap",
      name:   "2swap",
      love:   2,
      date:   undefined,
      icon:   undefined,
      topics: ["maths", "computer science"],
      desc: [
        ``,
      ],
    },
  ],
  "music": [
    {
      shard:   "charles-cornell",
      name:    "Charles Cornell",
      love:    null,
      date:    undefined,
      icon:    undefined,
      topics:  ["piano", "music theory"],
      desc: [
        ``
      ],
    },
    {
      shard:   "heiakim",
      name:    "heiakim",
      love:    null,
      date:    undefined,
      icon:    undefined,
      topics:  ["music production"],
      desc: [
        ``
      ],
    },
    {
      shard:   "in-the-mix",
      name:    "In The Mix",
      love:    3,
      date:    undefined,
      icon:    undefined,
      topics:  ["music production"],
      desc: [
        ``
      ],
    },
    {
      shard:   "neddie",
      name:    "Neddie",
      love:    null,
      date:    undefined,
      icon:    undefined,
      topics:  ["music production"],
      desc: [
        ``
      ],
    },
    {
      shard:   "prodbycircus",
      name:    "prodbycircus",
      love:    2,
      date:    ["early 2026", "present"],
      icon:    undefined,
      topics:  ["music production"],
      desc: [
        ``
      ],
    },
    {
      shard:   "snapp-makes-beats",
      name:    "Snapp Makes Beats",
      love:    3,
      date:    ["early 2025?", "present"],
      icon:    undefined,
      topics:  ["music production", "comedy"],
      desc: [
        ``
      ],
    },
    {
      shard:   "synthet",
      name:    "Synthet",
      love:    3,
      date:    undefined,
      icon:    undefined,
      topics:  ["music production"],
      desc: [
        ``
      ],
    },
  ],
  "comic relief": [
    {
      shard:   "casually-explained",
      name:    "Casually Explained",
      love:    1,
      date:    undefined,
      icon:    undefined,
      topics:  ["everything"],
      desc: [
        ``
      ],
    },
    {
      shard:   "artspear-entertainment",
      name:    "Artspear Entertainment",
      love:    3,
      date:    ["pre-2017", "present"],
      icon:    undefined,
      topics:  ["animation"],
      desc: [
        ``
      ],
    },
    {
      shard:   "kevinu",
      name:    "Kevinu",
      love:    3,
      date:    ["summer 2025", "present"],
      icon:    undefined,
      topics:  ["life", "relationships", "comedy"],
      desc: [
        ``
      ],
    },
    {
      shard:   "daniel-thrasher",
      name:    "Daniel Thrasher",
      love:    1,
      date:    ["spring 2020", "present"],
      icon:    undefined,
      topics:  ["piano", "music", "skits"],
      desc: [
        ``
      ],
    },
    {
      shard:   "nathan-doan",
      name:    "Nathan Doan",
      love:    1,
      date:    undefined,
      icon:    undefined,
      topics:  ["skits"],
      desc: [
        ``
      ],
    },
    {
      shard:   "steven-he",
      name:    "Steven He",
      love:    null,
      date:    undefined,
      icon:    undefined,
      topics:  ["Chinese", "skits"],
      desc: [
        ``
      ],
    },
    {
      shard:   "pro-zd",
      name:    "ProZD",
      love:    2,
      date:    undefined,
      icon:    undefined,
      topics:  ["games", "skits"],
      desc: [
        ``
      ],
    },
  ],
};

prep_groups(data);
export const channels_data: Groups<YouTubeChannelData> = data;
export const channels_list: YouTubeChannelData[] = Object.values(data).flat();

// GoldenNovaYugioh

// Grian
// Mumbo Jumbo

// EKRuby
// Enamel Man
// Crab Master Duel
// feuerrmFilms

// Noodle
// pinguefy
// Austin McConnell



// thejuicemedia
// Aaron Paulsen
// Matt Rose
// Lessons in Meme Culture
// Man Carrying Thing
// al jokes
// Jake Krantz

// Thomas Snyder
// Tantacrul
