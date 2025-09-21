import type { DatePoint } from "#scripts/types";
import type { Searchable } from "#scripts/search-filter.svelte.ts";


type Genre = "rhythm" | "tower defence" | "racing" | "shmup" | "runner" | "puzzle" | "cards" | "sandbox" | "io" | "classics";
type Platform = "mobile" | "desktop" | "arcade" | "console" | "VR";

enum State {
  ACTIVE = "active",
  OPPORTUNISTIC = "opportunistic",
  INTERMITTENT = "intermittent",
  INFREQUENT = "infrequent",
  RETIRED = "retired",
}

export interface GameData extends Searchable
{
  shard: string;
  name: string;
  love: 3 | 2 | 1;
  date: string | DatePoint | (string | DatePoint)[];

  icon?: string;

  genres: Genre[];
  platforms: Platform[];
  
  state: State;
  desc?: string | string[];

  _score_?: number;
}


export const games: GameData[] = prep([
  {
    shard: "minecraft",
    name: "Minecraft",
    love: 2,
    genres: ["sandbox", "classics"],
    platforms: ["mobile", "console", "desktop"],
    state: State.INFREQUENT,
    date: ["childhood", "present"],
  },
  
  {
    shard: "phigros",
    name: "Phigros",
    love: 3,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: State.ACTIVE,
    date: ["summer 2023", "present"],
  }, {
    shard: "chunithm",
    name: "CHUNITHM",
    love: 3,
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: State.OPPORTUNISTIC,
    date: ["summer 2024", "present"],
  }, {
    shard: "paradigm-reboot",
    name: "Paradigm: Reboot",
    love: 3,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: State.ACTIVE,
    date: ["summer 2025", "present"],
  }, {
    shard: "arcaea",
    name: "Arcaea",
    love: 3,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: State.ACTIVE,
    date: ["summer 2024", "present"],
  }, {
    shard: "milthm",
    name: "Milthm",
    love: 2,
    genres: ["rhythm"],
    platforms: ["desktop"],
    state: State.INTERMITTENT,
    date: ["fall 2024", "present"],
  }, {
    shard: "dance-cube-evo",
    name: "DanceCube EVO",
    love: 2,
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: State.OPPORTUNISTIC,
    date: ["summer 2025", "present"],
  }, {
    shard: "vivid-stasis",
    name: "vivid/stasis",
    love: 2,
    genres: ["rhythm"],
    platforms: ["desktop"],
    state: State.INTERMITTENT,
    date: ["fall 2024", "present"],
  }, {
    shard: "deemo-ii",
    name: "DEEMO II",
    love: 1,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: State.INFREQUENT,
    date: ["summer 2024", "present"],
  }, {
    shard: "rhythm-plus",
    name: "Rhythm+",
    love: 1,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["fall 2023", "summer 2023"],
  }, {
    shard: "maimai",
    name: "maimai",
    love: 1,
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: State.INFREQUENT,
    date: ["summer 2023", "present"],
  }, {
    shard: "beat-saber",
    name: "Beat Saber",
    love: 2,
    genres: ["rhythm"],
    platforms: ["VR"],
    state: State.OPPORTUNISTIC,
    date: ["2024", "present"],
  }, {
    shard: "osu",
    name: "osu!",
    love: 1,
    genres: ["rhythm", "classics"],
    platforms: ["desktop"],
    state: State.INFREQUENT,
    date: ["summer 2023", "present"],
  },

  {
    shard: "bloons-td6",
    name: "Bloons TD 6",
    love: 3,
    genres: ["tower defence", "classics"],
    platforms: ["desktop"],
    state: State.OPPORTUNISTIC,
    date: ["2020", "present"],
  }, {
    shard: "bloons-pop",
    name: "Bloons Pop!",
    love: 2,
    genres: ["puzzle"],
    platforms: ["mobile"],
    state: State.INFREQUENT,
    date: ["2021", "present"],
  }, {
    shard: "bloons-super-monkey-2",
    name: "Bloons Super Monkey 2",
    love: 3,
    genres: ["shmup"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["childhood", "2021"],
  }, {
    shard: "bloons-td5",
    name: "Bloons TD 5",
    love: 3,
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["childhood"],
  },

  {
    shard: "master-duel",
    name: "Yu-Gi-Oh! Master Duel",
    love: 3,
    genres: ["cards"],
    platforms: ["mobile"],
    state: State.ACTIVE,
    date: ["2023", "present"],
  },

  {
    shard: "asphalt-9",
    name: "Asphalt 9: Legends",
    love: 3,
    genres: ["racing"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["2019", "2021"],
  }, {
    shard: "asphalt-8",
    name: "Asphalt 8: Airborne",
    love: 3,
    genres: ["racing", "classics"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["2017", "2019"],
  },

  {
    shard: "spider-man-unlimited",
    name: "Spider-Man: Unlimited",
    love: 3,
    genres: ["runner"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["2016", "2019"],
  }, {
    shard: "minion-rush",
    name: "Minion Rush",
    love: 2,
    genres: ["runner", "classics"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["childhood"],
  }, {
    shard: "temple-run-2",
    name: "Temple Run 2",
    love: 1,
    genres: ["runner"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["childhood"],
  }, {
    shard: "temple-run",
    name: "Temple Run",
    love: 2,
    genres: ["runner", "classics"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["childhood"],
  },

  {
    shard: "air-attack-2",
    name: "AirAttack 2",
    love: 2,
    genres: ["shmup"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["summer 2020"],
  }, {
    shard: "air-attack",
    name: "AirAttack",
    love: 3,
    genres: ["shmup"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["childhood"],
  },

  {
    shard: "pvz-2",
    name: "Plants vs. Zombies 2",
    love: 3,
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["childhood", "2020"],
  }, {
    shard: "pvz",
    name: "Plants vs. Zombies",
    love: 3,
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: State.RETIRED,
    date: ["childhood"],
  }, {
    shard: "bao-wei-luo-bo",
    name: "保卫萝卜",
    love: 3,
    genres: ["tower defence"],
    platforms: ["mobile"],
    state: State.OPPORTUNISTIC,
    date: ["childhood", "present"],
  },

  {
    shard: "little-big-snake-io",
    name: "littlebigsnake.io",
    love: 3,
    genres: ["io"],
    platforms: ["desktop"],
    state: State.INFREQUENT,
    date: ["childhood", "present"],
  }, {
    shard: "diep-io",
    name: "diep.io",
    love: 3,
    genres: ["shmup", "io"],
    platforms: ["desktop"],
    state: State.RETIRED,
    date: ["childhood"],
  }, {
    shard: "arras-io",
    name: "arras.io",
    love: 2,
    genres: ["shmup", "io"],
    platforms: ["desktop"],
    state: State.INFREQUENT,
    date: ["childhood", "present"],
  }, {
    shard: "zombs-io",
    name: "zombs.io",
    love: 3,
    genres: ["tower defence", "io"],
    platforms: ["desktop"],
    state: State.RETIRED,
    date: ["childhood"],
  }, {
    shard: "fightz-io",
    name: "fightz.io",
    love: 1,
    genres: ["io"],
    platforms: ["desktop"],
    state: State.RETIRED,
    date: ["childhood"],
  }
]);


function prep(games: GameData[]): GameData[]
{
  for (let [i, game] of games.entries()) {
    game._score_ = 0;
    if (game.shard === undefined) {
      game.shard = i.toString();
    }
  }

  return games;
}
