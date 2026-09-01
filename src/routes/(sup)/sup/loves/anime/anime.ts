import { prep_groups } from "#scripts/search";
import { i } from "#scripts/utils";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


export interface AnimeData extends MediaData {}


const data: Groups<AnimeData> =
{
  "Favourites": [
    {
      name:   "Suzume no Tojimari",
      date:   2022,
      cover:  "suzume.jpg",
      genres: [Genre.FANTASY, Genre.ADVENTURE],
    },
    {
      name:   "【推しの子】",
      date:   [2023, "present"],
      cover:  "oshi-no-ko.webp",
      genres: [Genre.DRAMA, Genre.MYSTERY, Genre.ROMANCE, Genre.SLICE_OF_LIFE],
      desc: [
        `${i("Oshi no Ko")} (seasons 1–3)`,
      ],
    },
  ],
  "Yu-Gi-Oh": [
    {
      name:   "Yu-Gi-Oh! ARC-V",
      date:   [2014, 2017],  // FIXME
      cover:  "ygo-arc-v.jpg",
      genres: [Genre.ADVENTURE],
    },
    {
      name:   "Yu-Gi-Oh! VRAINS",
      date:   [2017, 2019],  // FIXME
      cover:  "ygo-vrains.jpg",
      genres: [Genre.ADVENTURE],
    },
    {
      name:   "Yu-Gi-Oh! Battle City",
      date:   "childhood",
      cover:  "ygo-battle-city.webp",
      genres: [Genre.ADVENTURE],
    },
    {
      name:   "Yu-Gi-Oh! ZEXAL",
      date:   [2011, 2014],  // FIXME
      cover:  "ygo-zexal.webp",
      genres: [Genre.ADVENTURE],
    },
  ],
  "Pokémon": [
    {
      name:   "Pokémon: XY",
      date:   "childhood",
      cover:  "pokemon-xy.jpg",
      genres: [Genre.ADVENTURE, Genre.SLICE_OF_LIFE, Genre.FANTASY],
    },
    {
      name:   "Pokémon: XYZ",
      date:   "childhood",
      cover:  "pokemon-xyz.jpg",
      genres: [Genre.ADVENTURE, Genre.SLICE_OF_LIFE, Genre.FANTASY],
    },
  ],
  "Guilty Pleasures": [
    {
      name:   "Domestic na Kanojo",
      date:   "summer 2026",
      cover:  "dome-kano.webp",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE, Genre.COMING_OF_AGE],
      themes: [Theme.TRAGEDY, Theme.FORBIDDEN_LOVE],
      is_shown: false,
    },
    {
      name:   "Kanojo, Okarishimasu",
      date:   "fall 2024",
      cover:  "kano-kari.webp",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE, Genre.COMEDY],
      desc: [
        `${i("Rent-a-Girlfriend")} (seasons 1–3)`,
      ],
      is_shown: false,
    },
    {
      name:   "Yosuga no Sora",
      date:   "spring 2024",
      cover:  "yosuga-no-sora.jpg",
      genres: [Genre.ROMANCE],
      themes: [Theme.FORBIDDEN_LOVE],
      is_shown: false,
    },
    {
      name:   "My Stepmom’s Daughter Is My Ex",
      date:   "summer 2026",
      cover:  "ex.jpg",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE],
      themes: [Theme.FORBIDDEN_LOVE, Theme.ENEMIES_TO_LOVERS],
      is_shown: false,
    },
  ],
};

prep_groups(data);
export const animes_data: Groups<AnimeData> = data;
export const animes_list: AnimeData[] = Object.values(data).flat();
