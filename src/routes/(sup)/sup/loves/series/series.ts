import { prep_groups } from "#scripts/search";
import { i, h } from "#scripts/utils";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface SeriesData extends MediaData {}


const data: Groups<SeriesData> =
{
  "All-Time Favourites": [
    {
      shard:  "the-kings-avatar",
      name:   "« 全职高手 »",
      date:   2019,
      cover:  "the-kings-avatar.png",
      genres: [Genre.DRAMA, Genre.COMEDY, Genre.SLICE_OF_LIFE],
      themes: [Theme.ESPORTS],
      desc: [
        `The King’s Avatar (live action)`,
      ],
    },
    {
      name:   "Arcane: Season 1",
      date:   2021,
      cover:  "arcane-s1.jpg",
      genres: [Genre.DYSTOPIAN, Genre.FANTASY],
      themes: [Theme.TRAGEDY],
      desc: [
        `${i("Arcane")} was so good that it made me genuinely consider playing League.`,

        `*shudder* I know. No thanks. Granted, I’d also been similarly lured in while using League art for my custom ${h`Yu-Gi-Oh`} cards.`,

        `I don’t think I need to praise Arcane too much. The animation is obviously heavenly. I really like the painted Fortiche style, it’s incredibly unique and fresh.`,

        `Personally, what I enjoyed most was the sheer depth of worldbuilding and lore – it feels lived in and nuanced, and the story paints it in a way that makes it feel like we’ve barely brushed the surface. We’re seeing but a tiny window into this brilliant universe. Which, yeah, leaves me a little unsatisfied at times, but I think it makes for an enrapturing story. Everything feels open and uncertain.`,

        `I also love myself a love story, and I love enemies-to-friends, and I love enemies-to-lovers even more. Fun fact, I didn’t even clock that Vi and Caitlyn were like that until I finished season 1 and went on reddit 💀💀💀 ...not my sharpest moment.`,

        `I like that there are few ‘pure evil’ characters in Arcane. Everyone has beliefs, goals and principles, and has the agency to act on them. They are flawed, and emotional, and we watch them struggle to navigate the world and have what they know challenged. Vi feels this more than anyone, what with having to pick between Caitlyn and the greater good vs home and family. Arcane understands nuance; things are rarely black-and-white. I like that it doesn’t really make any comment on whether a character is ‘good’ or ‘bad’, but lets us draw our own inferences and conclusions.`,

        `I put season 1 because imho season 2 was significantly messier, and kinda lost me. Pretty much the whole time I was thinking “I’m not sure where this is going” and wondering how some previous plot points would be resolved, which is, well, not exactly what you wanna be thinking while watching a series. I’ll agree with the people saying it should’ve been split in two to make 3 seasons in total.`,
      ],
    },
    {
      name:   "The Mandalorian: Season 1",
      date:   2019,
      cover:  "the-mandalorian.jpg",
      desc: [
        `Star Wars`,
      ],
    },
    {
      name:   "Andor: Season 1",
      date:   2022,
      cover:  "andor-s1.webp",
      desc: [
        `Star Wars`,
      ],
    }
  ],
  "children’s shows I unironically love": [
    {
      shard:  "boonie-bears",
      name:   "« 熊出没 »",
      date:   "eternal",
      cover:  "boonie-bears.jpg",
      genres: [Genre.CARTOON, Genre.COMEDY],
      desc: [
        `Boonie Bears`,
      ],
    },
    {
      shard:  "ben-and-holly",
      name:   "Ben & Holly’s Little Kingdom",
      date:   "eternal",
      cover:  "ben-and-holly.jpg",
    },
    {
      name:   "Octonauts",
      date:   "childhood",
      cover:  "octonauts.jpg",
    },
    {
      name:   "Barbie: Life in the Dreamhouse",
      date:   "eternal",
      cover:  "barbie-life.jpg",
    },
    {
      name:   "Peppa Pig",
      date:   "eternal",
      cover:  "peppa-pig.jpg",
    }
  ],
  "Peak Cinema": [
    {
      name:   "Sex Education",
      cover:  "sex-education.jpg",
      genres: [Genre.DRAMA, Genre.COMEDY],
      themes: [Theme.COMING_OF_AGE],
    },
    {
      name:   "The Big Bang Theory",
      date:   "childhood",
      cover:  "big-bang-theory.jpg",
      genres: [Genre.COMEDY, Genre.SLICE_OF_LIFE],
    },
  ],
  "My Little Pony": [
    {
      name:   "Equestria Girls – Rainbow Rocks",
      date:   2014,
    },
    {
      name:   "Equestria Girls – Legend of Everfree",
      date:   2016,
    },
    {
      name:   "Equestria Girls – Friendship Games",
      date:   2015,
    },
    {
      name:   "Friendship is Magic – Season 1",
      date:   2010,
    },
    {
      name:   "Friendship is Magic",
      date:   [2010, 2019],
    },
    {
      name:   "Equestria Girls – Better Together",
      date:   [2017, 2020],
    },
  ],
  "Plenty Enjoyable": [
    {
      shard:  "go-go-squid",
      name:   "« 亲爱的、热爱的 »",
      date:   "summer 2019",
      cover:  "go-go-squid.jpg",
      genres: [Genre.ROMANCE, Genre.DRAMA, Genre.SLICE_OF_LIFE],
      desc: [
        `Go Go Squid`,
      ],
    },
    {
      shard:  "a-little-reunion",
      name:   "« 小欢喜 »",
      date:   "summer 2019",
      cover:  "xiao-huan-xi.jpeg",
      genres: [Genre.DRAMA, Genre.SLICE_OF_LIFE],
      themes: [Theme.COMING_OF_AGE, "高考 (gaokao)" as Theme],
      desc: [
        `A Little Reunion`,
      ],
    },
  ],
};

prep_groups(data);
export const series_data: Groups<SeriesData> = data;
export const series_list: SeriesData[] = Object.values(data).flat();
