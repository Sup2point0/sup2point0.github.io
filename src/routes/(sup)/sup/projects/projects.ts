import type { Searchable } from "#scripts/search-filter.svelte";
import type { Groups, DatePoint } from "#scripts/types";


export enum Lang {
  sup = "supcode",
  py = "Python",
  cs = "C#",
  rb = "Ruby",
  hs = "Haskell",
  rs = "Rust",
  svelte = "Svelte/Kit",
  js = "JavaScript", ts = "JavaScript/TypeScript",
  css = "CSS", scss = "CSS/SCSS",
  html = "HTML",
  md = "Markdown",
  latex = "LaTeX", katex = "LaTeX/KaTeX",
  regex = "RegEx",
  json = "JSON",
  sql = "SQL", sqlite = "SQLite",
};

export enum Tool {
  Unity = "Unity",
  Pages = "GitHub Pages",
  nextcord = "Nextcord",
  pygame = "pygame",
  keras = "keras",
};

export type Tech = Lang | Tool;

export enum ProjectState {
  DEVELOPING = "developing",
  MAINTAINING = "maintaining",
  MISCELLANEOUS = "miscellaneous",
  HIATUS = "hiatus",
  PERSONAL = "personal",
  ARCHIVED = "archived",
}


export interface ProjectData extends Searchable
{
  name: string;
  love: 3 | 2 | 1 | -1 | -2 | -3;
  date?: DatePoint | DatePoint[];

  icon?: string;
  link?: string;

  tech: Tech[];
  tags: string[];

  state?: ProjectState;
  desc: string;
}


export const projects_data: Groups<ProjectData> = {
  [ProjectState.DEVELOPING]: [
    {
      name: "supcode",
      love: 2,
      desc: `A syntactically delicious conceptual programming language!`,
      link: "https://sup2point0.github.io/supcode",
      tech: [Lang.md, Lang.sup],
      tags: ["personal"]
    }, {
      name: "Stranger Quarkdown",
      love: 2,
      desc: `An automated content deployment framework for SvelteKit`,
      tech: [Lang.rb],
      tags: ["dev"]
    }, {
      name: "WeightedList",
      love: 3,
      desc: `A specialised list for weighted randomisation, implemented in every language as I know. I now use it as an exercise when learning new ones!`,
      link: "https://github.com/Sup2point0/weighted-list",
      tech: [Lang.py, Lang.cs, Lang.js, Lang.rb],
      tags: ["dev"]
    }, {
      name: "Algorhythm",
      love: -1,
      desc: `A keyboard-based rhythm game. Originally implemented in Python as a proof of concept, will properly develop in Unity someday!`,
      tech: [Lang.py, Tool.pygame],
      tags: ["dev", "depr"]
    },
  ],
  [ProjectState.HIATUS]: [
    {
      name: "Ignis",
      love: -2,
      desc: `A series of projects relating to <em>Yu-Gi-Oh</em>`,
      link: "https://github.com/Sup2point0/ignis",
      icon: "ai.jpg",
      tech: [Lang.py, Tool.keras],
      tags: ["dev", "depr"]
    }, {
      name: "Vividity",
      love: 3,
      desc: `Provides colour palettes for use in other projects`,
      tech: [Lang.py],
      tags: ["dev"]
    },
  ],
  [ProjectState.MISCELLANEOUS]: [
    {
      name: "youtube-playlist-shuffler",
      love: 3,
      desc: `A script for shuffling a YouTube playlist through the Google API`,
      tech: [Lang.py],
      tags: ["dev"]
    }, {
      name: "suptools",
      love: 3,
      desc: `Utilities for general use throughout Python projects`,
      tech: [Lang.py],
      tags: ["dev"]
    },
  ],
  [ProjectState.PERSONAL]: [
    { name: "Assort",
      love: 1,
      desc: `An assortment of all my creations. Like a personal wiki!`,
      link: "https://sup2point0.github.io/Assort",
      icon: "assort.svg",
      tech: [Lang.md, Lang.svelte],
      tags: ["personal", "dev"]
    }, {
      name: "Antarctica",
      love: 2,
      desc: `A fictional reimaging of the coolest place on Earth.`,
      link: "https://sup2point0.github.io/Antarctica",
      icon: "antarctica.png",
      tech: [Lang.md],
      tags: ["personal"]
    }, {
      name: "Victory",
      love: 3,
      desc: `A custom card game for me and my sister to play, inspired by <em>Yu-Gi-Oh!</em>`,
      tech: [Lang.md, Lang.css, Lang.html, Lang.js],
      tags: ["personal", "dev"]
    }, {
      name: "The Monkeyopolis Times",
      love: -1,
      desc: `A fan-made Bloons TD 6 newspaper`,
      tech: ["Google Slides", "reddit"],
      tags: ["personal", "depr"]
    },
  ],
  [ProjectState.ARCHIVED]: [
    {
      name: "pyco:bytes",
      love: 2,
      desc: `A weekly newsletter on Python tips and tricks`,
      link: "https://sup2point0.github.io/pycobytes",
      tech: [Lang.md, Lang.svelte],
      tags: ["dev"]
    }, {
      name: "Avidity",
      love: 2,
      desc: `A web-based music player for personal use`,
      link: "https://sup2point0.github.io/avidity",
      tech: [Lang.svelte],
      tags: ["dev, active"]
    }, {
      name: "PENGUIN",
      love: -1,
      desc: `Playful & Energetic New General Utility & Information Network Bot, the masbot ADE of Antarctica.`,
      link: "https://github.com/Sup2point0/PENGUIN",
      icon: "penguin.png",
      tech: [Lang.py, Tool.nextcord],
      tags: ["dev", "depr"]
    }, {
      name: "Quarkdown",
      love: -3,
      desc: `An automated content deployment framework for exporting Markdown files in repositories to GitHub Pages`,
      tech: [Lang.py],
      tags: ["dev", "depr"]
    }, {
      name: "REAX",
      love: -3,
      desc: `A probabilistic particle simulator for modelling chemical reactions`,
      tech: [Lang.cs, Tool.Unity],
      tags: ["dev", "depr"]
    },
  ],
};

export const projects_list: ProjectData[] = (
  () => {
    for (let [i, [state, projects]] of Object.entries(projects_data).entries()) {
      for (let [j, project] of projects.entries()) {
        project.state = state as ProjectState;
        project._score_ = 0;
        if (project.shard === undefined) {
          project.shard = `${i.toString()}-${j.toString()}`;
        }
      }
    }

    return Object.values(projects_data).flatMap(s => s);
  }
)();
