import { Genre, Vibe, type TrackData } from "#scripts/types/music";
import { a, h, i } from "#scripts/utils";
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
        shard:   "resonance",
        name:    "resonance",
        artists: ["nabbe"],
        date:    "early 2026",
        cover:   "resonance.jpg",
        genres:  [Genre.ELECTRONIC,],
        vibes:   [Vibe.MUTED,],
        discovered: `YouTube Music reccs`,
        desc: [
          `I’ll never change, eh? I can love fast, hardcore music all I want, but I’ll always return to my roots – that melancholic, muted vibe. If you’ll forgive the pun, it resonates with my heart so purely.`,

          `Don’t really want to analyse the track, if I’m honest. It is just beautiful, that is all there is to say.`,
        ],
      },
      {
        shard:   "breakeven",
        name:    "Breakeven",
        artists: ["the-script"],
        date:    "2026 February 14",
        cover:   "the-script.jpg",
        genres:  [Genre.POP],
        vibes:   [Vibe.EMOTIONAL],
        discovered: `childhood`,
        desc: [
          `We always loved this song, but now we feel this song.`,
        ],
      },
    ],
  },
  {
    era:  "Modernity",
    date: [2023, "late 2025"],
    tracks: [
      {
        shard:   "save-this-wrld",
        name:    "SAVE THIS WRLD",
        artists: ["exyl"],
        date:    "late 2025",
        cover:   "save-this-wrld.jpg",
        genres:  [Genre.ELECTRONIC, Genre.RHYTHM],
        discovered: `YouTube Music reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "spring-klydix-remix",
        name:    "Spring (KLYDIX remix)",
        artists: ["stellaon", "klydix"],
        date:    "late 2025",
        cover:   "spring-klydix-remix.jpg",
        genres:  [Genre.ELECTRONIC],
        discovered: `Firefly Music`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "debut",
        name:    "Debut",
        artists: ["katseye"],
        date:    "fall 2025",
        cover:   "debut.webp",
        genres:  [Genre.KPOP],
        discovered: `friend`,
        desc: [
          `Not generally a fan of this sorta music, but I can’t not enjoy it, because ${i("gawddamn")} is it rich. The rhythms, harmonies and progressions are actually so spot-on.`,
        ],
      },
      {
        shard:   "lost-requiem",
        name:    "Lost Requiem",
        artists: ["ludicin"],
        date:    "late 2025",
        cover:   "lost-requiem.jpg",
        genres:  [Genre.FULL_FLAVOUR, Genre.RHYTHM],
        discovered: `YouTube reccs`,
        desc: [
          `hello かめりあ 2.0??`,

          `The atmosphere is incredible, and it contrasts so beautifully with the harsh, dry drops. Sheer magnificence.`
        ],
      },
      {
        shard:   "thick-rain",
        name:    "《粗线条的雨》",
        artists: [],
        date:    "fall 2025",
        cover:   "thick-rain.jpg",
        genres:  [],
        discovered: `Milthm`,
        desc: [
          `Listening to this with studio headphones on was ...an experience. I have no idea how they managed it. The mix is one of the best I’ve ever heard, tbh. It’s so full and warm and atmospheric.`,

          `Only complaint is the voice is too ‘girlish’ at times, but hey, it grew on me as always.`,
        ],
      },
      {
        shard:   "natsu",
        name:    "Natsu!",
        artists: ["wave-meow"],
        date:    "fall 2025",
        cover:   "natsu.jpg",
        genres:  [Genre.DRUM_N_BASS, Genre.RHYTHM],
        discovered: `Firefly Music`,
        desc: [
          `AHHHHH THESE RHYTHMS`,

          `It’s tough to put the feeling I get listening to this track into words. It’s just a total utter headbopper, destructively delicious.`,
        ],
      },
      {
        shard:   "flutter-echo",
        name:    "Flutter Echo",
        artists: ["cansol"],
        date:    "fall 2025",
        cover:   "flutter-echo.jpg",
        genres:  [Genre.ELECTRONIC, Genre.KAWAII, Genre.DRUM_N_BASS],
        discovered: `Phigros × KALPA collaboration II`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "your-idol",
        name:    "Your Idol",
        artists: ["saja-boys", "k-pop-demon-hunters"],
        date:    "summer 2025",
        cover:   "your-idol.jpg",
        genres:  [Genre.KPOP, Genre.TRAP],
        discovered: `K-pop Demon Hunters`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "ignotus",
        name:    "Ignotus",
        artists: ["ak-q"],
        date:    "fall 2025",
        cover:   "ignotus.webp",
        genres:  [Genre.ARTCORE, Genre.RHYTHM],
        discovered: `Arcaea`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "playing-god",
        name:    "Playing God",
        artists: ["polyphia"],
        date:    "spring 2025",
        cover:   "playing-god.jpg",
        genres:  [Genre.TRANSCENDENTAL, Genre.GUITAR],
        discovered: `YouTube Music reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "amethyst",
        name:    "Amethyst",
        artists: ["kanro"],
        date:    "spring 2025",
        cover:   "amethyst.jpg",
        genres:  [],
        discovered: `YouTube Music reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "final-showdown",
        name:    "Final Showdown",
        artists: ["hookington"],
        date:    "spring 2025",
        cover:   "final-showdown.jpg",
        genres:  [],
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
        discovered: `news`,
        desc: [
          `This track and ${a("《粗线条的雨》", "#thick-rain", true)} are really alike. Pure chillout. I suck at describing music with words, so idk how to describe it. But the atmosphere is just so full and warm. It’s like a “soundtrack of your life” type track. And the drums... it’s sorta a ‘bop’, but I feel like there’s a better word that hasn’t been invented yet. Aw man, I love this track.`,
          
          `And yes, I discovered it from a Chinese news video which used it as the backing soundtrack. New music comes from everywhere ;)`,
        ],
      },
      {
        shard:   "what-if",
        name:    "What If",
        artists: ["stessie"],
        date:    "spring 2025",
        cover:   "what-if.jpg",
        genres:  [Genre.ELECTRONIC],
        vibes:   [Vibe.HAPPY],
        discovered: `Firefly Music`,
        desc: [
          `I’m writing these thoughts out of order so I’m naturally running out of words (or rather, starting to repeat myself lmao)`,

          `Anyway, this might be one of the most amazing melodies I’ve ever heard. It might also be the first ‘happy’ track I’ve listened to where I actually feel ${i("fully")} happy. I say this because, for instance with ${a("Ibiza", "#ibiza", true)}, it’s a happy melody but I still hear sadness in it. But not for this track. It’s pure happiness, it’s sooo feel good. So that is really special for me.`,

          `(only the ending has a touch of sadness, but it’s more like a “the end of the happiest day of my life” type ending.)`,
        ],
      },
      {
        shard:   "what-could-have-been",
        name:    "What Could Have Been",
        artists: ["sting"],
        date:    "spring 2025",
        cover:   "what-could-have-been.jpg",
        genres:  [Genre.ORCHESTRAL,],
        vibes:   [Vibe.EMOTIONAL,],
        discovered: `Arcane`,
        desc: [
          `There’s many aspects of music that I’m susceptible to, but as a producer, one I’ve become increasingly sensitive to is ${i("progression")} – how a track grows, develops and shifts.`,

          `And whooh, this track. Chills. From the pensive opening piano, to the raw, pained vocals of Sting, to the first chord release. I’m not joking, chills every. single. time. I’m listening to the track as I write this and I got chills without even paying full attention.`,

          `The violin surges, the sustained vocals, the raw felt emotion. Whether I look at it in the context of Arcane or as its own track, either way it’s beautifully perfect.`
        ],
      },
      {
        shard:   "dopamine-dnb-remix",
        name:    "Dopamine (DnB remix)",
        artists: ["wing"],
        date:    "spring 2025",
        cover:   "dopamine-dnb.jpg",
        genres:  [Genre.BEATBOX, Genre.DRUM_N_BASS],
        discovered: `WING`,
        desc: [
          `I first came across an unofficial recording of Wing performing an early version of this on some Korean show, in a YouTube video that got recommended to me out of luck (I wouldn’t have found it since the title was all Korean).`,

          `So when the actual thing dropped, aw yeah, it was HYPE. And man, what a track. So clean, so polished, so elegant. Pure mastery all throughout.`,
        ],
      },
      {
        shard:   "new-start",
        name:    "New Start",
        artists: ["pikasonic"],
        date:    "early 2025",
        cover:   "new-start.jpg",
        genres:  [Genre.KAWAII_FUTURE_BASS],
        vibes:   [Vibe.HAPPY],
        discovered: `Firely Music, YouTube reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "sakura-fubiki",
        name:    "Sakura Fubiki",
        artists: ["street"],
        date:    "summer 2024",
        cover:   "sakura-fubiki.jpg",
        genres:  [Genre.RHYTHM, Genre.NEUROFUNK],
        discovered: `Arcaea`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "grimheart",
        name:    "Grimheart",
        artists: ["puru"],
        date:    "summer 2024",
        cover:   "grimheart.jpg",
        genres:  [Genre.TRAP],
        vibes:   [Vibe.CHILLOUT],
        discovered: `Arcaea`,
        desc: [
          `Here’s how I’d put this – I knew I liked this genre, but I ${i("didn’t know it existed")}. And the only person who makes it like this is puru. (maybe also Frums, but only that specific section of XNOR)`,

          `It’s so special. The drums and rhythms are fairly fast, and the textures aren’t all soft. But the track just ${i("is soft")}. It’s so inexplicable. It occupies such an unparalleled space that is just ${i("puru")}.`,
        ],
      },
    ],
  },
  {
    era:  "Japanese Era",
    date: 2023,
    tracks: [
      {
        shard:   "bibbidiba",
        name:    "BIBBIDIBA",
        artists: ["hoshimachi-suisei"],
        date:    "spring 2025",
        cover:   "bibbidiba.png",
        genres:  [Genre.JPOP],
        discovered: `YouTube Music reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "mend-your-ways",
        name:    "Mend Your Ways",
        artists: ["such", "psyqui"],
        date:    "spring 2025",
        cover:   "mend-your-ways.jpg",
        genres:  [Genre.JCORE, Genre.NEUROFUNK],
        discovered: `YouTube Music reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "bug",
        name:    "バグ / 25時、ナイトコードで。",
        artists: [],
        date:    undefined,
        cover:   "bug.jpg",
        genres:  [Genre.JCORE],
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "i-wanna-be-a-girl",
        name:    "I wanna be a girl",
        artists: ["mafumafu"],
        date:    undefined,
        cover:   "i-wanna-be-a-girl.jpg",
        genres:  [],
        discovered: `Rhythm+ (browser rhythm game)`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "beyond-the-way",
        name:    "Beyond the Way",
        artists: ["giga", "miku", "ren"],
        date:    undefined,
        cover:   "beyond-the-way.jpg",
        genres:  [Genre.TRAP, Genre.VOCALOID],
        discovered: `YouTube reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "tabun",
        name:    "たぶん",
        artists: ["yoasobi"],
        date:    undefined,
        cover:   "tabun.png",
        genres:  [Genre.JCORE, Genre.LOFI],
        discovered: `YOASOBI discography`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "idol",
        name:    "「アイドル」",
        artists: ["yoasobi"],
        date:    undefined,
        cover:   "idol.png",
        genres:  [Genre.JPOP, Genre.ANIME],
        discovered: `${h("Oshi no Ko")} anime`,
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
        shard:   "sentient",
        name:    "Sentient",
        artists: ["gavin-luke"],
        date:    undefined,
        cover:   "sentient.jpg",
        genres:  [Genre.PIANO],
        vibes:   [Vibe.EMOTIONAL],
        discovered: `YouTube reccs`,
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
        discovered: `Phigros`,
        desc: [
          `It’s too perfect. It just... like, ticks all the boxes.`,
          `The energy, the rhythms, the textures. More than anything, it’s how perfectly it all comes together. Of all the rhythm game tracks I’ve listened to, this has one of the fewest ‘rough edges’ (which is usually the main thing keeping many tracks from, for instance, being on this list :P).`,
        ],
      },
      {
        shard:   "synthesis",
        name:    "Synthesis",
        artists: ["tn-shi"],
        date:    undefined,
        cover:   "synthesis.jpg",
        genres:  [],
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
        shard:   "friendship-games",
        name:    "Friendship Games",
        artists: ["mlp"],
        date:    undefined,
        cover:   "friendship-games.jpg",
        genres:  [],
        discovered: `childhood`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "suzume",
        name:    "Suzume",
        artists: ["radwimps", "Toaka"],
        date:    undefined,
        cover:   "suzume.jpg",
        genres:  [],
        discovered: `${h("Suzume no Tojimari")} anime`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "geometric-love",
        name:    "Proof Geometric Construction Can Solve All Love Affairs",
        artists: ["manbo-p"],
        date:    undefined,
        cover:   "geometric-love.jpg",
        genres:  [],
        discovered: `YouTube reccs`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "suzume-ultraman-zero",
        name:    "Susume! Ultraman Zero",
        artists: [],
        date:    undefined,
        cover:   "susume.jpg",
        genres:  [],
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "are-you-happy",
        name:    "Are You Happy",
        artists: ["bo-burnham"],
        date:    2021,
        cover:   "make-happy.jpg",
        genres:  [],
        discovered: ``,
        desc: [
          ``,
        ],
      },
      {
        shard:   "up-in-the-hills",
        name:    "Up in the Hills",
        artists: ["johannes-bornlof"],
        date:    undefined,
        cover:   "stowaway-home.jpg",
        genres:  [Genre.ORCHESTRAL,],
        discovered: ``,
        desc: [
          `It is pretty awe-inspiring how rarely Johannes Bornlöf misses, and the proportion of his discography that I ${i("really like")} is pretty astounding. Beat かめりあ, tbh.`,

          `But of all his incredible tracks, for some reason this one just hits different. It’s the melody. ${h("Only the Brave")} has a similarly timeless melody, but this one really, really struck me fsr. It’s... beautiful, really. The sense of longing, nostalgia, triumph, all captured in one.`,

          `I don’t really like picking favourites, but somehow I was able to pick this out as my favourite Johannes Bornlöf track. It’s genuinely incredible how much his music has been able to move me.`,
        ],
      },
      {
        shard:   "rong-yao-de-zhan-chang",
        name:    "荣耀的战场",
        artists: ["R1SE"],
        date:    "summer 2019",
        cover:   "rong-yao-de-zhan-chang.jpg",
        genres:  [Genre.CPOP],
        discovered: `《全职高手》 (The King’s Avatar)`,
        desc: [
          `What an ANTHEM. Honestly, looking back, this is probably the first Chinese track that I properly fell in love with. The story of 《全职高手》 also adds so much sentimental value and meaning to the song.`,
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
        cover:   "home.jpg",
        genres:  [Genre.DOWNTEMPO],
        vibes:   [Vibe.CHILLOUT, Vibe.HAPPY],
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
        cover:   "when-youre-gone.jpg",
        genres:  [Genre.POP],
        vibes:   [Vibe.EMOTIONAL],
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
        cover:   "never-gonna-give-you-up.jpg",
        genres:  [Genre.POP],
        discovered: `??`,
        desc: [
          `I unironically enjoy this song, alright? Also, you should check ${a("this<sup>↗</sup>", "https://youtube.com/watch?v=yPYZpwSpKmA")} out ;)`,
        ],
      },
    ],
  },
];
