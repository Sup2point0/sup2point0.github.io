import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search-filter.svelte";

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


  constructor()
  {
    super();

    this.toggles = {
      topics: this.topics,
    };

    this.groups.push("love", "date", "topics");

    this.sorts.push("random");
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
