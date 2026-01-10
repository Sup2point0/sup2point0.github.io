import { projects_list, Lang as LANG } from "#routes/(sup)/sup/projects/projects";
import type { LangData } from "#scripts/types/dev";


export const Lang: Record<string, LangData> =
{
  CSHARP: {
    name:  "C#",
    icon:  "csharp.svg",
  },
  CSS: {
    name:  "CSS",
    icon:  "css.svg",
  },
  HASKELL: {
    name:  "Haskell",
    icon:  "haskell.svg",
  },
  HTML: {
    name:  "HTML",
    icon:  "html.svg",
  },
  JAVASCRIPT: {
    name:  "JavaScript",
    icon:  "javascript.png",
      _style: "round",
  },
  JSON: {
    name:  "JSON",
    icon:  "json.svg",
  },
  KOTLIN: {
    name:  "Kotlin",
    icon:  "kotlin.png",
  },
  LATEX: {
    name:  "LaTeX",
    icon:  "latex.svg",
  },
  MARKDOWN: {
    "name": "Markdown",
    "icon": "markdown.png",
  },
  PYTHON: {
    name:  "Python",
    icon:  "python.svg",
  },
  RUBY: {
    name:  "Ruby",
    icon:  "ruby.svg",
  },
  RUST: {
    name:  "Rust",
    icon:  "rust.svg",
    projects: projects_list.filter(proj => proj.tech.includes(LANG.RUST)),
  },
  SCSS: {
    name:  "SCSS",
    icon:  "scss.png",
  },
  SQLITE: {
    name:  "SQLite",
    icon:  "sqlite.svg",
  },
  SVELTE: {
    name:  "Svelte",
    icon:  "svelte.svg",
  },
  TYPESCRIPT: {
    name:  "TypeScript",
    icon:  "typescript.svg",
      _style: "round",
  },
}
