import { GenreKind, type GenreData } from "#scripts/types";


export const genres: {
  [collection: string]: GenreData[]
} = {
  favourites: [
    {
      name: "200step",
      artists: ["かめりあ"],
      tracks: ["путь льда", "TERA I/O", "Tojita Sekai"],
    },
    {
      name: "anime",
      artists: ["YOASOBI", "Ultraman", "Yu-Gi-Oh!"],
      tracks: ["IDOL", "Suzume"],
    },
    {
      name: "arcade",
      artists: ["MYUKKE.", "Silentroom", "tn-shi", "Reku Mochizuki"],
    },
    {
      name: "artcore",
      artists: ["tn-shi", "ak+q", "Laur"],
      tracks: ["PRAGMATISM -RESURRECTION-"],
    },
    {
      name: "beatbox",
      artists: ["WING", "KAJI", "Improver"],
      tracks: ["Bass Factory"],
    },
    {
      name: "C-pop",
      artists: ["茶鸣拾贰律"],
    },
    {
      fav: true,
      name: "Camelliacore",
      artists: ["かめりあ"],
      tracks: ["Spin Eternally"],
    },
    {
      name: "chillout",
      kind: GenreKind.VIBE,
      artists: ["Vexento", "puru"],
      tracks: ["Home", "Filament"],
    },
    {
      name: "cinematic",
      artists: ["Johannes Bornlöf", "Master Duel", "Noah"],
    },
    {
      name: "colour bass",
      artists: ["A-39", "PIKASONIC", "Chiru-san"],
    },
    {
      name: "complextro",
      artists: ["かめりあ", "Virtual Riot", "Chiru-san"],
    },
    {
      name: "downtempo",
      artists: ["Vexento", "puru", "heiakim"],
      tracks: ["Banana Breeze"],
    },
    {
      name: "drum & bass",
      artists: ["Hinkik", "かめりあ", "PIKASONIC"],
      tracks: ["Realms"],
    },
    {
      name: "dubstep",
      artists: ["Chiru-san", "Arcane"],
    },
    {
      name: "melodic dubstep",
      artists: ["Virtual Riot"],
    },
    {
      name: "2010s EDM",
      artists: ["Elektronomia", "NCS", "Alan Walker"],
    },
    {
      name: "electronic",
      artists: ["literally every single damn artist I listen to"],
      tracks: ["literally every single damn track I listen to"],
    },
    {
      name: "film",
      artists: ["Hans Zimmer", "Johannes Bornlöf"],
    },
    {
      fav: true,
      name: "full flavour",
      artists: ["かめりあ"],
      tracks: ["ΩΩPARTS"],
    },
    {
      name: "future bass",
      artists: ["PIKASONIC", "Chiru-san"],
    },
    {
      name: "gothic hardcore / renaissance hardcore",
      artists: [""],
      tracks: ["Rrhar’il"],
    },
    {
      name: "kawaii future bass",
      artists: ["PIKASONIC", "Chiru-san"],
    },
    {
      name: "game",
      artists: ["Plants vs. Zombies", "AirAttack"],
    },
    {
      name: "glitch hop",
      artists: ["Hinkik", "Xomu"],
      tracks: ["Invincible"],
    },
    {
      name: "hardcore",
      artists: ["かめりあ", "A-39"],
    },
    {
      name: "happy hardcore / euphoric hardcore",
      artists: ["PIKASONIC", "MYUKKE."],
    },
    {
      name: "hi-tech",
      artists: ["tn-shi", "RHYX"],
    },
    {
      name: "house",
      artists: ["Elektronomia", "Alan Walker", "Hinkik"],
      tracks: ["United"],
    },
    {
      name: "J-core / J-pop",
      artists: ["YOASOBI", "Such", "Ultraman"],
    },
    {
      name: "music",
      artists: ["Frums", "Street"],
      tracks: ["XNOR XNOR XNOR"],
    },
    {
      name: "neurofunk",
      artists: ["Silentroom", "かめりあ", "Street"],
      tracks: ["Nhelv"],
    },
    {
      name: "orchestral",
      artists: ["Johannes Bornlöf", "Gavin Luke"],
    },
    {
      name: "piano",
      artists: ["Gavin Luke", "Bo Burnham"],
    },
    {
      name: "pop",
      artists: ["Avril Lavigne", "Arcane"],
    },
    {
      name: "rhythm",
      artists: ["かめりあ", "Street", "Se-U-Ra"],
    },
    {
      name: "rock",
      artists: ["Avril Lavigne"],
      tracks: ["Stacie’s Mom"],
    },
    {
      name: "speedcore",
      artists: ["かめりあ"],
      tracks: ["Ashed Wings"],
    },
    {
      name: "transcendental",
      artists: ["かめりあ", "Polyphia", "tn-shi"],
      tracks: ["Synthesis."],
    },
    {
      name: "trap",
      artists: ["puru"],
      tracks: ["SLASH"],
    },
    {
      name: "vocaloid",
      artists: ["A39"],
      tracks: ["Proof Geometric Construction Can Solve All Love Affairs"],
    },
  ],
  ambivalent: [
    {
      name: "acid jazz",
      tracks: ["Sweden (acid jazz remix)"],
    },
    {
      name: "botanica",
    },
    {
      name: "breakcore",
    },
    {
      name: "denpa",
    },
    {
      name: "doujin",
    },
    {
      name: "drumstep",
      desc: `I’ll be real idek what this genre means`,
    },
    {
      name: "electroswing",
    },
    {
      name: "extratone",
      artists: ["かめりあ", "Kobaryo"],
    },
    {
      name: "future core",
      artists: ["tn-shi"],
      desc: `bro all I hear are words`,
    },
    {
      name: "gabber",
    },
    {
      name: "garage",
    },
    {
      name: "jazz house",
    },
    {
      name: "k-pop",
    },
    {
      name: "music",
      artists: ["LeaF"],
      tracks: ["Aleph-0"],
    },
    {
      name: "orchestral hardstyle",
    },
    {
      name: "phonk",
      tracks: ["IDOL (phonk / drill remix)"],
    },
    {
      name: "psystyle",
      artists: ["かめりあ"],
    },
    {
      name: "rap",
    },
    {
      name: "schranz",
      desc: `tf does this word mean??`,
    },
    {
      name: "techno",
      artists: ["KAJI"],
    },
    {
      name: "tech step",
      desc: `what the hell is a step and how does it become tech`,
    },
    {
      name: "trance",
    },
  ],
};
