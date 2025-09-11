import type { ArtistData } from "#scripts/types"


export const artists: {
  [collection: string]: ArtistData[];
} = {
  "newly discovered": [
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
    {
      shard: "reku",
      name: "Reku Mochizuki",
      date: "2025",
      icon: "reku.jpg",
      genres: ["electronic", "rhythm"],
      track: {
        name: "火", link: undefined,
      },
      discovered: "Phigros",
    },
  ],
  favourites: [
    {
      shard: "camellia",
      name: "かめりあ",
      date: "2023",
      icon: "camellia.png",
      genres: ["Camelliacore", "full flavour", "transcendental", "rhythm"],
      track: {
        name: "Dance With Silence", link: undefined,
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
        name: "Banana Breeze", link: undefined,
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
        name: "New Start", link: undefined,
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
        name: "Synthesis.", link: undefined,
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
      track: [
        { name: "WATER", link: undefined, },
        { name: "夜", link: undefined },
      ],
      genres: ["colour bass", "hardcore", "vocaloid"],
      discovered: "Phigros",
    },
    {
      shard: "puru",
      name: "puru",
      date: "2024",
      icon: "puru.jpg",
      genres: ["rhythm", "chill", "trap"],
      track: {
        name: "Grimheart", link: undefined,
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
        name: "NO ONE YES MAN", link: undefined,
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
        name: "Nhelv", link: undefined,
      },
      discovered: "YouTube",
    },
    {
      shard: "such",
      name: "Such",
      date: "2024",
      icon: "such.jpg",
      track: {
        name: "Mend Your Ways", link: undefined,
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
        name: "Only the Brave", link: undefined,
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
        name: "Sentient", link: undefined,
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
        name: "Realms", link: undefined,
      },
      discovered: "Phigros",
    },
    {
      shard: "chiru-san",
      name: "Chiru-san",
      date: "2024",
      icon: "chiru-san.jpg",
      genres: ["electronic", "bass"],
      track: {
        name: "Stellarity", link: undefined,
      },
      discovered: "YouTube reccs",
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
      shard: "yoasobi",
      name: "YOASOBI",
      date: "2023",
      icon: "yoasobi.webp",
      genres: ["J-pop", "anime"],
      track: {
        name: "Tabun", link: undefined,
      },
      discovered: "anime",
    },
    {
      shard: "falcon-dives",
      name: "Falcon Dives",
      date: "2022",
      icon: "falcon-dives.jpg",
      genres: ["disco", "electronic"],
      track: {
        name: "Teenage Color", link: undefined,
      },
      discovered: "Grian",
    },
    {
      shard: "street",
      name: "Street",
      date: "2024",
      icon: "street.jpg",
      genres: ["neurofunk", "rhythm"],
      track: {
        name: "Sakura Fubiki", link: undefined,
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
        name: "Revolt From The Abyss", link: undefined,
      },
      discovered: "Phigros",
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
      shard: "frums",
      name: "Frums",
      date: "2024",
      icon: "frums.jpg",
      genres: ["Frums"],
      track: {
        name: "XNOR XNOR XNOR", link: undefined,
      },
      discovered: "Phigros",
    },
    {
      shard: "virtual-riot",
      name: "Virtual Riot",
      date: "2024",
      icon: "virtual-riot.jpg",
      genres: ["electronic", "complextro", "dubstep"],
      track: {
        name: "I heard you like polyrhythms", link: undefined,
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
        name: "nana", link: undefined,
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
        name: "", link: undefined,
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
      discovered: "YouTube reccs",
    },
    {
      shard: "feurrm-films",
      name: "feuerrmFilms",
      date: "2018",
      icon: "feuerrm.jpg",
      genres: ["electronic"],
      track: {
        name: "Special Events", link: undefined,
      },
      discovered: "YouTube",
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
        name: "Different World", link: undefined,
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
        name: "Linked", link: undefined,
      },
      discovered: "NCS",
    },
    {
      shard: "electro-light",
      name: "Electro-Light",
      date: "2017",
      icon: "electro-light.webp",
      track: {
        name: "Throwback", link: undefined,
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
        name: "Lightning", link: undefined,
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
        name: "Monody", link: undefined,
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
        name: "Lonely World", link: undefined,
      },
      discovered: "Alan Walker",
    },
  ],
  ost: [
    {
      name: "Arcane",
      date: "2025",
      track: {
        name: "What Could Have Been", link: undefined,
      },
    },
    {
      name: "Ultraman",
      date: "2018",
      track: [
        { name: "Ultraman Mebius", link: undefined },
        { name: "Ultraman Zero", link: undefined },
      ],
    },
    {
      name: "Master Duel",
      date: "2023",
    },
    {
      name: "Yu-Gi-Oh!",
      date: "2022",
      track: [
        { name: "Calling", link: undefined },
        { name: "BRAVING", link: undefined },
      ],
    },
    {
      name: "AirAttack",
      date: "2020",
      track: [
        { name: "Dark Sands", link: undefined },
        { name: "Operation Red Sea – Land", link: undefined },
      ],
    },
    {
      name: "Tiny Defense",
      date: "2020",
      track: [
        { name: "Mission Stage", link: undefined },
        { name: "Underwater", link: undefined },
      ],
    },
    {
      name: "Plants vs. Zombies",
      date: "2020",
      track: {
        name: "Zombie On Your Lawn", link: undefined,
      },
    },
    {
      name: "Dune",
      date: "2022",
    },
    {
      name: "My Little Pony",
      date: "2023",
      track: [
        { name: "Friendship Games", link: undefined },
        { name: "Legend You Were Meant To Be", link: undefined },
      ],
    },
  ],
  beatbox: [
    {
      name: "WING",
      date: "2025",
      track: {
        name: "Dopamine (DnB remix)", link: undefined,
      },
      genres: ["beatbox"],
      discovered: "YouTube",
    },
    {
      name: "KAJI",
      date: "2025",
      track: {
        name: "Bass Factory", link: undefined,
      },
      genres: ["beatbox", "hardcore", "techno"],
      discovered: "Grand Beatbox Battle vs WING",
    },
    {
      name: "Improver",
      date: "2025",
      track: {
        name: "Feel the Future", link: undefined,
      },
      genres: ["beatbox", "drum & bass"],
      discovered: "Grand Beatbox Battle vs WING",
    },
  ],
  pop: [
    {
      name: "Avril Lavigne",
      date: "2017",
      track: {
        name: "When You’re Gone", link: undefined,
      },
      genres: ["rock", "pop"],
      discovered: "some Ultraman video on YouTube",
    },
    {
      name: "Taylor Swift",
      track: {
        name: "Anti-hero", link: undefined,
      },
      genres: ["pop"],
    },
    {
      name: "Owl City",
      date: "2022",
      track: {
        name: "Fireflies", link: undefined,
      },
      genres: ["pop"],
      discovered: "nostalgia",
    },
  ],
  labels: [
    {
      name: "Firefly Music",
      date: "2025",
      genres: ["electronic"],
      discovered: "PIKASONIC",
    },
    {
      name: "NoCopyrightSounds",
      date: "2017",
      genres: ["electronic"],
      discovered: "iXPLODE",
    },
    {
      name: "NomiaTunes",
      genres: ["electronic"],
      discovered: "Elektronomia",
    },
  ],
  isolates: [
    {
      name: "Giga",
      date: "2024",
      track: {
        name: "Beyond the Way", link: undefined,
      },
      genres: ["trap", "vocaloid"],
      discovered: "YouTube reccs",
    },
    {
      name: "DECO*27",
      date: "2024",
      track: {
        name: "Rabbit Hole", link: undefined,
      },
      genres: ["vocaloid"],
      discovered: "YouTube reccs",
    },
    {
      name: "Lupus Nocte",
      date: "2021",
      track: {
        name: "Howling", link: undefined,
      },
      genres: ["electronic"],
      discovered: "GoodTimesWithScar",
    },
    {
      name: "Eason Chan",
      date: "2023",
      track: {
        name: "孤勇者", link: undefined,
      },
      genres: ["C-pop"],
      discovered: "friend",
    },
    {
      name: "TFBOYS",
      track: {
        name: "少年修炼手册", link: undefined,
      },
      genres: ["C-pop"],
      discovered: "childhood",
    },
  ],
};
