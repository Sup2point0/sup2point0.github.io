import { prep_groups } from "#scripts/search-filter.svelte.ts";
import { i } from "#scripts/utils";
import { Genre, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface AnimeData extends MediaData {}


const data: Groups<AnimeData> =
{
  "Favourites": [
    {
      name: "Suzume no Tojimari",
      date: 2022,
      cover: "suzume.jpg",
      genres: [Genre.FANTASY, Genre.ADVENTURE],
    }, {
      name: "【推しの子】",
      date: [2023, 2024],
      cover: "oshi-no-ko.webp",
      genres: [Genre.DRAMA, Genre.MYSTERY, Genre.ROMANCE],
      desc: `${i("Oshi no Ko")} (seasons 1–2)`,
    },
  ],
  "Yu-Gi-Oh": [
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
      date: [2001, 2002],
      cover: "ygo-battle-city.webp",
    }, {
      name: "Yu-Gi-Oh! ZEXAL",
      date: [2011, 2014],
      cover: "ygo-zexal.webp",
    },
  ],
  "Pokémon": [
    {
      name: "Pokémon: XY",
      date: [2014, 2015],
      cover: "pokemon-xy.jpg",
      genres: [Genre.ADVENTURE, Genre.SLICE_OF_LIFE, Genre.FANTASY],
    }, {
      name: "Pokémon: XYZ",
      date: [2015, 2016],
      cover: "pokemon-xyz.jpg",
      genres: [Genre.ADVENTURE, Genre.SLICE_OF_LIFE, Genre.FANTASY],
    },
  ],
  "Guilty Pleasures": [
    {
      name: "Kanojo, Okarishimasu",
      date: [2020, 2023],
      cover: "kano-kari.webp",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE],
      desc: `${i("Rent-a-Girlfriend")} (seasons 1–3)`,
    }, {
      name: "Yosuga no Sora",
      date: 2010,
      cover: "yosuga-no-sora.jpg",
      genres: ["??" as Genre],
    },
  ],
};

prep_groups(data);
export const animes_data: Groups<AnimeData> = data;
export const animes_list: AnimeData[] = Object.values(data).flat();
