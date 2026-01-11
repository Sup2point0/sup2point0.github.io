import { shardify, a, i } from "#scripts/utils";
import { Fluency, type LangData } from "#scripts/types/dev";


type LangsData = Record<string, LangData>;


export const Lang: LangsData = prep(
{
  CSHARP: {
    name:     "C#",
    date:     "fall 2023",
    love:     1,
    fluency:  Fluency.TIER_2,
    icon:     "csharp.svg",
    related: ["UNITY"],
  },
  CSS: {
    name:     "CSS",
    date:     "winter 2023",
    love:     3,
    fluency:  Fluency.TIER_3,
    icon:     "css.svg",
  },
  DART: {
    name:     "Dart",
    date:     "mid 2025",
    love:     null,
    fluench:  Fluency.TIER_1,
    icon:     "dart.svg",
    desc:
      `Cool little language, just didn’t have any reasons to continue learning it.`,
    lore:
      `Picked this up for Flutter, but then didn’t really feel like building a desktop application with Material UI. The <code>..</code> cascade operator was REALLY cool tho, absolutely loved that.`,
  },
  ELIXIR: {
    name:     "Elixir",
    date:     "2024",
    love:     null,
    fluency:  Fluency.LEARN,
    icon:     "elixir.png",
    desc:
      `idk, just sounds like a cool language to learn some day`,
  },
  HASKELL: {
    name:     "Haskell",
    date:     "fall 2025",
    love:     1,
    fluency:  Fluency.TIER_2,
    icon:     "haskell.svg",
  },
  HTML: {
    name:     "HTML",
    date:     "winter 2023",
    love:     null,
    fluency:  Fluency.TIER_3,
    icon:     "html.svg",
  },
  JAVASCRIPT: {
    name:     "JavaScript",
    date:     "winter 2023",
    love:     null,
    fluency:  Fluency.TIER_3,
    icon:     "javascript.png",
      _style: "round",
    related:  ["TYPESCRIPT", "SVELTE", "HTML", "CSS"],
    desc:
      `I was told JavaScript is a cursed language, and I said I wouldn’t learn it. Eh, people change.`,
  },
  JSON: {
    name:     "JSON",
    date:     2021,
    love:     1,
    fluency:  Fluency.TIER_3,
    icon:     "json.svg",
  },
  JULIA: {
    name:     "Julia",
    date:     2025,
    love:     null,
    fluency:  Fluency.LEARN,
    icon:     "julia.png",
  },
  KATEX: {
    name:     "KaTeX",
    date:     2024,
    love:     2,
    fluency:  Fluency.TIER_3,
    icon:     "katex.png",
      _style: "round",
  },
  KOTLIN: {
    name:     "Kotlin",
    date:     "fall 2025",
    love:     null,
    fluency:  Fluency.TIER_1,
    icon:     "kotlin.png",
  },
  LATEX: {
    name:     "LaTeX",
    date:     2022,
    love:     null,
    fluency:  Fluency.TIER_2,
    icon:     "latex.svg",
    related:  ["MARKDOWN", "REGEX"],
    desc:
      `I’d rather Desmos it icl.`,
  },
  MARKDOWN: {
    name:     "Markdown",
    date:     2021,
    love:     3,
    fluency:  Fluency.TIER_4,
    icon:     "markdown.png",
    related:  ["HTML", "LATEX"],
    details: ["GitHub-Flavoured Markdown"],
    desc: [
      `I love Markdown. So much.`,
      `It’s such a quick, efficient and elegant markup language. I pretty much use it for all my writing or note-taking now.`,
    ],
  },
  PYTHON: {
    name:     "Python",
    date:     2018,
    versions: ["3.5", "3.14"],
    love:     3,
    fluency:  Fluency.TIER_3,
    icon:     "python.svg",
    related:  ["RUBY"],
    desc:
      `Home, sweet home.`
  },
  REGEX: {
    name:   "RegEx",
    date:     2022,
    love:     2,
    fluency:  Fluency.TIER_2,
    icon:     "regex.png",
    related:  ["LATEX"],
    desc: [
      `Arcane wizardry at its finest.`,
      `RegEx is pretty damn awesome if you just learn its basics. It comes in super handy when doing large-scale find-and-replace-s, like when fixing formatting in a file.`,
    ],
    lore:
      `I can’t remember why I learned RegEx, or even how I heard of it, but it has come in clutch time and time again.`,
    has_projects: false,
  },
  RUBY: {
    name:     "Ruby",
    date:     "summer 2023",
    love:     2,
    fluency:  Fluency.TIER_2,
    icon:     "ruby.svg",
    related:  ["PYTHON"],
  },
  RUST: {
    name:     "Rust",
    date:     "fall 2025",
    love:     2,
    fluency:  Fluency.TIER_2,
    icon:     "rust.svg",
  },
  SCSS: {
    name:     "SCSS",
    date:     "spring 2024",
    love:     3,
    fluency:  Fluency.TIER_3,
    icon:     "scss.png",
    related:  ["SVELTE", "TYPESCRIPT", "CSS"],
    desc:
      `After upgrading to SCSS from CSS, I pretty much can’t imagine going back. Developing with SCSS is such a joy.`,
    lore:
      `I was actually considering LESS since it sounded cooler than SASS, but after taking a look at SCSS (and discovering the alternate ${i("SCSS")} name, which is much more awesome), I decided to stick with it and I haven’t looked back since.`,
  },
  SQLITE: {
    name:     "SQLite",
    date:     2024,
    love:     null,
    fluency:  Fluency.TIER_1,
    icon:     "sqlite.svg",
  },
  SUPCODE: {
    name:     "supcode",
    date:     2021,
    love:     null,
    icon:     undefined,
  },
  SVELTE: {
    name:     "Svelte/Kit",
    date:     "spring 2024",
    versions: ["Svelte 4", "Svelte 5"],
    love:     3,
    fluency:  Fluency.TIER_3,
    icon:     "svelte.svg",
    related:  ["TYPESCRIPT", "JAVASCRIPT", "SCSS", "CSS"],
    details:  "MDsveX plugin for Markdown",
    lore:
      `I never really intended to fall into web dev. I sorta picked it up on a whim just to see what all the fuss over JavaScript frameworks was. I gave the Svelte tutorial a try since a friend of mine had learnt it and ${a("Fireship<sup>↗</sup>")} kept praising it.`,
  },
  SWIFT: {
    name:     "Swift",
    date:     2023,
    love:     null,
    fluency:  Fluency.LEARN,
    icon:     "swift.png",
      _style: "round",
  },
  TYPESCRIPT: {
    name:     "TypeScript",
    date:     "spring 2024",
    love:     2,
    fluency:  Fluency.TIER_3,
    icon:     "typescript.svg",
      _style: "round",
    related:  ["JAVASCRIPT", "SVELTE", "SCSS"],
    desc: [
      `TypeScript is a welcome layer above JavaScript.`,
      `Personally, I find it extremely uncomfortable to work with a codebase that has no type hinting – ofc, you can use JSDoc with plain JavaScript, but this is nowhere near as convenient and efficient as in Python.`,
      `The somewhat strictly enforced static typing can be a little annoying at times, but it does keep my code rigorous and much more bug-free, which I can’t complain about.`,
    ],
    lore:
      `The original reason I wanted to pick up TypeScript is because I read that VSCode extensions are written in it, and I was considering developing a supcode syntax highlighting extension.`,
  },
});

function prep(data: LangsData): LangsData
{
  for (let [shard, lang] of Object.entries(data)) {
    lang.shard = shardify(shard);
  }

  return data;
}
