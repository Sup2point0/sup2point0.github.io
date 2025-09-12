import type { ArtistData } from "#scripts/types"


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
      icon: undefined,
      genres: ["electronic"],
      track: {
        name: "Final Showdown", link: undefined
      },
      discovered: "Chiru-san",
    },
    {
      shard: "stessie",
      name: "Stessie",
      date: "2025",
      icon: "stessie.jpg",
      genres: ["electronic", "chill"],
      track: {
        name: "What If", link: "https://youtube.com/watch?v=V0w0Biy7XmQ"
      },
      discovered: "Firefly Music",
    },
  ],
  "absolute favourites": [
    {
      shard: "camellia",
      name: "かめりあ",
      date: "2023",
      icon: "camellia.png",
      genres: ["Camelliacore", "full flavour", "transcendental", "rhythm"],
      track: {
        name: "Dance With Silence", link: undefined
      },
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
        name: "Banana Breeze", link: undefined
      },
      discovered: "Scratch",
    },
    {
      shard: "pikasonic",
      name: "PIKASONIC",
      date: "2024",
      icon: "pikasonic.jpg",
      genres: ["electronic", "future bass", "J-core"],
      track: {
        name: "New Start", link: undefined
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
        name: "Synthesis.", link: undefined
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
        { name: "WATER", link: undefined },
        { name: "夜", link: undefined },
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
        name: "Grimheart", link: undefined
      },
      discovered: "Arcaea",
    },
    {
      shard: "myukke",
      name: "MYUKKE.",
      date: "2023",
      icon: "myukke.jpg",
      genres: ["rhythm", "arcade"],
      track: {
        name: "NO ONE YES MAN", link: undefined
      },
      discovered: "Phigros",
    },
    {
      shard: "silentroom",
      name: "Silentroom",
      date: "2023",
      icon: "silentroom.jpg",
      genres: ["arcade", "neurofunk", "rhythm"],
      track: {
        name: "Nhelv", link: undefined
      },
      discovered: "YouTube",
    },
    {
      shard: "such",
      name: "Such",
      date: "2024",
      icon: "such.jpg",
      track: {
        name: "Mend Your Ways", link: undefined
      },
      genres: ["J-core", "bass"],
      discovered: "YouTube Music reccs",
    },
    {
      shard: "tea-12",
      name: "茶鸣拾贰律",
      date: "2023",
      icon: "tea-12.jpg",
      genres: ["C-pop", "rhythm"],
      track: [
        { name: "青芽", link: undefined },
        { name: "Feast 远东之宴", link: undefined },
      ],
      discovered: "Phigros",
    },
    {
      shard: "johannes-bornlof",
      name: "Johannes Bornlöf",
      date: "2020",
      icon: "johannes-bornlof.jpg",
      genres: ["cinematic", "orchestral"],
      track: {
        name: "Only the Brave", link: undefined
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
        name: "Sentient", link: undefined
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
        name: "Realms", link: undefined
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
        name: "Stellarity", link: undefined
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
        name: "火", link: undefined
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
        name: "Playing God", link: undefined
      },
      discovered: "YouTube Music reccs",
    },
    {
      shard: "yoasobi",
      name: "YOASOBI",
      date: "2023",
      icon: "yoasobi.webp",
      genres: ["J-pop", "anime"],
      track: {
        name: "Tabun", link: undefined
      },
      discovered: "anime",
    },
    {
      shard: "street",
      name: "Street",
      date: "2024",
      icon: "street.jpg",
      genres: ["neurofunk", "rhythm"],
      track: {
        name: "Sakura Fubiki", link: undefined
      },
      discovered: "Arcaea",
    },
    {
      shard: "ak-q",
      name: "ak+q",
      date: "2025",
      icon: "ak-q.jpg",
      genres: ["artcore", "gothic hardcore", "rhythm"],
      track: {
        name: "Ignotus", link: undefined
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
        name: "Teenage Color", link: undefined
      },
      discovered: "Grian",
    },
    {
      shard: "jiang-mi-tiao",
      name: "姜米條",
      date: "2023",
      icon: "jiang-mi-tiao.jpg",
      genres: ["neurofunk", "rhythm"],
      track: [
        { name: "inferior", link: undefined },
        { name: "Shadow", link: undefined },
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
        name: "I heard you like polyrhythms", link: undefined
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
        { name: "Are You Happy", link: undefined },
        { name: "The Chicken", link: undefined },
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
        name: "Dopamine (DnB remix)", link: undefined
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
      genres: ["J-pop"],
      track: {
        name: "nana", link: undefined
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
        name: undefined, link: undefined
      },
      discovered: "YouTube reccs",
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
      track: {
        name: "What Could Have Been", link: undefined
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
      track: [
        { name: "Ultraman Mebius", link: undefined },
        { name: "Ultraman Zero", link: undefined },
      ],
    },
    {
      shard: "master-duel",
      name: "Master Duel",
      date: "2023",
      icon: "master-duel.jpg",
    },
    {
      shard: "yu-gi-oh",
      name: "Yu-Gi-Oh!",
      date: "2022",
      icon: "yu-gi-oh.jpg",
      track: [
        { name: "Calling", link: undefined },
        { name: "BRAVING", link: undefined },
      ],
    },
    {
      shard: "air-attack",
      name: "AirAttack",
      date: "2020",
      icon: "air-attack.jpg",
      track: [
        { name: "Dark Sands", link: undefined },
        { name: "Operation Red Sea – Land", link: undefined },
      ],
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
    },
    {
      shard: "pvz",
      name: "Plants vs. Zombies",
      date: "2020",
      icon: "pvz.webp",
      track: {
        name: "Zombie On Your Lawn", link: undefined
      },
    },
    {
      shard: "dune",
      name: "Dune",
      date: "2022",
      icon: "dune.jpg",
    },
    {
      shard: "boonie-bears",
      name: "熊出没",
      date: "child",
      icon: undefined,
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
      track: [
        { name: "Friendship Games", link: undefined },
        { name: "Legend You Were Meant To Be", link: undefined },
      ],
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
      discovered: "friend",
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
      name: "Taylor Swift",
      track: {
        name: "Anti-hero", link: undefined
      },
      genres: ["pop"],
    },
    {
      name: "Owl City",
      date: "2022",
      track: {
        name: "Fireflies", link: undefined
      },
      genres: ["pop"],
      discovered: "nostalgia",
    },
  ],
  labels: [
    {
      shard: "firefly-music",
      name: "Firefly Music",
      date: "2025",
      icon: "firefly-music.jpg",
      genres: ["electronic"],
      discovered: "PIKASONIC",
    },
    {
      shard: "ncs",
      name: "NoCopyrightSounds",
      date: "2017",
      icon: "ncs.jpg",
      genres: ["electronic"],
      discovered: "iXPLODE",
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
      shard: "giga",
      name: "Giga",
      date: "2024",
      icon: "giga.jpg",
      genres: ["trap", "vocaloid"],
      track: {
        name: "Beyond the Way", link: undefined
      },
      discovered: "YouTube reccs",
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
      discovered: "YouTube reccs",
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
      discovered: "GoodTimesWithScar",
    },
    {
      shard: "eason-chan",
      name: "Eason Chan",
      date: "2023",
      icon: undefined,
      genres: ["C-pop"],
      track: {
        name: "孤勇者", link: undefined
      },
      discovered: "friend",
    },
    {
      shard: "tf-boys",
      name: "TFBOYS",
      date: "childhood",
      icon: undefined,
      track: {
        name: "少年修炼手册", link: undefined
      },
      genres: ["C-pop"],
      discovered: "childhood",
    },
  ],
};
