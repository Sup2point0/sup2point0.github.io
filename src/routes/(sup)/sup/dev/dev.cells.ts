import { Lang } from "./dev.langs";
import { Tech } from "./dev.techs";


const GAP = 4;


export const lattice =
{
  core: {
    x: 0, y: 0,
    cells: [
      Tech.GIT, Tech.VSCODE, Tech.NUSHELL,
      Lang.MARKDOWN,
    ]
  },
  langs: {
    x: 0, y: GAP,
    cells: [Lang.RUST, Lang.PYTHON, Lang.RUBY, Lang.HASKELL,]
  },
  neo_langs: {
    x: GAP, y: GAP,
    cells: [Lang.KOTLIN,]
  },
  tech: {
    x: 0, y: -GAP,
    cells: [Tech.CODESPACES],
  },
  util: {
    x: GAP, y: -GAP,
    cells: [Lang.JSON, Lang.LATEX, Lang.SQLITE]
  },
  game: {
    x: -GAP, y: 0,
    cells: [
      Tech.UNITY,
      Lang.CSHARP,
    ]
  },
  web: {
    x: GAP, y: 0,
    cells: [Lang.SVELTE, Lang.JAVASCRIPT, Lang.TYPESCRIPT, Lang.CSS, Lang.SCSS, Lang.HTML,]
  },
  apps: {
    x: -GAP, y: -GAP,
    cells: [Tech.DESMOS, Tech.POWERPOINT,]
  },
}
