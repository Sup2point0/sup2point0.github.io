import { a, h } from "#scripts/utils";
import type { ArtistData } from "#scripts/types";


export const artists: {
  [collection: string]: ArtistData[];
} = {
  "newly discovered": [
    {
      shard: "kanro",
      name: "Kanro",
      date: "2025 FALL",
      icon: "kanro.jpg",
      genres: ["electronic", "dubstep"],
      track: {
        name: "Amethyst", link: undefined
      },
      discovered: "YouTube reccs",
    },
    {
      shard: "hookington",
      name: "Hookington",
      date: "2025 FALL",
      icon: "hookington.png",
      genres: ["electronic"],
      track: {
        name: "Final Showdown", link: "https://youtube.com/watch?v=UBGTDveF84o"
      },
      discovered: "collab with Chiru-san",
    },
    {
      shard: "kirara-magic",
      name: "Kirara Magic",
      date: "2025 SUMMER",
      icon: undefined,
      genres: ["electronic", "chillout"],
      track: {
        name: "Checkmate", link: undefined
      },
      discovered: "Dance Cube EVO",
    },
    {
      shard: "geoxor",
      name: "Geoxor",
      date: "2025",
      icon: "geoxor.jpg",
      genres: ["electronic"],
      discovered: "YouTube Music reccs",
    }
  ],
  "absolute favourites": [
    {
      shard: "camellia",
      name: "かめりあ",
      date: "2023",
      icon: "camellia.png",
      genres: ["Camelliacore", "full flavour", "transcendental", "rhythm"],
      track: [
        { name: "Dance With Silence", link: "https://youtube.com/watch?v=ounWMVmQs0w&list=PLYWIouv-DSkCLPwaevGf-8oKXSE4syPAT" },
        { name: "Spin Eternally", link: "https://youtube.com/watch?v=IuRwqB9NwVQ&list=PLYWIouv-DSkCLPwaevGf-8oKXSE4syPAT" },
      ],
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCLPwaevGf-8oKXSE4syPAT",
      },
      discovered: "Phigros",
    },
    {
      shard: "vexento",
      name: "Vexento",
      date: "2018",
      icon: "vexento.jpg",
      genres: ["electronic", "chill"],
      track: {
        name: "Banana Breeze", link: "https://youtube.com/watch?v=bBOwy0Ykk1Q&list=PLYWIouv-DSkCza5V1caC65JOK1rkrDqxK"
      },
      links: {
        youtube: "https://youtube.com/watch?v=h_YYmNzydy8&list=PLYWIouv-DSkCJFwPiWrxfO4BqSKtU8UbM",
      },
      discovered: "some random Scratch project",
    },
    {
      shard: "pikasonic",
      name: "PIKASONIC",
      date: "2024",
      icon: "pikasonic.jpg",
      genres: ["electronic", "future bass", "j-core"],
      track: {
        name: "New Start", link: "https://youtube.com/watch?v=_P_2hh8CE_s&list=PLYWIouv-DSkDro0y_y55ojMZ6u3m6RKzJ"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkDro0y_y55ojMZ6u3m6RKzJ",
      },
      discovered: "YouTube reccs",
    },
    {
      shard: "tn-shi",
      name: "tn-shi",
      date: "2024",
      icon: "tn-shi.jpg",
      genres: ["artcore", "transcendental", "arcade"],
      track: {
        name: "Synthesis.", link: "https://youtube.com/watch?v=dOP7G5J755s&list=PLYWIouv-DSkARK0RHQXJnm2-webMrXzQ4"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkARK0RHQXJnm2-webMrXzQ4",
      },
      discovered: "YouTube reccs",
    },
  ],
  regulars: [
    {
      shard: "a-39",
      name: "A-39",
      date: "2023",
      icon: "a-39.jpg",
      genres: ["colour bass", "hardcore", "vocaloid"],
      track: [
        { name: "聖夜讃歌", link: "https://youtube.com/watch?v=ZWWIxzsAz_c&list=PLYWIouv-DSkCuZN61RvduHWr5h1s4CRB7" },
        { name: "WATER", link: "https://youtube.com/watch?v=h69jvhd8z4w&list=PLYWIouv-DSkCuZN61RvduHWr5h1s4CRB7" },
      ],
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCuZN61RvduHWr5h1s4CRB7",
      },
      discovered: "Phigros",
    },
    {
      shard: "puru",
      name: "puru",
      date: "2024",
      icon: "puru.jpg",
      genres: ["rhythm", "chill", "trap"],
      track: {
        name: "Grimheart", link: "https://youtube.com/watch?v=S9LE5FB5E5I&list=PLYWIouv-DSkBt4zknZoQPwgiYLB4xHSRf"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBt4zknZoQPwgiYLB4xHSRf",
      },
      discovered: "Arcaea",
    },
    {
      shard: "stessie",
      name: "Stessie",
      date: "2025",
      icon: "stessie.jpg",
      genres: ["electronic", "chill"],
      track: {
        name: "What If", link: "https://youtube.com/watch?v=4c-PohhHgWI&list=PLYWIouv-DSkAlt2TuUBsjZgKF17agTDx4"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkAlt2TuUBsjZgKF17agTDx4",
      },
      discovered: "Firefly Music",
    },
    {
      shard: "myukke",
      name: "MYUKKE.",
      date: "2023",
      icon: "myukke.jpg",
      genres: ["rhythm", "arcade"],
      track: {
        name: "TTTTTONE", link: "https://youtube.com/watch?v=dE4kqk0tOEA&list=PLYWIouv-DSkCObYw5-q2fTs8VxVq7PF7m"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkCObYw5-q2fTs8VxVq7PF7m",
      },
      discovered: "Phigros",
    },
    {
      shard: "silentroom",
      name: "Silentroom",
      date: "2023",
      icon: "silentroom.jpg",
      genres: ["arcade", "neurofunk", "rhythm"],
      track: [
        { name: "Rainshower", link: "https://youtube.com/watch?v=tLL8cqRmaNE&list=PLYWIouv-DSkAF5BFVwpCjuPOmCUpcM26i" },
        { name: "Nhelv", link: "https://youtube.com/watch?v=XtXRvEsWzQo&list=PLYWIouv-DSkAF5BFVwpCjuPOmCUpcM26i" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkAF5BFVwpCjuPOmCUpcM26i",
      },
      discovered: "YouTube",
    },
    {
      shard: "such",
      name: "Such",
      date: "2024",
      icon: "such.jpg",
      genres: ["j-core", "bass"],
      track: {
        name: "Mend Your Ways", link: "https://youtube.com/watch?v=CxGGWotSoOg&list=PLYWIouv-DSkBlchcQSJ6oqzovuufxHqgo"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBlchcQSJ6oqzovuufxHqgo",
      },
      discovered: "YouTube Music reccs",
    },
    {
      shard: "tea-12",
      name: "茶鸣拾贰律",
      date: "2023",
      icon: "tea-12.jpg",
      genres: ["c-pop", "rhythm"],
      track: [
        { name: "青芽", link: "https://youtube.com/watch?v=eP1MkegBcek&list=PLYWIouv-DSkC9I9WIvqLjQjnK28hbsO-p" },
        { name: "Feast 远东之宴", link: "https://youtube.com/watch?v=eI5aADjL7Ac&list=PLYWIouv-DSkC9I9WIvqLjQjnK28hbsO-p" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkC9I9WIvqLjQjnK28hbsO-p",
      },
      discovered: "Phigros",
    },
    {
      shard: "johannes-bornlof",
      name: "Johannes Bornlöf",
      date: "2020",
      icon: "johannes-bornlof.jpg",
      genres: ["cinematic", "orchestral", "heroic"],
      track: {
        name: "Up in the Hills", link: "https://youtube.com/watch?v=Ncuzd3fztXQ&list=PLYWIouv-DSkB_ZiTuDShR77RiOosIg_-3"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkB_ZiTuDShR77RiOosIg_-3",
      },
      discovered: "AirAttack 2 OST",
    },
    {
      shard: "gavin-luke",
      name: "Gavin Luke",
      date: "2023",
      icon: "gavin-luke.jpg",
      genres: ["piano", "orchestral"],
      track: {
        name: "Sentient", link: "https://youtube.com/watch?v=bpGjVY47gTU"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkB2wYNdQ7vwkvGyJz1xw6KL",
      },
      discovered: "YouTube reccs",
    },
  ],
  mood: [
    {
      shard: "hinkik",
      name: "Hinkik",
      date: "2024",
      icon: "hinkik.jpg",
      genres: ["electronic", "house"],
      track: {
        name: "Realms", link: "https://youtube.com/watch?v=Ui9GnVC-jfw"
      },
      discovered: "Phigros",
    },
    {
      shard: "chiru-san",
      name: "Chiru-san",
      date: "2024",
      icon: "chiru-san.jpg",
      genres: ["electronic", "future bass"],
      track: {
        name: "Rebirth", link: "https://youtube.com/watch?v=vrNnTiQe9iE&list=PLYWIouv-DSkCb_zXiyswxJzn6CktpzY2w"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCb_zXiyswxJzn6CktpzY2w",
      },
      discovered: "YouTube reccs",
    },
    {
      shard: "reku",
      name: "Reku Mochizuki",
      date: "2025",
      icon: "reku.jpg",
      genres: ["electronic", "rhythm"],
      track: {
        name: "明鏡烈火", link: "https://youtube.com/watch?v=o1yU4OyF-dU&list=PLYWIouv-DSkBZ0MZMwBcbqW8l7-DmsIjq"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBZ0MZMwBcbqW8l7-DmsIjq",
      },
      discovered: "Phigros",
    },
    {
      shard: "rhyx",
      name: "RHYX",
      date: "2025",
      icon: "rhyx.jpg",
      genres: ["hi-tech"],
      discovered: "YouTube reccs",
    },
    {
      shard: "arcerion",
      name: "Arcerion",
      date: "2024",
      icon: "arcerion.webp",
      genres: ["electronic"],
      track: {
        name: "when you realize the music of the future is just distorting a guitar", link: undefined
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkAzGVoAAvsJe9Ank9cyqk-G",
      },
      discovered: "YouTube reccs",
    },
    {
      shard: "polyphia",
      name: "Polyphia",
      date: "2025",
      icon: "polyphia.jpg",
      genres: ["guitar", "transcendental"],
      track: {
        name: "Playing God", link: "https://youtube.com/watch?v=Z5NoQg8LdDk"
      },
      discovered: "YouTube Music reccs",
    },
    {
      shard: "yoasobi",
      name: "YOASOBI",
      date: "2023",
      icon: "yoasobi.webp",
      genres: ["j-pop", "anime"],
      track: {
        name: "たぶん (Tabun)", link: "https://youtube.com/watch?v=8iuLXODzL04&list=PLYWIouv-DSkDz2EZqORKQX6ToEnZrVCaf"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkDz2EZqORKQX6ToEnZrVCaf",
      },
      discovered: `${h("Oshi no Ko")} anime`,
    },
    {
      shard: "street",
      name: "Street",
      date: "2024",
      icon: "street.jpg",
      genres: ["neurofunk", "rhythm"],
      track: {
        name: "Sakura Fubiki", link: "https://youtube.com/watch?v=0keUnlH_0IY&list=PLYWIouv-DSkARFlBS9jQ-7sFT8UecZbfR"
      },
      discovered: "Arcaea",
    },
    {
      shard: "xomu",
      name: "Xomu",
      date: "2025",
      icon: "xomu.jpg",
      genres: ["electronic", "house", "complextro"],
      track: undefined,
      discovered: "Hinkik",
    },
    {
      shard: "ak-q",
      name: "ak+q",
      date: "2025",
      icon: "ak-q.jpg",
      genres: ["artcore", "gothic hardcore", "rhythm"],
      track: {
        name: "Ignotus", link: "https://youtube.com/watch?v=U7M6e1MGYl0&list=PLYWIouv-DSkB918DxkTo33KMb1aITaB_9"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkB918DxkTo33KMb1aITaB_9",
      },
      discovered: "Arcaea",
    },
    {
      shard: "noah",
      name: "Noah",
      date: "2024",
      icon: "noah.webp",
      genres: ["cinematic", "rhythm"],
      track: {
        name: "Revolt From The Abyss", link: undefined
      },
      discovered: "Phigros",
    },
    {
      shard: "akira-complex",
      name: "Akira Complex",
      date: "2025",
      icon: "akira-complex.jpg",
      genres: ["artcore", "rhythm"],
      track: {
        name: "Ether Strike", link: undefined
      },
      discovered: "CHUNITHM",
    },
    {
      shard: "lime",
      name: "Lime",
      date: "2024",
      icon: "lime.jpg",
      genres: ["electronic", "rhythm"],
      track: {
        name: "Final Step!", link: undefined
      },
      discovered: "Phigros",
    },
    {
      shard: "falcon-dives",
      name: "Falcon Dives",
      date: "2022",
      icon: "falcon-dives.jpg",
      genres: ["disco", "electronic"],
      track: {
        name: "Teenage Color", link: "https://youtube.com/watch?v=rVAG7Dni1yA&list=PLYWIouv-DSkDGRBjzSJnzGnxKnIxaA_4r"
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkDGRBjzSJnzGnxKnIxaA_4r",
      },
      discovered: "Grian’s timelapse background music",
    },
    {
      shard: "jiang-mi-tiao",
      name: "姜米條",
      date: "2023",
      icon: "jiang-mi-tiao.jpg",
      genres: ["neurofunk", "rhythm"],
      track: [
        { name: "inferior", link: "https://youtube.com/watch?v=A-refzLZ7u0" },
        { name: "Shadow", link: "https://youtube.com/watch?v=11un4aCwCrs" },
      ],
      discovered: "Phigros",
    },
    {
      shard: "virtual-riot",
      name: "Virtual Riot",
      date: "2024",
      icon: "virtual-riot.jpg",
      genres: ["electronic", "complextro", "dubstep"],
      track: {
        name: "I heard you like polyrhythms", link: "https://youtube.com/watch?v=SthcxWPXG_E"
      },
      discovered: "YouTube reccs",
    },
    {
      shard: "bo-burnham",
      name: "Bo Burnham",
      date: "2021",
      icon: "bo-burnham.webp",
      genres: ["comedy", "pop", "rap", "piano"],
      track: [
        { name: "Are You Happy", link: "https://youtube.com/watch?v=sHxtZb9VRdg&list=PLYWIouv-DSkDG5k4_HrYF4VSNWWPsD5Nw" },
        { name: "The Chicken", link: "https://youtube.com/watch?v=NeOhV4zOxJ4&list=PLYWIouv-DSkDG5k4_HrYF4VSNWWPsD5Nw" },
      ],
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkDG5k4_HrYF4VSNWWPsD5Nw",
      },
      discovered: "YouTube reccs",
    },
  ],
  beatbox: [
    {
      shard: "wing",
      name: "WING",
      date: "2025",
      icon: "wing.jpg",
      genres: ["beatbox"],
      track: {
        name: "Dopamine (DnB remix)", link: "https://youtube.com/watch?v=GBuKYAN0RbM&list=PLYWIouv-DSkCC0pprSmxOqXkVTigfkUQ-"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCC0pprSmxOqXkVTigfkUQ-",
      },
      discovered: "YouTube",
    },
    {
      shard: "kaji",
      name: "KAJI",
      date: "2025",
      icon: "kaji.jpg",
      genres: ["beatbox", "hardcore", "techno"],
      track: {
        name: "Bass Factory", link: undefined
      },
      discovered: "Grand Beatbox Battle vs WING",
    },
    {
      shard: "improver",
      name: "Improver",
      date: "2025",
      icon: "improver.jpg",
      genres: ["beatbox", "drum & bass"],
      track: {
        name: "Feel the Future", link: undefined
      },
      discovered: "Grand Beatbox Battle vs WING",
    },
  ],
  "love them, but don’t listen much": [
    {
      shard: "azali",
      name: "AZALI",
      date: "2024",
      icon: "azali.jpg",
      genres: ["piano", "artcore", "breakcore"],
      track: {
        name: "TO DUST THOU SHALT RETURN", link: undefined
      },
      discovered: "YouTube reccs",
    },
    {
      shard: "heiakim",
      name: "heiakim",
      date: "2024",
      icon: "heiakim.webp",
      genres: ["j-pop"],
      track: {
        name: "nana", link: "https://youtube.com/watch?v=iXH6zdvhN80"
      },
      discovered: "YouTube reccs",
    },
    {
      shard: "tanger",
      name: "Tanger",
      date: "2024",
      icon: "tanger.jpg",
      genres: ["electronic"],
      track: {
        name: "K1LL SOMEBODY", link: "https://youtube.com/watch?v=zLzRsZtZ2ow"
      },
      discovered: "YouTube interview",
    },
    {
      shard: "feurrm-films",
      name: "feuerrmFilms",
      date: "2018",
      icon: "feuerrm.jpg",
      genres: ["electronic"],
      track: {
        name: "Special Events", link: undefined
      },
      discovered: "YouTube",
    },
  ],
  "franchise soundtracks": [
    {
      shard: "arcane",
      name: "Arcane",
      date: "2025",
      icon: "arcane.jpg",
      genres: ["alternative pop", "punk", "emotional", "cinematic"],
      track: {
        name: "What Could Have Been", link: "https://youtube.com/watch?v=liPu1_aPH5k&list=PLYWIouv-DSkCdH3RpudnBc9RplsrUqQ_n"
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkCdH3RpudnBc9RplsrUqQ_n",
      },
      discovered: "reddit, probably",
    },
    {
      shard: "ultraman",
      name: "Ultraman",
      date: "2018",
      icon: "ultraman.jpg",
      genres: ["ultraman", "anime", "heroic"],
      track: [
        { name: "Ultraman Mebius", link: "https://youtube.com/watch?v=mRzSHpKROcU&list=PLYWIouv-DSkCJFwPiWrxfO4BqSKtU8UbM" },
        { name: "Ultraman Zero", link: "https://youtube.com/watch?v=h_YYmNzydy8&list=PLYWIouv-DSkCJFwPiWrxfO4BqSKtU8UbM" },
      ],
      links: {
        youtube: "https://youtube.com/watch?v=dOP7G5J755s&list=PLYWIouv-DSkARK0RHQXJnm2-webMrXzQ4",
      },
      discovered: "childhood",
    },
    {
      shard: "master-duel",
      name: "Master Duel",
      date: "2023",
      icon: "master-duel.jpg",
      genres: ["cinematic", "orchestral"],
      discovered: String.raw`¯\_(ツ)_/¯`,
    },
    {
      shard: "yu-gi-oh",
      name: "Yu-Gi-Oh!",
      date: "2022",
      icon: "yu-gi-oh.jpg",
      genres: ["anime", "j-pop"],
      track: [
        { name: "Calling", link: undefined },
        { name: "BRAVING", link: undefined },
      ],
      discovered: "childhood",
    },
    {
      shard: "air-attack",
      name: "AirAttack",
      date: "2020",
      icon: "air-attack.jpg",
      genres: ["war", "cinematic", "heroic"],
      track: [
        { name: "Dark Sands", link: undefined },
        { name: "Operation Red Sea – Land", link: undefined },
      ],
      discovered: "childhood",
    },
    {
      shard: "tiny-defense",
      name: "Tiny Defense",
      date: "2020",
      icon: "tiny-defense.webp",
      track: [
        { name: "Mission Stage", link: undefined },
        { name: "Underwater", link: undefined },
      ],
      discovered: "childhood",
    },
    {
      shard: "pvz",
      name: "Plants vs. Zombies",
      date: "2020",
      icon: "pvz.webp",
      genres: ["game"],
      track: {
        name: "Zombie On Your Lawn", link: undefined
      },
      discovered: "childhood",
    },
    {
      shard: "dune",
      name: "Dune",
      date: "2022",
      icon: "dune.jpg",
      genres: ["cinematic"],
      discovered: "literally searched up “major films in 2021” while in my film-watching arc",
    },
    {
      shard: "boonie-bears",
      name: "熊出没",
      date: "child",
      icon: "boonie-bears.jpg",
      genres: ["c-pop"],
      track: {
        name: "你从未离去", link: undefined
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkDNtgU2E_Clta_JZlmCU-do",
      },
      discovered: "childhood",
    },
    {
      shard: "mlp",
      name: "My Little Pony",
      date: "2023",
      icon: "mlp.jpg",
      genres: ["alternative pop", "electronic"],
      track: [
        { name: "Friendship Games", link: "https://youtube.com/watch?v=CNEYbc3C2NU&list=PLYWIouv-DSkCqc2skmsaCX1U3oMewEhkE" },
        { name: "Legend You Were Meant To Be", link: "https://youtube.com/watch?v=nCkV3yjQeOk&list=PLYWIouv-DSkCqc2skmsaCX1U3oMewEhkE" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkCqc2skmsaCX1U3oMewEhkE",
      },
      discovered: "childhood",
    },
  ],
  classics: [
    {
      shard: "elektronomia",
      name: "Elektronomia",
      date: "2016",
      icon: "elektronomia.webp",
      genres: ["electronic", "house"],
      track: [
        { name: "United", link: undefined },
        { name: "Ibiza", link: undefined },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkBvAA5lNPvGwnqvKbvPiohq",
      },
      discovered: "iXPLODE",
    },
    {
      shard: "alan-walker",
      name: "Alan Walker",
      date: "2018",
      icon: "alan-walker.jpg",
      genres: ["electronic", "house"],
      track: {
        name: "Different World", link: undefined
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkDwSbC-HHmA7UaQvpkr-Aqr",
      },
      discovered: "introduced by friend",
    },
    {
      shard: "jim-yosef",
      name: "Jim Yosef",
      date: "2016",
      icon: "jim-yosef.png",
      genres: ["electronic", "house"],
      track: {
        name: "Linked", link: undefined
      },
      discovered: "NCS",
    },
    {
      shard: "electro-light",
      name: "Electro-Light",
      date: "2017",
      icon: "electro-light.webp",
      track: {
        name: "Throwback", link: undefined
      },
      genres: ["electronic", "hardcore"],
      discovered: "NCS",
    },
    {
      shard: "alex-skrindo",
      name: "Alex Skrindo",
      date: "2017",
      icon: "alex-skrindo.jpg",
      genres: ["electronic"],
      track: {
        name: "Lightning", link: undefined
      },
      discovered: "NCS",
    },
    {
      shard: "the-fat-rat",
      name: "TheFatRat",
      date: "2019",
      icon: "the-fat-rat.jpg",
      genres: ["electronic"],
      track: {
        name: "Monody", link: undefined
      },
      discovered: "YouTube",
    },
    {
      shard: "k-391",
      name: "K-391",
      date: "2019",
      icon: "k-391.jpg",
      genres: ["electronic"],
      track: {
        name: "Lonely World", link: undefined
      },
      discovered: "Alan Walker",
    },
  ],
  pop: [
    {
      shard: "avril-lavigne",
      name: "Avril Lavigne",
      date: "2017",
      icon: undefined,
      genres: ["rock", "pop"],
      track: {
        name: "When You’re Gone", link: undefined
      },
      links: {
        youtube: "https:/youtube.com/playlist?list=PLYWIouv-DSkDo8xDD039YebXy0ONQyPOA",
      },
      discovered: "some Ultraman video on YouTube",
    },
    {
      shard: "taylor-swift",
      name: "Taylor Swift",
      icon: undefined,
      genres: ["pop"],
      track: {
        name: "Anti-hero", link: undefined
      },
      discovered: "childhood",
    },
    {
      shard: "owl-city",
      name: "Owl City",
      date: "2022",
      icon: undefined,
      genres: ["pop"],
      track: {
        name: "Fireflies", link: undefined
      },
      discovered: "childhood nostalgia",
    },
  ],
  labels: [
    {
      shard: "firefly-music",
      name: "Firefly Music",
      date: "2025",
      icon: "firefly-music.jpg",
      genres: ["electronic"],
      discovered: "PIKASONIC - New Start in YouTube reccs",
    },
    {
      shard: "ncs",
      name: "NoCopyrightSounds",
      date: "2017",
      icon: "ncs.jpg",
      genres: ["electronic"],
      track: [
        { name: "SLASH", link: "https://youtube.com/watch?v=cGkv5RcPRuo&list=PLYWIouv-DSkAB87xm3E0Z1MttAXDTEzOr" },
        { name: "Throwback", link: "https://youtube.com/watch?v=cXLadJlS_nA&list=PLYWIouv-DSkAB87xm3E0Z1MttAXDTEzOr" },
      ],
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkAB87xm3E0Z1MttAXDTEzOr",
      },
      discovered: "iXPLODE’s video background music",
    },
    {
      shard: "nomia-tunes",
      name: "NomiaTunes",
      icon: "nomia-tunes.jpg",
      genres: ["electronic"],
      discovered: "Elektronomia",
    },
  ],
  isolates: [
    {
      shard: "infected-mushroom",
      name: "Infected Mushroom",
      date: "2025",
      icon: "infected-mushroom.jpg",
      genres: ["electronic", "bass"],
      track: {
        name: "Guitarmass", link: undefined,
      },
      links: {
        youtube: "https://youtube.com/playlist?list=PLYWIouv-DSkCwKBdvwPTXmZvCoGbu1LoH",
      },
      discovered: "KAJI – Demons of Pain (beatbox)",
    },
    {
      shard: "giga",
      name: "Giga",
      date: "2024",
      icon: "giga.jpg",
      genres: ["trap", "vocaloid"],
      track: {
        name: "Beyond the Way", link: undefined
      },
      discovered: `${h("Beyond the Way")} in YouTube reccs`,
    },
    {
      shard: "deco-27",
      name: "DECO*27",
      date: "2024",
      icon: "deco-27.jpg",
      genres: ["vocaloid"],
      track: {
        name: "Rabbit Hole", link: undefined
      },
      discovered: `${h("Rabbit Hole")} in YouTube reccs`,
    },
    {
      shard: "lupus-nocte",
      name: "Lupus Nocte",
      date: "2021",
      icon: "lupus-nocte.jpg",
      genres: ["electronic"],
      track: {
        name: "Howling", link: undefined
      },
      discovered: `${a("GoodTimesWithScar", "https://youtube.com/@GoodTimesWithScar")}’s timelapse background music`,
    },
    {
      shard: "eason-chan",
      name: "Eason Chan",
      date: "2023",
      icon: "eason-chan.jpg",
      genres: ["c-pop"],
      track: {
        name: "«孤勇者»", link: undefined
      },
      discovered: "played by a friend",
    },
    {
      shard: "tf-boys",
      name: "TFBOYS",
      date: "childhood",
      icon: undefined,
      track: {
        name: "«青春修炼手册»", link: undefined
      },
      genres: ["c-pop"],
      discovered: "childhood",
    },
  ],
};
