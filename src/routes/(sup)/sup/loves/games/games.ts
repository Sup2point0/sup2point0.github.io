import { prep_groups, type Searchable } from "#scripts/search-filter.svelte.ts";
import { i } from "#scripts/utils";
import type { DatePoint, Groups } from "#scripts/types";


export enum Genre {
  CARDS         = "cards",
  CLASSICS      = "classics",
  EXPLORATION   = "exploration",
  IO            = ".io games",
  METROIDVANIA  = "metroidvania",
  PUZZLE        = "puzzle",
  RACING        = "racing",
  RHYTHM        = "rhythm",
  ROGUE         = "rogue",
  RUNNER        = "runner",
  SANDBOX       = "sandbox",
  SHMUP         = "shmup",
  TOWER_DEFENCE = "tower defence",
}

export enum Platform {
  MOBILE  = "mobile",
  DESKTOP = "desktop",
  ARCADE  = "arcade",
  CONSOLE = "console",
  VR      = "VR",
}

export enum PlayState {
  WISHLIST      = "wishlist",
  ACTIVE        = "active",
  OPPORTUNISTIC = "opportunistic",
  INTERMITTENT  = "intermittent",
  INFREQUENT    = "infrequent",
  RETIRED       = "retired",
  FINISHED      = "finished",
}

export interface GameData extends Searchable
{
  name:  string;
  love:  3 | 2 | 1 | null;
  date?: DatePoint | DatePoint[];

  icon?: string;
    _style?: "no-crop",

  genres: Genre[];
  platforms: Platform[];
  
  state: PlayState;
  desc?: string[];
}


const _template = [
    {
      shard:  "",
      name:   "",
      love:   0,
      date:   undefined,
      icon:   undefined,
      genres: [Genre],
      platforms: [Platform.DESKTOP],
      state:  PlayState.WISHLIST,
    },
];


const data: Groups<GameData> =
{
  "active": [
    {
      shard:  "outer-wilds",
      name:   "Outer Wilds",
      love:   null,
      date:   ["February 2026", "present"],
      icon:   "outer-wilds.jpg",
      genres: [Genre.EXPLORATION],
      platforms: [Platform.DESKTOP],
      state:  PlayState.ACTIVE,
      desc: [
        `The title of this game is the sort which I hear and think “I’ve heard this before”, even tho I probably haven’t. And it’s the kind where I {know} I want to play it just by hearing it. I made sure to skip parts of {The Cursed Judge}’s videos about it to avoid spoilers!`,

        `I’m currently still exploring, and falling ever more in love with this game. Flying in space is quite addictive, what can I say.`,

        `I remember when I first finished exploring the village on Timber Hearth, finally found the launch codes, and then saw the spaceship. The raw, tentative excitement, thinking “there’s no way...” and the dumb grin I couldn’t hold back, “am I actually gonna fly a spaceship 0.o” and the feeling of taking off and floating into space.`,

        `Unfortunately I didn’t realise quite how much my poor laptop struggles with graphics (turns out Manifold Garden and Bloons are much lighter than I thought!) so I’ve had to turn every graphic setting to ...the lowest possible. And it still runs at like 20 FPS ;-;`,

        `Ah well, it’s still enough to feel the beauty of the game and world.`,
      ],
    },
    {
      shard:  "phigros",
      name:   "Phigros",
      love:   3,
      date:   ["summer 2023", "present"],
      icon:   "phigros.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.ACTIVE,
      desc: [
        `Phigros was my first rhythm game. I was on camp and saw someone in my group playing it, so I asked them if I could try. Quickly fell in love, and the obsession blossomed as ever. Possibly one of the most transformative discoveries in my life.`,

        `Phigros remains my favourite still, and it’s not even close. It is, quite simply, the ultimate rhythm game. The possibilities are endless. No game charts like Phigros, and you can emulate every other rhythm game in Phigros.`,
      ],
    },
    {
      shard:  "chunithm",
      name:   "CHUNITHM",
      love:   1,
      date:   ["summer 2024", "present"],
      icon:   "chunithm.png",
      genres: [Genre.RHYTHM],
      platforms: [Platform.ARCADE],
      state:  PlayState.ACTIVE,
    },
    {
      shard:  "arcaea",
      name:   "Arcaea",
      love:   1,
      date:   ["summer 2024", "present"],
      icon:   "arcaea.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.ACTIVE,
    },
    {
      shard:  "milthm",
      name:   "Milthm",
      love:   2,
      date:   ["fall 2024", "present"],
      icon:   "milthm.png",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE, Platform.DESKTOP],
      state:  PlayState.ACTIVE,
      desc: [
        `I like my rhythm games like programming languages – if it doesn’t teach you anything new (or less seriously, doesn’t do anything differently), it’s not worth learning (playing).`,

        `I first heard about Milthm on desktop, as the rhythm game where you can press any key to hit notes. It sounded utterly absurd, so I really wanted to see how it worked. It’s like the Phigros of desktop rhythm games!`,

        `Now I play Milthm on mobile, exclusively one-handed. It’s like another Phigros :D Cannot believe this game is entirely free, the quality is insane.`,
      ],
    }, 
  ],
  "wishlist": [
    {
      shard:  "hollow-knight",
      name:   "Hollow Knight",
      love:   null,
      date:   undefined,
      icon:   "hollow-knight.webp",
      genres: [Genre.METROIDVANIA],
      platforms: [Platform.DESKTOP],
      state:  PlayState.WISHLIST,
    },
    {
      shard:  "hades",
      name:   "Hades",
      love:   1,
      date:   undefined,
      icon:   "hades.png",
        _style: "no-crop",
      genres: [Genre.ROGUE],
      platforms: [Platform.CONSOLE],
      state:  PlayState.WISHLIST,
    },
  ],
  "bloons": [
    {
      shard:  "bloons-td6",
      name:   "Bloons TD 6",
      love:   3,
      date:   ["2020", "present"],
      icon:   "bloons-td6.png",
      genres: [Genre.TOWER_DEFENCE, Genre.CLASSICS],
      platforms: [Platform.DESKTOP],
      state:  PlayState.OPPORTUNISTIC,
      desc: [
        `If you held me at gunpoint and asked for my favourite game, I’d probably say Bloons TD 6.`,

        `I just have to. It’s too perfect. It fulfils so many of my ...I’m not sure what the word is, not exactly “wishes”, but just stuff that I enjoy about a game. I really love complex intertwining systems that take time to familiarise with, where tiny details and optimisations matter, but where there’s also room for creativity and experimentation.`,

        `And from a graphical standpoint, it’s not even close. They’re not ‘impressive’ per se, they’re just so fun, on-theme and flawless. tbh, I love the game more than it feels like I should. In my prime, I was watching all of ISAB’s videos, coming up with fictional monkeys, and ofc doing {the Monkeyopolis Times}.`,

        `Unfortunately I have nowhere near enough time to play Bloons actively now, but every once in a while I’ll fire it up, and it’s like... {ahh, home sweet home}.`,
      ],
    },
    {
      shard:  "bloons-pop",
      name:   "Bloons Pop!",
      love:   2,
      date:   ["2021", "present"],
      icon:   "bloons-pop.png",
      genres: [Genre.PUZZLE],
      platforms: [Platform.MOBILE],
      state:  PlayState.INTERMITTENT,
    },
    {
      shard:  "bloons-supermonkey-2",
      name:   "Bloons Supermonkey 2",
      love:   3,
      date:   ["childhood", "2021"],
      icon:   "bloons-supermonkey-2.png",
      genres: [Genre.SHMUP],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
    {
      shard:  "bloons-td5",
      name:   "Bloons TD 5",
      love:   1,
      date:   ["childhood"],
      icon:   "bloons-td5.png",
      genres: [Genre.TOWER_DEFENCE, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
  ],
  "miscellaneous": [
    {
      state:  PlayState.INTERMITTENT,
      shard:  "master-duel",
      name:   "Yu-Gi-Oh! Master Duel",
      love:   3,
      date:   ["2023", "present"],
      icon:   "master-duel.webp",
      genres: [Genre.CARDS],
      platforms: [Platform.MOBILE],
      desc: [
        `Seriously, I cannot believe this game exists.`,

        `It’s free. The animations are BEAUTIFUL. It captures the essence of anime duels in a way I never thought possible.`,

        `The first time I saw Master Duel, I was blown away by the graphics, and every time I come back to it I just marvel at how incredible it looks. The ${i("impact")} of a boss monster landing on the field, complete with a unique animation, aw man, it’s so cool, it makes you so giddy.`,
      ],
    },
    {
      state:  PlayState.FINISHED,
      shard:  "manifold-garden",
      name:   "Manifold Garden",
      love:   3,
      date:   ["January 2026", "February 2026"],
      icon:   "manifold-garden.png",
      genres: [Genre.PUZZLE],
      platforms: [Platform.DESKTOP],
      desc: [
        `Ever since learning of this game from {The Cursed Judge}’s video essays, it’s been top of my wishlist. Finally, finally got it during the Steam Christmas sale (almost missed it!). Wanted to play it there and then, but decided to save it for when I had time so I could play it properly alone.`,

        `A couple days later, I played my first 2 hours of Manifold Garden in a dark room, alone, headphones on, no distractions. And. Oh my. Truly one of the most special experiences I’ve ever had.`,

        `Ethereal. Oh man, I love this game so much. It’s so beautiful, and so perfect. What makes it so special as well is that it’s a once-in-a-lifetime experience – the magic lies in the first time, discovering the world, exploring the mechanics.`,
      ],
    },
    {
      state:  PlayState.FINISHED,
      shard:  "firewatch",
      name:   "Firewatch",
      love:   null,
      date:   "January 2026",
      icon:   "firewatch.avif",
      genres: [],
      platforms: [Platform.DESKTOP],
    },
    {
      state:  PlayState.RETIRED,
      shard:  "soul-knight",
      name:   "Soul Knight",
      love:   2,
      date:   ["childhood", 2021],
      icon:   "soul-knight.webp",
      genres: [Genre.ROGUE],
      platforms: [Platform.MOBILE],
    },
    {
      shard:  "bao-wei-luo-bo",
      name:   "保卫萝卜",
      love:   3,
      date:   ["childhood", "present"],
      icon:   "bao-wei-luo-bo.webp",
      genres: [Genre.TOWER_DEFENCE],
      platforms: [Platform.MOBILE],
      state:  PlayState.OPPORTUNISTIC,
      desc: [
        `lmao I really love my tower defence games don’t I`,

        `It’s so simple yet so effective. Cute yet complex. Also, CARROTS #v#`,

        `Casual games are great. Would recommend if you’re bored!`,
      ],
    },
    {
      shard:  "minecraft",
      name:   "Minecraft",
      love:   null,
      date:   ["childhood", "present"],
      icon:   "minecraft.webp",
        _style: "no-crop",
      genres: [Genre.SANDBOX, Genre.CLASSICS],
      platforms: [Platform.MOBILE, Platform.CONSOLE, Platform.DESKTOP],
      state:  PlayState.RETIRED,
    },
  ],
  
  "all the rhythm games": [
    {
      state:  PlayState.ACTIVE,
      shard:  "paradigm-reboot",
      name:   "Paradigm: Reboot",
      love:   null,
      date:   ["summer 2025", "present"],
      icon:   "paradigm-reboot.png",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
    },
    {
      shard:  "dance-cube-evo",
      name:   "DanceCube EVO",
      love:   null,
      date:   ["summer 2025", "present"],
      icon:   "dance-cube-evo.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.ARCADE],
      state:  PlayState.OPPORTUNISTIC,
      desc: [
        `You most likely don’t know this one, but it’s probably the most common arcade rhythm in China (in my experience), even above maimai. There’s 2 distinct versions of it, the original 2D one, and the newer 3D version ({EVO}). I can’t play the 2D one, but I love the 3D one!`,

        `Altho individually its note kinds aren’t unique, it’s got loads of them, so altogether is the full package. {Paradigm: Reboot} on steroids. Playing on high scroll speed is exhilarating.`,

        `Also, hexagons. Need I say more?`,
      ],
    },
    {
      shard:  "vivid-stasis",
      name:   "vivid/stasis",
      love:   null,
      date:   ["fall 2024", "present"],
      icon:   "vivid-stasis.jpg",
      genres: [Genre.RHYTHM],
      platforms: [Platform.DESKTOP],
      state:  PlayState.INTERMITTENT,
    },
    {
      shard:  "melatonin",
      name:   "Melatonin",
      love:   null,
      date:   ["January 2026", "present"],
      icon:   "melatonin.jpg",
      genres: [Genre.RHYTHM],
      platforms: [Platform.DESKTOP],
      state:  PlayState.INTERMITTENT,
    },
    {
      shard:  "rizline",
      name:   "Rizline",
      love:   null,
      date:   ["fall 2025", "present"],
      icon:   "rizline.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.INFREQUENT,
    },
    {
      shard:  "shinobi-slash",
      name:   "シノビスラッシュ",
      love:   null,
      date:   ["fall 2025", "present"],
      icon:   "shinobi-slash.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.INTERMITTENT,
    },
    {
      shard:  "ryceam",
      name:   "RYCEAM",
      love:   null,
      date:   ["fall 2025", "present"],
      icon:   "ryceam.webp",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.INFREQUENT,
    },
    {
      shard:  "deemo-2",
      name:   "DEEMO II",
      love:   null,
      date:   ["summer 2024", "present"],
      icon:   "deemo-2.png",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
    {
      shard:  "rhythm-plus",
      name:   "Rhythm+",
      love:   null,
      date:   ["fall 2023", "summer 2023"],
      icon:   "rhythm-plus.png",
        _style: "no-crop",
      genres: [Genre.RHYTHM],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      desc: [
        `Desperate times call for desperate measures. Sometimes, your only option is a browser rhythm game, and while Rhythm+ wasn’t perfect, it was satisfactory. Allowing colour customisation for everything was very based, you don’t see that much.`,
      ],
    },
    {
      shard:  "maimai",
      name:   "maimai",
      love:   null,
      date:   ["summer 2023", "present"],
      icon:   "maimai.jpg",
      genres: [Genre.RHYTHM],
      platforms: [Platform.ARCADE],
      state:  PlayState.RETIRED,
    },
    {
      shard:  "beat-saber",
      name:   "Beat Saber",
      love:   null,
      date:   ["2024", "present"],
      icon:   "beat-saber.jpg",
      genres: [Genre.RHYTHM],
      platforms: [Platform.VR],
      state:  PlayState.OPPORTUNISTIC,
    },
    {
      shard:  "osu",
      name:   "osu!",
      love:   null,
      date:   ["summer 2023", "present"],
      icon:   "osu.png",
      genres: [Genre.RHYTHM, Genre.CLASSICS],
      platforms: [Platform.DESKTOP],
      state:  PlayState.RETIRED,
    },
  ],
  "franchises": [
    {
      shard:  "asphalt-9",
      name:   "Asphalt 9: Legends",
      love:   2,
      date:   ["2019", "2021"],
      icon:   "asphalt-9.webp",
      genres: [Genre.RACING],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      desc: [
        `Before rhythm games, this was the game I *trained*. By that I mean regular, frequent practice whenever I could. I wasn’t especially skilled, but I wasn’t too half bad either. Managed to set some high ranks in events, y’know (usually with the Lykan, lmao).`,

        `It’s just fun, innit. It doesn’t get old. Racing cracked supercars across such a variety of environments around the world. It just feels awesome.`,

        `I have to also credit Asphalt 9 for kicking off my passion for graphic design and typography. The game font, {Rajdhani}, was the first font I ever installed myself, and Asphalt 9’s UI design will stay with me forever.`,

        `I {also} have to credit Asphalt 9 for igniting my passion for nomenclature. I seriously, {seriously} loved analysing the car names, and coming up with my own fictional ones ({Vengeance Seventure Adrenaline} my beloved).`,
      ],
    },
    {
      shard:  "asphalt-8",
      name:   "Asphalt 8: Airborne",
      love:   1,
      date:   ["2017", "2019"],
      icon:   "asphalt-8.webp",
      genres: [Genre.RACING, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      desc: [
        `This was my childhood, man. Regardless of how pay2win the game might be, I was just happy racing. It’ll always hold a special place in my heart. Nevada, Tokyo, Iceland, they’ll never get old.`,
      ],
    },
    {
      shard:  "air-attack-2",
      name:   "AirAttack 2",
      love:   1,
      date:   ["summer 2020"],
      icon:   "air-attack-2.webp",
      genres: [Genre.SHMUP],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
    {
      shard:  "air-attack",
      name:   "AirAttack",
      love:   3,
      date:   ["childhood"],
      icon:   "air-attack.jpg",
      genres: [Genre.SHMUP],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
    {
      shard:  "pvz-2",
      name:   "Plants vs. Zombies 2",
      love:   3,
      date:   ["childhood", "2020"],
      icon:   "pvz-2.webp",
      genres: [Genre.TOWER_DEFENCE, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      desc: [
        `y’know what, this ain’t a half bad contender for my favourite game of all time. It’s probably the game I hold the most hours in!`,

        `I loved the graphics, the lore, the love, and most importantly, the absolutely brilliant wordplay in all the names.`,

        `I’m gonna forego modesty here and say, I reckon I was pretty cracked at this game. I could micro with cool, calm efficiency, co-ordinate taps with high precision and multitask without breaking a sweat. Lowkey, maybe this was the precursor to me playing rhythm games lmao.`,

        `Of course, the upgrade system and OP plants made all this less relevant, which is a shame. And yeah, EA made the game pay2win, but hey. I still had tons of fun, made loads of memories, and still (thankfully) have access to my stacked account, so I’m thankful this masterpiece existed.`,
      ],
    },
    {
      shard:  "pvz",
      name:   "Plants vs. Zombies",
      love:   2,
      date:   ["childhood"],
      icon:   "pvz.webp",
      genres: [Genre.TOWER_DEFENCE, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
  ],
  "runners": [
    {
      shard:  "spider-man-unlimited",
      name:   "Spider-Man: Unlimited",
      love:   3,
      date:   ["2016", "2019"],
      icon:   "spider-man-unlimited.jpg",
      genres: [Genre.RUNNER],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
    },
    {
      shard:  "minion-rush",
      name:   "Minion Rush",
      love:   1,
      icon:   "minion-rush.webp",
      genres: [Genre.RUNNER, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    },
    {
      shard:  "temple-run-2",
      name:   "Temple Run 2",
      icon:   "temple-run-2.jpg",
      love:   null,
      genres: [Genre.RUNNER],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    },
    {
      shard:  "temple-run",
      name:   "Temple Run",
      love:   null,
      icon:   "temple-run.jpg",
      genres: [Genre.RUNNER, Genre.CLASSICS],
      platforms: [Platform.MOBILE],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    },
  ],
  ".io Games": [
    {
      shard:  "little-big-snake",
      name:   "Little Big Snake",
      love:   2,
      date:   ["childhood", "present"],
      icon:   "little-big-snake.png",
      genres: [Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.INFREQUENT,
    },
    {
      shard:  "diep-io",
      name:   "diep.io",
      love:   3,
      date:   ["childhood"],
      icon:   "diep-io.webp",
      genres: [Genre.SHMUP, Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.RETIRED,
    },
    {
      shard:  "arras-io",
      name:   "arras.io",
      love:   1,
      date:   ["childhood", "present"],
      icon:   "arras-io.png",
      genres: [Genre.SHMUP, Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.INFREQUENT,
    },
    {
      shard:  "zombs-io",
      name:   "zombs.io",
      love:   1,
      icon:   "zombs-io.jpg",
      genres: [Genre.TOWER_DEFENCE, Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    },
    {
      shard:  "fightz-io",
      name:   "fightz.io",
      love:   null,
      genres: [Genre.IO],
      platforms: [Platform.DESKTOP],
      state:  PlayState.RETIRED,
      date:   ["childhood"],
    },
  ],
};

prep_groups(data);
export const games_data: Groups<GameData> = data;
export const games_list: GameData[] = Object.values(data).flat();
