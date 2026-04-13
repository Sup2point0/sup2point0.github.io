<script lang="ts">

import { status } from "#scripts/state";
import { shuffle } from "#scripts/utils";

import { artists_data } from "./artists";

import Main        from "#parts/core/main.svelte";
import Cards       from "#parts/core/cards.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Header      from "#parts/ui/header.svelte";
import ArtistBlock from "#parts/music/block.artist.svelte";

import { onMount } from "svelte";


let invert: boolean;

onMount(() => {
  invert = Math.random() > 0.5;
});

</script>


<svelte:head>
  <title> Artists × Music × Sup#2.0 </title>
  <meta name="description" content="All the artists whose music I listen to!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "listen", intern: "sup/music/listen" },
  { text: "artists" },
]} />

<Main>
  {#each Object.entries(artists_data) as [collection, artists]}
    <section>
      <Header> {collection.toUpperCase()} </Header>

      <Cards>
        {#each status.client ? shuffle(artists) : [] as artist}
          <ArtistBlock {artist} {invert} />
        {/each}
      </Cards>
    </section>
  {/each}
</Main>
