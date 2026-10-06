import { channels_list, type YouTubeChannelData } from ".";

import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search";


export class ChannelSearchFilter extends SearchFilter<YouTubeChannelData>
{
	topics = $state(SearchFilter.init_states(
		channels_list.flatMap(channel => channel.topics)
	));


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
				scorer: channel => Math.max(
					partial_ratio(this.query, channel.name),
					partial_ratio(this.query, channel.topics.join(" ")),
				)
			});
		}
		return channels;
	}
}
