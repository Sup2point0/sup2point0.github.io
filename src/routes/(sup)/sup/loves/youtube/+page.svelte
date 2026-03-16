<script lang="ts">

import { status } from "#scripts/status.svelte.ts";
import { shuffle, a } from "#scripts/utils";
import type { FilterResults } from "#scripts/search-filter.svelte.ts";

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Block         from "#parts/ui/block.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import ChannelBlock  from "#parts/loves/block.channel.svelte";
import Adventure     from "#parts/special/adventure.svelte";

import { channels_data, channels_list, type YouTubeChannelData } from "./channels";
import { ChannelSearchFilter } from "./filter.channels.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new ChannelSearchFilter();

let displayed_channels: FilterResults<YouTubeChannelData> = $derived(filters.apply(channels_list));

</script>


<svelte:head>
  <title> Series × Loves × Sup#2.0 </title>
  <meta name="description" content="All the book series I have read and loved!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "YouTube channels" },
]} />

<Main>
  <SearchFilters bind:filters result_count={displayed_channels.length} />

  <Block>
    <p> These are the YouTube channels I enjoy watching ;) </p>

    <Adventure routes={[
      [1, `I haven’t included pure music channels here, since those belong over in ${a("Artists", "/sup/music/listen/artists")}!`]
    ]} />
  </Block>

  {#if filters.query === "" && filters.dirtiness === 0}
    {#each Object.entries(channels_data) as [collection, channels]}
      <section>
        <Header> {collection?.toUpperCase()} </Header>

        <Cards>
          {#each status.client ? shuffle(channels) : [] as channel (channel.shard)}
            <ChannelBlock {channel} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== "default"}
    {@const displayed = displayed_channels as [string, YouTubeChannelData[]][]}

    {#each displayed as [collection, channels]}
      <section>
        <Header> {collection?.toUpperCase()} </Header>

        <Cards>
          {#each channels as channel (channel.shard)}
            <ChannelBlock {channel} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = displayed_channels as YouTubeChannelData[]}

    <Cards>
      {#each displayed as channel (channel.shard)}
        <ChannelBlock {channel} />
      {/each}
    </Cards>

  {/if}
</Main>
