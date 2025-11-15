import { i } from "#scripts/utils";
import type { Groups, DatePoint } from "#scripts/types";
import type { MediaData } from "#scripts/types/media";


export interface AnimeData extends MediaData
{
  date: DatePoint | DatePoint[],
}


export const animes_data: Groups<AnimeData> = {
  "Favourites": [
    {
      name: "Suzume no Tojimari",
      date: 2022,
      cover: "suzume.jpg",
      genres: ["fantasy", "adventure"],
    }, {
      name: "【推しの子】",
      date: [2023, 2024],
      cover: "oshi-no-ko.webp",
      genres: ["drama", "mystery", "romance"],
      desc: `${i("Oshi no Ko")} (seasons 1–2)`,
    },
  ],
  "Yu-Gi-Oh!": [
    {
      name: "Yu-Gi-Oh! ARC-V",
      date: [2014, 2017],
      cover: "ygo-arc-v.jpg",
    }, {
      name: "Yu-Gi-Oh! VRAINS",
      date: [2017, 2019],
      cover: "ygo-vrains.jpg",
    }, {
      name: "Yu-Gi-Oh! Battle City",
      date: [2001, 2002]
    }, {
      name: "Yu-Gi-Oh! ZEXAL",
      date: [2011, 2014],
    },
  ],
  "Pokémon": [
    {
      name: "Pokémon: XY",
      date: [2014, 2015],
      cover: "pokemon-xy.jpg",
      genres: ["adventure", "slice of life", "fantasy"],
    }, {
      name: "Pokémon: XYZ",
      date: [2015, 2016],
      cover: "pokemon-xyz.jpg",
      genres: ["adventure", "slice of life", "fantasy"],
    },
  ],
  "Guilty Pleasures": [
    {
      name: "Kanojo, Okarishimasu",
      date: [2020, 2023],
      cover: "kano-kari.webp",
      genres: ["romance", "slice of life"],
      desc: `${i("Rent-a-Girlfriend")} (seasons 1–3)`,
    }, {
      name: "Yosuga no Sora",
      date: 2010,
      cover: "yosuga-no-sora.jpg",
      genres: ["??"],
    },
  ],
};

export const animes_list: AnimeData[] = (
  () => {
    for (let [i, [collection, series]] of Object.entries(animes_data).entries()) {
      for (let [j, anime] of series.entries()) {
        anime.collection = collection;
        anime._score_ = 0;
        if (anime.shard === undefined) {
          anime.shard = `${i.toString()}-${j.toString()}`;
        }
      }
    }

    return Object.values(animes_data).flatMap(c => c);
  }
)();
