import type { Searchable } from "#scripts/search-filter.svelte.ts";
import type { DatePoint } from "#scripts/types";


type Genre = "rhythm" | "tower defence" | "racing" | "shmup" | "rogue" | "metroidvania" | "runner" | "puzzle" | "cards" | "sandbox" | "io" | "classics";
type Platform = "mobile" | "desktop" | "arcade" | "console" | "VR";

export enum PlayState {
  ACTIVE = "active",
  OPPORTUNISTIC = "opportunistic",
  INTERMITTENT = "intermittent",
  INFREQUENT = "infrequent",
  RETIRED = "retired",
  WISHLIST = "wishlist",
}

export interface GameData extends Searchable
{
  shard: string;
  name: string;
  love: 3 | 2 | 1;
  date: DatePoint | DatePoint[];

  icon?: string;

  genres: Genre[];
  platforms: Platform[];
  
  state: PlayState;
  desc?: string | string[];

  _score_?: number;
}


export const games_list: GameData[] = prep([
  {
    shard: "manifold-garden",
    name: "Manifold Garden",
    love: 3,
    date: undefined,
    icon: "manifold-garden.png",
    genres: ["sandbox?"],
    platforms: ["desktop"],
    state: PlayState.WISHLIST,
  },
  {
    shard: "hollow-knight",
    name: "Hollow Knight",
    love: 2,
    date: undefined,
    icon: "hollow-knight.webp",
    genres: ["metroidvania"],
    platforms: ["desktop"],
    state: PlayState.WISHLIST,
  },
  // {
  //   shard: "",
  //   name: "",
  //   love: ,
  //   date: undefined,
  //   icon: undefined,
  //   genres: [""],
  //   platforms: ["desktop"],
  //   state: PlayState.WISHLIST,
  // },
  
  {
    shard: "phigros",
    name: "Phigros",
    love: 3,
    date: ["summer 2023", "present"],
    icon: "phigros.webp",
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: PlayState.ACTIVE,
  }, {
    shard: "chunithm",
    name: "CHUNITHM",
    love: 3,
    date: ["summer 2024", "present"],
    icon: "chunithm.png",
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: PlayState.OPPORTUNISTIC,
  }, {
    shard: "paradigm-reboot",
    name: "Paradigm: Reboot",
    love: 3,
    date: ["summer 2025", "present"],
    icon: "paradigm-reboot.png",
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: PlayState.ACTIVE,
  }, {
    shard: "arcaea",
    name: "Arcaea",
    love: 3,
    date: ["summer 2024", "present"],
    icon: "arcaea.webp",
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: PlayState.ACTIVE,
  }, {
    shard: "milthm",
    name: "Milthm",
    love: 3,
    date: ["fall 2024", "present"],
    icon: "milthm.png",
    genres: ["rhythm"],
    platforms: ["desktop"],
    state: PlayState.ACTIVE,
  }, {
    shard: "dance-cube-evo",
    name: "DanceCube EVO",
    love: 2,
    date: ["summer 2025", "present"],
    icon: "dance-cube-evo.webp",
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: PlayState.OPPORTUNISTIC,
  }, {
    shard: "vivid-stasis",
    name: "vivid/stasis",
    love: 2,
    date: ["fall 2024", "present"],
    icon: "vivid-stasis.jpg",
    genres: ["rhythm"],
    platforms: ["desktop"],
    state: PlayState.INTERMITTENT,
  }, {
    shard: "rizline",
    name: "Rizline",
    love: 1,
    date: ["fall 2025", "present"],
    icon: undefined,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: PlayState.INFREQUENT,
  }, {
    shard: "shinobi-slash",
    name: "シノビスラッシュ",
    love: 1,
    date: ["fall 2025", "present"],
    icon: undefined,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: PlayState.INTERMITTENT,
  }, {
    shard: "ryceam",
    name: "RYCEAM",
    love: 1,
    date: ["fall 2025", "present"],
    icon: undefined,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: PlayState.INFREQUENT,
  }, {
    shard: "deemo-2",
    name: "DEEMO II",
    love: 1,
    date: ["summer 2024", "present"],
    icon: "deemo-2.png",
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: PlayState.INFREQUENT,
  }, {
    shard: "rhythm-plus",
    name: "Rhythm+",
    love: 1,
    date: ["fall 2023", "summer 2023"],
    icon: "rhythm-plus.png",
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  }, {
    shard: "maimai",
    name: "maimai",
    love: 1,
    date: ["summer 2023", "present"],
    icon: "maimai.jpg",
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: PlayState.RETIRED,
  }, {
    shard: "beat-saber",
    name: "Beat Saber",
    love: 2,
    date: ["2024", "present"],
    icon: "beat-saber.jpg",
    genres: ["rhythm"],
    platforms: ["VR"],
    state: PlayState.OPPORTUNISTIC,
  }, {
    shard: "osu",
    name: "osu!",
    love: 1,
    date: ["summer 2023", "present"],
    icon: "osu.png",
    genres: ["rhythm", "classics"],
    platforms: ["desktop"],
    state: PlayState.INFREQUENT,
  },

  {
    shard: "bloons-td6",
    name: "Bloons TD 6",
    love: 3,
    date: ["2020", "present"],
    icon: "bloons-td6.png",
    genres: ["tower defence", "classics"],
    platforms: ["desktop"],
    state: PlayState.OPPORTUNISTIC,
  }, {
    shard: "bloons-pop",
    name: "Bloons Pop!",
    love: 2,
    date: ["2021", "present"],
    icon: "bloons-pop.png",
    genres: ["puzzle"],
    platforms: ["mobile"],
    state: PlayState.INTERMITTENT,
  }, {
    shard: "bloons-supermonkey-2",
    name: "Bloons Supermonkey 2",
    love: 3,
    date: ["childhood", "2021"],
    icon: "bloons-supermonkey-2.png",
    genres: ["shmup"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  }, {
    shard: "bloons-td5",
    name: "Bloons TD 5",
    love: 3,
    date: ["childhood"],
    icon: "bloons-td5.png",
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  },

  {
    shard: "master-duel",
    name: "Yu-Gi-Oh! Master Duel",
    love: 3,
    date: ["2023", "present"],
    icon: "master-duel.webp",
    genres: ["cards"],
    platforms: ["mobile"],
    state: PlayState.ACTIVE,
  },
  
  {
    shard: "soul-knight",
    name: "Soul Knight",
    love: 3,
    date: ["childhood", 2021],
    icon: "soul-knight.webp",
    genres: ["rogue"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  },

  {
    shard: "asphalt-9",
    name: "Asphalt 9: Legends",
    love: 3,
    date: ["2019", "2021"],
    icon: "asphalt-9.webp",
    genres: ["racing"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  }, {
    shard: "asphalt-8",
    name: "Asphalt 8: Airborne",
    love: 2,
    date: ["2017", "2019"],
    icon: "asphalt-8.webp",
    genres: ["racing", "classics"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  },

  {
    shard: "spider-man-unlimited",
    name: "Spider-Man: Unlimited",
    love: 3,
    date: ["2016", "2019"],
    icon: "spider-man-unlimited.jpg",
    genres: ["runner"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  }, {
    shard: "minion-rush",
    name: "Minion Rush",
    love: 2,
    genres: ["runner", "classics"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
    date: ["childhood"],
  }, {
    shard: "temple-run-2",
    name: "Temple Run 2",
    love: 1,
    genres: ["runner"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
    date: ["childhood"],
  }, {
    shard: "temple-run",
    name: "Temple Run",
    love: 2,
    genres: ["runner", "classics"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
    date: ["childhood"],
  },

  {
    shard: "air-attack-2",
    name: "AirAttack 2",
    love: 2,
    date: ["summer 2020"],
    icon: "air-attack-2.webp",
    genres: ["shmup"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  }, {
    shard: "air-attack",
    name: "AirAttack",
    love: 3,
    date: ["childhood"],
    icon: "air-attack.jpg",
    genres: ["shmup"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  },

  {
    shard: "pvz-2",
    name: "Plants vs. Zombies 2",
    love: 3,
    date: ["childhood", "2020"],
    icon: "pvz-2.webp",
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  }, {
    shard: "pvz",
    name: "Plants vs. Zombies",
    love: 3,
    date: ["childhood"],
    icon: "pvz.webp",
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: PlayState.RETIRED,
  }, {
    shard: "bao-wei-luo-bo",
    name: "保卫萝卜",
    love: 3,
    date: ["childhood", "present"],
    icon: "bao-wei-luo-bo.webp",
    genres: ["tower defence"],
    platforms: ["mobile"],
    state: PlayState.OPPORTUNISTIC,
  },

  {
    shard: "little-big-snake",
    name: "Little Big Snake",
    love: 2,
    date: ["childhood", "present"],
    icon: "little-big-snake.png",
    genres: ["io"],
    platforms: ["desktop"],
    state: PlayState.INFREQUENT,
  }, {
    shard: "diep-io",
    name: "diep.io",
    love: 3,
    date: ["childhood"],
    icon: "diep-io.webp",
    genres: ["shmup", "io"],
    platforms: ["desktop"],
    state: PlayState.RETIRED,
  }, {
    shard: "arras-io",
    name: "arras.io",
    love: 2,
    date: ["childhood", "present"],
    icon: "arras-io.png",
    genres: ["shmup", "io"],
    platforms: ["desktop"],
    state: PlayState.INFREQUENT,
  }, {
    shard: "zombs-io",
    name: "zombs.io",
    love: 2,
    genres: ["tower defence", "io"],
    platforms: ["desktop"],
    state: PlayState.RETIRED,
    date: ["childhood"],
  }, {
    shard: "fightz-io",
    name: "fightz.io",
    love: 1,
    genres: ["io"],
    platforms: ["desktop"],
    state: PlayState.RETIRED,
    date: ["childhood"],
  },

  {
    shard: "minecraft",
    name: "Minecraft",
    love: 2,
    date: ["childhood", "present"],
    icon: "minecraft.webp",
    genres: ["sandbox", "classics"],
    platforms: ["mobile", "console", "desktop"],
    state: PlayState.INFREQUENT,
  },
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
