<script lang="ts">

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import MediaBlock    from "#parts/loves/block.media.svelte";

import { animes_data, type AnimeData } from "./anime";
import { AnimeSearchFilter } from "./filter.anime.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new AnimeSearchFilter();

let animes_filtered = $derived(filters.apply(animes_data));

</script>


<svelte:head>
  <title> Series × Loves × Sup#2.0 </title>
  <meta name="description" content="All the anime series and films I have watched, am currently watching, or would like to watch!" />
</svelte:head>


{#snippet cards(animes: AnimeData[])}
  <Cards>
    {#each animes as anime (anime.shard)}
      <MediaBlock kind="anime" media={anime} expanded={filters.extra["expand all"]} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "anime" },
]} />

<Main>
  <SearchFilters bind:filters result_count={AnimeSearchFilter.count_results(animes_filtered)} />

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
