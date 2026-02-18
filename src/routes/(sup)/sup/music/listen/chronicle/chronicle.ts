import { Genre, Vibe, type TrackData } from "#scripts/types/music";
import { a, i } from "#scripts/utils";
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
    era:  "Post-Modernity",
    date: "present",
    tracks: [
      {
        shard:   "breakeven",
        name:    "Breakeven",
        artists: ["the-script"],
        date:    "2026 February 14",
        cover:   "the-script.jpg",
        genres:  [Genre.POP],
        vibes:   [Vibe.EMOTIONAL],
        links: {
          youtube: "",
        },
        discovered: `childhood`,
        desc: [
          `We always loved this song, but now we feel this song.`,
        ],
      },
    ],
  },
  {
    era:  "Modernity",
    date: [2023, "early 2026"],
    tracks: [
      {
        shard:   "save-this-wrld",
        name:    "SAVE THIS WRLD",
        artists: ["exyl"],
        date:    undefined,
        cover:   "save-this-wrld.jpg",
        genres:  [Genre.ELECTRONIC, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: `YouTube Music reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "spring-klydix-remix",
        name:    "Spring (KLYDIX remix)",
        artists: ["stellaon", "klydix"],
        date:    undefined,
        cover:   "spring-klydix-remix.jpg",
        genres:  [Genre.ELECTRONIC],
        links: {
          youtube: "",
        },
        discovered: `Firefly Music`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "debut",
        name:    "Debut",
        artists: ["katseye"],
        date:    undefined,
        cover:   "debut.webp",
        genres:  [Genre.KPOP],
        links: {
          youtube: "",
        },
        discovered: `friend`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "lost-requiem",
        name:    "Lost Requiem",
        artists: ["ludicin"],
        date:    undefined,
        cover:   "lost-requiem.jpg",
        genres:  [Genre.FULL_FLAVOUR, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: `YouTube reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "thick-rain",
        name:    "《粗线条的雨》",
        artists: [],
        date:    undefined,
        cover:   "thick-rain.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Milthm`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "natsu",
        name:    "Natsu!",
        artists: ["wave-meow"],
        date:    undefined,
        cover:   "natsu.jpg",
        genres:  [Genre.DRUM_N_BASS, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: `Firefly Music`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "flutter-echo",
        name:    "Flutter Echo",
        artists: ["cansol"],
        date:    undefined,
        cover:   "flutter-echo.jpg",
        genres:  [Genre.ELECTRONIC, Genre.KAWAII, Genre.DRUM_N_BASS],
        links: {
          youtube: "",
        },
        discovered: `Phigros × KALPA collaboration II`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "your-idol",
        name:    "Your Idol",
        artists: ["saja-boys", "k-pop-demon-hunters"],
        date:    undefined,
        cover:   "your-idol.jpg",
        genres:  [Genre.KPOP, Genre.TRAP],
        links: {
          youtube: "",
        },
        discovered: `K-pop Demon Hunters`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "ignotus",
        name:    "Ignotus",
        artists: ["ak-q"],
        date:    undefined,
        cover:   "ignotus.webp",
        genres:  [Genre.ARTCORE, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: `Arcaea`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "playing-god",
        name:    "Playing God",
        artists: ["polyphia"],
        date:    undefined,
        cover:   "playing-god.jpg",
        genres:  [Genre.TRANSCENDENTAL, Genre.GUITAR],
        links: {
          youtube: "",
        },
        discovered: `YouTube Music reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "amethyst",
        name:    "Amethyst",
        artists: ["kanro"],
        date:    undefined,
        cover:   "amethyst.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `YouTube Music reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "final-showdown",
        name:    "Final Showdown",
        artists: ["hookington"],
        date:    undefined,
        cover:   "final-showdown.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Chiru-san × Hookington – Rebirth`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "luo-ri",
        name:    "落日親吻銀光海",
        artists: [],
        date:    undefined,
        cover:   "luo-ri.jpg",
        genres:  [Genre.CPOP],
        vibes:   [Vibe.CHILLOUT],
        links: {
          youtube: "",
        },
        discovered: `news`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "what-if",
        name:    "What If",
        artists: ["stessie"],
        date:    undefined,
        cover:   "what-if.jpg",
        genres:  [Genre.ELECTRONIC],
        vibes:   [Vibe.HAPPY],
        links: {
          youtube: "",
        },
        discovered: `Firefly Music`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "what-could-have-been",
        name:    "What Could Have Been",
        artists: ["sting"],
        date:    undefined,
        cover:   "what-could-have-been.jpg",
        genres:  [],
        vibes:   [Vibe.EMOTIONAL],
        links: {
          youtube: "",
        },
        discovered: `Arcane`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "dopamine-dnb-remix",
        name:    "Dopamine (DnB remix)",
        artists: ["wing"],
        date:    undefined,
        cover:   "dopamine-dnb.jpg",
        genres:  [Genre.BEATBOX, Genre.DRUM_N_BASS],
        links: {
          youtube: "",
        },
        discovered: `WING`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "new-start",
        name:    "New Start",
        artists: ["pikasonic"],
        date:    undefined,
        cover:   "new-start.jpg",
        genres:  [Genre.KAWAII_FUTURE_BASS],
        vibes:   [Vibe.HAPPY],
        links: {
          youtube: "",
        },
        discovered: `Firely Music, YouTube reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "sakura-fubiki",
        name:    "Sakura Fubiki",
        artists: ["street"],
        date:    undefined,
        cover:   "sakura-fubiki.jpg",
        genres:  [Genre.RHYTHM, Genre.NEUROFUNK],
        links: {
          youtube: "",
        },
        discovered: `Arcaea`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "grimheart",
        name:    "Grimheart",
        artists: ["puru"],
        date:    undefined,
        cover:   "grimheart.jpg",
        genres:  [Genre.TRAP],
        vibes:   [Vibe.CHILLOUT],
        links: {
          youtube: "",
        },
        discovered: `Arcaea`,
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
        shard:   "algebra",
        name:    "Algebra",
        artists: ["function-phantom"],
        date:    undefined,
        cover:   "algebra.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Phigros custom chart`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "ming-huo",
        name:    "明鏡烈火",
        artists: [],
        date:    undefined,
        cover:   "ming-huo.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "synthesis",
        name:    "Synthesis",
        artists: ["tn-shi"],
        date:    undefined,
        cover:   "synthesis.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `YouTube reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "luminescence",
        name:    "Luminescence",
        artists: [],
        date:    undefined,
        cover:   "luminescence.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "oo-parts",
        name:    "ΩΩPARTS",
        artists: ["camellia"],
        date:    undefined,
        cover:   "oo-parts.jpg",
        genres:  [Genre.FULL_FLAVOUR, Genre.TRANSCENDENTAL],
        links: {
          youtube: "",
        },
        discovered: `かめりあ discography`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "waving-wings",
        name:    "飄える翼追い掛けて ～終飛～",
        artists: ["camellia"],
        date:    undefined,
        cover:   "ashed-wings.jpg",
        genres:  [Genre.HARDCORE, Genre.SPEEDCORE],
        links: {
          youtube: "",
        },
        discovered: `かめりあ discography`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "spin-eternally",
        name:    "Spin Eternally",
        artists: ["camellia"],
        date:    undefined,
        cover:   "spin-eternally.png",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `かめりあ discography`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "distorted-fate",
        name:    "Distorted Fate",
        artists: ["sakuzyo"],
        date:    undefined,
        cover:   "distorted-fate.jpg",
        genres:  [Genre.BOSS_MUSIC],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "nhelv",
        name:    "Nhelv",
        artists: ["silentroom"],
        date:    undefined,
        cover:   "nhelv.jpg",
        genres:  [Genre.NEUROFUNK],
        links: {
          youtube: "",
        },
        discovered: `YouTube reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "terabyte-connection",
        name:    "+ERABY+E CONNEC+10N",
        artists: ["camellia"],
        date:    undefined,
        cover:   "terabyte-connection.jpg",
        genres:  [Genre.TRANSCENDENTAL,Genre.CAMELLIACORE, Genre.HARDCORE],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "dance-with-silence",
        name:    "Dance with Silence",
        artists: ["camellia"],
        date:    undefined,
        cover:   "tera-io.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "realms",
        name:    "Realms",
        artists: ["hinkik", "a-himitsu"],
        date:    undefined,
        cover:   "realms.jpg",
        genres:  [Genre.ELECTRONIC, Genre.DRUM_N_BASS, Genre.RHYTHM],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "no-one-yes-man",
        name:    "NO ONE YES MAN",
        artists: ["myukke"],
        date:    undefined,
        cover:   "no-one-yes-man.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "water",
        name:    "WATER",
        artists: ["a-39"],
        date:    undefined,
        cover:   "water.jpg",
        genres:  [Genre.HARDCORE, Genre.VOCALOID, Genre.COLOUR_BASS],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "qing-ya",
        name:    "青芽",
        artists: ["tea-12"],
        date:    undefined,
        cover:   "qing-ya.jpg",
        genres:  [Genre.CPOP],
        links: {
          youtube: "",
        },
        discovered: `Phigros`,
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
    ],
  },
  {
    era:  "EDM Era",
    date: "childhood",
    tracks: [
      {
        shard:   "no-turning-back",
        name:    "No Turning Back",
        artists: ["vexento"],
        date:    undefined,
        cover:   "no-turning-back.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Vexento release`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "slash",
        name:    "SLASH",
        artists: ["tokyo-machine"],
        date:    undefined,
        cover:   "slash.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `NCS release`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "ibiza",
        name:    "Ibiza",
        artists: ["elektronomia"],
        date:    undefined,
        cover:   "ibiza.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Elektronomia release`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "end-of-time",
        name:    "End of Time",
        artists: ["alan-walker", "k-391", "Ahrix"],
        date:    undefined,
        cover:   "end-of-time.webp",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Alan Walker release`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "banana-breeze",
        name:    "Banana Breeze",
        artists: ["vexento", "allison"],
        date:    undefined,
        cover:   "banana-breeze.jpg",
        genres:  [],
        links: {
          youtube: "",
        },
        discovered: `Vexento discography`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "play",
        name:    "PLAY",
        artists: ["alan-walker", "k-391", "Tungevaag"],
        date:    undefined,
        cover:   "play.jpg",
        genres:  [Genre.EDM],
        vibes:   [Vibe.EMOTIONAL],
        links: {
          youtube: "",
        },
        discovered: `Alan Walker release`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "throwback",
        name:    "Throwback",
        artists: ["electro-light"],
        date:    undefined,
        cover:   "throwback.jpg",
        genres:  [Genre.ELECTRONIC, Genre.HARDCORE],
        links: {
          youtube: "",
        },
        discovered: `NCS discography`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "united",
        name:    "United",
        artists: ["elektronomia"],
        date:    2016,
        cover:   "united.jpg",
        genres:  [Genre.EDM, Genre.HOUSE],
        vibes:   [Vibe.NOSTALGIC],
        links: {
          youtube: "https://www.youtube.com/watch?v=EgXcda1SzxU&list=PLYWIouv-DSkA_6f6V_ZChkIKn7_Foqxnd",
        },
        discovered: `Elektronomia discography`,
        desc: [
          `The first track I ever “fell in love” with. I remember it as being the final track listed when I was listening to Elektronomia’s tracks on the music platform I was using at the time, and I came to know it as being quite special. Its ‘happy nostalgic’ vibe became my favourite type of EDM for years to come.`,
        ],
      },
    ],
  },
  {
    era:  "Timeless",
    date: "timeless",
    tracks: [
      {
        shard:   "home",
        name:    "Home",
        artists: ["vexento"],
        date:    undefined,
        cover:   undefined,
        genres:  [Genre.DOWNTEMPO],
        vibes:   [Vibe.CHILLOUT, Vibe.HAPPY],
        links: {
          youtube: "",
        },
        discovered: `Vexento discography`,
        desc: [
          `Well, it’s just home, isn’t it?`,
          `Vexento is so unbelievably talented at crafting beautiful timeless ${i("feelings")}.`,
        ],
      },
      {
        shard:   "when-youre-gone",
        name:    "When You’re Gone",
        artists: ["avril-lavigne"],
        date:    undefined,
        cover:   undefined,
        genres:  [Genre.POP],
        vibes:   [Vibe.EMOTIONAL],
        links: {
          youtube: "",
        },
        discovered: `some Ultraman video on YouTube`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "never-gonna-give-you-up",
        name:    "Never Gonna Give You Up",
        artists: ["rick-astley"],
        date:    undefined,
        cover:   undefined,
        genres:  [Genre.POP],
        links: {
          youtube: "",
        },
        discovered: ``,
        desc: [
          `I unironically enjoy this song, alright? Also, you should check ${a("this<sup>↗</sup>", "https://youtube.com/watch?v=yPYZpwSpKmA")} out ;)`,
        ],
      },
    ],
  },
];
