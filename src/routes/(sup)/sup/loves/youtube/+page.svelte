<script lang="ts">

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import ChannelBlock  from "#parts/loves/block.channel.svelte";

import { channels_data, type YouTubeChannelData } from "./channels";

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
  {#each Object.entries(channels_data) as [collection, channels]}
    <section>
      <Header> {collection?.toUpperCase()} </Header>

      <Cards>
        {#each channels as channel}
          <ChannelBlock {channel} />
        {/each}
      </Cards>
    </section>
  {/each}
</Main>
