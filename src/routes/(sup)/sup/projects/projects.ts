import { prep_groups, type Searchable } from "#scripts/search";
import { a, i } from "#scripts/utils";
import { Lang } from "#sup/dev/dev.langs";
import { Tech } from "#sup/dev/dev.techs";
import { Flavour, Kind, State, type DevEntity } from "#scripts/types/dev";
import type { shard, Groups, Datepoint } from "#scripts/types";


export interface ProjectData extends Searchable
{
	name: string;
	love?: 3 | 2 | 1 | 0;  // FIXME null?
	date?: Datepoint | Datepoint[];

	icon?: string;
		_round?: boolean;

	flavour: Flavour | Flavour[];
	kind: Kind | Kind[];
	tech: shard[];
	tech_data: DevEntity[];
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
			name:  "",
			love:  0,
			date:  undefined,
			icon:  undefined,
			flavour: Flavour.DEV,
			kind: Kind.GENERAL,
			tech_data: [
				Lang.SVELTE,
			],
			state: State.DEVELOPING,
			links: {
				github: "https://github.com/Sup2point0/...",
			},
			desc:
				``,
		},
];


const data: Groups<ProjectData> = prep_groups(
{
	"Favourites": [
		{
			name:  "Assort",
			love:  3,
			date:  [2021, "present"],
			icon:  "assort.svg",
			flavour: [Flavour.PERSONAL, Flavour.DEV],
			kind:    [Kind.WIKI, Kind.WEBSITE],
			tech_data: [
				Lang.MARKDOWN, Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS, Lang.HTML,
			],
			state: State.ETERNAL,
			links: {
				github: "https://github.com/Sup2point0/Assort",
				site: "https://sup2point0.github.io/Assort",
			},
			desc:
				`An assortment of all my creations. My personal wiki!`,
		},
		{
			name:  "Integrity",
			love:  3,
			date:  [2024, "present"],
			icon:  "integrity.svg",
			flavour: [Flavour.DEV, Flavour.ACADEMIC],
			kind:    Kind.WEBSITE,
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS,
				Lang.KATEX, Lang.JSON, Lang.MARKDOWN, Tech.DESMOS,
				Lang.RUBY,
			],
			state: [State.MAINTAINING],
			links: {
				github: "https://github.com/Sup2point0/integrity",
				site: "https://sup2point0.github.io/integrity",
			},
			desc:
				`All my hand-crafted maths questions, game development in Desmos, and more!`,
		},
		{
			shard: "weighted-list",
			name:  "weighted-list",
			love:  1,
			date:  ["May 2022", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind:    Kind.LIBRARY,
			tech_data: [
				Lang.PYTHON, Lang.CSHARP, Lang.TYPESCRIPT, Lang.HASKELL, Lang.RUST, Tech.DESMOS, // LANG.RUBY
			],
			state: [State.DEVELOPING, State.MAINTAINING],
			links: {
				github: "https://github.com/Sup2point0/weighted-list",
			},
			desc:
				`Data structures for weighted randomisation, implemented in every language as I know. I now use it as an exercise when learning new ones!`,
		},
		{
			name:  "Stranger Quarkdown",
			love:  null,
			date:  ["July 2024", "present"],
			icon:  "squarkdown.png",
			flavour: Flavour.DEV,
			kind:    Kind.FRAMEWORK,
			tech_data: [
				Lang.RUBY, Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS,
			],
			state: [State.DEVELOPING, State.MAINTAINING],
			links: {
				github: "https://github.com/Sup2point0/stranger-quarkdown",
				site: "https://sup2point0.github.io/stranger-quarkdown/docs"
			},
			tags: ["squark", "squarkdown"],
			desc:
				`Preprocessing automation for SvelteKit projects`,
		},
		{
			shard: "lattix",
			name:  "lattix",
			love:  2,
			date:  ["April 2025", "present"],
			icon:  "lattix.svg",
			flavour: Flavour.DEV,
			kind:    [Kind.WEBSITE, Kind.APPLICATION],
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT,
			],
			state: State.DEVELOPING,
			links: {
				github: "https://github.com/Sup2point0/lattix",
				site: "https://sup2point0.github.io/lattix",
			},
			desc:
				`More beautiful puzzle solving`,
		},
		{
			name:  "supcode",
			love:  3,
			date:  [2021, "present"],
			flavour: Flavour.DEV,
			kind:    Kind.LANGUAGE,
			tech_data: [
				Lang.SUPCODE
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/supcode",
			},
			desc:
				`A syntactically delicious conceptual programming language!`,
		},
	],
	"Websites": [
		{
			shard: "awxynth",
			name:  "Awxynth",
			love:  2,
			date:  ["summer 2026", "present"],
			flavour: Flavour.DEV,
			kind:    [Kind.WEBSITE, Kind.APPLICATION],
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS, Lang.HTML,
				Tech.DESMOS,
			],
			state: State.DEVELOPING,
			links: {
				github: "https://github.com/Sup2point0/awxynth",
				site: "https://sup2point0.github.io/axynth",
			},
			desc:
				`The mathematical synthesiser in your browser. If you can graph it, you can hear it!`,
		},
		{
			shard: "lucidity",
			name:  "Lucidity",
			love:  0,
			date:  ["September 2025", "present"],
			flavour: Flavour.DEV,
			kind:    Kind.WEBSITE,
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS,
			],
			state: State.MAINTAINING,
			links: {
				github: "https://github.com/Sup2point0/lucidity",
				site: "https://sup2point0.github.io/lucidity",
			},
			desc:
				`A quick and simple tool for applying blur and other CSS effects to images straight from the clipboard`,
		},
		{
			shard: "skyscraping",
			name:  "Skyscraping",
			love:  1,
			date:  ["May 2025", "present"],
			icon:  "skyscraping.svg",
			flavour: [Flavour.DEV, Flavour.PERSONAL],
			kind:    [Kind.WEBSITE, Kind.WIKI],
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS, Lang.KATEX, Lang.MARKDOWN,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/skyscraping",
				site: "https://sup2point0.github.io/skyscraping"
			},
			desc:
				`An adventurer’s archive of techniques and tricks for solving Skyscrapers puzzles`,
		},
		{
			shard: "squippy",
			name:  "Squippy",
			love:  null,
			date:  ["March 2026", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind: [Kind.APPLICATION, Kind.WEBSITE],
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/squippy",
				site: "https://sup2point0.github.io/squippy"
			},
			desc:
				`A clean, no-nonsense SRT subtitles editor`,
		},
		{
			name:  "pyco:bytes",
			love:  null,
			date:  [2024, 2025],
			icon:  "pycobytes.png",
			flavour: Flavour.DEV,
			kind:    [Kind.WEBSITE, Kind.WRITING],
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS, Lang.HTML, Lang.PYTHON, Lang.MARKDOWN
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/pycobytes",
				site: "https://sup2point0.github.io/pycobytes",
			},
			desc:
				`A weekly newsletter on Python tips and tricks`,
		},
	],
	"Current": [
		{
			shard: "desmost",
			name:  "Desmost",
			love:  null,
			date:  ["August 2026", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind: [Kind.LANGUAGE],
			tech_data: [
				Lang.TYPESCRIPT, Lang.SVELTE, Tech.DESMOS, Lang.RUBY,
			],
			state: State.DEVELOPING,
			links: {
				github: "https://github.com/Sup2point0/desmost",
			},
			desc:
				`A tiny DSL for compiling LaTeX to Desmos`,
		},
		{
			shard: "hexadris",
			name:  "Hexadris",
			love:  null,
			date:  ["March 2026", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind: [Kind.APPLICATION, Kind.WEBSITE],
			tech_data: [
				Lang.RUST, Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/hexadris",
			},
			desc:
				`Connect 6 and other hexagonal games, hosted locally`,
		},
		{
			shard: "supcore",
			name:  "supcore",
			love:  2,
			date:  ["February 2026", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind: Kind.GENERAL,
			tech_data: [
				Lang.RUST,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/supcore",
			},
			desc:
				`A lexer-parser for supcode!`,
		},
		{
			shard: "hlox",
			name:  "Hlox",
			love:  0,
			date:  ["January 2026", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind: Kind.FRAMEWORK,
			tech_data: [
				Lang.HASKELL,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/hlox",
			},
			desc:
				`Haskell implementation of a tree-walk interpreter for the Lox programming language (from ${a("Crafting Intepreters", "https://craftinginterpreters.com")})`,
		},
		{
			shard: "natbitset",
			name:  "natbitset",
			love:  0,
			date:  ["January 2026", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind: Kind.LIBRARY,
			tech_data: [
				Lang.RUST,
			],
			state: State.MAINTAINING,
			links: {
				github: "https://github.com/Sup2point0/natbitset",
			},
			desc:
				`A super-lightweight bitset implementation for positive integers`,
		},
		{
			shard: "ascendant",
			name:  "ascendant",
			love:  0,
			date:  ["January 2026", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind:    Kind.PROGRAM,
			tech_data: [
				Lang.RUST,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/ascendant",
			},
			desc:
				`Pure logic-based Skyscrapers puzzle-solving algorithm`,
		},
		{
			shard: "vscode-supcode-visuals",
			name:  "supcode Visuals for VSCode",
			love:  1,
			date:  ["late 2025", "present"],
			flavour: Flavour.DEV,
			kind:    Kind.EXTENSION,
			tech_data: [
				Lang.TYPESCRIPT,
			],
			state: State.DEVELOPING,
			links: {
				github: "https://github.com/Sup2point0/vscode-supcode-visuals",
			},
			desc:
				`Visual Studio Code extension for supcode-flavoured editor customisations`,
		},
	],
	"Miscellaneous": [
		{
			name:  "Avidity (Unity)",
			love:  null,
			icon:  undefined,
			date:  ["summer 2025", "present"],
			flavour: Flavour.DEV,
			kind:    Kind.APPLICATION,
			tech_data: [
				Tech.UNITY, Lang.CSHARP,
			],
			state: State.INDETERMINATE,
			links: {
				github: "https://github.com/Sup2point0/Avidity-unity",
			},
			desc:
				`A music player for personal use!`,
		},
		{
			shard: "dbxt",
			name:  "duelingbook-extractor",
			love:  0,
			date:  ["December 2025", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind:    Kind.TOOL,
			tech_data: [
				Lang.RUST,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/duelingbook-extractor",
			},
			desc:
				`Extracting custom cards data from DuelingBook for conversions to other data formats`,
		},
		{
			shard: "fractually-awesome",
			name:  "Fractually Awesome",
			date:  ["December 2025", "present"],
			icon:  undefined,
			flavour: Flavour.DEV,
			kind:    Kind.APPLICATION,
			tech_data: [
				Lang.RUST,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/fractually-awesome",
			},
			desc:
				`Zooming in on the Mandelbrot set and other fractals`,
		},
		{
			shard: "shardify",
			name:  "shardify",
			date:  ["fall 2025", "present"],
			flavour: Flavour.DEV,
			kind:    Kind.TOOL,
			tech_data: [
				Lang.RUST,
			],
			state: State.INDETERMINATE,
			links: {
				github: "https://github.com/Sup2point0/shardify",
			},
			desc:
				`Lightweight CLI to convert arbitrary strings to normalised kebab-case identifiers`,
		},
		{
			shard: "archividian",
			name:  "Archividian",
			date:  ["fall 2025", "present"],
			flavour: Flavour.DEV,
			kind:    Kind.TOOL,
			tech_data: [
				Lang.RUST,
			],
			state: State.MAINTAINING,
			links: {
				github: "https://github.com/Sup2point0/archividian",
			},
			desc:
				`Archiving file system metadata for Git while avoiding tracking large files`,
		},
		{
			shard: "brainflop",
			name:  "brainflop",
			date:  ["fall 2025", "present"],
			flavour: Flavour.DEV,
			kind:    Kind.PROGRAM,
			tech_data: [
				Lang.HASKELL,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/brainflop",
			},
			desc:
				`An applicative brainf*** parser/evaluator`,
		},
		{
			shard: "sorting-hat",
			name:  "sorting-hat",
			date:  [2024, "present"],
			flavour: Flavour.DEV,
			kind:    Kind.PROGRAM,
			tech_data: [
				Lang.CSHARP, Lang.HASKELL, Lang.RUST,
			],
			state: State.ETERNAL,
			links: {
				github: "https://github.com/Sup2point0/sorting-hat",
			},
			desc:
				`Sorting algorithms implemented in languages I’m learning`,
		},
		{
			shard: "adrenaline",
			name:  "Adrenaline",
			date:  "summer 2025",
			icon:  undefined,
			flavour: Flavour.DEV,
			kind:    Kind.GAME,
			tech_data: [
				Tech.UNITY, Lang.CSHARP,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/Adrenaline",
			},
			desc:
				`A simple 2D polygon shooter game`,
		},
		{
			shard: "youtube-playlist-shuffler",
			name:  "YouTube Playlist Shuffler",
			date:  2025,
			flavour: Flavour.DEV,
			kind:    Kind.TOOL,
			tech_data: [Lang.PYTHON],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/youtube-playlist-shuffler",
			},
			desc:
				`A script for shuffling a YouTube playlist through the Google API`,
		},
		{
			name:  "Vividity",
			date:  "July 2024",
			love:  0,
			flavour: Flavour.DEV,
			kind:    Kind.TOOL,
			tech_data: [
				Lang.PYTHON, Lang.SCSS,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/vividity",
			},
			desc:
				`Provides colour palettes for use in other projects`,
		},
		{
			shard: "nocturne",
			name:  "Nocturne",
			date:  "February 2024",
			icon:  undefined,
			flavour: Flavour.DEV,
			kind:    Kind.GENERAL,
			tech_data: [
				Lang.CSHARP,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/Nocturne",
			},
			desc:
				`A collection of standalone C# projects made for fun, including a Mandelbrot set renderer and quaternion calculator`,
		},
	],
	"Creations": [
		{
			name:  "Algorhythm",
			love:  2,
			date:  ["summer 2023", "present"],
			flavour: [Flavour.DEV, Flavour.PERSONAL],
			kind:    Kind.GAME,
			tech_data: [
				Lang.PYTHON,
			],
			state: State.HIATUS,
			desc:
				`A keyboard-based rhythm game. Originally implemented in Python as a proof of concept, will properly develop in Unity someday!`,
		},
		{
			name:  "Antarctica",
			love:  3,
			date:  [2021, "present"],
			icon:  "antarctica.png",
			flavour: Flavour.PERSONAL,
			kind:    Kind.WIKI,
			tech_data: [
				Lang.MARKDOWN,
			],
			state: State.HIATUS,
			links: {
				github: "https://sup2point0.github.io/Antarctica",
			},
			desc:
				`A fictional reimagining of the coolest place on Earth.`,
		},
		{
			name:  "Victory",
			date:  [2020, "present"],
			flavour: Flavour.PERSONAL,
			kind:    [Kind.GAME, Kind.WORLD],
			tech_data: [
				Lang.JAVASCRIPT, Lang.CSS, Lang.HTML, Lang.MARKDOWN
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/Victory"
			},
			desc:
				`A custom card game for me and my sister to play, inspired by ${i("Yu-Gi-Oh!")}`,
		},
		{
			shard: "buccaneer-game",
			name:  "Buccaneer Game",
			love:  1,
			date:  [2022, "present"],
			icon:  "buccaneer-game.svg",
			flavour: [Flavour.PERSONAL, Flavour.DEV],
			kind:    [Kind.GAME, Kind.WEBSITE],
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT,
			],
			state: State.HIATUS,
			links: {
				github: "https://github.com/Sup2point0/buccaneer-game",
				site: "https://sup2point0.github.io/buccaneer-game",
			},
			desc:
				`Mathematical piracy and chaotic fun`,
		},
	],
	"Archives": [
		{
			shard: "hastkell",
			name:  "hASTkell",
			date:  "fall 2025",
			flavour: Flavour.DEV,
			kind:    Kind.FRAMEWORK,
			tech_data: [
				Lang.HASKELL,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/hASTkell",
			},
			desc:
				`Building abstract syntax trees for parsing and computing mathematical expressions`,
		},
		{
			name:  "Avidity (Svelte)",
			icon:  undefined,
			date:  [2024, 2025],
			flavour: Flavour.DEV,
			kind:    [Kind.APPLICATION, Kind.WEBSITE],
			tech_data: [
				Lang.SVELTE, Lang.TYPESCRIPT, Lang.SCSS
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/avidity-svelte",
				site: "https://sup2point0.github.io/avidity",
			},
			desc:
				`Web-based prototype of Avidity, now re-developing in Unity.`,
		},
		{
			name:  "REAX",
			date:  2024,
			flavour: [Flavour.DEV, Flavour.ACADEMIC],
			kind:    Kind.APPLICATION,
			tech_data: [
				Tech.UNITY, Lang.CSHARP, Lang.PYTHON, Lang.JSON,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/REAX",
			},
			desc:
				`A probabilistic particle simulator for modelling chemical reactions`,
		},
		{
			shard: "vapour",
			name:  "Vapour",
			flavour: Flavour.DEV,
			kind:    Kind.PROGRAM,
			tech_data: [
				Lang.CSHARP, Tech.OPENGL,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/vapour",
			},
			desc:
				`Rendering images with random walks`,
		},
		{
			name:  "Quarkdown",
			date:  2024,
			flavour: Flavour.DEV,
			kind:    Kind.FRAMEWORK,
			tech_data: [
				Lang.PYTHON, Lang.HTML,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/Quarkdown"
			},
			desc:
				`An automated content deployment framework for exporting Markdown files in repositories to GitHub Pages. The predecessor to ${i("Squarkdown")}.`,
		},
		{
			name:  "Ignis",
			love:  0,
			date:  2024,
			icon:  "ai.jpg",
				_style: "round",
			flavour: Flavour.DEV,
			kind:    [Kind.GENERAL, Kind.PROGRAM],
			tech_data: [
				Lang.PYTHON, Lang.SQLITE, Tech.NEXTCORD,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/ignis",
			},
			desc:
				`A series of projects relating to ${i("Yu-Gi-Oh")}`,  // TODO
		},
		{
			name:  "PENGUIN",
			love:  3,
			date:  [2021, 2022],
			icon:  "penguin.png",
			flavour: [Flavour.DEV, Flavour.PERSONAL],
			kind:    [Kind.PROGRAM, Kind.APPLICATION],
			tech_data: [
				Lang.PYTHON, Tech.NEXTCORD,
			],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/PENGUIN",
			},
			desc:
				`Playful & Energetic New General Utility & Information Network Bot, the masbot ADE of Antarctica.`,
		},
		{
			name:  "suptools",
			date:  2022,
			flavour: Flavour.DEV,
			kind:    Kind.FRAMEWORK,
			tech_data: [Lang.PYTHON],
			state: State.ARCHIVED,
			links: {
				github: "https://github.com/Sup2point0/suptools",
			},
			desc:
				`Utilities for general use throughout Python projects`,
		},
		{
			shard: "monkeyopolis-times",
			name:  "The Monkeyopolis Times",
			love:  3,
			date:  [2021, 2022],
			icon:  "monkeyopolis-times.png",
			flavour: Flavour.PERSONAL,
			kind:    Kind.GRAPHIC,
			tech_data: [
				// "Google Slides" as Tech,
			],
			state: State.ARCHIVED,
			links: {
				site: "https://www.reddit.com/user/MonkeyopolisTimesNew"
			},
			desc:
				`A fan-made Bloons TD 6 newspaper`,
		},
	],
} as Groups<Partial<ProjectData>>,
	entity => {
		entity.tech = entity.tech_data!.map(tech => tech.shard!);
	}
) as Groups<ProjectData>;

export const projects_data: Groups<ProjectData> = data;
export const projects_list: ProjectData[] = Object.values(data).flat();
