import { FrozenWeightedList } from "@sup2.0/weighted-list";

import { i, h, a } from "#scripts/utils";
import type { Description } from "#scripts/types";


export interface Question
{
  q: string;
  a: Description | FrozenWeightedList<Description>;
}


export const frequerys: Question[] = [
  {
    q: `who are you?`,
    a: new FrozenWeightedList(
      [1, `I’m just another intrepid adventurer on the internet ^v^`],
      [1, `jack-of-all-knives, none of a kind, kind of a none, just having fun ^v^`],
    )
  },
  {
    q: `where does “Sup#2.0” come from?`,
    a: [
      `yeah, ${a("it’s complicated", "https://github.com/Sup2point0/Assort/blob/origin/~writing/origins.md")}.`,

      `TLDR – I thought “sup” was a cool word, met another Sup, and decided to upgrade myself to Sup2.0 😎`,
    ]
  },
  {
    q: `what does “frequery” mean?`,
    a: [
      `${i("frequery")} := “frequent query” == “frequently asked questions” === FAQs.`,
    ]
  },
  {
    q: `why don’t you share any personal details?`,
    a: new FrozenWeightedList(
      [1, `here’s one, then – deep down, I revel in anonymity. #v#`],
      [1, `As someone very wise once said, the greatest power of all is anonymity.`],
    )
  },
  {
    q: `mate, how old are you?`,
    a: new FrozenWeightedList(
      [20, [
        `2.`,
        `obviously.`,
        `2.0.`,
      ]],
      [13, [
        `42.`,
        `Pretty meaningful, innit.`,
      ]],
      [7, [
        `37.`,
        `Or am I?`,
      ]],
      [7, [
        `34.`,
        `Rule 0 of the internet: Never believe anything anyone says on the internet.`,
      ]],
      [2, [
        `69.`,
        `believe me?`,
      ]],
      [2, [
        `67.`,
        `Have you considered reloading the page?`,
      ]],
      [1, [
        `-2147483647, to the nearest year.`,
        `ikr, probably younger than you expected lmao`,
      ]],
    )
  },
  {
    q: `why are you in Antarctica?`,
    a: [
      `why not? ${a("We’re a cool place", "https://discord.gg/xKkaMcqnUy")} ;)`,
    ]
  },
  {
    q: `can we be friends?`,
    a: new FrozenWeightedList(
      [20, `Hell yeah. Whether you want to analyse ${a("Camellia’s ridiculous full flavour soundtracks", "https://youtube.com/playlist?list=PLaN19gIKi5Zp2sK5jeaHgJ823ANa4NcB4")}, want to ${a("challenge me with a delicious integral", "https://sup2point0.github.io/integrity/questions/integrals")}, or just want to ${a("ruminate over the heartbreaking character arcs of Arcane", "/sup/loves/series")}, ${a("feel free to hit me up on Disc", "https://discord.com/users/752972078579449888")} ^v^`],

      [7, `No no, I’m asking ${i("you")} that. Wanna be friends? 🥺 ${a("Just add me on Disc", "https://discord.com/users/752972078579449888")} :D`],
    )
  },
  {
    q: `how was this site built?`,
    a: [
      `without AI, is how :P`,

      `a lot of love, time and dreams.`,
    ],
  },
  {
    q: `what’s up with this website?`,
    a: new FrozenWeightedList(
      [1, `Hmm, who knows?`],
      [1, `So you’ve noticed it too.`],
      [1, `Wonder what happens if you reload the page?`],
    )
  },
];
