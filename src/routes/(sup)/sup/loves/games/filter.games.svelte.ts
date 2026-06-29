import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";

import { Genre, Platform, PlayState, type GameData } from "./games";


export class GameSearchFilter extends SearchFilter<GameData>
{
  genres    = $state(SearchFilter.init_states(Genre));
  platforms = $state(SearchFilter.init_states(Platform));
  state     = $state(SearchFilter.init_states(PlayState));


  constructor()
  {
    super();

    this.toggles = {
      genres:    this.genres,
      platforms: this.platforms,
      state:     this.state,
    };

    this.groups.push("love", "date", "genres", "platforms", "state");

    this.sorts.push("random");
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
