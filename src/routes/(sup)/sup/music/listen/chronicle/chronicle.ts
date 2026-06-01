import { Genre, Vibe, type TrackData } from "#scripts/types/music";
import { a, h, i } from "#scripts/utils";
import type { Dates } from "#scripts/types";


interface ChronicleData
{
  era:    string;
  date:   Dates;
  desc:   string[];
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
    desc: [
      `Currently, I’m just listening to a lot of everything!`,

      `While on paper my musical library is ridiculously massive, I still somehow manage to feel stifled at times... so I’m always looking for new stuff. YouTube Music’s autoplay helps a lot with this ;P`,
    ],
    tracks: [
      {
        shard:   "fake-love",
        name:    "Fake Love",
        artists: ["aureonix"],
        date:    "2026 May",
        cover:   "fake-love.jpg",
        genres:  [Genre.ELECTRONIC],
        vibes:   [Vibe.UPBEAT],
        discovered: `YouTube Music reccs`,
        desc: [
          `I’ve been so high on this. It keeps coming up on my YouTube Music home page, and I keep clicking on it!!`,

          `Similar vibe to ${a("What If", "#what-if", true)}’s final drop. It’s like, pure happy vibes, can’t even tell what’s going on in the production but it just sounds so full and good and awesome.`,

          `I’m not specially a fan of vocals, but the vocals in this are super pretty, and slot into the arrangement so nicely.`,

          `I’m often unsure what level of ‘love’ I need to reach for a song to be added to this list, but for this one, I quickly knew it in my heart. Maybe that’s how it should be :0`,
        ],
      },
      {
        shard:   "heiki-sou-desho",
        name:    "平気そうでしょ",
          lang:  "ja",
        artists: ["moudelica"],
        date:    "2026 May",
        cover:   "heiki-sou-desho.jpg",
        genres:  [Genre.JCORE, Genre.ELECTRONIC],
        vibes:   [Vibe.UPBEAT],
        discovered: `YouTube Music reccs`,
        desc: [
          `Woah, this came outta nowhere. It was one of those tracks where it just started playing, and I wasn’t sure whether to let it keep playing. But the cover art was cool (and cute, lol), and then the drop hit, then the breakdown, and I decided I like it.`,

          `Surprised but not surprised that Moudelica speaks Japanese. Her voice is really nice in this, the breathiness is just the right level.`,
        ],
      },
      {
        shard:   "resonance",
        name:    "resonance",
        artists: ["nabbe"],
        date:    "early 2026",
        cover:   "resonance.jpg",
        genres:  [Genre.ELECTRONIC],
        vibes:   [Vibe.MUTED],
        discovered: `YouTube Music reccs`,
        desc: [
          `I’ll never change, eh? I can love fast, hardcore music all I want, but I’ll always return to my roots – that melodic, melancholic, muted vibe. If you’ll forgive the pun, it resonates with my heart so purely.`,

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
    date: ["summer 2024", "early 2026"],
    desc: [
      `Over these years my music taste really started to explode, as I grew into rhythm games other than Phigros, came across beatboxing, and started playing YouTube Music while studying.`,
    ],
    tracks: [
      {
        shard:   "save-this-wrld",
        name:    "SAVE THIS WRLD",
        artists: ["exyl"],
        date:    "early 2026",
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
          `MELODIC STUFF ACTUALLY KILLS ME.`,

          `The opening melody man. Beautiful is the word, but I do overuse that word here. CUZ EVERYTHING IS FRICKIN BEAUTIFUL-`,

          `The main melody is really nice as well. Love the breakbeat interlude. Such a bop, and great remix!`,
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
          lang:  "cn",
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
          `Aw, this one just makes my heart melt a little. It’s so cute!!`,

          `What really does it for me is the maturity of the composition. The developments are so satisfying, and each part has so much character. It feels like a soundtrack for a little gremlin’s wondrous adventure, y’know?`,
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
          `It slaps. That’s all there is to it.`,

          `Yes, it’s ironic, and I love it. It’s so addictive, I just can’t get enough.`,

          `All of the music in K-pop Demon Hunters is top-notch. You could call the tracks a little cliché, sure, but. They hit that cliché ${i("perfectly")}. They capture exactly the vibe they’re going for, and the production quality is top-notch. I just can’t not appreciate it. Doing the same stuff as everyone else isn’t a problem if you do it ${i("insanely well")}, innit.`,
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
          `For me this is peak artcore. Peak Arcaea music, in fact. I would call this the ${i("sound")} of Arcaea.`,

          `I can’t even place my finger on what makes it so special. Maybe it’s the reverb, maybe it’s how the slightly scratchy textures meld with the softer warmer ones, maybe it’s the pitch bends on the melody. It’s really quite magical. Such an iconic track.`,
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
        genres:  [Genre.ELECTRONIC, Genre.DUBSTEP],
        discovered: `YouTube Music reccs`,
        desc: [
          `Many of the tracks on this list made this list because their drop just hit like an absolute truck.`,

          `Well, this one was a damn hurricane. 20/20 stank face.`,

          `Then the bridge breakdown too. Yeah, it’s probably just way too much OTT and chonky reverb, but it just sounds so delicious.`,

          `Not so much a fan of the kawaii vocals, but the syncopated rhythms in this one are such headboppers.`,
        ],
      },
      {
        shard:   "final-showdown",
        name:    "Final Showdown",
        artists: ["hookington"],
        date:    "spring 2025",
        cover:   "final-showdown.jpg",
        genres:  [Genre.RHYTHM, Genre.ELECTRONIC, Genre.MUSIC],
        discovered: `Chiru-san × Hookington – Rebirth`,
        desc: [
          ``,
        ],
      },
      {
        shard:   "luo-ri",
        name:    "落日親吻銀光海",
          lang:  "cn",
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
        genres:  [Genre.ORCHESTRAL],
        vibes:   [Vibe.EMOTIONAL],
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
          `The first PIKASONIC track I discovered, and such a unique vibe.`,
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
    date: [2022, "late 2025"],
    desc: [
      `Slightly preceding my rhythm game music explosion and growing in parallel, I also found many, many Japanese tracks that I really liked.`,
    ],
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
          `YouTube Music really never fails to disappoint. I mean, granted, from what I know this track blew up, but either way what a find. You just can’t stop moving while listening to it. It’s so groovy, innit. Everything is so catchy.`,
          
          `The variations in the vocal tones are really fun, I seriously dig it.`,
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
          lang:  "ja",
        artists: [],
        date:    undefined,
        cover:   "bug.jpg",
        genres:  [Genre.JCORE],
        discovered: `Rhythm+ (browser rhythm game)`,
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
          `Ignoring the meaning of the song, it is an utter steal. I just can’t stop bopping.`,

          `Considering the meaning of the song, it is an utter steal. Makes it 20x funnier, I love it. Also, mafumafu’s voice is pure insanity.`,

          `There’s a way to develop melodies from verse to chorus that sounds so intuitive and natural – to the listener, not the writer – and sure, it’s ‘standard’, but it still feels magical. This track does it so well.`,
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
          lang:  "ja",
        artists: ["yoasobi"],
        date:    undefined,
        cover:   "tabun.png",
        genres:  [Genre.JCORE, Genre.LOFI],
        discovered: `YOASOBI discography`,
        desc: [
          `Fell in love the first time I heard it – altho I’m struggling to remember now, it was quite a while ago TvT – and never fell out of love, really.`,

          `All of it. The soft breaks, the melody, the harmonies, the solos, the swing. Such a mood.`,
        ],
      },
      {
        shard:   "idol",
        name:    "「アイドル」",
          lang:  "ja",
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
    desc: [
      `Well, this track needs to be in this list, but it doesn’t really fit anywhere. Bit awkward.`,
    ],
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
          `y’know what, maybe this belongs in the timeless section.`,

          `Music from the soul.`,

          `I aspire to create something like this, someday.`,
        ],
      },
    ],
  },
  {
    era:  "Phigros Era",
    date: ["summer 2023", 2024],
    desc: [
      `In summer of 2023 I was introduced to Phigros and rhythm gaming, and my music taste has never been the same since.`,

      `Of course, I was already an electronic music enjoyer, but rhythm game music truly took that to the next level, where I started embracing harsher and harder genres like hardcore, neurofunk, and Camelliacore.`,
    ],
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
          lang:  "cn",
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
          lang:  "ja",
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
          `Opening slaps. The sweep buildup, the releases, the light reverb, the development, the momentum on the hats, it’s just delicious.`,

          `And damn, what a melody(s). Didn’t even realise it was a hardcore track (I guess that’s how you tell you’ve been electronic-indoctrinated, eh? :P)`,

          `Favourite part is the post-1st drop breakdown, it’s so... ${i("evil")} is how I’d describe it. Maybe there’s a bit of mental association with the sick Phigros chart, lmao, but sick.`,

          `Oh right, and then that leads into an amazing atmospheric melodic drop. Such a polished track, and the extended version is actually great as well!`,
        ],
      },
      {
        shard:   "qing-ya",
        name:    "青芽",
          lang:  "cn",
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
    desc: [
      `This period is tough to pinpoint, really. It wasn’t particularly defined by anything. I was listening to a lot of OSTs from games, series, anime.`
    ],
    tracks: [
      {
        shard:   "friendship-games",
        name:    "Friendship Games",
        artists: ["mlp"],
        date:    "childhood",
        cover:   "friendship-games.jpg",
        genres:  [Genre.SOUNDTRACK, Genre.ELECTRONIC, Genre.ROCK],
        discovered: `childhood`,
        desc: [
          `If you haven’t listened to the song before, ${i("listen to it")}. I’m serious.`,

          `The opening, genuinely. One of the most masterful things I’ve ever heard. (By ‘masterful’ I mean in the context of what it aims to achieve, which is to build a mysterious, curious atmosphere.) The rhythmic piano, the vocal fade-ins, the drum hits, the atmospheric piano notes, it’s just. “AHH”, y’know?`,

          `The rest probably isn’t for everyone, but I love the vibe and energy.`,
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
        shard:   "susume-ultraman-zero",
        name:    "Susume! Ultraman Zero",
        artists: ["voyager"],
        date:    "childhood",
        cover:   "susume.jpg",
        genres:  [Genre.SOUNDTRACK, Genre.ROCK],
        discovered: `${h("Ultraman Zero: The Revenge of Belial")} (film)`,
        desc: [
          `Such a theme. The way everything comes together is really nice, and the energy is so complete. Ultraman Zero is just pure unfiltered epicness, so it just fits him perfectly.`,
        ],
      },
      {
        shard:   "are-you-happy",
        name:    "Are You Happy",
        artists: ["bo-burnham"],
        date:    2021,
        cover:   "make-happy.jpg",
        genres:  [Genre.PIANO],
        vibes:   [Vibe.EMOTIONAL],
        discovered: `Bo Burnham discography`,
        desc: [
          `When I first heard this song, it felt like I’d heard the opening melody before.`,

          `It’s a beautiful melody. This song is fragile, tender and vulnerable, distinct to Bo’s other songs. It’s incredible how he can do diabolical harsh rap (words), dumb over-the-top comedic bops (ironic), and genuinely vibey soundtracks (FaceTime), and under all that is able to pull this softness off. His voice in this is really the kind that breaks your heart.`,

          `I learnt to play this on piano, y’know. It’s fun to play, but it does feel incomplete without the lyrics over it. The harmonies really are quite beautiful.`,

          `And damn, what a question. You feel it.`,

          `What a farewell as well.`,
        ],
      },
      {
        shard:   "up-in-the-hills",
        name:    "Up in the Hills",
        artists: ["johannes-bornlof"],
        date:    undefined,
        cover:   "stowaway-home.jpg",
        genres:  [Genre.ORCHESTRAL],
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
          lang:  "cn",
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
    date: [2016, 2021],
    desc: [
      `My musical journey began with electronic, specifically NCS-era EDM (${h("NoCopyrightSounds")} / electronic dance music). My favourite YouTuber at the time, ${h("iXPLODE")}, who made .io games videos, used this music in his videos.`,
      
      `${h("Elektronomia")} was the first artist I followed, and the first artist I called my “favourite”.`,
    ],
    tracks: [
      {
        shard:   "no-turning-back",
        name:    "No Turning Back",
        artists: ["vexento"],
        date:    "August 2021",
        cover:   "no-turning-back.jpg",
        genres:  [Genre.ELECTRONIC],
        vibes:   [Vibe.EMOTIONAL, Vibe.CHILLOUT],
        discovered: `Vexento release`,
        desc: [
          `Timeless, timeless melody.`,
          
          `Aw man, it’s so beautiful. Vexento, I love your music so much.`,

          `Fun fact, I caught this as it released. I hadn’t been caught up with Vexento at the time, and I happened to the see the preview for this in my subscriptions. Listening to this really takes me back...`,
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
        genres:  [Genre.EDM],
        discovered: `Elektronomia release`,
        desc: [
          `Alright, call me crazy, but I’ve always heard sadness in this track. Ofc, rhythm-wise and feeling-wise, it’s clearly a beach track, but to me the melody has a hint of “nostalgia for days long gone” sadness in it.`,

          `I’ve found myself associating this track with the ${h(i("Ventura saga"))} (book series), particularly ${i("The Truth of Different Skies")}. It’s like a memory of life of Earth. idk man, I suck at describing this stuff TvT`,

          `Either way, definitely some of Elektronomia’s finest work. It’s one of my favourite drops, but I especially love the bridge. The counter-melody is so cool.`,
        ],
      },
      {
        shard:   "end-of-time",
        name:    "End of Time",
        artists: ["alan-walker", "k-391", "Ahrix"],
        date:    undefined,
        cover:   "end-of-time.webp",
        genres:  [Genre.EDM],
        discovered: `Alan Walker release`,
        desc: [
          `The vibes are strong on this one.`,

          `It’s interesting, this one grew on me. But it’s not that I didn’t like it at first, I did; I just ended up falling in love with it a lot more, sorta outta nowhere.`,

          `My favourite aspect, rather surprisingly, might be the vocals! It’s a shame the vocalist isn’t credited, I really love her style.`,
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
          `Vexento is absolutely MASTERFUL at mixing. I felt this so clearly after starting music production myself. He’s unbelievably talented at creating full, heartwarming mixes, where even tho it ${i("sounds like")} there’s not that much going on, the feeling is all there. It’s incredible.`,

          `And like Johannes Bornlöf, I’m gonna have to pick this track as my favourite of his. It’s just so perfect.`,
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
          `It’s somewhat generic Alan Walker, but this track captures what I loved about his music the most. It’s the atmosphere he creates. It’s music that accompanies you throughout your life.`,
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
    desc: [
      `Some tracks don’t really fit in any particular moment in the chronicle. They’re just too timeless, too legendary. So I suppose I’ll just leave them here ;)`,
    ],
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
        date:    "childhood",
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
        date:    "eternal",
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
