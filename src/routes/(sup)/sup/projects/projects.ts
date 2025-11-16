import type { Searchable } from "#scripts/search-filter.svelte";
import type { Groups, DatePoint } from "#scripts/types";


export enum Lang {
  SUPCODE = "supcode",
  PYTHON = "Python",
  CSHARP = "C#",
  RUBY = "Ruby",
  HASKELL = "Haskell",
  RUST = "Rust",
  SVELTE = "Svelte/Kit",
  JAVASCRIPT = "JavaScript", TYPESCRIPT = "JavaScript/TypeScript",
  CSS = "CSS", SCSS = "CSS/SCSS",
  HTML = "HTML",
  MARKDOWN = "Markdown",
  LATEX = "LaTeX", KATEX = "LaTeX/KaTeX",
  REGEX = "RegEx",
  JSON = "JSON",
  SQL = "SQL", SQLITE = "SQLite",
};

export enum Tool {
  UNITY = "Unity",
  PAGES = "GitHub Pages",
  NEXTCORD = "Nextcord",
  PYGAME = "pygame",
  KERAS = "keras",
};

export type Tech = Lang | Tool;

export enum Flavour {
  DEV = "software",
  ACADEMIC = "academic",
  PERSONAL = "personal",
}

export enum Kind {
  GENERAL = "general",
  WEBSITE = "website",
  GAME = "game",
  APPLICATION = "application",
  FRAMEWORK = "framework",
  TOOL = "tool",
  PROGRAM = "program",
  LANGUAGE = "language",
}

export enum State {
  DEVELOPING = "developing",
  MAINTAINING = "maintaining",
  MISCELLANEOUS = "miscellaneous",
  HIATUS = "on hiatus",
  PERSONAL = "personal",
  ARCHIVED = "archived",
}


export interface ProjectData extends Searchable
{
  name: string;
  love?: 3 | 2 | 1 | 0;
  date?: DatePoint | DatePoint[];

  icon?: string;

  flavour: Flavour | Flavour[];
  kind: Kind | Kind[];
  tech: Tech[];
  tags?: string[];
  state: State | State[];

  link?: string;
  links?: {
    [link: string]: string;
  };
  desc: string;
}


export const projects_data: Groups<ProjectData> = {
  "Favourites": [
    {
      name: "Integrity",
      love: 3,
      icon: "integrity.svg",
      flavour: [Flavour.DEV, Flavour.ACADEMIC],
      kind: Kind.WEBSITE,
      tech: [Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS, Lang.RUBY, Lang.KATEX, Lang.JSON, Lang.MARKDOWN],
      state: [State.DEVELOPING, State.MAINTAINING],
      links: {
        github: "https://github.com/Sup2point0/integrity",
        site: "https://sup2point0.github.io/integrity",
      },
      desc: `All my hand-crafted maths questions, game develpoment in Desmos, and more!`,
    },
    {
      name: "Stranger Quarkdown",
      love: 2,
      flavour: Flavour.DEV,
      kind: Kind.FRAMEWORK,
      tech: [Lang.RUBY],
      state: [State.DEVELOPING, State.MAINTAINING],
      links: {
        github: "https://github.com/Sup2point0/stranger-quarkdown",
        site: "https://sup2point0.github.io/stranger-quarkdown/docs"
      },
      desc: `An automated content deployment framework for SvelteKit`,
    },
    {
      name: "WeightedList",
      love: 2,
      flavour: Flavour.DEV,
      kind: Kind.FRAMEWORK,
      tech: [Lang.PYTHON, Lang.CSHARP, Lang.TYPESCRIPT, Lang.RUBY, Lang.HASKELL, Lang.RUST],
      state: [State.DEVELOPING, State.MAINTAINING],
      links: {
        github: "https://github.com/Sup2point0/weighted-list",
      },
      desc: `A specialised list for weighted randomisation, implemented in every language as I know. I now use it as an exercise when learning new ones!`,
    },
    {
      name: "Algorhythm",
      love: 3,
      flavour: [Flavour.DEV, Flavour.PERSONAL],
      kind: Kind.GAME,
      tech: [Lang.PYTHON, Tool.PYGAME],
      state: State.HIATUS,
      desc: `A keyboard-based rhythm game. Originally implemented in Python as a proof of concept, will properly develop in Unity someday!`,
    },
    {
      name: "supcode",
      love: 3,
      date: [2021, "present"],
      flavour: Flavour.DEV,
      kind: Kind.LANGUAGE,
      tech: [Lang.MARKDOWN, Lang.SUPCODE],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/supcode",
      },
      desc: `A syntactically delicious conceptual programming language!`,
    },
  ],
  "Archives": [
    {
      name: "Ignis",
      love: 0,
      date: 2024,
      icon: "ai.jpg",
      flavour: Flavour.DEV,
      kind: [Kind.GENERAL, Kind.PROGRAM],
      tech: [Lang.PYTHON, Tool.KERAS],
      state: State.ARCHIVED,
      links: {
        github: "https://github.com/Sup2point0/ignis",
      },
      desc: `A series of projects relating to <em>Yu-Gi-Oh</em>`,  // TODO
    },
  ],
  // [State.HIATUS]: [
  //   
  // {
  //     name: "Vividity",
  //     // love: 3,
  //     desc: `Provides colour palettes for use in other projects`,
  //     tech: [Lang.py],
  //     tags: ["dev"]
  //   },
  // ],
  // [State.MISCELLANEOUS]: [
  //   {
  //     name: "youtube-playlist-shuffler",
  //     // love: 3,
  //     desc: `A script for shuffling a YouTube playlist through the Google API`,
  //     tech: [Lang.py],
  //     tags: ["dev"]
  //   },
  // {
  //     name: "suptools",
  //     // love: 3,
  //     desc: `Utilities for general use throughout Python projects`,
  //     tech: [Lang.py],
  //     tags: ["dev"]
  //   },
  // ],
  // [State.PERSONAL]: [
  //   { name: "Assort",
  //     // love: 1,
  //     desc: `An assortment of all my creations. Like a personal wiki!`,
  //     link: "https://sup2point0.github.io/Assort",
  //     icon: "assort.svg",
  //     tech: [Lang.md, Lang.svelte],
  //     tags: ["personal", "dev"]
  //   },
  // {
  //     name: "Antarctica",
  //     // love: 2,
  //     desc: `A fictional reimaging of the coolest place on Earth.`,
  //     link: "https://sup2point0.github.io/Antarctica",
  //     icon: "antarctica.png",
  //     tech: [Lang.md],
  //     tags: ["personal"]
  //   },
  // {
  //     name: "Victory",
  //     // love: 3,
  //     desc: `A custom card game for me and my sister to play, inspired by <em>Yu-Gi-Oh!</em>`,
  //     tech: [Lang.md, Lang.css, Lang.html, Lang.js],
  //     tags: ["personal", "dev"]
  //   },
  // {
  //     name: "The Monkeyopolis Times",
  //     // love: -1,
  //     desc: `A fan-made Bloons TD 6 newspaper`,
  //     tech: ["Google Slides", "reddit"],
  //     tags: ["personal", "depr"]
  //   },
  // ],
  // [State.ARCHIVED]: [
  //   {
  //     name: "pyco:bytes",
  //     // love: 2,
  //     desc: `A weekly newsletter on Python tips and tricks`,
  //     link: "https://sup2point0.github.io/pycobytes",
  //     tech: [Lang.md, Lang.svelte],
  //     tags: ["dev"]
  //   },
  // {
  //     name: "Avidity",
  //     // love: 2,
  //     desc: `A web-based music player for personal use`,
  //     link: "https://sup2point0.github.io/avidity",
  //     tech: [Lang.svelte],
  //     tags: ["dev, active"]
  //   },
  // {
  //     name: "PENGUIN",
  //     // love: -1,
  //     desc: `Playful & Energetic New General Utility & Information Network Bot, the masbot ADE of Antarctica.`,
  //     link: "https://github.com/Sup2point0/PENGUIN",
  //     icon: "penguin.png",
  //     tech: [Lang.py, Tool.nextcord],
  //     tags: ["dev", "depr"]
  //   },
  // {
  //     name: "Quarkdown",
  //     // love: -3,
  //     desc: `An automated content deployment framework for exporting Markdown files in repositories to GitHub Pages`,
  //     tech: [Lang.py],
  //     tags: ["dev", "depr"]
  //   },
  // {
  //     name: "REAX",
  //     // love: -3,
  //     desc: `A probabilistic particle simulator for modelling chemical reactions`,
  //     tech: [Lang.cs, Tool.Unity],
  //     tags: ["dev", "depr"]
  //   },
  // ],
};

export const projects_list: ProjectData[] = (
  () => {
    for (let [i, [kind, projects]] of Object.entries(projects_data).entries()) {
      for (let [j, project] of projects.entries()) {
        project._score_ = 0;
        if (project.shard === undefined) {
          project.shard = `${i.toString()}-${j.toString()}`;
        }
      }
    }

    return Object.values(projects_data).flatMap(s => s);
  }
)();
