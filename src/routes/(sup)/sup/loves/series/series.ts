import type { Groups } from "#scripts/types";
import type { MediaData } from "#scripts/types/media";


export interface SeriesData extends MediaData {}


export const series_data: Groups<SeriesData> = {
  "All-Time Favourites": [
    {
      name: "« 全职高手 »",
      date: 2019,
      cover: "the-kings-avatar.png",
      genres: ["drama", "comedy", "slice of life"],
      themes: ["esports"],
      desc: `The King’s Avatar (live action)`,
    }, {
      name: "Arcane: Season 1",
      date: 2021,
      cover: "arcane-s1.jpg",
      genres: ["tragedy", "dystopian", "fantasy"],
    }, {
      name: "The Mandalorian: Season 1",
      date: 2019,
      cover: "the-mandalorian.jpg",
      desc: `Star Wars`,
    }, {
      name: "Andor: Season 1",
      date: 2022,
      cover: "andor-s1.webp",
      desc: `Star Wars`,
    }
  ],
  "children’s shows I unironically love": [
    {
      name: "« 熊出没 »",
      desc: `Boonie Bears`,
      genres: ["cartoon", "comedy"],
    }, {
      name: "Ben & Holly’s Little Kingdom",
    }, {
      name: "Octonauts",
    }, {
      name: "Barbie: Life in the Dreamhouse",
      date: [2012, 2015],
    }, {
      name: "Peppa Pig",
    }
  ],
  "Peak Cinema": [
    {
      name: "Sex Education",
      genres: ["drama", "comedy"],
      themes: ["coming of age"],
    }, {
      name: "The Big Bang Theory",
    },
  ],
  "My Little Pony": [
    {
      name: "Equestria Girls – Rainbow Rocks",
      date: 2014,
    }, {
      name: "Equestria Girls – Legend of Everfree",
      date: 2016,
    }, {
      name: "Equestria Girls – Friendship Games",
      date: 2015,
    }, {
      name: "Friendship is Magic – Season 1",
      date: 2010,
    }, {
      name: "Friendship is Magic",
      date: [2010, 2019],
    }, {
      name: "Equestria Girls – Better Together",
      date: [2017, 2020],
    },
  ],
  "Plenty Enjoyable": [
    {
      name: "« 亲爱的、热爱的 »",
      date: 2019,
      genres: ["romance", "drama", "slice of life"],
      desc: `Go Go Squid`,
    }, {
      name: "« 小欢喜 »",
      date: 2019,
      desc: `A Little Reunion`,
      genres: ["drama", "slice of life"],
      themes: ["coming of age", "高考 (gaokao)"],
    },
  ],
};

export const series_list: SeriesData[] = (
  () => {
    for (let [i, [collection, series]] of Object.entries(series_data).entries()) {
      for (let [j, each] of series.entries()) {
        each.collection = collection;
        each._score_ = 0;
        if (each.shard === undefined) {
          each.shard = `${i.toString()}-${j.toString()}`;
        }
      }
    }

    return Object.values(series_data).flat();
  }
)();
