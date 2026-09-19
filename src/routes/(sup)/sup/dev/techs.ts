import { shardify } from "#scripts/utils";
import { Fluency, type TechData } from "#scripts/types/dev";


type TechsData = Record<string, TechData>;


export const Tech: TechsData = prep(
{
	ACTIONS: {
		name:     "GitHub Actions",
		date:     2023,
		love:     1,
		fluency:  Fluency.TIER_2,
		icon:     "github-actions.png",
		is_shown: false,
	},
	CODESPACES: {
		name:     "Codespaces",
		date:     2023,
		love:     null,
		fluency:  Fluency.TIER_2,
		icon:     "codespaces.png",
		is_shown: false,
	},
	DESMOS: {
		name:     "Desmos",
		date:     2022,
		love:     3,
		fluency:  Fluency.TIER_4,
		icon:     "desmos.png",
			_style: "round",
	},
	GIT: {
		name:     "git",
		date:     2021,
		love:     2,
		fluency:  Fluency.TIER_3,
		icon:     "git.svg",
		is_shown: false,
	},
	GITHUB: {
		name:     "GitHub",
		date:     2021,
		love:     3,
		fluency:  Fluency.TIER_3,
		icon:     "github.svg",
		describe: `pure pleasure`,
		is_shown: false,
	},
	NEXTCORD: {
		name:     "Nextcord",
		date:     2021,
		love:     1,
		fluency:  Fluency.TIER_3,
		icon:     undefined,
	},
	NUSHELL: {
		name:     "NuShell",
		date:     "late 2025",
		love:     2,
		fluency:  Fluency.TIER_2,
		icon:     "nushell.png",
		is_shown: false,
	},
	OPENGL: {
		name:     "OpenGL",
		icon:     undefined,
	},
	POWERPOINT: {
		name:     "Microsoft PowerPoint",
		date:     "forever",
		love:     3,
		fluency:  Fluency.TIER_4,
		icon:     "powerpoint.svg",
		is_shown: false,
	},
	UNITY: {
		name:     "Unity",
		date:     2024,
		love:     1,
		fluency:  Fluency.TIER_2,
		icon:     "unity.jpg",
		describe: `relentlessly confusing`,
	},
	VSCODE: {
		name:     "VSCode",
		date:     2021,
		love:     3,
		fluency:  Fluency.TIER_3,
		icon:     "vscode.svg",
		describe: `delightfully freeing and extensible`,
		is_shown: false,
	},
});

function prep(data: TechsData): TechsData
{
	for (let [shard, tech] of Object.entries(data)) {
		tech.shard = shardify(shard);
	}

	return data;
}
