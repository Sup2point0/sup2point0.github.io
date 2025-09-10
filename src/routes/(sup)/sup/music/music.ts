import { i } from "#scripts/utils";
import { Daw } from "#scripts/types";
import type { AlbumData } from "#scripts/types";


export const albums: {
  [series: string]: AlbumData[]
} = {
  pinned: [
    {
      shard: "singles",
      name: "Singles",
      cover: "sunset.png",
      tracks: [
        "sunset",
        "sunrise"
      ]
    },
  ],
  gen1: [
    {
      shard: "algo-origins",
      name: "Algorhythm Origins",
      year: "2023 – PRESENT",
      cover: "origins.night.png",
      tracks: [
        {
          shard: "dawn",
          name: "Dawn",
          genres: ["electronic", "muted", "chill"],
          audio: "dawn.m4a",
          cover: "origins.dawn.png",
        },
        {
          shard: "day",
          name: "Day",
          genres: ["electronic", "vibrant"],
          audio: "day.m4a",
          cover: "origins.day.png",
        },
        {
          feat: true,
          shard: "night",
          name: "Night",
          genres: ["electronic", "vibrant"],
          audio: "night.m4a",
          cover: "origins.night.png",
        },
        {
          shard: "yesterday",
          name: "Yesterday",
          genres: [],
          audio: "yesterday.m4a",
          is_preview: true,
        },
        {
          shard: "tomorrow",
          name: "Tomorrow",
          genres: ["electronic", "jubilant"],
          audio: "tomorrow.m4a",
          cover: "origins.tomorrow.png",
        },
        {
          shard: "dusk",
          name: "Dusk",
          genres: [],
          audio: "",
          is_preview: true,
        },
        {
          feat: true,
          shard: "time",
          name: "Time",
          genres: [],
          audio: "",
          is_preview: true,
        },
        {
          shard: "twilight",
          name: "Twilight",
          genres: [],
          audio: "twilight.m4a",
          is_preview: true,
        },
      ],
      desc: `Soundtracks created for my rhythm game ${i("Algorhythm")}"!`,
    },
    {
      shard: "algo-roots",
      name: "Algorhythm Roots",
      year: "2024 – PRESENT",
      cover: "placeholder.png",
      tracks: [
        "away",
        "rejuvenate",
        "rush-reloaded",
        "drop",
        "rise",
      ],
    },
    {
      shard: "algo-vision",
      name: "Algorhythm Vision",
      year: "2024 – PRESENT",
      cover: "vision.another-dawn.png",
      tracks: [
        "another-dawn",
        "yesterday",
        "nightfall",
        "reminiscence",
        "midnight",
      ],
    },
    {
      shard: "elysion",
      name: "ELYSION",
      year: "2023 – PRESENT",
      cover: "elysion.ceruleus.png",
      tracks: [
        "aphenia",
        "ephemerald",
        "lullacry",
        "ceruleus",
        "archiral",
        "viridian",
        "scars",
      ],
    },
    {
      shard: "cortex",
      name: "Cortex",
      year: "2024 – PRESENT",
      cover: "cortex.voxel.png",
      tracks: [
        "purity",
        {
          shard: "voxel",
          name: "Voxel",
          audio: "cortex.voxel.m4a",
          cover: "cortex.voxel",
        },
        "pseudorandom",
        "dactyl",
        "mem-brain",
        "syntax-error",
        "elysion",
        "the-algorithm",
      ],
    },
    {
      shard: "integral",
      name: "Integral",
      year: "2024 – PRESENT",
      tracks: [
        "audacious-antiderivative",
        "pathological-constant",
        "isomorphic-surjection",
        "subzero-abstraction",
        "luminous-conjecture",
        "transverse-erratum",
        "canonical-destruction",
        "infinitesimal-ignition",
      ],
      is_preview: true,
    },
    {
      name: "Affinity",
      year: "FUTURE",
      shard: "affinity",
      tracks: [
        "solitude",
        "pinpricks",
        "forest-foliage",
        "close-to-earth",
        "midnight-marauder",
        "night-dweller",
        "droplets",
        "blinded-by-water",
        "cloudjumper",
      ],
      is_preview: true,
    },
    {
      name: "Fidelity",
      year: "FUTURE",
      shard: "fidelity",
      tracks: [
        "our-time",
        "a-place-far-away",
        "whisper",
        "lost-in-your-eyes",
        "intrepid",
        "a-time-long-ago",
        "our-story",
      ],
      is_preview: true,
    },
    {
      name: "Stranded",
      year: "2025 – PRESENT",
      shard: "stranded",
      tracks: [
        "stranded",
        "catastropical",
        "a-journey-across-time",
        "ever-shining",
        "requital",
        "facts_pinned",
        "walkers",
      ],
    },
  ],
  archives: [
    {
      name: "GarageBand Archives",
      year: "2024 and earlier",
      shard: "archives/garageband",
      daw: Daw.GarageBand,
      cover: "garageband.jpg",
      tracks: [
        "let-you-down",
        "canon-in-d-remix",
        "rush",
        "base-memories",
      ],
    },
    {
      name: "MuseScore Archives",
      year: "2023 and earlier",
      shard: "archives/musescore",
      daw: Daw.MuseScore,
      cover: "musescore.png",
      tracks: [
        "wingless-butterfly",
        "bubble-iris",
        "insenza",
      ],
    },
  ],
};

export const albums_list: AlbumData[] = albums.pinned.concat(albums.gen1, albums.archives);
