import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";
import type { Groups, States } from "#scripts/types";

import { Genre, Platform, PlayState, type GameData } from "./games";


export class GameSearchFilter extends SearchFilter<GameData>
{
  genres    = $state(SearchFilter.init_states(Genre));
  platforms = $state(SearchFilter.init_states(Platform));
  state     = $state(SearchFilter.init_states(PlayState));


  override get toggles(): Record<string, States> {
    return {
      genres:    this.genres,
      platforms: this.platforms,
      state:     this.state,
    };
  }

  override get groups() {
    return ["default", "love", "date", "genres", "platforms", "state"];
  }

  override get sorts() {
    return [...super.sorts, "random"];
  }


  protected override sort_default(games: GameData[]): GameData[]
  {
    if (this.query) {
      return super.sort(games, {
        scorer: game => Math.max(
          partial_ratio(this.query, game.name),
          partial_ratio(this.query, game.genres.join(" ")),
        )
      });
    }
    
    return games;
  }
}
