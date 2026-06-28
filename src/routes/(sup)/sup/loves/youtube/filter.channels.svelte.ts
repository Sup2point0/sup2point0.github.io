import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";
import type { Groups, States } from "#scripts/types";

import { channels_list, type YouTubeChannelData } from "./channels";


export class ChannelSearchFilter extends SearchFilter<YouTubeChannelData>
{
  topics = $state(
    Object.fromEntries(
      channels_list
        .flatMap(channel => channel.topics)
        .map(topic => [topic, true])
    )
  );


  override get toggles(): Record<string, States>
  {
    return {
      topics: this.topics,
    }
  }

  get groups(): string[] {
    return ["default", "love", "date", "topics"];
  }

  override get sorts(): string[] {
    return [...super.sorts, "random"];
  }


  apply(data: Groups<YouTubeChannelData>): FilterResults<YouTubeChannelData>
  {
    if (this.is_clear) {
      return super.grouped_results(super.filter_mandatory(data));
    }

    let channels = Object.values(data).flat();
    let filtered = super.filter(channels);

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

  #sort(channels: YouTubeChannelData[]): YouTubeChannelData[]
  {
    switch (this.sort_by) {
      case "date": return super.sort_date(channels);
      case "name": return super.sort_name(channels);
      case "random": return shuffle(channels);

      default:
        if (this.query) {
          return super.sort(channels, {
            scorer: game => Math.max(
              partial_ratio(this.query, game.name),
              partial_ratio(this.query, game.topics.join(" ")),
            )
          });
        }
        return channels;
    }
  }

  #group_and_sort(channels: YouTubeChannelData[]): [string, YouTubeChannelData[]][]
  {
    return super.group(channels, {
      entity_sorter: this.#sort.bind(this),
    });
  }
}
