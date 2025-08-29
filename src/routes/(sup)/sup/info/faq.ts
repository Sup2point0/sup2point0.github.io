import { i, h, a } from "#scripts/utils";


export interface Question
{
  q: string;
  a: string | string[];
}


export const frequerys: Question[] = [
  {
    q: `who are you?`,
    a: `I’m just another humble adventurer on the internet ^v^`,
  },
  {
    q: `where does “Sup#2.0” come from?`,
    a: [
      `yeah, ${a("it’s complicated", "https://github.com/Sup2point0/Assort/blob/origin/~writing/origins.md")}.`,
      `TLDR: I thought “sup” was a cool word, met another Sup, and decided to upgrade myself to Sup2.0 😎`,
    ],
  },
  {
    q: `what does “frequery” mean?`,
    a: `${i("frequery")} = “frequent query” == “frequently asked questions” = FAQs.`,
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
      a: `I ${i("love")} meeting and chatting with new people. Whether you want to analyse Camellia’s ridiculous full flavour soundtracks, want to challenge me with a delicious integral, or just want to ruminate over the heartbreaking character arcs of [Arcane], [feel free to hit me up on Disc] ^v^`,
  },
  {
    q: `what’s up with this website?`,
    a: `hehe, a lot of stuff on here is randomised – to give every visit a slightly different flavour!`
  },
];
