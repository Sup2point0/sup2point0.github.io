import { shardify } from "#scripts/utils";
import type { Searchable } from "#scripts/search-filter.svelte.ts";
import type { DatePoint } from "#scripts/types";


export enum Genre {
  RHYTHM = "rhythm",
  TOWER_DEFENCE = "tower defence",
  RACING = "racing",
  SHMUP = "shmup",
  ROGUE = "rogue",
  METROIDVANIA = "metroidvania",
  RUNNER = "runner",
  PUZZLE = "puzzle",
  CARDS = "cards",
  SANDBOX = "sandbox",
  IO = ".io games",
  CLASSICS  = "classics",
}

export enum Platform {
  MOBILE = "mobile",
  DESKTOP = "desktop",
  ARCADE = "arcade",
  CONSOLE = "console",
  VR = "VR",
}

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
  name:   string;
  love:   3 | 2 | 1 | null;
  date?: DatePoint | DatePoint[];

  icon?: string;
    _style?: "no-crop",

  genres: Genre[];
  platforms: Platform[];
  
  state:  PlayState;
  desc?: string | string[];

  _score?: number;
}


const _template = [
    {
      shard:  "",
      name:   "",
      love:   0,
      date:   undefined,
      icon:   undefined,
      genres: [Genre],
      platforms: [Platform.DESKTOP],
      state:  PlayState.WISHLIST,
    },
];


export const games_data: Record<string, GameData[]> = {
  "active": [
    {
      shard:  "manifold-garden",
      name:   "Manifold Garden",
      love:   3,
      date:   ["January 2026", "present"],
      icon:   "manifold-garden.png",
      genres: [Genre.PUZZLE],
      platforms: [Platform.DESKTOP],
      state:  PlayState.ACTIVE,
    }, {
      shard:  "phigros",
      name:   "Phigros",
      love:   3,
      date:   ["summer 2023", "present"],
      icon:   "phigros.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.ACTIVE,
    }, {
      shard:  "chunithm",
      name:   "CHUNITHM",
      love:   1,
      date:   ["summer 2024", "present"],
      icon:   "chunithm.png",
      genres: [Genre.RHYTHM],
      platforms: [Platform.ARCADE],
      state:  PlayState.INTERMITTENT,
    }, {
      shard:  "arcaea",
      name:   "Arcaea",
      love:   1,
      date:   ["summer 2024", "present"],
      icon:   "arcaea.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.ACTIVE,
    }, {
      shard:  "milthm",
      name:   "Milthm",
      love:   2,
      date:   ["fall 2024", "present"],
      icon:   "milthm.png",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE, Platform.DESKTOP],
      state:  PlayState.ACTIVE,
    }, 
  ],
  "wishlist": [
    {
      shard:  "firewatch",
      name:   "Firewatch",
      love:   null,
      date:   "January 2026",
      icon:   "firewatch.avif",
      genres: [],
      platforms: [Platform.DESKTOP],
      state:  PlayState.WISHLIST,
    }, {
      shard:  "hollow-knight",
      name:   "Hollow Knight",
      love:   null,
      date:   undefined,
      icon:   "hollow-knight.webp",
      genres: [Genre.METROIDVANIA],
      platforms: [Platform.DESKTOP],
      state:  PlayState.WISHLIST,
    },
    {
      shard:  "hades",
      name:   "Hades",
      love:   1,
      date:   undefined,
      icon:   "hades.png",
        _style: "no-crop",
      genres: [Genre.ROGUE],
      platforms: [Platform.CONSOLE],
      state:  PlayState.WISHLIST,
    },
  ],
  "bloons": [
    {
      shard:  "bloons-td6",
      name:   "Bloons TD 6",
      love:   3,
      date:   ["2020", "present"],
      icon:   "bloons-td6.png",
      genres: [Genre.TOWER_DEFENCE, Genre.CLASSICS],
      platforms: [Platform.DESKTOP],
      state:  PlayState.OPPORTUNISTIC,
    }, {
      shard:  "bloons-pop",
      name:   "Bloons Pop!",
      love:   2,
      date:   ["2021", "present"],
      icon:   "bloons-pop.png",
      genres: [Genre.PUZZLE],
      platforms: [Platform.MOBILE],
      state:  PlayState.INTERMITTENT,
    }, {
      shard:  "bloons-supermonkey-2",
      name:   "Bloons Supermonkey 2",
      love:   3,
      date:   ["childhood", "2021"],
      icon:   "bloons-supermonkey-2.png",
      genres: [Genre.SHMUP],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "bloons-td5",
      name:   "Bloons TD 5",
      love:   1,
      date:   ["childhood"],
      icon:   "bloons-td5.png",
      genres: [Genre.TOWER_DEFENCE, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
  ],
  "miscellaneous": [
    {
      shard:  "master-duel",
      name:   "Yu-Gi-Oh! Master Duel",
      love:   3,
      date:   ["2023", "present"],
      icon:   "master-duel.webp",
      genres: [Genre.CARDS],
      platforms: [Platform.MOBILE],
      state:  PlayState.INTERMITTENT,
    }, {
      shard:  "soul-knight",
      name:   "Soul Knight",
      love:   2,
      date:   ["childhood", 2021],
      icon:   "soul-knight.webp",
      genres: [Genre.ROGUE],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "bao-wei-luo-bo",
      name:   "保卫萝卜",
      love:   3,
      date:   ["childhood", "present"],
      icon:   "bao-wei-luo-bo.webp",
      genres: [Genre.TOWER_DEFENCE],
      platforms: [Platform.MOBILE],
      state:  PlayState.OPPORTUNISTIC,
    }, {
      shard:  "minecraft",
      name:   "Minecraft",
      love:   null,
      date:   ["childhood", "present"],
      icon:   "minecraft.webp",
        _style: "no-crop",
      genres: [Genre.SANDBOX, Genre.CLASSICS],
      platforms: [Platform.MOBILE, Platform.CONSOLE, Platform.DESKTOP],
      state:  PlayState.INFREQUENT,
    },
  ],
  
  "all the rhythm games": [
    {
      shard:  "paradigm-reboot",
      name:   "Paradigm: Reboot",
      love:   null,
      date:   ["summer 2025", "present"],
      icon:   "paradigm-reboot.png",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.ACTIVE,
    }, {
      shard:  "dance-cube-evo",
      name:   "DanceCube EVO",
      love:   null,
      date:   ["summer 2025", "present"],
      icon:   "dance-cube-evo.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.ARCADE],
      state:  PlayState.OPPORTUNISTIC,
    }, {
      shard:  "vivid-stasis",
      name:   "vivid/stasis",
      love:   null,
      date:   ["fall 2024", "present"],
      icon:   "vivid-stasis.jpg",
      genres: [Genre.RHYTHM],
      platforms: [Platform.DESKTOP],
      state:  PlayState.INTERMITTENT,
    }, {
      shard:  "melatonin",
      name:   "Melatonin",
      love:   null,
      date:   ["January 2026", "present"],
      icon:   "melatonin.jpg",
      genres: [Genre.RHYTHM],
      platforms: [Platform.DESKTOP],
      state:  PlayState.INTERMITTENT,
    }, {
      shard:  "rizline",
      name:   "Rizline",
      love:   null,
      date:   ["fall 2025", "present"],
      icon:   "rizline.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.INFREQUENT,
    }, {
      shard:  "shinobi-slash",
      name:   "シノビスラッシュ",
      love:   null,
      date:   ["fall 2025", "present"],
      icon:   "shinobi-slash.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.INTERMITTENT,
    }, {
      shard:  "ryceam",
      name:   "RYCEAM",
      love:   null,
      date:   ["fall 2025", "present"],
      icon:   "ryceam.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.INFREQUENT,
    }, {
      shard:  "deemo-2",
      name:   "DEEMO II",
      love:   null,
      date:   ["summer 2024", "present"],
      icon:   "deemo-2.png",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.INFREQUENT,
    }, {
      shard:  "rhythm-plus",
      name:   "Rhythm+",
      love:   null,
      date:   ["fall 2023", "summer 2023"],
      icon:   "rhythm-plus.png",
        _style: "no-crop",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "maimai",
      name:   "maimai",
      love:   null,
      date:   ["summer 2023", "present"],
      icon:   "maimai.jpg",
      genres: [Genre.RHYTHM],
      platforms: [Platform.ARCADE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "beat-saber",
      name:   "Beat Saber",
      love:   null,
      date:   ["2024", "present"],
      icon:   "beat-saber.jpg",
      genres: [Genre.RHYTHM],
      platforms: [Platform.VR],
      state:  PlayState.OPPORTUNISTIC,
    }, {
      shard:  "osu",
      name:   "osu!",
      love:   null,
      date:   ["summer 2023", "present"],
      icon:   "osu.png",
      genres: [Genre.RHYTHM, Genre.CLASSICS],
      platforms: [Platform.DESKTOP],
      state:  PlayState.RETIRED,
    },
  ],
  "franchises": [
    {
      shard:  "asphalt-9",
      name:   "Asphalt 9: Legends",
      love:   2,
      date:   ["2019", "2021"],
      icon:   "asphalt-9.webp",
      genres: [Genre.RACING],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "asphalt-8",
      name:   "Asphalt 8: Airborne",
      love:   1,
      date:   ["2017", "2019"],
      icon:   "asphalt-8.webp",
      genres: [Genre.RACING, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "air-attack-2",
      name:   "AirAttack 2",
      love:   1,
      date:   ["summer 2020"],
      icon:   "air-attack-2.webp",
      genres: [Genre.SHMUP],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "air-attack",
      name:   "AirAttack",
      love:   3,
      date:   ["childhood"],
      icon:   "air-attack.jpg",
      genres: [Genre.SHMUP],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "pvz-2",
      name:   "Plants vs. Zombies 2",
      love:   3,
      date:   ["childhood", "2020"],
      icon:   "pvz-2.webp",
      genres: [Genre.TOWER_DEFENCE, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "pvz",
      name:   "Plants vs. Zombies",
      love:   2,
      date:   ["childhood"],
      icon:   "pvz.webp",
      genres: [Genre.TOWER_DEFENCE, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
  ],
  "runners": [
    {
      shard:  "spider-man-unlimited",
      name:   "Spider-Man: Unlimited",
      love:   3,
      date:   ["2016", "2019"],
      icon:   "spider-man-unlimited.jpg",
      genres: [Genre.RUNNER],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    }, {
      shard:  "minion-rush",
      name:   "Minion Rush",
      love:   1,
      icon:   "minion-rush.webp",
      genres: [Genre.RUNNER, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    }, {
      shard:  "temple-run-2",
      name:   "Temple Run 2",
      icon:   "temple-run-2.jpg",
      love:   null,
      genres: [Genre.RUNNER],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    }, {
      shard:  "temple-run",
      name:   "Temple Run",
      love:   null,
      icon:   "temple-run.jpg",
      genres: [Genre.RUNNER, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    },
  ],
  ".io Games": [
    {
      shard:  "little-big-snake",
      name:   "Little Big Snake",
      love:   2,
      date:   ["childhood", "present"],
      icon:   "little-big-snake.png",
      genres: [Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.INFREQUENT,
    }, {
      shard:  "diep-io",
      name:   "diep.io",
      love:   3,
      date:   ["childhood"],
      icon:   "diep-io.webp",
      genres: [Genre.SHMUP, Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.RETIRED,
    }, {
      shard:  "arras-io",
      name:   "arras.io",
      love:   1,
      date:   ["childhood", "present"],
      icon:   "arras-io.png",
      genres: [Genre.SHMUP, Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.INFREQUENT,
    }, {
      shard:  "zombs-io",
      name:   "zombs.io",
      love:   1,
      icon:   "zombs-io.jpg",
      genres: [Genre.TOWER_DEFENCE, Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    }, {
      shard:  "fightz-io",
      name:   "fightz.io",
      love:   null,
      genres: [Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    },
  ],
};

export const games_list: GameData[] = (
  () => {
    for (let [collection, games] of Object.entries(games_data))
    {
      for (let game of games)
      {
        game._score = 0;
        game.collection = collection;
        game.shard ??= shardify(game.name);
      }
    }

    return Object.values(games_data).flat();
  }
)();
