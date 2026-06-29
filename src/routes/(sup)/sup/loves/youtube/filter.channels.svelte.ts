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

  override get groups() {
    return ["default", "love", "date", "topics"];
  }

  override get sorts() {
    return [...super.sorts, "random"];
  }


  protected override sort_default(channels: YouTubeChannelData[]): YouTubeChannelData[]
  {
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
