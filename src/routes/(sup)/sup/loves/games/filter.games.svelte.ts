import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";
import type { Groups, States } from "#scripts/types";

import { Genre, Platform, PlayState, type GameData } from "./games";


export class GameSearchFilter extends SearchFilter<GameData>
{
  genres      = $state(SearchFilter.init_states(Genre));
  platforms   = $state(SearchFilter.init_states(Platform));
  state       = $state(SearchFilter.init_states(PlayState));


  override get toggles(): Record<string, States> {
    return {
      genres:    this.genres,
      platforms: this.platforms,
      state:     this.state,
    };
  }

  get groups(): string[] {
    return ["default", "love", "date", "genres", "platforms", "state"];
  }

  override get sorts(): string[] {
    return [...super.sorts, "random"];
  }


  apply(data: Groups<GameData>): FilterResults<GameData>
  {
    if (this.is_clear) {
      return super.grouped_results(super.filter_mandatory(data));
    }

    let games = Object.values(data).flat();
    let filtered = super.filter(games);

    if (this.group_by !== "default") {
      return super.grouped_results(this.#group_and_sort(filtered));
    }
    else if (this.sort_by !== "default" || this.query) {
      return super.flat_results(this.#sort(filtered));
    }
    else {
      return super.flat_results(filtered);
    }
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
