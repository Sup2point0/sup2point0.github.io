import { Fluency, type LangData } from "#scripts/types/dev";


export const Lang: Record<string, LangData> =
{
  CSHARP: {
    name:    "C#",
    date:    "fall 2023",
    love:    2,
    fluency: Fluency.TIER_2,
    icon:    "csharp.svg",
  },
  CSS: {
    name:    "CSS",
    fluency: Fluency.TIER_3,
    icon:    "css.svg",
  },
  HASKELL: {
    name:    "Haskell",
    fluency: Fluency.TIER_1,
    icon:    "haskell.svg",
  },
  HTML: {
    name:    "HTML",
    date:    ["winter 2023", "present"],
    love:    1,
    fluency: Fluency.TIER_3,
    icon:    "html.svg",
  },
  JAVASCRIPT: {
    name:    "JavaScript",
    date:    "early 2024",
    love:    1,
    fluency: Fluency.TIER_3,
    icon:    "javascript.png",
      _style: "round",
  },
  JSON: {
    name:    "JSON",
    fluency: Fluency.TIER_3,
    icon:    "json.svg",
  },
  KOTLIN: {
    name:    "Kotlin",
    fluency: Fluency.TIER_1,
    icon:    "kotlin.png",
  },
  LATEX: {
    name:    "LaTeX",
    date:    2022,
    love:    1,
    fluency: Fluency.TIER_2,
    icon:    "latex.svg",
  },
  MARKDOWN: {
    name:    "Markdown",
    date:    2021,
    love:    3,
    fluency: Fluency.TIER_4,
    icon:    "markdown.png",
    related: ["HTML", "LATEX"],
    details: ["GitHub-Flavoured Markdown"],
    desc:
      `I love Markdown. So much. <br> It’s such a quick, efficient and elegant markup language. I pretty much use it for all my writing or note-taking now.`,
  },
  PYTHON: {
    name:    "Python",
    date:    2020,
    love:    3,
    fluency: Fluency.TIER_3,
    icon:    "python.svg",
    related: ["RUBY"],
    details: ["Python 3.5 – 3.13"],
    desc:
      `Home, sweet home.`
  },
  REGEX: {
    name:   "RegEx",
    date:    2022,
    love:    2,
    fluency: Fluency.TIER_2,
  },
  RUBY: {
    name:    "Ruby",
    date:    "summer 2023",
    love:    3,
    fluency: Fluency.TIER_1,
    icon:    "ruby.svg",
    related: ["PYTHON"],
  },
  RUST: {
    name:    "Rust",
    fluency: Fluency.TIER_2,
    icon:    "rust.svg",
  },
  SCSS: {
    name:    "SCSS",
    date:    "spring 2024",
    love:    3,
    fluency: Fluency.TIER_3,
    icon:    "scss.png",
  },
  SQLITE: {
    name:    "SQLite",
    fluency: Fluency.TIER_1,
    icon:    "sqlite.svg",
  },
  SVELTE: {
    name:    "Svelte",
    date:    "spring 2024",
    love:    3,
    fluency: Fluency.TIER_3,
    icon:    "svelte.svg",
  },
  TYPESCRIPT: {
    name:    "TypeScript",
    date:    "spring 2024",
    love:    2,
    fluency: Fluency.TIER_3,
    icon:    "typescript.svg",
      _style: "round",
  },
}
