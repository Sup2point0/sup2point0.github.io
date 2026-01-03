import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";
import type { States } from "#scripts/types";

import { Genre, Platform, PlayState, type GameData } from "./games";


export class GameSearchFilter extends SearchFilter<GameData>
{
  genres      = $state(SearchFilter.init_states(Genre));
  platforms   = $state(SearchFilter.init_states(Platform));
  state       = $state(SearchFilter.init_states(PlayState));


  get toggles(): Record<string, States>
  {
    return {
      genres:    this.genres,
      platforms: this.platforms,
      state:     this.state,
    }
  }

  get groups(): string[] {
    return ["default", "love", "date", "genres", "platforms", "state"];
  }

  get sorts(): string[] {
    return [...super.sorts, "random"];
  }


  apply(games: GameData[]): FilterResults<GameData>
  {
    let out: FilterResults<GameData> = super.filter(games);

    if (this.group_by !== "default") {
      out = this.#group_and_sort(out);
    }
    else if (this.sort_by !== "default" || this.query) {
      out = this.#sort(out);
    }

    return out;
  }

  #sort(games: GameData[]): GameData[]
  {
    switch (this.sort_by) {
      case "date": return super.sort_date(games);
      case "name": return super.sort_name(games);
      case "random": return shuffle(games);

      default:
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

  #group_and_sort(games: GameData[]): [string, GameData[]][]
  {
    return super.group(games, {
      entity_sorter: this.#sort.bind(this),
    });
  }
}
