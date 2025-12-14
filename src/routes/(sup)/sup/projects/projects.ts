import { i } from "#scripts/utils";
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
  JAVASCRIPT = "JavaScript", TYPESCRIPT = "JavaScript / TypeScript",
  CSS = "CSS", SCSS = "CSS / SCSS",
  HTML = "HTML",
  MARKDOWN = "Markdown",
  LATEX = "LaTeX", KATEX = "LaTeX / KaTeX",
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
  OPENGL = "OpenGL",
};

export type Tech = Lang | Tool;

export enum Flavour {
  DEV = "software",
  ACADEMIC = "academic",
  PERSONAL = "personal",
}

export enum Kind {
  GENERAL = "general",
  WEBSITE = "website", GAME = "game", APPLICATION = "application", FRAMEWORK = "framework", TOOL = "tool", PROGRAM = "program", WIKI = "wiki",
  LANGUAGE = "language", WORLD = "worldbuilding", WRITING = "writing", GRAPHIC = "graphic design",
}

export enum State {
  ETERNAL = "eternal",
  DEVELOPING = "developing",
  MAINTAINING = "maintaining",
  HIATUS = "on hiatus",
  INDETERMINATE = "indeterminate",
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
  state: State | State[];

  links?: {
    [link: string]: string;
  };
  tags?: string[];
  desc: string;
}


/* @ts-ignore 6133 */
const template: ProjectData = [
{
  shard: "",
  name: "",
  love: 0,
  date: undefined,
  icon: undefined,
  flavour: Flavour.DEV,
  kind: Kind.GENERAL,
  tech: [
    Lang.SVELTE,
  ],
  state: State.DEVELOPING,
  links: {
    github: "https://github.com/Sup2point0/...",
  },
  desc: ``,
},
];


export const projects_data: Groups<ProjectData> = {
  "Favourites": [
    {
      name: "Assort",
      love: 3,
      date: [2021, "present"],
      icon: "assort.svg",
      flavour: [Flavour.PERSONAL, Flavour.DEV],
      kind: [Kind.WIKI, Kind.WEBSITE],
      tech: [
        Lang.MARKDOWN, Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS, Lang.HTML, Lang.JSON,
      ],
      state: State.ETERNAL,
      links: {
        github: "https://sup2point0.github.io/Assort",
        site: "https://sup2point0.github.io/Assort",
      },
      desc: `An assortment of all my creations. My personal wiki!`,
    },
    {
      name: "Integrity",
      love: 3,
      date: [2024, "present"],
      icon: "integrity.svg",
      flavour: [Flavour.DEV, Flavour.ACADEMIC],
      kind: Kind.WEBSITE,
      tech: [Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS, Lang.RUBY, Lang.KATEX, Lang.JSON, Lang.MARKDOWN],
      state: [State.DEVELOPING, State.MAINTAINING],
      links: {
        github: "https://github.com/Sup2point0/integrity",
        site: "https://sup2point0.github.io/integrity",
      },
      desc: `All my hand-crafted maths questions, game development in Desmos, and more!`,
    },
    {
      name: "Avidity (Unity)",
      love: 1,
      icon: undefined,
      date: ["summer 2025", "present"],
      flavour: Flavour.DEV,
      kind: Kind.APPLICATION,
      tech: [
        Tool.UNITY, Lang.CSHARP,
      ],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/Avidity-unity",
      },
      desc: `A music player for personal use!`,
    },
    {
      shard: "weighted-list",
      name: "weighted-list",
      love: 2,
      date: ["May 2022", "present"],
      icon: undefined,
      flavour: Flavour.DEV,
      kind: Kind.FRAMEWORK,
      tech: [
        Lang.PYTHON, Lang.CSHARP, Lang.TYPESCRIPT, Lang.HASKELL, Lang.RUST, // LANG.RUBY
      ],
      state: [State.DEVELOPING, State.MAINTAINING],
      links: {
        github: "https://github.com/Sup2point0/weighted-list",
      },
      desc: `A specialised list for weighted randomisation, implemented in every language as I know. I now use it as an exercise when learning new ones!`,
    },
    {
      name: "Stranger Quarkdown",
      love: 1,
      date: ["July 2024", "present"],
      icon: "squarkdown.png",
      flavour: Flavour.DEV,
      kind: Kind.FRAMEWORK,
      tech: [
        Lang.RUBY,
      ],
      state: [State.DEVELOPING, State.MAINTAINING],
      links: {
        github: "https://github.com/Sup2point0/stranger-quarkdown",
        site: "https://sup2point0.github.io/stranger-quarkdown/docs"
      },
      tags: ["squark", "squarkdown"],
      desc: `An automated content deployment framework for SvelteKit`,
    },
    {
      shard: "lattix",
      name: "lattix",
      love: 2,
      date: ["April 2025", "present"],
      icon: "lattix.svg",
      flavour: Flavour.DEV,
      kind: [Kind.WEBSITE, Kind.APPLICATION],
      tech: [
        Lang.SVELTE, Lang.TYPESCRIPT,
      ],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/lattix",
        site: "https://sup2point0.github.io/lattix",
      },
      desc: `More beautiful puzzle solving`,
    },
    {
      name: "Algorhythm",
      love: 3,
      date: ["summer 2023", "present"],
      flavour: [Flavour.DEV, Flavour.PERSONAL],
      kind: Kind.GAME,
      tech: [
        Lang.PYTHON, Tool.PYGAME,
      ],
      state: State.HIATUS,
      desc: `A keyboard-based rhythm game. Originally implemented in Python as a proof of concept, will properly develop in Unity someday!`,
    },
    {
      name: "supcode",
      love: 3,
      date: [2021, "present"],
      flavour: Flavour.DEV,
      kind: Kind.LANGUAGE,
      tech: [
        Lang.MARKDOWN, Lang.SUPCODE
      ],
      state: State.HIATUS,
      links: {
        github: "https://github.com/Sup2point0/supcode",
      },
      desc: `A syntactically delicious conceptual programming language!`,
    },
  ],
  "Creations": [
    {
      name: "Antarctica",
      love: 3,
      date: [2021, "present"],
      icon: "antarctica.png",
      flavour: Flavour.PERSONAL,
      kind: Kind.WIKI,
      tech: [
        Lang.MARKDOWN,
      ],
      state: State.HIATUS,
      links: {
        github: "https://sup2point0.github.io/Antarctica",
      },
      desc: `A fictional reimagining of the coolest place on Earth.`,
    },
    {
      name: "Victory",
      date: [2020, "present"],
      flavour: Flavour.PERSONAL,
      kind: [Kind.GAME, Kind.WORLD],
      tech: [
        Lang.SVELTE, Lang.MARKDOWN
      ],
      state: State.HIATUS,
      links: {
        github: "https://github.com/Sup2point0/Victory"
      },
      desc: `A custom card game for me and my sister to play, inspired by ${i("Yu-Gi-Oh!")}`,
    },
    {
      shard: "buccaneer-game",
      name: "Buccaneer Game",
      love: 1,
      date: [2022, "present"],
      icon: "buccaneer-game.svg",
      flavour: [Flavour.PERSONAL, Flavour.DEV],
      kind: Kind.GENERAL,
      tech: [
        Lang.SVELTE, Lang.TYPESCRIPT,
      ],
      state: State.MAINTAINING,
      links: {
        github: "https://github.com/Sup2point0/buccaneer-game",
        site: "https://sup2point0.github.io/buccaneer-game",
      },
      desc: `Mathematical piracy and chaotic fun`,
    },
  ],
  "Websites": [
    {
      shard: "lucidity",
      name: "Lucidity",
      love: 1,
      date: ["September 2025", "present"],
      flavour: Flavour.DEV,
      kind: Kind.WEBSITE,
      tech: [
        Lang.SVELTE,
      ],
      state: State.MAINTAINING,
      links: {
        github: "https://github.com/Sup2point0/lucidity",
        site: "https://sup2point0.github.io/lucidity",
      },
      desc: `A quick and simple tool for applying blur and other CSS effects to images straight from the clipboard`,
    },
    {
      shard: "skyscraping",
      name: "Skyscraping",
      love: 1,
      date: ["May 2025", "present"],
      icon: "skyscraping.svg",
      flavour: [Flavour.DEV, Flavour.PERSONAL],
      kind: [Kind.WEBSITE, Kind.WIKI],
      tech: [
        Lang.SVELTE,
      ],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/skyscraping",
        site: "https://sup2point0.github.io/skyscraping"
      },
      desc: `An adventurer’s archive of techniques and tricks for solving Skyscrapers puzzles`,
    },
    {
      name: "pyco:bytes",
      love: 1,
      date: [2024, 2025],
      icon: "pycobytes.png",
      flavour: Flavour.DEV,
      kind: [Kind.WEBSITE, Kind.WRITING],
      tech: [
        Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS, Lang.HTML, Lang.PYTHON, Lang.MARKDOWN
      ],
      state: State.ARCHIVED,
      links: {
        github: "https://github.com/Sup2point0/pycobytes",
        site: "https://sup2point0.github.io/pycobytes",
      },
      desc: `A weekly newsletter on Python tips and tricks`,
    },
  ],
  "Miscellaneous": [
    {
      shard: "fractually-awesome",
      name: "fractually-awesome",
      date: "December 2025",
      icon: undefined,
      flavour: Flavour.DEV,
      kind: Kind.APPLICATION,
      tech: [
        Lang.RUST,
      ],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/fractually-awesome",
      },
      desc: `Zooming in on the Mandelbrot set and other fractals`,
    },
    {
      shard: "vscode-supcode-visuals",
      name: "supcode Visuals for VSCode",
      date: ["winter 2025", "present"],
      flavour: Flavour.DEV,
      kind: Kind.APPLICATION,
      tech: [
        Lang.TYPESCRIPT,
      ],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/vscode-supcode-visuals",
      },
      desc: `Visual Studio Code extension for supcode-flavoured editor customisations`,
    },
    {
      shard: "shardify",
      name: "shardify",
      date: ["fall 2025", "present"],
      flavour: Flavour.DEV,
      kind: Kind.TOOL,
      tech: [
        Lang.RUST,
      ],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/shardify",
      },
      desc: `Lightweight Rust-powered CLI to convert arbitrary strings to normalised kebab-case identifiers`,
    },
    {
      shard: "archividian",
      name: "archividian",
      date: ["fall 2025", "present"],
      flavour: Flavour.DEV,
      kind: Kind.TOOL,
      tech: [
        Lang.RUST,
      ],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/archividian",
      },
      desc: `Archiving file system metadata for Git while avoiding tracking large files`,
    },
    {
      shard: "brainflop",
      name: "brainflop",
      date: ["fall 2025", "present"],
      flavour: Flavour.DEV,
      kind: Kind.PROGRAM,
      tech: [
        Lang.HASKELL,
      ],
      state: State.INDETERMINATE,
      links: {
        github: "https://github.com/Sup2point0/brainflop",
      },
      desc: `An applicative brainf*** parser/evaluator`,
    },
    {
      shard: "sorting-hat",
      name: "sorting-hat",
      date: [2024, "present"],
      flavour: Flavour.DEV,
      kind: Kind.PROGRAM,
      tech: [
        Lang.CSHARP, Lang.HASKELL, Lang.RUST,
      ],
      state: State.DEVELOPING,
      links: {
        github: "https://github.com/Sup2point0/sorting-hat",
      },
      desc: `Sorting algorithms implemented in languages I’m learning`,
    },
    {
      shard: "hastkell",
      name: "hASTkell",
      date: ["fall 2025", "present"],
      flavour: Flavour.DEV,
      kind: Kind.FRAMEWORK,
      tech: [
        Lang.HASKELL,
      ],
      state: State.INDETERMINATE,
      links: {
        github: "https://github.com/Sup2point0/hASTkell",
      },
      desc: `Building abstract syntax trees for parsing and computing mathematical expressions`,
    },
    {
      shard: "youtube-playlist-shuffler",
      name: "YouTube Playlist Shuffler",
      date: 2025,
      flavour: Flavour.DEV,
      kind: Kind.TOOL,
      tech: [Lang.PYTHON],
      state: State.MAINTAINING,
      links: {
        github: "https://github.com/Sup2point0/youtube-playlist-shuffler",
      },
      desc: `A script for shuffling a YouTube playlist through the Google API`,
    },
    {
      name: "Vividity",
      date: "July 2024",
      love: 0,
      flavour: Flavour.DEV,
      kind: Kind.TOOL,
      tech: [
        Lang.PYTHON, Lang.SCSS,
      ],
      state: State.HIATUS,
      links: {
        github: "https://github.com/Sup2point0/vividity",
      },
      desc: `Provides colour palettes for use in other projects`,
    },
    {
      shard: "nocturne",
      name: "Nocturne",
      date: "February 2024",
      icon: undefined,
      flavour: Flavour.DEV,
      kind: Kind.GENERAL,
      tech: [
        Lang.CSHARP,
      ],
      state: State.INDETERMINATE,
      links: {
        github: "https://github.com/Sup2point0/Nocturne",
      },
      desc: `A collection of standalone C# projects made for fun, including a Mandelbrot set renderer and quaternion calculator`,
    },
    {
      name: "suptools",
      date: 2022,
      flavour: Flavour.DEV,
      kind: Kind.FRAMEWORK,
      tech: [Lang.PYTHON],
      state: State.INDETERMINATE,
      links: {
        github: "https://github.com/Sup2point0/suptools",
      },
      desc: `Utilities for general use throughout Python projects`,
    },
  ],
  "Archives": [
    {
      name: "Avidity (Svelte)",
      icon: undefined,
      date: [2024, 2025],
      flavour: Flavour.DEV,
      kind: [Kind.APPLICATION, Kind.WEBSITE],
      tech: [
        Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS
      ],
      state: State.ARCHIVED,
      links: {
        github: "https://github.com/Sup2point0/avidity-web",
        site: "https://sup2point0.github.io/avidity",
      },
      desc: `Web-based prototype of Avidity, now re-developing in Unity.`,
    },
    {
      name: "REAX",
      date: 2024,
      flavour: [Flavour.DEV, Flavour.ACADEMIC],
      kind: Kind.APPLICATION,
      tech: [
        Tool.UNITY, Lang.CSHARP, Lang.JSON,
      ],
      state: State.ARCHIVED,
      links: {
        github: "https://github.com/Sup2point0/REAX",
      },
      desc: `A probabilistic particle simulator for modelling chemical reactions`,
    },
    {
      shard: "vapour",
      name: "Vapour",
      flavour: Flavour.DEV,
      kind: Kind.PROGRAM,
      tech: [
        Lang.CSHARP, Tool.OPENGL,
      ],
      state: State.ARCHIVED,
      links: {
        github: "https://github.com/Sup2point0/vapour",
      },
      desc: `Rendering images with random walks`,
    },
    {
      name: "Quarkdown",
      date: 2024,
      flavour: Flavour.DEV,
      kind: Kind.FRAMEWORK,
      tech: [
        Lang.PYTHON, Lang.HTML,
      ],
      state: State.ARCHIVED,
      desc: `An automated content deployment framework for exporting Markdown files in repositories to GitHub Pages. The predecessor to ${i("Squarkdown")}.`,
    },
    {
      name: "Ignis",
      love: 0,
      date: 2024,
      icon: "ai.jpg",
      flavour: Flavour.DEV,
      kind: [Kind.GENERAL, Kind.PROGRAM],
      tech: [
        Lang.PYTHON, Lang.SQL, Tool.KERAS, Tool.NEXTCORD
      ],
      state: State.ARCHIVED,
      links: {
        github: "https://github.com/Sup2point0/ignis",
      },
      desc: `A series of projects relating to <em>Yu-Gi-Oh</em>`,  // TODO
    },
    {
      name: "PENGUIN",
      love: 3,
      date: [2021, 2022],
      icon: "penguin.png",
      flavour: [Flavour.DEV, Flavour.PERSONAL],
      kind: [Kind.PROGRAM, Kind.APPLICATION],
      tech: [
        Lang.PYTHON, Tool.NEXTCORD,
      ],
      state: State.ARCHIVED,
      links: {
        github: "https://github.com/Sup2point0/PENGUIN",
      },
      desc: `Playful & Energetic New General Utility & Information Network Bot, the masbot ADE of Antarctica.`,
    },
    {
      name: "The Monkeyopolis Times",
      love: 3,
      date: [2021, 2022],
      icon: "monkeyopolis-times.png",
      flavour: Flavour.PERSONAL,
      kind: Kind.GRAPHIC,
      tech: [
        "Google Slides",
      ],
      state: State.ARCHIVED,
      desc: `A fan-made Bloons TD 6 newspaper`,
    },
  ],
};

export const projects_list: ProjectData[] = (
  () => {
    for (let [i, projects] of Object.values(projects_data).entries()) {
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
