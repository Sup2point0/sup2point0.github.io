import { a, h } from "#scripts/utils";
import { Genre, Vibe } from "#scripts/types";
import type { ArtistData, Groups } from "#scripts/types";


export const artists_data: Groups<ArtistData> =
{
  "newly discovered": [
    {
      shard:  "ludicin",
      name:   "Ludicin",
      date:   "late 2025",
      icon:   "ludicin.jpg",
      genres: [Genre.RHYTHM, Genre.FULL_FLAVOUR, Genre.ORCHESTRAL,],
      track: {
        name: "Lost Requiem", link: "https://youtube.com/watch?v=QdiqIo963PE"
      },
      discovered: `YouTube Music reccs`,
    },
    {
      shard:  "steradlye",
      name:   "Steradlye",
      date:   "late 2025",
      icon:   "steradlye.jpg",
      genres: [Genre.ELECTRONIC, Genre.DUBSTEP, Genre.FUTURE_BASS,],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkANhMFRwLXr2yGKpFDvXJhO",
      },
      discovered: `YouTube Music reccs`,
    },
    {
      shard:  "unfinish",
      name:   "UNFINISH",
      date:   "late 2025",
      icon:   "unfinish.jpg",
      genres: [Genre.ELECTRONIC, Genre.DUBSTEP, Genre.RHYTHM,],
      track: {
        name: "Turbo Luck Second", link: "https://youtube.com/watch?v=r37wNOtg_pY&list=PLYWIouv-DSkAGD_WKtKGd5eFyoR6xATgj"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkAGD_WKtKGd5eFyoR6xATgj",
      },
      discovered: `YouTube reccs`,
    },
  ],
  "absolute favourites": [
    {
      shard:  "camellia",
      name:   "Camellia / かめりあ",
      date:   "late 2023",
      icon:   "camellia.png",
      genres: [Genre.CAMELLIACORE, Genre.FULL_FLAVOUR, Genre.STEP200, Genre.TRANSCENDENTAL, Genre.RHYTHM,
      ],
      track: [
        { name: "Dance With Silence", link: "https://youtube.com/watch?v=ounWMVmQs0w&list=PLYWIouv-DSkCLPwaevGf-8oKXSE4syPAT" },
        { name: "Spin Eternally", link: "https://youtube.com/watch?v=IuRwqB9NwVQ&list=PLYWIouv-DSkCLPwaevGf-8oKXSE4syPAT" },
      ],
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCLPwaevGf-8oKXSE4syPAT",
      },
      discovered: `Phigros`,
    },
    {
      shard:  "vexento",
      name:   "Vexento",
      date:   "summer 2019",
      icon:   "vexento.jpg",
      genres: [Genre.ELECTRONIC, Genre.DOWNTEMPO,],
      vibes:  [Vibe.CHILLOUT,],
      track: {
        name: "Banana Breeze", link: "https://youtube.com/watch?v=bBOwy0Ykk1Q&list=PLYWIouv-DSkCza5V1caC65JOK1rkrDqxK"
      },
      links: {
        youtube: "https://youtube.com/watch?v=h_YYmNzydy8&list=PLYWIouv-DSkCJFwPiWrxfO4BqSKtU8UbM",
      },
      discovered: `some random Scratch project`,
    },
    {
      shard:  "pikasonic",
      name:   "PIKASONIC",
      date:   2024,
      icon:   "pikasonic.jpg",
      genres: [Genre.ELECTRONIC, Genre.FUTURE_BASS, Genre.JCORE,],
      track: {
        name: "New Start", link: "https://youtube.com/watch?v=_P_2hh8CE_s&list=PLYWIouv-DSkDro0y_y55ojMZ6u3m6RKzJ"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkDro0y_y55ojMZ6u3m6RKzJ",
      },
      discovered: `${h("New Start")} in YouTube reccs`,
    },
    {
      shard:  "stessie",
      name:   "Stessie",
      date:   "spring 2025",
      icon:   "stessie.jpg",
      genres: [Genre.ELECTRONIC,],
      vibes:  [Vibe.CHILLOUT,],
      track: {
        name: "What If", link: "https://youtube.com/watch?v=4c-PohhHgWI&list=PLYWIouv-DSkAlt2TuUBsjZgKF17agTDx4"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkAlt2TuUBsjZgKF17agTDx4",
      },
      discovered: `Firefly Music`,
    },
  ],
  "regulars": [
    {
      shard:  "puru",
      name:   "puru",
      date:   "summer 2024",
      icon:   "puru.jpg",
      genres: [Genre.RHYTHM, Genre.TRAP,],
      vibes:  [Vibe.CHILLOUT,],
      track: {
        name: "Grimheart", link: "https://youtube.com/watch?v=S9LE5FB5E5I&list=PLYWIouv-DSkBt4zknZoQPwgiYLB4xHSRf"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBt4zknZoQPwgiYLB4xHSRf",
      },
      discovered: `Arcaea`,
    },
    {
      shard:  "tn-shi",
      name:   "tn-shi",
      date:   2024,
      icon:   "tn-shi.jpg",
      genres: [Genre.FUTURE_CORE, Genre.TRANSCENDENTAL, Genre.ARCADE,],
      track: {
        name: "Synthesis.", link: "https://youtube.com/watch?v=dOP7G5J755s&list=PLYWIouv-DSkARK0RHQXJnm2-webMrXzQ4"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkARK0RHQXJnm2-webMrXzQ4",
      },
      discovered: `YouTube reccs`,
    },
    {
      shard:  "a-39",
      name:   "A-39",
      date:   "summer 2023",
      icon:   "a-39.jpg",
      genres: [Genre.COLOUR_BASS, Genre.HARDCORE, Genre.VOCALOID,],
      track: [
        { name: "聖夜讃歌", link: "https://youtube.com/watch?v=ZWWIxzsAz_c&list=PLYWIouv-DSkCuZN61RvduHWr5h1s4CRB7" },
        { name: "WATER", link: "https://youtube.com/watch?v=h69jvhd8z4w&list=PLYWIouv-DSkCuZN61RvduHWr5h1s4CRB7" },
      ],
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCuZN61RvduHWr5h1s4CRB7",
      },
      discovered: `Phigros`,
    },
    {
      shard:  "myukke",
      name:   "MYUKKE.",
      date:   "summer 2023",
      icon:   "myukke.jpg",
      genres: [Genre.RHYTHM, Genre.ARCADE,],
      track: {
        name: "TTTTTONE", link: "https://youtube.com/watch?v=dE4kqk0tOEA&list=PLYWIouv-DSkCObYw5-q2fTs8VxVq7PF7m"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkCObYw5-q2fTs8VxVq7PF7m",
      },
      discovered: `Phigros`,
    },
    {
      shard:  "silentroom",
      name:   "Silentroom",
      date:   "spring 2024",
      icon:   "silentroom.jpg",
      genres: [Genre.ARCADE, Genre.NEUROFUNK, Genre.RHYTHM,],
      track: [
        { name: "Rainshower", link: "https://youtube.com/watch?v=tLL8cqRmaNE&list=PLYWIouv-DSkAF5BFVwpCjuPOmCUpcM26i" },
        { name: "Nhelv", link: "https://youtube.com/watch?v=XtXRvEsWzQo&list=PLYWIouv-DSkAF5BFVwpCjuPOmCUpcM26i" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkAF5BFVwpCjuPOmCUpcM26i",
      },
      discovered: `YouTube`,
    },
    {
      shard:  "nhato",
      name:   "Nhato",
      date:   "fall 2025",
      icon:   "nhato.jpg",
      genres: [Genre.ELECTRONIC, Genre.TRANCE,],
      track: {
        name: "Radiance", link: "https://youtube.com/watch?v=7o1S3o_VNII"
      },
      discovered: `Phigros`,
    },
    {
      shard:  "chiru-san",
      name:   "Chiru-san",
      date:   2024,
      icon:   "chiru-san.jpg",
      genres: [Genre.ELECTRONIC, Genre.FUTURE_BASS,],
      track: {
        name: "Rebirth", link: "https://youtube.com/watch?v=vrNnTiQe9iE&list=PLYWIouv-DSkCb_zXiyswxJzn6CktpzY2w"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCb_zXiyswxJzn6CktpzY2w",
      },
      discovered: `YouTube reccs`,
    },
    {
      shard:  "johannes-bornlof",
      name:   "Johannes Bornlöf",
      date:   "spring 2020",
      icon:   "johannes-bornlof.jpg",
      genres: [Genre.CINEMATIC, Genre.ORCHESTRAL, ],
      vibes:  [Vibe.HEROIC],
      track: {
        name: "Up in the Hills", link: "https://youtube.com/watch?v=Ncuzd3fztXQ&list=PLYWIouv-DSkB_ZiTuDShR77RiOosIg_-3"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkB_ZiTuDShR77RiOosIg_-3",
      },
      discovered: `AirAttack 2 OST`,
    },
    {
      shard:  "gavin-luke",
      name:   "Gavin Luke",
      date:   2023,
      icon:   "gavin-luke.jpg",
      genres: [Genre.PIANO, Genre.ORCHESTRAL,],
      track: {
        name: "Sentient", link: "https://youtube.com/watch?v=bpGjVY47gTU"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkB2wYNdQ7vwkvGyJz1xw6KL",
      },
      discovered: `YouTube reccs`,
    },
  ],
  "mood": [
    {
      shard:  "hinkik",
      name:   "Hinkik",
      date:   2024,
      icon:   "hinkik.jpg",
      genres: [Genre.ELECTRONIC, Genre.HOUSE,],
      track: {
        name: "Realms", link: "https://youtube.com/watch?v=Ui9GnVC-jfw"
      },
      discovered: `Phigros`,
    },
    {
      shard:  "tea-12",
      name:   "茶鸣拾贰律",
      date:   "summer 2023",
      icon:   "tea-12.jpg",
      genres: [Genre.CPOP, Genre.RHYTHM,],
      track: [
        { name: "青芽", link: "https://youtube.com/watch?v=eP1MkegBcek&list=PLYWIouv-DSkC9I9WIvqLjQjnK28hbsO-p" },
        { name: "Feast 远东之宴", link: "https://youtube.com/watch?v=eI5aADjL7Ac&list=PLYWIouv-DSkC9I9WIvqLjQjnK28hbsO-p" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkC9I9WIvqLjQjnK28hbsO-p",
      },
      discovered: `Phigros`,
    },
    {
      shard:  "kirara-magic",
      name:   "Kirara Magic",
      date:   "summer 2025",
      icon:   "kirara-magic.jpg",
      genres: [Genre.ELECTRONIC,],
      vibes:  [Vibe.CHILLOUT,],
      track: {
        name: "Checkmate", link: "https://youtube.com/watch?v=yHjj9fWTZdY&list=PLYWIouv-DSkAyddNPBMP81AMJQlfDrQRj"
      },
      discovered: `Dance Cube EVO`,
    },
    {
      shard:  "kanro",
      name:   "Kanro",
      date:   "fall 2025",
      icon:   "kanro.jpg",
      genres: [Genre.ELECTRONIC, Genre.DUBSTEP,],
      track: {
        name: "Amethyst", link: "https://youtube.com/watch?v=-__-oI8xWJk"
      },
      discovered: `YouTube reccs`,
    },
    {
      shard:  "hookington",
      name:   "Hookington",
      date:   "fall 2025",
      icon:   "hookington.png",
      genres: [Genre.ELECTRONIC,],
      track: {
        name: "Final Showdown", link: "https://youtube.com/watch?v=UBGTDveF84o"
      },
      discovered: `collab with Chiru-san`,
    },
    {
      shard:  "m-ue",
      name:   "M-UE",
      date:   2025,
      icon:   "m-ue.jpg",
      genres: [Genre.RHYTHM, Genre.ORIENTAL,],
      track: {
        name: "明鏡烈火", link: "https://youtube.com/watch?v=o1yU4OyF-dU"
      },
      discovered: `Phigros`,
    },
    {
      shard:  "noah",
      name:   "Noah",
      date:   2024,
      icon:   "noah.webp",
      genres: [Genre.CINEMATIC, Genre.RHYTHM,],
      track: {
        name: "Revolt From The Abyss", link: "https://youtube.com/watch?v=QBzz-yPE4mI&list=PLYWIouv-DSkAYbF7Q7zNJI1Ynd_btkNWu"
      },
      discovered: `Phigros`,
    },
    {
      shard:  "frums",
      name:   "Frums",
      date:   2025,
      icon:   "frums.jpg",
      genres: [Genre.MUSIC, Genre.BREAKCORE, Genre.TRANSCENDENTAL,],
      track: {
        name: "XNOR XNOR XNOR", link: "https://youtube.com/watch?v=3qnrewFcnQs&list=PLYWIouv-DSkA0OrCMw0YEUTbrimJBzUgW"
      },
      discovered: `Phigros`,
    },
    {
      shard:  "reku",
      name:   "Reku Mochizuki",
      date:   2025,
      icon:   "reku.jpg",
      genres: [Genre.ELECTRONIC, Genre.RHYTHM,],
      track: {
        name: "明鏡烈火", link: "https://youtube.com/watch?v=o1yU4OyF-dU&list=PLYWIouv-DSkBZ0MZMwBcbqW8l7-DmsIjq"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBZ0MZMwBcbqW8l7-DmsIjq",
      },
      discovered: `Phigros`,
    },
    {
      shard:  "such",
      name:   "Such",
      date:   "early 2025",
      icon:   "such.jpg",
      genres: [Genre.JCORE, Genre.BASS,],
      track: {
        name: "Mend Your Ways", link: "https://youtube.com/watch?v=CxGGWotSoOg&list=PLYWIouv-DSkBlchcQSJ6oqzovuufxHqgo"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBlchcQSJ6oqzovuufxHqgo",
      },
      discovered: `YouTube Music reccs`,
    },
    {
      shard:  "polyphia",
      name:   "Polyphia",
      date:   "spring 2025",
      icon:   "polyphia.jpg",
      genres: [Genre.GUITAR, Genre.TRANSCENDENTAL,],
      track: {
        name: "Playing God", link: "https://youtube.com/watch?v=Z5NoQg8LdDk"
      },
      discovered: `YouTube Music reccs`,
    },
    {
      shard:  "yoasobi",
      name:   "YOASOBI",
      date:   "summer 2023",
      icon:   "yoasobi.webp",
      genres: [Genre.JPOP, Genre.ANIME,],
      track: {
        name: "たぶん (Tabun)", link: "https://youtube.com/watch?v=8iuLXODzL04&list=PLYWIouv-DSkDz2EZqORKQX6ToEnZrVCaf"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkDz2EZqORKQX6ToEnZrVCaf",
      },
      discovered: `${h("Oshi no Ko")} anime`,
    },
    {
      shard:  "street",
      name:   "Street",
      date:   2024,
      icon:   "street.jpg",
      genres: [Genre.NEUROFUNK, Genre.RHYTHM,],
      track: {
        name: "Sakura Fubiki", link: "https://youtube.com/watch?v=0keUnlH_0IY&list=PLYWIouv-DSkARFlBS9jQ-7sFT8UecZbfR"
      },
      discovered: `Arcaea`,
    },
    {
      shard:  "paper-skies",
      name:   "Paper Skies",
      date:   2024,
      icon:   "paper-skies.jpg",
      genres: [Genre.ELECTRONIC, Genre.COLOUR_BASS, Genre.DUBSTEP,],
      track: {
        name: "Freefalling", link: "https://youtube.com/watch?v=mcb5iievIgY&list=PLYWIouv-DSkAbl202yYcTYEC6w1QWTJbj"
      },
      discovered: `YouTube reccs`,
    },
    {
      shard:  "xomu",
      name:   "Xomu",
      date:   2025,
      icon:   "xomu.jpg",
      genres: [Genre.ELECTRONIC, Genre.HOUSE, Genre.COMPLEXTRO,],
      track: undefined,
      discovered: `Hinkik`,
    },
    {
      shard:  "ak-q",
      name:   "ak+q",
      date:   "summer 2025",
      icon:   "ak-q.jpg",
      genres: [Genre.ARTCORE, Genre.GOTHIC_HARDCORE, Genre.RHYTHM,],
      track: {
        name: "Ignotus", link: "https://youtube.com/watch?v=U7M6e1MGYl0&list=PLYWIouv-DSkB918DxkTo33KMb1aITaB_9"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkB918DxkTo33KMb1aITaB_9",
      },
      discovered: `Arcaea`,
    },
    {
      shard:  "bo-burnham",
      name:   "Bo Burnham",
      date:   2021,
      icon:   "bo-burnham.webp",
      genres: [Genre.COMEDY, Genre.POP, Genre.RAP, Genre.PIANO,],
      track: [
        { name: "Are You Happy", link: "https://youtube.com/watch?v=sHxtZb9VRdg&list=PLYWIouv-DSkDG5k4_HrYF4VSNWWPsD5Nw" },
        { name: "The Chicken", link: "https://youtube.com/watch?v=NeOhV4zOxJ4&list=PLYWIouv-DSkDG5k4_HrYF4VSNWWPsD5Nw" },
      ],
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkDG5k4_HrYF4VSNWWPsD5Nw",
      },
      discovered: `YouTube reccs`,
    },
  ],
  "beatbox": [
    {
      shard:  "wing",
      name:   "WING",
      date:   "spring 2025",
      icon:   "wing.jpg",
      genres: [Genre.BEATBOX,],
      track: {
        name: "Dopamine (DnB remix)", link: "https://youtube.com/watch?v=GBuKYAN0RbM&list=PLYWIouv-DSkCC0pprSmxOqXkVTigfkUQ-"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCC0pprSmxOqXkVTigfkUQ-",
      },
      discovered: `YouTube`,
    },
    {
      shard:  "kaji",
      name:   "KAJI",
      date:   2025,
      icon:   "kaji.jpg",
      genres: [Genre.BEATBOX, Genre.HARDCORE, Genre.TECHNO,],
      track: {
        name: "Bass Factory", link: "https://youtube.com/watch?v=YQRjGHsrzbk&list=PLYWIouv-DSkCC0pprSmxOqXkVTigfkUQ-"
      },
      discovered: `Grand Beatbox Battle 2024 quarter-final vs WING`,
    },
    {
      shard:  "improver",
      name:   "Improver",
      date:   2025,
      icon:   "improver.jpg",
      genres: [Genre.BEATBOX, Genre.DRUM_N_BASS,],
      track: {
        name: "Feel the Future", link: "https://youtube.com/watch?v=tVZw7vQGR30&list=PLYWIouv-DSkCC0pprSmxOqXkVTigfkUQ-"
      },
      discovered: `Grand Beatbox Battle 2023 quarter-final vs WING`,
    },
    {
      shard:  "den",
      name:   "DEN",
      date:   2025,
      icon:   undefined,
      genres: [Genre.BEATBOX,],
      track: {
        name: "One in a Million", link: undefined
      },
      discovered: `Grand Beatbox Battle 2025 wildcard`,
    },
  ],
  "love them, but don’t listen much": [
    {
      shard:  "falcon-dives",
      name:   "Falcon Dives",
      date:   2021,
      icon:   "falcon-dives.jpg",
      genres: [Genre.ELECTRONIC,],
      vibes:  [Vibe.DISCO],
      track: {
        name: "Teenage Color", link: "https://youtube.com/watch?v=rVAG7Dni1yA&list=PLYWIouv-DSkDGRBjzSJnzGnxKnIxaA_4r"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkDGRBjzSJnzGnxKnIxaA_4r",
      },
      discovered: `Grian’s timelapse background music`,
    },
    {
      shard:  "rhyx",
      name:   "RHYX",
      date:   2025,
      icon:   "rhyx.jpg",
      genres: [Genre.HITECH,],
      discovered: `YouTube reccs`,
    },
    {
      shard:  "s9ryne",
      name:   "s9ryne",
      date:   "summer 2023",
      icon:   "s9ryne.jpg",
      genres: [Genre.ELECTRONIC, Genre.DUBSTEP,],
      discovered: `Phigros`,
    },
    {
      shard:  "akira-complex",
      name:   "Akira Complex",
      date:   "summer 2025",
      icon:   "akira-complex.jpg",
      genres: [Genre.ARTCORE, Genre.RHYTHM,],
      track: {
        name: "Ether Strike", link: undefined
      },
      discovered: `CHUNITHM`,
    },
    {
      shard:  "laur",
      name:   "Laur",
      date:   2024,
      icon:   "laur.webp",
      genres: [Genre.ARTCORE,],
      track: {
        name: "PRAGMATISM -RESURRECTION-", link: "https://youtube.com/watch?v=W0nauM-k3eU"
      },
      discovered: `Phigros / Arcaea`,
    },
    {
      shard:  "lime",
      name:   "Lime",
      date:   2024,
      icon:   "lime.jpg",
      genres: [Genre.ELECTRONIC, Genre.RHYTHM,],
      track: {
        name: "Final Step!", link: "https://youtube.com/watch?v=v3JExHpJ09s&list=RDv3JExHpJ09s"
      },
      discovered: `Phigros`,
    },
    {
      shard:  "se-u-ra",
      name:   "Se-U-Ra",
      date:   2024,
      icon:   "se-u-ra.jpg",
      genres: [Genre.ARTCORE, Genre.RHYTHM,],
      track: {
        name: "Ark Six", link: "https://youtube.com/watch?v=BY4hMJPIbrI&list=PLYWIouv-DSkC4py2XtzGLX5AwEaGr1Q64"
      },
      discovered: `Phigros`,
    },
    {
      shard:  "arcerion",
      name:   "Arcerion",
      date:   2024,
      icon:   "arcerion.webp",
      genres: [Genre.ELECTRONIC,],
      track: {
        name: "when you realize the music of the future is just distorting a guitar", link: "https://youtube.com/watch?v=tIVn888OHbY&list=PLYWIouv-DSkAzGVoAAvsJe9Ank9cyqk-G"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkAzGVoAAvsJe9Ank9cyqk-G",
      },
      discovered: `YouTube reccs`,
    },
    {
      shard:  "azali",
      name:   "AZALI",
      date:   2024,
      icon:   "azali.jpg",
      genres: [Genre.PIANO, Genre.ARTCORE, Genre.BREAKCORE,],
      track: {
        name: "TO DUST THOU SHALT RETURN", link: undefined
      },
      discovered: `YouTube reccs`,
    },
    {
      shard:  "sakuzyo",
      name:   "Sakuzyo",
      date:   2023,
      icon:   "sakuzyo.jpg",
      genres: [Genre.ELECTRONIC,],
      track: {
        name: "Distorted Fate", link: undefined
      },
      discovered: `Phigros`,
    },
    {
      shard:  "jiang-mi-tiao",
      name:   "姜米條",
      date:   "summer 2023",
      icon:   "jiang-mi-tiao.jpg",
      genres: [Genre.NEUROFUNK, Genre.RHYTHM,],
      track: [
        { name: "inferior", link: "https://youtube.com/watch?v=A-refzLZ7u0" },
        { name: "Shadow", link: "https://youtube.com/watch?v=11un4aCwCrs" },
      ],
      discovered: `Phigros`,
    },
    {
      shard:  "virtual-riot",
      name:   "Virtual Riot",
      date:   2024,
      icon:   "virtual-riot.jpg",
      genres: [Genre.ELECTRONIC, Genre.COMPLEXTRO, Genre.DUBSTEP,],
      track: {
        name: "I heard you like polyrhythms", link: "https://youtube.com/watch?v=SthcxWPXG_E"
      },
      discovered: `YouTube reccs`,
    },
    {
      shard:  "heiakim",
      name:   "heiakim",
      date:   2024,
      icon:   "heiakim.webp",
      genres: [Genre.JPOP,],
      track: {
        name: "nana", link: "https://youtube.com/watch?v=iXH6zdvhN80"
      },
      discovered: `YouTube reccs`,
    },
    {
      shard:  "psyqui",
      name:   "PSYQUI",
      date:   2025,
      icon:   "psyqui.jpg",
      genres: [Genre.ELECTRONIC, Genre.JCORE,],
      track: {
        name: "Mend Your Ways", link: undefined
      },
      discovered: `Such – Mend Your Ways`,
    },
    {
      shard:  "tanger",
      name:   "Tanger",
      date:   2024,
      icon:   "tanger.jpg",
      genres: [Genre.ELECTRONIC,],
      track: {
        name: "K1LL SOMEBODY", link: "https://youtube.com/watch?v=zLzRsZtZ2ow"
      },
      discovered: `YouTube interview`,
    },
    {
      shard:  "feurrm-films",
      name:   "feuerrmFilms",
      date:   2018,
      icon:   "feuerrm.jpg",
      genres: [Genre.ELECTRONIC,],
      track: {
        name: "Special Events", link: undefined
      },
      discovered: `YouTube`,
    },
  ],
  "franchise soundtracks": [
    {
      shard:  "arcane",
      name:   "Arcane",
      date:   "spring 2025",
      icon:   "arcane.jpg",
      genres: [Genre.ALT_POP, Genre.PUNK, Genre.CINEMATIC,],
      vibes:  [Vibe.EMOTIONAL],
      track: {
        name: "What Could Have Been", link: "https://youtube.com/watch?v=liPu1_aPH5k&list=PLYWIouv-DSkCdH3RpudnBc9RplsrUqQ_n"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCdH3RpudnBc9RplsrUqQ_n",
      },
      discovered: `reddit, probably`,
    },
    {
      shard:  "ultraman",
      name:   "Ultraman",
      date:   "childhood",
      icon:   "ultraman.jpg",
      genres: ["ultraman" as Genre, Genre.ANIME],
      vibes:  [Vibe.HEROIC],
      track: [
        { name: "Ultraman Mebius", link: "https://youtube.com/watch?v=mRzSHpKROcU&list=PLYWIouv-DSkCJFwPiWrxfO4BqSKtU8UbM" },
        { name: "Ultraman Zero", link: "https://youtube.com/watch?v=h_YYmNzydy8&list=PLYWIouv-DSkCJFwPiWrxfO4BqSKtU8UbM" },
      ],
      links: {
        youtube: "https://youtube.com/watch?v=dOP7G5J755s&list=PLYWIouv-DSkARK0RHQXJnm2-webMrXzQ4",
      },
      discovered: `childhood`,
    },
    {
      shard:  "master-duel",
      name:   "Master Duel",
      date:   2022,
      icon:   "master-duel.jpg",
      genres: [Genre.CINEMATIC, Genre.ORCHESTRAL,],
      discovered: String.raw`¯\_(ツ)_/¯`,
    },
    {
      shard:  "yu-gi-oh",
      name:   "Yu-Gi-Oh!",
      date:   2022,
      icon:   "yu-gi-oh.jpg",
      genres: [Genre.ANIME, Genre.JPOP,],
      track: [
        { name: "Calling", link: undefined },
        { name: "BRAVING", link: undefined },
      ],
      discovered: `childhood`,
    },
    {
      shard:  "air-attack",
      name:   "AirAttack",
      date:   2020,
      icon:   "air-attack.jpg",
      genres: [Genre.CINEMATIC,],
      vibes:  [Vibe.HEROIC, Vibe.WAR],
      track: [
        { name: "Dark Sands", link: undefined },
        { name: "Operation Red Sea – Land", link: undefined },
      ],
      discovered: `childhood`,
    },
    {
      shard:  "tiny-defense",
      name:   "Tiny Defense",
      date:   2020,
      icon:   "tiny-defense.webp",
      track: [
        { name: "Mission Stage", link: undefined },
        { name: "Underwater", link: undefined },
      ],
      discovered: `childhood`,
    },
    {
      shard:  "pvz",
      name:   "Plants vs. Zombies",
      date:   2020,
      icon:   "pvz.webp",
      genres: [Genre.GAME,],
      track: {
        name: "Zombie On Your Lawn", link: undefined
      },
      discovered: `childhood`,
    },
    {
      shard:  "dune",
      name:   "Dune",
      date:   2022,
      icon:   "dune.jpg",
      genres: [Genre.CINEMATIC,],
      discovered: `literally searched up “major films in 2021” while in my film-watching arc`,
    },
    {
      shard:  "boonie-bears",
      name:   "熊出没",
      date:   "childhood",
      icon:   "boonie-bears.jpg",
      genres: [Genre.CPOP,],
      track: {
        name: "你从未离去", link: "https://youtube.com/watch?v=KEZx9ZJKgLQ&list=PLYWIouv-DSkDNtgU2E_Clta_JZlmCU-do"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkDNtgU2E_Clta_JZlmCU-do",
      },
      discovered: `childhood`,
    },
    {
      shard:  "mlp",
      name:   "My Little Pony",
      date:   2023,
      icon:   "mlp.jpg",
      genres: [Genre.ALT_POP, Genre.ELECTRONIC,],
      track: [
        { name: "Friendship Games", link: "https://youtube.com/watch?v=CNEYbc3C2NU&list=PLYWIouv-DSkCqc2skmsaCX1U3oMewEhkE" },
        { name: "Legend You Were Meant To Be", link: "https://youtube.com/watch?v=nCkV3yjQeOk&list=PLYWIouv-DSkCqc2skmsaCX1U3oMewEhkE" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkCqc2skmsaCX1U3oMewEhkE",
      },
      discovered: `childhood`,
    },
    {
      shard:  "kpop-demon-hunters",
      name:   "K-pop Demon Hunters",
      date:   "summer 2025",
      icon:   undefined,
      genres: [Genre.KPOP, Genre.POP,],
      track: {
        name: "Your Idol", link: "https://youtube.com/watch?v=mq2dq_KeV0M&list=PLYWIouv-DSkBSpUMpO2npkjWITrqSj5ev",
    },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBSpUMpO2npkjWITrqSj5ev",
      },
      discovered: `childhood`,
    },
  ],
  classics: [
    {
      shard:  "elektronomia",
      name:   "Elektronomia",
      date:   2016,
      icon:   "elektronomia.webp",
      genres: [Genre.EDM, Genre.HOUSE,],
      track: [
        { name: "United", link: "https://youtube.com/watch?v=EgXcda1SzxU" },
        { name: "Ibiza", link: "https://youtube.com/watch?v=ru4Ttt22cuQ" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBvAA5lNPvGwnqvKbvPiohq",
      },
      discovered: `iXPLODE`,
    },
    {
      shard:  "alan-walker",
      name:   "Alan Walker",
      date:   2018,
      icon:   "alan-walker.jpg",
      genres: [Genre.EDM, Genre.HOUSE,],
      track: {
        name: "Different World", link: "https://youtube.com/watch?v=m-PJmmvyP10&list=PLYWIouv-DSkDwSbC-HHmA7UaQvpkr-Aqr"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkDwSbC-HHmA7UaQvpkr-Aqr",
      },
      discovered: `introduced by friend`,
    },
    {
      shard:  "jim-yosef",
      name:   "Jim Yosef",
      date:   2016,
      icon:   "jim-yosef.png",
      genres: [Genre.EDM, Genre.HOUSE,],
      track: {
        name: "Linked", link: undefined
      },
      discovered: `NCS`,
    },
    {
      shard:  "electro-light",
      name:   "Electro-Light",
      date:   2017,
      icon:   "electro-light.webp",
      track: {
        name: "Throwback", link: undefined
      },
      genres: [Genre.EDM, Genre.HARDCORE, Genre.TRAP,],
      discovered: `NCS`,
    },
    {
      shard:  "alex-skrindo",
      name:   "Alex Skrindo",
      date:   2017,
      icon:   "alex-skrindo.jpg",
      genres: [Genre.EDM,],
      track: {
        name: "Lightning", link: undefined
      },
      discovered: `NCS`,
    },
    {
      shard:  "the-fat-rat",
      name:   "TheFatRat",
      date:   2019,
      icon:   "the-fat-rat.jpg",
      genres: [Genre.EDM,],
      track: {
        name: "Monody", link: undefined
      },
      discovered: `YouTube`,
    },
    {
      shard:  "k-391",
      name:   "K-391",
      date:   2019,
      icon:   "k-391.jpg",
      genres: [Genre.ELECTRONIC,],
      track: {
        name: "Lonely World", link: undefined
      },
      discovered: `Alan Walker`,
    },
  ],
  pop: [
    {
      shard:  "avril-lavigne",
      name:   "Avril Lavigne",
      date:   2017,
      icon:   "avril-lavigne.jpg",
      genres: [Genre.ROCK, Genre.POP,],
      track: {
        name: "When You’re Gone", link: "https://youtube.com/watch?v=0G3_kG5FFfQ&list=PLYWIouv-DSkDo8xDD039YebXy0ONQyPOA"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkDo8xDD039YebXy0ONQyPOA",
      },
      discovered: `some Ultraman video on YouTube`,
    },
    {
      shard:  "owl-city",
      name:   "Owl City",
      date:   2022,
      icon:   "owl-city.jpg",
      genres: [Genre.POP,],
      track: {
        name: "Fireflies", link: undefined
      },
      discovered: `childhood nostalgia`,
    },
    {
      shard:  "taylor-swift",
      name:   "Taylor Swift",
      icon:   undefined,
      genres: [Genre.POP,],
      track: {
        name: "Anti-hero", link: undefined
      },
      discovered: `childhood`,
    },
    {
      shard:  "olivia-rodrigo",
      name:   "Olivia Rodrigo",
      date:   2024,
      icon:   undefined,
      genres: [Genre.POP, Genre.ALT_POP, Genre.ALT_PUNK_ROCK,],
      track: {
        name: "Can’t Catch Me Now", link: undefined
      },
      discovered: `sister`,
    },
    {
      shard:  "katseye",
      name:   "KATSEYE",
      date:   2025,
      icon:   undefined,
      genres: [Genre.KPOP,],
      track: {
        name: "Debut", link: "https://youtube.com/watch?v=bYg6aMDQ_TA&list=PLYWIouv-DSkA_6f6V_ZChkIKn7_Foqxnd"
      },
      discovered: `sister`,
    },
  ],
  labels: [
    {
      shard:  "firefly-music",
      name:   "Firefly Music",
      date:   2025,
      icon:   "firefly-music.jpg",
      genres: [Genre.ELECTRONIC,],
      discovered: `PIKASONIC - New Start in YouTube reccs`,
    },
    {
      shard:  "ncs",
      name:   "NoCopyrightSounds",
      date:   2016,
      icon:   "ncs.jpg",
      genres: [Genre.ELECTRONIC,],
      track: [
        { name: "SLASH", link: "https://youtube.com/watch?v=cGkv5RcPRuo&list=PLYWIouv-DSkAB87xm3E0Z1MttAXDTEzOr" },
        { name: "Throwback", link: "https://youtube.com/watch?v=cXLadJlS_nA&list=PLYWIouv-DSkAB87xm3E0Z1MttAXDTEzOr" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkAB87xm3E0Z1MttAXDTEzOr",
      },
      discovered: `iXPLODE’s video background music`,
    },
    {
      shard:  "nomia-tunes",
      name:   "NomiaTunes",
      icon:   "nomia-tunes.jpg",
      genres: [Genre.ELECTRONIC,],
      discovered: `Elektronomia`,
    },
  ],
  isolates: [
    {
      shard:  "tokyo-machine",
      name:   "Tokyo Machine",
      date:   2022,
      icon:   "tokyo-machine.jpg",
      genres: undefined,
      track: {
        name: "SLASH", link: undefined,
      },
      discovered: `NCS`,
    },
    {
      shard:  "function-phantom",
      name:   "Function Phantom",
      date:   2024,
      icon:   "function-phantom.jpg",
      track: {
        name: "Algebra", link: "https://youtube.com/watch?v=nePdNxMnvX0&list=PLYWIouv-DSkA_6f6V_ZChkIKn7_Foqxnd"
      },
      genres: [Genre.RHYTHM, Genre.ELECTRONIC,],
      discovered: `Phigros April Fool’s custom chart on bilibili`,
    },
    {
      shard:  "mafumafu",
      name:   "Mafumafu",
      date:   2023,
      icon:   "mafumafu.jpg",
      genres: [Genre.JCORE,],
      track: {
        name: "I wanna be a girl", link: "https://youtube.com/watch?v=ucbx9we6EHk&list=PLYWIouv-DSkA_6f6V_ZChkIKn7_Foqxnd",
      },
      discovered: `Rhythm+ (browser rhythm game)`,
    },
    {
      shard:  "hoshimachi-suisei",
      name:   "Hoshimachi Suisei",
      date:   2025,
      icon:   "bibbidiba.jpg",
      genres: [Genre.JCORE,],
      track: {
        name: "BIBBIDIBA", link: "https://youtube.com/watch?v=8ZP5eqm4JqM&list=PLYWIouv-DSkA_6f6V_ZChkIKn7_Foqxnd",
      },
      discovered: `YouTube Music reccs`,
    },
    {
      shard:  "wave-meow",
      name:   "Wave Meow",
      date:   2025,
      icon:   "natsu.jpg",
      genres: [Genre.DRUM_N_BASS,],
      track: {
        name: "Natsu!", link: "https://youtube.com/watch?v=GCSDxOLWZ2o&list=PLYWIouv-DSkA_6f6V_ZChkIKn7_Foqxnd",
      },
      discovered: `Firefly Music`,
    },
    {
      shard:  "infected-mushroom",
      name:   "Infected Mushroom",
      date:   2025,
      icon:   "infected-mushroom.jpg",
      genres: [Genre.ELECTRONIC, Genre.BASS,],
      track: {
        name: "Guitarmass", link: undefined,
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkCwKBdvwPTXmZvCoGbu1LoH",
      },
      discovered: `KAJI – Demons of Pain (beatbox)`,
    },
    {
      shard:  "giga",
      name:   "Giga",
      date:   2024,
      icon:   "giga.jpg",
      genres: [Genre.TRAP, Genre.VOCALOID,],
      track: {
        name: "Beyond the Way", link: undefined
      },
      discovered: `${h("Beyond the Way")} in YouTube reccs`,
    },
    {
      shard:  "deco-27",
      name:   "DECO*27",
      date:   2024,
      icon:   "deco-27.jpg",
      genres: [Genre.VOCALOID,],
      track: {
        name: "Rabbit Hole", link: undefined
      },
      discovered: `${h("Rabbit Hole")} in YouTube reccs`,
    },
    {
      shard:  "lupus-nocte",
      name:   "Lupus Nocte",
      date:   2021,
      icon:   "lupus-nocte.jpg",
      genres: [Genre.ELECTRONIC,],
      track: {
        name: "Howling", link: undefined
      },
      discovered: `${a("GoodTimesWithScar", "https://youtube.com/@GoodTimesWithScar")}’s timelapse background music`,
    },
    {
      shard:  "eason-chan",
      name:   "Eason Chan",
      date:   2023,
      icon:   "eason-chan.jpg",
      genres: [Genre.CPOP,],
      track: {
        name: "«孤勇者»", link: undefined
      },
      discovered: `played by a friend`,
    },
    {
      shard:  "tf-boys",
      name:   "TFBOYS",
      date:   "childhood",
      icon:   "tf-boys.jpeg",
      track: {
        name: "« 青春修炼手册 »", link: undefined
      },
      genres: [Genre.CPOP,],
      discovered: `childhood`,
    },
    {
      shard:  "tatsh",
      name:   "Tatsh",
      date:   2024,
      icon:   "xenolith.jpg",
      track: {
        name: "Xenolith", link: "https://youtube.com/watch?v=-4a0_SaMWxg"
      },
      genres: [Genre.ELECTRONIC,],
      discovered: `Phigros × Paradigm: Reboot`,
    },
  ],
};
