<script lang="ts">

import { artists_data } from "./artists";
import { ArtistSearchFilter } from "./filter.artists.svelte.ts";
import type { ArtistData } from "#scripts/types";

import { Cards, Main } from "#parts/core";
import { Breadcrumbs, Header, SearchFilters } from "#parts/ui";
import ArtistBlock from "#parts/music/block.artist.svelte";


// svelte-ignore non_reactive_update
let filters = new ArtistSearchFilter();

let artists_filtered = $derived(filters.apply(artists_data));

</script>


<svelte:head>
  <title> Artists × Music × Sup#2.0 </title>
  <meta name="description" content="All the artists whose music I listen to!" />
</svelte:head>


{#snippet cards(artists: ArtistData[])}
  <Cards>
    {#each artists as artist (artist.shard)}
      <ArtistBlock {artist} expanded={filters.extra["expand all"]} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "listen", intern: "sup/music/listen" },
  { text: "artists" },
]} />

<Main>
  <SearchFilters bind:filters result_count={filters.count_results(artists_filtered)} />

  {#if artists_filtered.is_grouped}
    {#each artists_filtered.data as [collection, artists]}
      {#if artists.length > 0}
        <section>
          <Header> {collection.toUpperCase()} </Header>
          {@render cards(artists)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(artists_filtered.data)}

  {/if}
</Main>
