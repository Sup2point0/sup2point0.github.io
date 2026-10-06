import { prep_groups } from "#scripts/search";
import { i } from "#scripts/utils";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { int, Arrayable, Groups } from "#scripts/types";


export interface BooksData extends MediaData
{
  fields: {
    author: Arrayable<string>
    books?: int
    favourite?: string
  }
}


const _template = [
    {
      name:   "",
      date:   [],
      cover:  undefined,
      genres: [],
      themes: [],
      fields: {
        author:    "",
        books:     0,
        favourite: undefined,
      },
    },
];


const data: Groups<BooksData> =
{
  "All-Time Favourites": [
    {
      name:   "Legend",
      date:   "childhood",
      cover:  "legend.jpg",
      genres: [Genre.DYSTOPIAN, Genre.ROMANCE],
      themes: [Theme.SOCIETY],
      fields: {
        author:    "Marie Lu",
        books:     4,
        favourite: "Legend",
      },
    },
    {
      name:   "Power of Five",
      date:   "childhood",
      cover:  "oblivion.jpg",
      genres: [Genre.FANTASY, Genre.DYSTOPIAN],
      themes: [Theme.OCCULT],
      fields: {
        author:    "Anthony Horowitz",
        books:     5,
        favourite: "Oblivion",
      },
    },
    {
      name:   "Harry Potter",
      date:   "eternal",
      cover:  "half-blood-prince.jpg",
      genres: [Genre.FANTASY, Genre.SLICE_OF_LIFE, Genre.DRAMA],
      themes: [Theme.MAGIC, Theme.COMING_OF_AGE],
      fields: {
        author:    "J.K. Rowling",
        books:     7,
        favourite: "The Half-Blood Prince",
      },
    },
    {
      name:   "Alchemised",
      date:   "2026 September",
      cover:  "alchemised.jpg",
      genres: [Genre.DYSTOPIAN, Genre.FANTASY, Genre.ROMANCE],
      themes: [Theme.ENEMIES_TO_LOVERS, Theme.MAGIC],
      fields: {
        author:    "SenLinYu",
        books:     1,
      },
      desc: [
        `Hooh boy, it has been a ${i`real`} long time since I last read a book. Proper, soul-enrapturing fiction. I’ve missed this, I really have.`,

        `It’d been years since I’d been to the book section of a store (because I hadn’t gone to stores), but I’m always uncontrollably drawn to them. This book caught my eye because, well, let’s see: 1-word title, beautiful cover, strong theme, and then I pulled it out, and ${i`holy mackerel`}, the sheer size. This is the thickest modern fiction book I’ve ever seen or read. It was on sale, too. Instant purchase, no regrets.`,

        `I didn’t read it after purchasing, though, mostly due to lack of time. It sat on my shelf untouched for half a year, which I felt pretty bad for. But once I did finally decide to start reading, I fell right into my old ways. Immersed right in. The world just fades away. I’ve gotten better with self-restraint over the years, so I rationed myself fairly carefully while reading this. Well worth it, gawddamn. I still finished it so quickly tho, took maybe 10 days? It did not feel as thick as it was, at all.`,

        `It’ll take some more reflection and re-reads for me to formulate mature thoughts on the story and arc itself, but for the first read: damn, I loved this. It’s dystopian fantasy fiction romance, how could I not TvT.`,

        `It’s a shame tho, as I’ve gotten older I can actually feel myself becoming less receptive to worldbuilding, there’s a tiny twinge of cringe when I see words like “necrothrall” and “phylactery” introduced. Maybe I’ve encountered too much worldbuilding where this stuff no longer enthralls me, idk. But it wore off quickly as the story progressed; I think reading more will actually alleviate that issue.`,

        `I absolutely love the structure of the story, it is incredible. Playing Outer Wilds really set me up for this. Because what the author’s done, is shown us where we are ${i`in media res`}, but not explained how we get there. Classic. Then we flashback – which, yes, felt a little jarring at first. But wait. This isn’t right. It’s different to what we expected – because ${i`Helena is an unreliable narrator`}. So there’s this jarring disconnect between the present, the past, and what we thought was the past. And now, all I’m thinking is, “How the hell do we get to there from here?”`,

        `Then, as the story progresses and we find out more details, it all starts to fall into place. It’s the delicious uncertainty, where you increasingly feel like you know what’s going to happen, there’s this sense of dread, but you can’t place your finger on quite exactly what – it’s like solving a puzzle, and it completely draws me in. The ends slowly joining together. The realisation that a sacrifice is going to be made. Expertly, expertly crafted.`,

        `So yeah, for that, this book has won my heart. It was so unbelievably difficult to discipline myself and not read on into tomorrow, especially at the end of part 2. I will definitely need to re-read, and eck out in part 1 how the Kaine we know is under the Kaine we meet.`,
      ],
    },
  ],
  "Soul-Enrapturing": [
    {
      name:   "The Heroes of Olympus",
      date:   "childhood",
      cover:  "mark-of-athena.jpg",
      genres: [Genre.FANTASY, Genre.ADVENTURE],
      themes: [Theme.MYTHOLOGY],
      fields: {
        author:    "Rick Riordan",
        books:     5,
        favourite: "The Mark of Athena",
      },
    },
    {
      name:   "Red Queen",
      date:   2021,
      cover:  "red-queen.jpg",
      genres: [Genre.FANTASY, Genre.ROMANCE, Genre.DYSTOPIAN],
      themes: [Theme.MAGIC, Theme.SOCIETY],
      fields: {
        author:    "Victoria Aveyard",
        books:     4,
        favourite: "Red Queen",
      },
    },
    {
      name:   "Skulduggery Pleasant",
      date:   [2017, 2022],
      cover:  "dying-of-the-light.jpg",
      genres: [Genre.FANTASY, Genre.ACTION, Genre.COMING_OF_AGE],
      themes: [Theme.MAGIC, Theme.COMING_OF_AGE],
      fields: {
        author:    "Derek Landy",
        books:     15,
        favourite: "Dying of the Light",
      },
    },
    {
      name:   "Lorien Legacies",
      date:   "childhood",
      cover:  "lorien-legacies.jpg",
      genres: [Genre.FANTASY, Genre.ACTION],
      themes: [Theme.MAGIC, Theme.ALIENS],
      fields: {
        author:    "Pittacus Lore",
        books:     7,
        favourite: undefined,
      },
    },
    {
      name:   "Ventura Saga",
      date:   2020,
      cover:  "truth-different-skies.jpg",
      genres: [Genre.ROMANCE, Genre.DYSTOPIAN, Genre.COMING_OF_AGE],
      themes: [Theme.SPACE, Theme.SOCIETY],
      fields: {
        author:    "Kate Ling",
        books:     3,
        favourite: "The Truth of Different Skies",
      },
    },
  ],
  "Enjoyable": [
    {
      name:   "The Maze Runner",
      date:   "childhood",
      cover:  "fever-code.jpg",
      genres: [Genre.DYSTOPIAN, Genre.ROMANCE],
      themes: [Theme.APOCALYPSE],
      fields: {
        author:    "James Dashner",
        books:     5,
        favourite: "The Fever Code",
      },
    },
    {
      name:   "The Hunger Games",
      date:   "childhood",
      cover:  "hunger-games.jpg",
      genres: [Genre.DYSTOPIAN],
      themes: [Theme.SOCIETY],
      fields: {
        author:    "Suzanne Collins",
        books:     4,
        favourite: undefined,
      },
    },
    {
      name:   "Secret Breakers",
      date:   "childhood",
      cover:  "secret-breakers.jpg",
      genres: [Genre.MYSTERY],
      themes: [],
      fields: {
        author:    "H.L. Dennis",
        books:     6,
        favourite: undefined,
      },
    },
    {
      name:   "Captain Underpants",
      date:   "childhood",
      cover:  "turbo-toilet-2000.jpg",
      genres: [Genre.ACTION],
      themes: [],
      fields: {
        author:    "Dav Pilkey",
        books:     12,
        favourite: undefined,
      },
    },
    {
      name:   "Alex Rider",
      date:   "childhood",
      cover:  "scorpia-rising.jpg",
      genres: [Genre.ACTION, Genre.COMING_OF_AGE],
      themes: [],
      fields: {
        author:    "Anthony Horowitz",
        books:     13,
        favourite: "Scorpia Rising",
      },
    },
    {
      name:   "Roald Dahl books",
      date:   "childhood",
      cover:  "going-solo.jpg",
      genres: [],
      themes: [],
      fields: {
        author:    "Roald Dahl",
        favourite: "Going Solo",
      },
    },
    {
      name:   "The Famous Five",
      date:   "childhood",
      cover:  "famous-five.jpg",
      genres: [Genre.ADVENTURE, Genre.SLICE_OF_LIFE],
      themes: [],
      fields: {
        author:    "Enid Blython",
        books:     21,
        favourite: undefined,
      },
    },
  ],
  "Guilty Pleasures": [
    {
      name:   "Shatter Me",
      date:   2023,
      cover:  "shatter-me.webp",
      genres: [Genre.DYSTOPIAN, Genre.FANTASY, Genre.ROMANCE, Genre.EROTICA],
      themes: [Theme.MAGIC, Theme.SOCIETY],
      fields: {
        author:    "Tahereh Mafi",
        books:     6,
        favourite: undefined,
      },
      is_shown: false,
    },
  ],
};

prep_groups(data);
export const books_data: Groups<BooksData> = data;
export const books_list: BooksData[] = Object.values(data).flat();
