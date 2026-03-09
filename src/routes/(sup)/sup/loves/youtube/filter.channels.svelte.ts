import { partial_ratio } from "fuzzball";

import { SearchFilter, type FilterResults } from "#scripts/search-filter.svelte";
import { shuffle } from "#scripts/utils";
import type { States } from "#scripts/types";

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


  get toggles(): Record<string, States>
  {
    return {
      topics: this.topics,
    }
  }

  get groups(): string[] {
    return ["default", "love", "date", "topics"];
  }

  get sorts(): string[] {
    return [...super.sorts, "random"];
  }


  apply(channels: YouTubeChannelData[]): FilterResults<YouTubeChannelData>
  {
    let out: FilterResults<YouTubeChannelData> = super.filter(channels);

    if (this.group_by !== "default") {
      out = this.#group_and_sort(out);
    }
    else if (this.sort_by !== "default" || this.query) {
      out = this.#sort(out);
    }

    return out;
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
