import type { Shard, Daw } from "#scripts/types";


export interface AlbumData {
  shard: Shard;
  name: string;
  year?: string;

  daw?: Daw | Daw[];
  cover?: string;
  is_preview?: boolean;

  tracks: Shard[];
  genres?: string[];

  desc?: string | string[];
}


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
        "dawn",
        "day",
        "night",
        "tomorrow",
        "dusk",
        "time",
        "twilight",
      ],
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
        "voxel",
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
      cover: "musescore.png",
      tracks: [
        "wingless-butterfly",
        "bubble-iris",
        "insenza",
      ],
    },
  ],
};
