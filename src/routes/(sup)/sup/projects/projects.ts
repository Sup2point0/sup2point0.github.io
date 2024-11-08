export interface Project
{
  title: string;
  rank: number;
  desc: string;
  link?: string;
  cover?: string;
  tags: string[];
  flags?: string[];
}


export const projects: Project[] = [
  { "title": "Assort",
    "rank": 1,
    "desc": "An assortment of all my creations. Like a personal wiki!",
    "link": "https://sup2point0.github.io/Assort",
    "cover": "assort.png",
    "tags": ["Markdown", "Svelte", "SvelteKit"],
    "flags": ["personal, dev"]
  },
  { "title": "supcode",
    "rank": 2,
    "desc": "A syntactically delicious conceptual programming language!",
    "link": "https://sup2point0.github.io/supcode",
    "tags": ["Markdown", "supcode"],
    "flags": ["personal"]
  },
  { "title": "Antarctica",
    "rank": 2,
    "desc": "A fictional reimaging of the coolest place on Earth.",
    "link": "https://sup2point0.github.io/Antarctica",
    "tags": ["Markdown"],
    "flags": ["personal"]
  },
  { "title": "Victory",
    "rank": 3,
    "desc": "A custom card game for me and my sister to play, inspired by <em>Yu-Gi-Oh!</em>",
    "tags": ["Markdown", "HTML", "CSS", "JavaScript"],
    "flags": ["personal, dev"]
  },
  { "title": "The Monkeyopolis Times",
    "rank": -1,
    "desc": "A fan-made Bloons TD 6 newspaper",
    "tags": ["Google Slides", "reddit"],
    "flags": ["personal, depr"]
  },
  { "title": "Avidity",
    "rank": 2,
    "desc": "A web-based music player for personal use",
    "tags": ["Svelte", "SvelteKit"],
    "flags": ["dev, active"]
  },
  { "title": "Stranger Quarkdown",
    "rank": 2,
    "desc": "An automated content deployment framework for SvelteKit",
    "tags": ["Ruby"],
    "flags": ["dev"]
  },
  { "title": "pyco:bytes",
    "rank": 2,
    "desc": "A weekly newsletter on Python tips and tricks",
    "tags": ["Markdown", "Svelte", "SvelteKit"],
    "flags": ["dev"]
  },
  { "title": "Vividity",
    "rank": 3,
    "desc": "Provides colour palettes for use in other projects",
    "tags": ["Python"],
    "flags": ["dev"]
  },
  { "title": "WeightedList",
    "rank": 3,
    "desc": "A specialised list for weighted randomisation, implemented in every language as I know. I now use it as an exercise when learning new ones!",
    "tags": ["Python", "C#", "JavaScript", "Ruby"],
    "flags": ["dev"]
  },
  { "title": "suptools",
    "rank": 3,
    "desc": "Utilities for general use throughout Python projects",
    "tags": ["Python"],
    "flags": ["dev"]
  },
  { "title": "youtube-playlist-shuffler",
    "rank": 3,
    "desc": "A script for shuffling a YouTube playlist through the Google API",
    "tags": ["Python"],
    "flags": ["dev"]
  },
  { "title": "Algorhythm",
    "rank": -1,
    "desc": "A keyboard-based rhythm game. Originally implemented in Python as a proof of concept, will properly develop in Unity someday!",
    "tags": ["Python", "pygame"],
    "flags": ["dev, depr"]
  },
  { "title": "Ignis",
    "rank": -2,
    "desc": "A series of projects relating to <em>Yu-Gi-Oh</em>",
    "tags": ["Python", "Keras"],
    "flags": ["dev, depr"]
  },
  { "title": "PENGUIN",
    "rank": -1,
    "desc": "",
    "tags": ["Python", "Nextcord"],
    "flags": ["dev, depr"]
  },
  { "title": "Quarkdown",
    "rank": -3,
    "desc": "An automated content deployment framework for exporting Markdown files in repositories to GitHub Pages",
    "tags": ["Python"],
    "flags": ["dev, depr"]
  },
  { "title": "REAX",
    "rank": -3,
    "desc": "A probabilistic particle simulator for modelling chemical reactions",
    "tags": ["C#", "Unity"],
    "flags": ["dev, depr"]
  },
];
