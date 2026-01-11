import { shardify } from "#scripts/utils";
import type { TechData } from "#scripts/types/dev";


type TechsData = Record<string, TechData>;


export const Tech: TechsData = prep(
{
  CODESPACES: {
    name:  "Codespaces",
    icon:  "codespaces.png",
  },
  DESMOS: {
    name:  "Desmos",
    icon:  "desmos.png",
      _style: "round",
  },
  GIT: {
    name:  "git",
    icon:  "git.svg",
  },
  GITHUB: {
    name: "GitHub",
    icon: "github.svg",
  },
  NEXTCORD: {
    name:  "Nextcord",
    icon:  undefined,
  },
  NUSHELL: {
    name:  "NuShell",
    icon:  "nushell.png",
  },
  OPENGL: {
    name:  "OpenGL",
    icon:  undefined,
  },
  POWERPOINT: {
    name:  "PowerPoint",
    icon:  "powerpoint.svg",
  },
  UNITY: {
    name:  "Unity",
    icon:  "unity.jpg",
  },
  VSCODE: {
    name:  "VSCode",
    icon:  "vscode.svg",
  },
});

function prep(data: TechsData): TechsData
{
  for (let [shard, tech] of Object.entries(data)) {
    tech.shard = shardify(shard);
  }

  return data;
}
