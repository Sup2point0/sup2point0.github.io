import { Lang } from "./dev.langs";
import { Tech } from "./dev.techs";

import type { DevEntity } from "#scripts/types/dev";


const GAP = 5;


interface DomainData {
  x: number;
  y: number;
  col?: string;
  cells: DevEntity[];
}


export const lattice: Record<string, DomainData> = prep(
{
  core: {
    x: 0, y: 0, col: "rgb(255 255 255 / 10%)",
    cells: [
      Tech.GITHUB, Tech.GIT, Tech.VSCODE, Tech.NUSHELL,
      Lang.MARKDOWN,
    ]
  },
  langs: {
    x: 0, y: GAP, col: "rgb(64, 240, 255 / 20%)",
    cells: [Lang.RUST, Lang.PYTHON, Lang.RUBY, Lang.HASKELL,]
  },
  neo_langs: {
    x: -GAP, y: GAP, col: "rgb(199 199 255 / 25%)",
    cells: [Lang.SWIFT, Lang.DART, Lang.KOTLIN,]
  },
  want_langs: {
    x: GAP, y: GAP, col: "rgb(199 199 255 / 25%)",
    cells: [Lang.JULIA, Lang.ELIXIR]
  },
  game: {
    x: -GAP, y: 0, col: "rgb(255 0 144 / 10%)",
    cells: [
      Tech.UNITY,
      Lang.CSHARP,
    ]
  },
  web: {
    x: GAP, y: 0, col: "rgb(255 199 32 / 20%)",
    cells: [Lang.SVELTE, Lang.JAVASCRIPT, Lang.TYPESCRIPT, Lang.CSS, Lang.SCSS, Lang.HTML,]
  },
  apps: {
    x: -GAP, y: -GAP, col: "rgb(64 255 144 / 20%)",
    cells: [Tech.DESMOS, Tech.POWERPOINT,]
  },
  misc: {
    x: 0, y: -GAP,
    cells: [Tech.CODESPACES, Tech.ACTIONS,]
  },
  util: {
    x: GAP, y: -GAP,
    cells: [Lang.JSON, Lang.KATEX, Lang.LATEX, Lang.REGEX, Lang.SQLITE]
  },
});

function prep(data: Record<string, DomainData>): Record<string, DomainData>
{
  for (let domain of Object.values(data)) {
    for (let cell of domain.cells) {
      cell.colour = domain.col;
    }
  }

  return data;
}
