import { i, h, a } from "#scripts/utils";


export interface Fact
{
  /** Unique identifier for the fact. */
  idx: number;

  text: string;

  /** Text shown when the fact box is expanded. */
  desc?: string | string[];
}


export const facts_pinned: Fact[] = [
  {
    idx: 0,
    text: `My favourite colour is <span style="color: #ff0090">${i("electric pink")}</span>.`,
    desc: `This is just my own name for the colour. It’s part of the ${a("supcode Nova", "https://github.com/Sup2point0/supcode/tree/sup/resources/Nova")} colour palette.`,
  },
];

export const facts: Fact[] = [
  {
    text: `My favourite book genre is ${i("dystopian fantasy future fiction")}.`,
    desc: `For specific series, the ${a("Legend trilogy by Marie Lu", "https://wikipedia.org/wiki/Legend_(Lu_novel)")}, ${a("Power of Five by Anthony Horowitz", "https://wikipedia.org/wiki/The_Power_of_Five")}, and ${a("Red Queen by Victoria Aveyard", "https://wikipedia.org/wiki/Red_Queen_(novel)")}.`,
  }, {
    text: `My record typing speed is just over ${h("150 WPM")}.`,
    desc: `I tend to float at more around ${h("130")}, and when I’m actually typing content it’s more like ${h("80~120")} WPM. Also, typing lowercase words != typing code.`,
  }, {
    text: `I can type one-handed at ${h("80 WPM")}`,
    desc: `On iPad. I often need to hold my iPad with my left hand, and then type with my right, so I started typing one-handed. It’s very fun. Feels like playing Phigros.`
  }, {
    text: `I love light mode.`,
    desc: `Yes, I use Discord and reddit in light mode. Programming is the one place where I don’t, though. Can’t code in light mode.`,
  }, {
    text: `I enjoy almost every kind of non-mainstream music.`,
    desc: `Went from EDM (${a("NCS", "https://ncs.io/")}-like), to orchestral film-like, to game OSTs, to ${a("Bo Burnham")}, to Japanese music, to rhythm game music, to ${a("Camellia", "https://youtube.com/@Cametek.CamelliaOfficial")}, and now to literally anything that isn’t pop, rap or hip-hop. (Well akshually, I do enjoy a rare few pop songs – mainly old ones.) You can dive more into my ridiculous music tastes over in ${a("music")}.`,
  }, {
    text: `I play piano (shocker!)`,
    desc: `Nothing more restoring than an hour-long improvisation session.`,
  }, {
    text: `I’ve created ${h("1000+")} custom ${a(i("Yu-Gi-Oh!"), "https://yugipedia.com/wiki/Yugipedia")} cards.`,
    desc: `By the latest census. Probably more if you’re reading this. Also doesn’t include planned cards that haven’t been formally created yet :P`,
  }, {
    text: `I’m writing a novel of lore for my custom ${i("Yu-Gi-Oh")} cards.`,
    desc: `It’s called ${i("The Stranded Saga")}. You can check it out ${a("in Assort", "https://sup2point0.github.io/Assort/yugioh/lore/stranded-saga/the-stranded-saga")}, altho it’s far from finished.`,
  }, {
    text: `I’ve created ${h("300+")} integrals.`,
    desc: `As in, written my own integration questions. Yeah, I’m down so bad for maths. You can see them ${a("on Integrity", "https://sup2point0.github.io/integrity/questions/integrals")}.`,
  },
  
  {
    text: `I can vibe to almost any genre of music.`,
    desc: `Find out more over in ${a("music", "music")}`,
  }, {
    text: `I like creating lists.`,
    desc: `Inexplicable pleasure.`,
  }, {
    text: `I like naming things.`,
    desc: `This includes projects, games, items and upgrades, characters, places, Yu-Gi-Oh cards, conceptual technological products, organic chemical nomenclature, and more. I’m not joking, there’s just something so satisfying about naming things.`,
  }, {
    text: `I drew organic chemical structures for fun.`,
    desc: `It’s like art. I’ve drawn so many hexagons that I can freehand a 120° angle to near perfection. See ${a("kenzokinetics in Assort")} for a digital version equivalent.`,
  }, {
    text: `I like doing really complicated algebraic manipulation (sometimes).`,
    desc: `Not hard algebra, just long arithmetic. Stuff like multiplying 4 brackets, quintuple partial fractions, integrals with 6 substitutions, and the like.`,
  }, {
    text: `I write poetry.`,
    desc: `Despite despising it for most of my childhood, I realised I unironically enjoy writing it. You can check out my works ${a("in Assort", "https://sup2point0.github.io/Assort/writing")} :D`,
  }, {
    text: `I like novels, manga, webtoons, anime, animations and film.`,
    desc: `Hell yeah, ALL THE MEDIA. I don’t really consume too much of any of thise particular genres, but I can defo say I love them all. Especially anime. And film. Novels were my childhood too.`,
  }, {
    text: `I love fonts.`,
    desc: `Or more accurately, ${i("typefaces")}, or more broadly, typography. Yum, yum, yum.`,
  }, {
    text: `I collect cool words.`,
    desc: `${i("pseudopseudohypoparathyroidism")} is always a hilarious one. ${i("floccinaucinihilipilification")} is fun to type. ${i("methylenedioxymethamphetamine")} is a fire chemical substance (ignoring the fact it’s a class A drug). You can see my full list ${a("in Assort")}.`,
  }, {
    text: `I play ${a("Phigros", "https://youtube.com/playlist?list=PLYWIouv-DSkCklDueGcBea6epdSR1aHEx")} one-handed.`,
    desc: `It’s a rhythm game. It looks ${a("like this", "https://youtube.com/watch?v=QTEHsYsBLLU")}. If you play Phigros too, my one-handed ability is generally 96~98% acc on most IN 14 charts, and I FC-d Xenolith IN 14 one-handed. Can probably φ some IN 13 charts.`,
  }, {
    text: `I love ${a("Desmos", "https://www.desmos.com/calculator")}.`,
    desc: `Desmos is the world’s greatest calculator. You can code in Desmos. You can make games in Desmos. (I’m serious.) You can find out more ${a("on Integrity", "https://sup2point0.github.io/integrity/desmos/gamedev")}.`,
  }, {
    text: `I used to be so into ${a("Scratch", "https://scratch.mit.edu")}.`,
    desc: `Actually my childhood. My mind dreamt up ideas for games faster than I could ever have hoped to make them. Fun times.`,
  }, {
    text: `I’m a ${a("Bo Burnham", "https://wikipedia.org/wiki/Bo_Burnham")} fan.`,
    desc: `Randomly got ${a(i("Welcome to the Internet"), "https://youtube.com/watch?v=k1BneeJTDcU")} in my YouTube recommended in spring 2021, and I fell down the rabbit hole from there.`,
  }, {
    text: `I love romance.`,
    desc: `No comment.`,
  }, {
    text: `I have crazy dreams.`,
    desc: `No kidding, they’re like, proper multi-arc epics and sagas with character development and all. Actually just free downside-free entertainment. idky they come, but they do. It makes sleeping quite fun.`
  },
  
  {
    text: `I once solved an equation using the ${a("Lambert W function", "https://wikipedia.org/wiki/Lambert_W_function")} in my dreams.`,
    desc: `Might have been to do with the video I’d watched that night where I was first introduced to the $W$ function. Also, the equation in question was $x^2 e^x = 1$, and you solve it by square rooting both sides, scaling and applying the $W$ function.`,
  }, {
    text: `I came up with the final integral for my school’s Integration Bee final in a dream.`,
    desc: `The integral’s ${a("on Integrity", "https://sup2point0.github.io/integrity/question/integrals?shard=s24cu-dx1")}`,
  }, {
    text: `I’m making a shooter game in Desmos.`,
    desc: `It’s a remake of the mobile game ${a("Ball Blast")}. You can check out a preview ${a("on YouTube", "https://youtube.com/watch?v=KX0i13fPqLo")}.`,
  }, {
    text: `I’ve written a research paper on the origins of my username (Sup#2.0).`,
    desc: `I’ll have you know it’s fully cited and currently sitting at around 3000 words. No, it’s not published, and yes, it is a very serious project. You can read it ${a("in Assort", "https://github.com/Sup2point0/Assort/blob/origin/~writing/origins.md")}.`,
  }, {
    text: `I used to have a YouTube channel with ${h("127,000")} views.`,
    desc: `A little over 200 subscribers, hehe. Unfortunately, the account got terminated for copyright violations(?). Welp, what can we can do but ${a("start from scratch", "https://youtube.com/@SuppetySup")}.`,
  }, {
    text: `My record for solving the ${a("3x3x3 Rubik’s Cube", "https://wikipedia.org/wiki/Rubik%27s_Cube")} is ${h("18.34")} seconds.`,
    desc: `Timed by my friend on the school playground when I was 11. Can’t do it that quick anymore, ofc 0.o`,
  }, {
    text: `I memorised every single upgrade in ${a("Bloons TD 6", "https://ninjakiwi.com/Games/Mobile/Bloons-TD-6.html")}.`,
    desc: `Just the monkeys though, not the heroes. It wasn’t intentional, it just happened naturally since I was so into the game; to be honest, this a thing a lot of Bloons players can do (I think), so it’s not actually that special lmao.`,
  }, {
    text: `I’ve read ${a("Harry Potter", "https://wikipedia.org/wiki/Harry_Potter")} like, 13 times.`,
    desc: `I’ve lost count at this point, but it’s like a Poisson distribution starting at $n = 5$. Almost certainly at least 10 times. I also re-read specific parts of specific books a lot just cuz I loved them so much. Oh, and we’ll just ignore how much fanfiction I’ve read...`,
  }, {
    text: `I watched nearly every YouTuber in ${a("Hermitcraft Season 7", "https://hermitcraft.com/")}.`,
    desc: [
      `*Just for a few days, maybe 1 or 2 weeks. This was during ${a("CoViD-19", "https://wikipedia.org/wiki/COVID-19")} lockdown, and ${a("Decked Out")} was out, and I had loads of time on my hands (somehow), and I wanted to see everyone’s runs.`,
      `Alongside my regular ${a("Mumbo", "https://youtube.com/@ThatMumboJumbo")} and ${a("Grian", "https://youtube.com/@Grian")}, I distinctly remember watching ${a("Impulse")} and ${a("Tango")} for a good chunk of the season, ${a("Scar")} and ${a("iskall")} too, as well as ${a("Wels")}, ${a("joehills")} and even ${a("Xisuma")} for a few episodes. The one-offs included ${a("False")} and ${a("Zedaph")}.`,
    ],
  }, {
    text: `I binge-watched the entirety of ${a("Mumbo", "https://youtube.com/@ThatMumboJumbo")}’s ${a("Hermitcraft Season 6", "https://youtube.com/playlist?list=PLFm1tTY1NA4fcZddqsijPEignAza8nF74")}.`,
    desc: `The exact dates are lost to me now, but I think I started around autumn 2019, and I must’ve finished a good while before the end of 2020. I’ll say it took me a couple months in total to finish the 160 episodes or whatever.`,
  }, {
    text: `I visited and toured ${h("8")} colleges at ${a("Cambridge University open day", "https://undergraduate.study.cam.ac.uk/events/cambridge-open-days")}.`,
    desc: `Churchill, Fitzwilliam, Robinson, Claire, Lucy Cavendish, Queens, Downing (in that order). Plus a Computer Science department introduction presentation. I still don’t know how I did it. My legs were ${i("dead")}.`,
  }, {
    text: `I think the most beautiful part of a human are eyes.`,
    desc: `Fingers and hair come in close second. It’s hard to pick. (this sounds sus vrej)`,
  }, {
    text: `My name is a meme.`,
    desc: `Shall I elaborate?`,
  }, {
    text: `These tidbits are randomly shuffled.`,
    desc: `Or are they?`,
  }, {
    text: `If you keep scrolling, you might get to the end.`,
    desc: `Trust.`,
  }
].map((fact, idx) => {
  fact.idx = idx + facts_pinned.length;
  return fact as Fact;
});
