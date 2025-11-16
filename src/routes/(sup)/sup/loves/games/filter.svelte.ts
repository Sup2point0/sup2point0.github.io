import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";

import type { GameData } from "./games";


export class GameSearchFilter extends SearchFilter<GameData>
{
  apply(games: GameData[]): GameData[]
  {
    return super.sort(games,
      game => Math.max(
        partial_ratio(this.query, game.name),
        partial_ratio(this.query, game.genres.join(" ")),
      )
    );
  }
}
