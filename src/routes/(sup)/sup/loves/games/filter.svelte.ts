import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";

import type { GameData } from "./games";


export class GameSearchFilter extends SearchFilter<GameData>
{
  apply(games: GameData[]): GameData[]
  {
    let out = [...games];
    
        super.apply(out, game => Math.max(
          partial_ratio(this.query, game.name),
        ));

    return out;
  }
}
