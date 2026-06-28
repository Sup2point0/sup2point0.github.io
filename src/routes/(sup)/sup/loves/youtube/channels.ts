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
      icon:   ".jpg",
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
      icon:   "cinema-wins.jpg",
      topics: ["films"],
      desc: [
        ``
      ],
    },
    {
      shard:  "good-work",
      name:   "Good Work",
      love:   1,
      date:   undefined,
      icon:   "good-work.jpg",
      topics: ["news"],
      desc: [
        ``
      ],
    },
    {
      shard:  "chris-spargo",
      name:   "Chris Spargo",
      love:   1,
      date:   undefined,
      icon:   "chris-spargo.jpg",
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
      icon:   "cgp-grey.jpg",
      topics: ["society", "stem"],
      desc: [
        ``
      ],
    },
    {
      shard:  "a-show-about-the-news",
      name:   "A Show About The News",
      love:   null,
      date:   ["late 2025", "present"],
      icon:   "a-show-about-the-news.jpg",
      topics: ["news"],
      desc: [
        ``
      ],
    },
    {
      shard:  "siliconversations",
      name:   "Siliconversations",
      love:   null,
      date:   ["early 2026", "present"],
      icon:   "siliconversations.jpg",
      topics: ["society", "ai"],
      desc: [
        ``
      ],
    },
    {
      shard:  "the-cursed-judge",
      name:   "The Cursed Judge",
      love:   null,
      date:   undefined,
      icon:   "the-cursed-judge.jpg",
      topics: ["games"],
      desc: [
        ``
      ],
    },
    {
      shard:  "schnee",
      name:   "schnee",
      love:   null,
      date:   undefined,
      icon:   "schnee.jpg",
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
      icon:   "vsauce.jpg",
      topics: ["society", "stem", "life"],
      desc: [
        ``
      ],
    },
    {
      shard:  "tom-scott",
      name:   "Tom Scott",
      love:   2,
      date:   undefined,
      icon:   "tom-scott.jpg",
      topics: ["everything", "uk", "stem"],
      desc: [
        ``
      ],
    },
    {
      shard:  "thomas-flight",
      name:   "Thomas Flight",
      love:   1,
      date:   undefined,
      icon:   "thomas-flight.jpg",
      topics: ["films"],
      desc: [
        ``
      ],
    },
    {
      shard:  "lemmino",
      name:   "LEMMiNO",
      love:   null,
      date:   undefined,
      icon:   "lemmino.jpg",
      topics: ["everything"],
      desc: [
        ``
      ],
    },
    {
      shard:  "jay-and-mark",
      name:   "Jay and Mark",
      love:   null,
      date:   undefined,
      icon:   "jay-and-mark.jpg",
      topics: ["uk", "world"],
      desc: [
        ``
      ],
    },
    {
      shard:  "noodle",
      name:   "Noodle",
      love:   null,
      date:   undefined,
      icon:   "noodle.jpg",
      topics: ["gaming"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "pinguefy",
      name:   "pinguefy",
      love:   1,
      date:   undefined,
      icon:   "pinguefy.jpg",
      topics: ["gaming"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "austin-mcconnell",
      name:   "Austin McConnell",
      love:   null,
      date:   undefined,
      icon:   "austin-mcconnell.jpg",
      topics: ["everything"],
      desc: [
        ``,
      ],
    },
  ],
  "dev": [
    {
      shard:  "code-aesthetic",
      name:   "Code Aesthetic",
      love:   2,
      date:   undefined,
      icon:   "code-aesthetic.jpg",
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
      icon:   "code-to-the-moon.jpg",
      topics: ["rust", "software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "fireship",
      name:   "Fireship",
      love:   null,
      date:   undefined,
      icon:   "fireship.jpg",
      topics: ["software", "news"],
      desc: [
        ``
      ],
    },
    {
      shard:  "gmtk",
      name:   "Game Maker’s Toolkit",
      love:   null,
      date:   undefined,
      icon:   "gmtk.jpg",
      topics: ["gamedev", "software"],
      desc: [
        ``
      ],
    },
    {
      shard:  "joma-tech",
      name:   "Joma Tech",
      love:   null,
      date:   undefined,
      icon:   "joma-tech.jpg",
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
      icon:   "kevin-fang.jpg",
      topics: ["software", "news"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "logan-smith",
      name:   "Logan Smith",
      love:   1,
      date:   undefined,
      icon:   "logan-smith.jpg",
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
      icon:   "mcoding.jpg",
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
      icon:   "no-boilerplate.jpg",
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
      icon:   "philomatics.jpg",
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
      icon:   "simon-dev.jpg",
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
      icon:   "spanning-tree.jpg",
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
      icon:   "3b1b.jpg",
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
      icon:   "2swap.jpg",
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
      icon:    "charles-cornell.jpg",
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
      icon:    "heiakim.webp",
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
      icon:    "in-the-mix.jpg",
      topics:  ["music production"],
      desc: [
        ``
      ],
    },
    {
      shard:   "prodbycircus",
      name:    "prodbycircus",
      love:    1,
      date:    ["early 2026", "present"],
      icon:    "prodbycircus.jpg",
      topics:  ["music production"],
      desc: [
        ``
      ],
    },
    {
      shard:   "snapp-makes-beats",
      name:    "Snapp Makes Beats",
      love:    2,
      date:    ["early 2025?", "present"],
      icon:    "snapp-makes-beats.jpg",
      topics:  ["music production", "comedy"],
      desc: [
        ``
      ],
    },
    {
      shard:   "synthet",
      name:    "Synthet",
      love:    2,
      date:    undefined,
      icon:    "synthet.jpg",
      topics:  ["music production"],
      desc: [
        ``
      ],
    },
  ],
  "hermitcraft": [
    {
      shard:  "grian",
      name:   "Grian",
      love:   3,
      date:   2021,
      icon:   "grian.jpg",
      topics: ["minecraft"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "mumbo-jumbo",
      name:   "Mumbo Jumbo",
      love:   2,
      date:   2020,
      icon:   "mumbo-jumbo.jpg",
      topics: ["minecraft"],
      desc: [
        ``,
      ],
    },
  ],
  "gaming": [
    {
      shard:  "ek-ruby",
      name:   "EK Ruby",
      love:   null,
      date:   "summer 2023",
      icon:   "ek-ruby.jpg",
      topics: ["phigros", "rhythm games"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "enamel-man",
      name:   "Enamel Man",
      love:   null,
      date:   2024,
      icon:   "enamel-man.jpg",
      topics: ["phigros", "rhythm games"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "crab-master-duel",
      name:   "Crab Master Duel",
      love:   null,
      date:   2024,
      icon:   "crab-master-duel.jpg",
      topics: ["Yu-Gi-Oh!", "gaming"],
      desc: [
        ``,
      ],
    },
    {
      shard:  "feuerrm-films",
      name:   "feuerrmFilms",
      love:   null,
      date:   2018,
      icon:   "feuerrm-films.jpg",
      topics: ["asphalt", "gaming"],
      desc: [
        ``,
      ],
    },
  ],
  "Yu-Gi-Oh": [
    {
      shard:  "golden-nova-yugioh",
      name:   "GoldenNovaYugioh",
      love:   null,
      date:   2023,
      icon:   "golden-nova-yugioh.jpg",
      topics: ["Yu-Gi-Oh!", "lore"],
      desc: [
        ``,
      ],
    },
  ],
  "comic relief": [
    {
      shard:   "casually-explained",
      name:    "Casually Explained",
      love:    null,
      date:    undefined,
      icon:    "casually-explained.jpg",
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
      icon:    "artspear-entertainment.jpg",
      topics:  ["animation"],
      desc: [
        ``
      ],
    },
    {
      shard:   "kevinu",
      name:    "Kevinu",
      love:    1,
      date:    ["summer 2025", "present"],
      icon:    "kevinu.jpg",
      topics:  ["life", "relationships", "comedy"],
      desc: [
        ``
      ],
    },
    {
      shard:   "daniel-thrasher",
      name:    "Daniel Thrasher",
      love:    null,
      date:    ["spring 2020", "present"],
      icon:    "daniel-thrasher.jpg",
      topics:  ["piano", "music", "skits"],
      desc: [
        ``
      ],
    },
    {
      shard:   "nathan-doan",
      name:    "Nathan Doan",
      love:    null,
      date:    undefined,
      icon:    "nathan-doan.jpg",
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
      icon:    "steven-he.jpg",
      topics:  ["Chinese", "skits"],
      desc: [
        ``
      ],
    },
    {
      shard:   "pro-zd",
      name:    "ProZD",
      love:    null,
      date:    undefined,
      icon:    "pro-zd.jpg",
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


// thejuicemedia
// Aaron Paulsen
// Matt Rose
// Lessons in Meme Culture
// Man Carrying Thing
// al jokes
// Jake Krantz

// Thomas Snyder
// Tantacrul

// Emergent Garden
