<script lang="ts">

import { animes_data, type AnimeData } from ".";
import { AnimeSearchFilter } from "./filter.anime.svelte.ts";

import { Cards, Main } from "#parts/core";
import { Block, Breadcrumbs, Header, SearchFilters } from "#parts/ui";
import { MediaBlock, MediaOverlay } from "#parts/loves";


// svelte-ignore non_reactive_update
let filters = new AnimeSearchFilter();

let animes_filtered = $derived(filters.apply(animes_data));

let active_anime: AnimeData | null = $state(null);

</script>


<svelte:head>
	<title> Anime × Loves × Sup#2.0 </title>
	<meta name="description" content="All the anime series and films I have watched, am currently watching, or would like to watch!" />
</svelte:head>


{#snippet cards(animes: AnimeData[])}
	<Cards>
		{#each animes as anime (anime.shard)}
			<MediaBlock
				kind="anime" media={anime}
				expanded={filters.extra["expand all"]}
				bind:active_media={active_anime}
			/>
		{/each}
	</Cards>
{/snippet}


<Breadcrumbs levels={[
	{ text: "loves", intern: "sup/loves" },
	{ text: "anime" },
]} />

<MediaOverlay kind="anime" media={active_anime} />

<Main>
	<Block kind="ui expanded">
		<p> I always watch anime with English subtitles and original audio, never dubbed. For one dubs always sound goofy and over-the-top to me. But also the sub just sounds inherently cooler, cuz it’s Japanese 😎 (The exception is Pokémon, where I grew up on the sub so it’s normalised for me – plus it’s already goofy so it works pretty well =) </p>
	</Block>

	<SearchFilters bind:filters result_count={filters.count_results(animes_filtered)} />

	{#if animes_filtered.is_grouped}
		{#each animes_filtered.data as [collection, animes]}
			{#if animes.length > 0}
				<section>
					<Header> {collection?.toUpperCase()} </Header>
					{@render cards(animes)}
				</section>
			{/if}
		{/each}

	{:else}
		{@render cards(animes_filtered.data)}

	{/if}
</Main>
