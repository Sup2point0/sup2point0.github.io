<script lang="ts">

import { status } from "#scripts/state";
import { shuffle, a } from "#scripts/utils";

import { Cards, Main } from "#parts/core";
import { Block, Breadcrumbs, Header, SearchFilters } from "#parts/ui";
import { ChannelBlock } from "#parts/loves";
import Adventure from "#parts/special/adventure.svelte";

import { channels_data, type YouTubeChannelData } from "./channels";
import { ChannelSearchFilter } from "./filter.channels.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new ChannelSearchFilter();

let channels_filtered = $derived(filters.apply(channels_data));

</script>


<svelte:head>
  <title> YouTube × Loves × Sup#2.0 </title>
  <meta name="description" content="All the book series I have read and loved!" />
</svelte:head>


{#snippet cards(channels: YouTubeChannelData[], wants_shuffle: boolean)}
  {@const _channels =
    wants_shuffle
    ? (status.client ? shuffle(channels) : [])
    : channels
  }

  <Cards>
    {#each _channels as channel (channel.shard)}
      <ChannelBlock {channel} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "YouTube channels" },
]} />

<Main>
  <SearchFilters bind:filters result_count={filters.count_results(channels_filtered)} />

  <Block>
    <p> These are the YouTube channels I enjoy watching ;) </p>

    <Adventure routes={[
      [1, `I haven’t included pure music channels here, since those belong over in ${a("Artists", "/sup/music/listen/artists", true)}!`]
    ]} />
  </Block>

  {#if channels_filtered.is_grouped}
    {#each channels_filtered.data as [collection, channels]}
      {#if channels.length > 0}
        <section>
          <Header text={collection?.toUpperCase()} />
          {@render cards(channels, filters.is_clear)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(channels_filtered.data, false)}

  {/if}
</Main>
