import { shardify } from "#scripts/utils";
import type { TechData } from "#scripts/types/dev";


type TechsData = Record<string, TechData>;


export const Tech: TechsData = prep(
{
  ACTIONS: {
    name:  "GitHub Actions",
    icon:  "github-actions.png",
    has_projects: false,
  },
  CODESPACES: {
    name:  "Codespaces",
    icon:  "codespaces.png",
    has_projects: false,
  },
  DESMOS: {
    name:  "Desmos",
    icon:  "desmos.png",
      _style: "round",
  },
  GIT: {
    name:  "git",
    icon:  "git.svg",
    has_projects: false,
  },
  GITHUB: {
    name: "GitHub",
    icon: "github.svg",
    has_projects: false,
  },
  NEXTCORD: {
    name:  "Nextcord",
    icon:  undefined,
  },
  NUSHELL: {
    name:  "NuShell",
    icon:  "nushell.png",
    has_projects: false,
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
    has_projects: false,
  },
});

function prep(data: TechsData): TechsData
{
  for (let [shard, tech] of Object.entries(data)) {
    tech.shard = shardify(shard);
  }

  return data;
}
