import { Genre, Vibe, type TrackData } from "#scripts/types/music";
import type { Dates } from "#scripts/types";


interface ChronicleData
{
  era:    string;
  date:   Dates;
  tracks: TrackData[];
}


const _template = [
  {
    shard:   "",
    name:    "",
    artists: [],
    date:    undefined,
    cover:   undefined,
    genres:  [],
    links: {
      youtube: "",
    },
    discovered: ``,
    desc: [
      ``,
    ],
  },
];


export const chronicle_data: ChronicleData[] = [
  {
    era:  "Modernity",
    date: "present",
    tracks: [
      {
        shard:   "",
        name:    "Grimheart",
        artists: ["puru"],
        date:    undefined,
        cover:   "grimheart.jpg",
        genres:  [Genre.TRAP],
        vibes:   [Vibe.CHILLOUT],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Sakura Fubiki",
        artists: ["street"],
        date:    undefined,
        cover:   "sakura-fubiki.jpg",
        genres:  [Genre.RHYTHM, Genre.NEUROFUNK],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "New Start",
        artists: ["pikasonic"],
        date:    undefined,
        cover:   "new-start.jpg",
        genres:  [Genre.KAWAII_FUTURE_BASS],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Dopamine (DnB remix)",
        artists: ["wing"],
        date:    undefined,
        cover:   "dopamine-dnb.jpg",
        genres:  [Genre.BEATBOX, Genre.DRUM_N_BASS],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "What Could Have Been",
        artists: ["sting"],
        date:    undefined,
        cover:   "what-could-have-been.jpg",
        genres:  [],
        vibes:   [Vibe.EMOTIONAL],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "What If",
        artists: ["stessie"],
        date:    undefined,
        cover:   "what-if.jpg",
        genres:  [Genre.ELECTRONIC],
        vibes:   [Vibe.HAPPY],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "落日親吻銀光海",
        artists: [],
        date:    undefined,
        cover:   "luo-ri.jpg",
        genres:  [],
        vibes:   [Vibe.CHILLOUT],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Final Showdown",
        artists: ["hookington"],
        date:    undefined,
        cover:   "final-showdown.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Amethyst",
        artists: ["kanro"],
        date:    undefined,
        cover:   "amethyst.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Playing God",
        artists: ["polyphia"],
        date:    undefined,
        cover:   "playing-god.jpg",
        genres:  [Genre.TRANSCENDENTAL, Genre.GUITAR],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Ignotus",
        artists: ["ak-q"],
        date:    undefined,
        cover:   "ignotus.webp",
        genres:  [Genre.ARTCORE, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Your Idol",
        artists: ["saja-boys", "k-pop-demon-hunters"],
        date:    undefined,
        cover:   "your-idol.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Flutter Echo",
        artists: ["cansol"],
        date:    undefined,
        cover:   "flutter-echo.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Natsu!",
        artists: ["wave-meow"],
        date:    undefined,
        cover:   "natsu.jpg",
        genres:  [Genre.DRUM_N_BASS, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "《粗线条的雨》",
        artists: [],
        date:    undefined,
        cover:   "thick-rain.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Lost Requiem",
        artists: ["ludicin"],
        date:    undefined,
        cover:   "lost-requiem.jpg",
        genres:  [Genre.FULL_FLAVOUR, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Debut",
        artists: ["katseye"],
        date:    undefined,
        cover:   "debut.webp",
        genres:  [Genre.KPOP],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Spring (KLYDIX remix)",
        artists: ["stellaon", "klydix"],
        date:    undefined,
        cover:   "spring-klydix-remix.jpg",
        genres:  [Genre.ELECTRONIC],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "SAVE THIS WRLD",
        artists: ["exyl"],
        date:    undefined,
        cover:   "save-this-wrld.jpg",
        genres:  [Genre.ELECTRONIC, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
    ],
  },
  {
    era:  "Japanese Era",
    date: 2023,
    tracks: [
      {
        shard:   "",
        name:    "「アイドル」",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "たぶん",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Beyond the Way",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "I wanna be a girl",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "バグ / 25時、ナイトコードで。",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Mend Your Ways",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "BIBBIDIBA",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
    ],
  },
  {
    era:  "Calm Interlude",
    date: 2024,
    tracks: [
      {
        shard:   "",
        name:    "Sentient",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
    ],
  },
  {
    era:  "Phigros Era",
    date: 2023,
    tracks: [
      {
        shard:   "",
        name:    "青芽",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "WATER",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "NO ONE YES MAN",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Realms",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Dance with Silence",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "+ERABY+E CONNEC+10N",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Nhelv",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Distorted Fate",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Spin Eternally",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "飄える翼追い掛けて ～終飛～",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "ΩΩPARTS",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Luminescence",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Synthesis",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "明鏡烈火",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Algebra",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
    ],
  },
  {
    era:  "Emotional Interlude",
    date: [2019, 2022],
    tracks: [
      {
        shard:   "",
        name:    "荣耀的战场",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Up in the Hills",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Are You Happy",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Susume! Ultraman Zero",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Proof Geometric Construction Can Solve All Love Affairs",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Suzume",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Friendship Games",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
    ],
  },
  {
    era:  "EDM Era",
    date: "childhood",
    tracks: [
      {
        shard:   "united",
        name:    "United",
        artists: ["elektronomia"],
        date:    2016,
        cover:   undefined,
        genres:  [Genre.EDM, Genre.HOUSE],
        links: {
          youtube: "https://www.youtube.com/watch?v=EgXcda1SzxU&list=PLYWIouv-DSkA_6f6V_ZChkIKn7_Foqxnd",
        },
        discovered: `Elektronomia’s discography`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Throwback",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "PLAY",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Banana Breeze",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "End of Time",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Ibiza",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "SLASH",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "No Turning Back",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
    ],
  },
  {
    era:  "Timeless",
    date: "timeless",
    tracks: [
      {
        shard:   "",
        name:    "Home",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "When You’re Gone",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "",
        name:    "Never Gonna Give You Up",
        artists: [],
        date:    undefined,
        cover:   undefined,
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          ``,
        ],
      },
    ],
  },
];
