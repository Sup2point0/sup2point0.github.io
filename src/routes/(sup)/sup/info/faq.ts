import { i, h, a } from "#scripts/utils";


export interface Question
{
  q: string;
  a: string | string[];
}


export const frequerys: Question[] = [
  {
    q: `who are you?`,
    a: `I’m just another intrepid adventurer on the internet ^v^`,
  },
  {
    q: `where does “Sup#2.0” come from?`,
    a: [
      `yeah, ${a("it’s complicated", "https://github.com/Sup2point0/Assort/blob/origin/~writing/origins.md")}.`,
      `TLDR – I thought “sup” was a cool word, met another Sup, and decided to upgrade myself to Sup2.0 😎`,
    ],
  },
  {
    q: `what does “frequery” mean?`,
    a: `${i("frequery")} := “frequent query” == “frequently asked questions” === FAQs.`,
  },
  {
    q: `why don’t you share any personal details?`,
    a: `here’s one, then – deep down, I revel in anonymity. #v#`,
  },
  {
    q: `mate, how old are you?`,
    a: [
      `2.`,
      `obviously.`,
      `2.0.`,
    ],
  },
  {
    q: `why are you in Antarctica?`,
    a: `why not? ${a("We’re a cool place")} ;)`,
  },
  {
    q: `can we be friends?`,
      a: `Aw hell yeah. Whether you want to analyse ${a("Camellia’s ridiculous full flavour soundtracks", "https://youtube.com/playlist?list=PLaN19gIKi5Zp2sK5jeaHgJ823ANa4NcB4")}, want to ${a("challenge me with a delicious integral", "https://sup2point0.github.io/integrity/questions/integrals")}, or just want to ${a("ruminate over the heartbreaking character arcs of Arcane", "/sup/loves/series")}, ${a("feel free to hit me up on Disc", "https://discord.com/users/752972078579449888")} ^v^`,
  },
  {
    q: `what’s up with this website?`,
    a: `hehe, a lot of stuff on here is randomised – to give every visit a slightly different flavour!`
  },
];
