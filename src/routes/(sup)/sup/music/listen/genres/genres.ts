import { prep_groups } from "#scripts/search-filter.svelte.ts";
import { GenreKind, type GenreData } from "#scripts/types/music";
import type { Groups } from "#scripts/types";


const data: Groups<GenreData> =
{
  "favourites": [
    {
      name:    "200step",
      artists: ["camellia"],
      tracks:  ["путь льда", "TERA I/O", "Tojita Sekai"],
    }, {
      name:    "anime",
      artists: ["yoasobi", "ultraman", "Yu-Gi-Oh!"],
      tracks:  ["IDOL", "Suzume"],
    }, {
      name:    "arcade",
      artists: ["myukke", "tn-shi", "reku-mochizuki", "silentroom"],
    }, {
      name:    "artcore",
      artists: ["ak+q", "tn-shi", "laur"],
      tracks:  ["PRAGMATISM -RESURRECTION-"],
    }, {
      name:    "beatbox",
      artists: ["wing", "kaji", "improver"],
      tracks:  ["Bass Factory", "Dopamine (DnB remix)"],
    }, {
      name:    "bop",
      kind:    GenreKind.VIBE,
      artists: ["stessie", "kirara-magic"],
      tracks:  ["Checkmate"],
    }, {
      name:    "C-pop",
      artists: ["tea-12"],
    }, {
      fav:     true,
      name:    "Camelliacore",
      artists: ["camellia"],
      tracks:  ["Spin Eternally"],
    }, {
      name:    "chillout",
      kind:    GenreKind.VIBE,
      artists: ["vexento", "puru"],
      tracks:  ["Home", "Filament"],
    }, {
      name:    "cinematic",
      artists: ["johannes-bornlof", "master-duel", "noah"],
    }, {
      name:    "colour bass",
      artists: ["a-39", "pikasonic", "chiru-san", "steradlye"],
    }, {
      name:    "complextro",
      artists: ["camellia", "virtual-riot", "chiru-san"],
    }, {
      name:    "downtempo",
      artists: ["vexento", "puru", "heiakim"],
      tracks:  ["Banana Breeze"],
    }, {
      name:    "drum & bass",
      artists: ["hinkik", "camellia", "pikasonic"],
      tracks:  ["Realms"],
    }, {
      name:    "dubstep",
      artists: ["chiru-san", "arcane", "steradlye", "kanro"],
    }, {
      name:    "melodic dubstep",
      artists: ["virtual-riot", "kanro"],
    }, {
      name:    "2010s EDM",
      artists: ["elektronomia", "NCS", "alan-walker"],
    }, {
      name:    "electronic",
      artists: ["literally every single damn artist I listen to"],
      tracks:  ["literally every single damn track I listen to"],
    }, {
      name:    "film",
      artists: ["Hans Zimmer", "johannes-bornlof"],
    }, {
      fav:     true,
      name:    "full flavour",
      artists: ["camellia", "ludicin"],
      tracks:  ["ΩΩPARTS", "M1LL10N PP"],
    }, {
      name:    "future bass",
      artists: ["pikasonic", "chiru-san", "steradlye"],
    }, {
      name:    "gothic hardcore / renaissance hardcore",
      artists: ["ludicin"],
      tracks:  ["Rrhar’il"],
    }, {
      name:    "kawaii future bass",
      artists: ["pikasonic", "chiru-san"],
    }, {
      name:    "game",
      artists: ["Plants vs. Zombies", "AirAttack"],
    }, {
      name:    "glitch hop",
      artists: ["hinkik", "xomu"],
      tracks:  ["Invincible"],
    }, {
      name:    "hardcore",
      artists: ["camellia", "a-39", "kaji", "usao"],
    }, {
      name:    "happy hardcore / euphoric hardcore",
      artists: ["pikasonic", "myukke"],
    }, {
      name:    "hi-tech",
      artists: ["tn-shi", "rhyx", "camellia"],
    }, {
      name:    "house",
      artists: ["elektronomia", "alan-walker", "hinkik"],
      tracks:  ["United"],
    }, {
      name:    "J-core / J-pop",
      artists: ["yoasobi", "such", "ultraman"],
    }, {
      name:    "music",
      artists: ["frums", "street", "camellia"],
      tracks:  ["XNOR XNOR XNOR"],
    }, {
      name:    "neurofunk",
      artists: ["silentroom", "camellia", "street"],
      tracks:  ["Nhelv"],
    }, {
      name:    "orchestral",
      artists: ["johannes-bornlof", "gavin-luke"],
    }, {
      name:    "oriental",
      artists: ["M-UE", "xomu", "茶鸣拾贰律"],
    }, {
      name:    "piano",
      artists: ["gavin-luke", "bo-burnham"],
    }, {
      name:    "pop",
      artists: ["avril-lavigne", "arcane"],
    }, {
      name:    "rhythm",
      artists: ["camellia", "street", "Se-U-Ra"],
    }, {
      name:    "rock",
      artists: ["avril-lavigne"],
      tracks:  ["Stacie’s Mom", "sk8er boi"],
    }, {
      name:    "speedcore",
      artists: ["camellia"],
      tracks:  ["Ashed Wings"],
    }, {
      name:    "transcendental",
      kind:    GenreKind.VIBE,
      artists: ["camellia", "polyphia", "tn-shi"],
      tracks:  ["Synthesis.", "Playing God"],
    }, {
      name:    "trap",
      artists: ["puru", "wing"],
      tracks:  ["SLASH"],
    }, {
      name:    "vocaloid",
      artists: ["a-39"],
      tracks:  ["Proof Geometric Construction Can Solve All Love Affairs"],
    },
  ],
  "ambivalent": [
    {
      name:    "acid jazz",
      tracks:  ["Sweden (acid jazz remix)"],
    }, {
      name:    "botanica",
    }, {
      name:    "breakcore",
      artists: ["azali", "frums"],
    }, {
      name:    "denpa",
    }, {
      name:    "doujin",
    }, {
      name:    "drumstep",
      desc: [
        `I’ll be real idek what this genre means`,
      ],
    }, {
      name:    "electroswing",
      artists: ["camellia"],
    }, {
      name:    "extratone",
      artists: ["camellia", "kobaryo"],
    }, {
      name:    "future core",
      artists: ["tn-shi"],
      desc: [
        `bro all I hear are words`,
      ],
    }, {
      name:    "gabber",
    }, {
      name:    "garage",
    }, {
      name:    "jazz house",
    }, {
      name:    "k-pop",
      artists: ["katseye", "BLACKPINK"],
      tracks:  ["Debut"],
    }, {
      name:    "music",
      artists: ["LeaF"],
      tracks:  ["Aleph-0"],
    }, {
      name:    "orchestral hardstyle",
    }, {
      name:    "phonk",
      tracks:  ["IDOL (phonk / drill remix)"],
    }, {
      name:    "psystyle",
      artists: ["camellia"],
    }, {
      name:    "rap",
      artists: ["bo-burnham"],
      tracks:  ["Venom"],
    }, {
      name:    "schranz",
      desc: [
        `tf does this word mean??`,
      ],
    }, {
      name:    "techno",
      artists: ["camellia", "kaji"],
    }, {
      name:    "tech step",
      desc: [
        `what the hell is a step and how does it become tech`,
      ],
    }, {
      name:    "trance",
      artists: ["nhato"],
    },
  ],
};

prep_groups(data);
export const genres_data: Groups<GenreData> = data;
export const genres_list: GenreData[] = Object.values(data).flat();
