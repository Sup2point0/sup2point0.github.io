<script lang="ts">

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import MediaBlock    from "#parts/loves/block.media.svelte";

import { series_data, type SeriesData } from "./series";
import { SeriesSearchFilter } from "./filter.series.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new SeriesSearchFilter();

let series_filtered = $derived(filters.apply(series_data));

</script>


<svelte:head>
  <title> Series × Loves × Sup#2.0 </title>
  <meta name="description" content="All the TV series and shows I have watched, am currently watching, or would like to watch!" />
</svelte:head>


{#snippet cards(series: SeriesData[])}
  <Cards>
    {#each series as each (each.shard)}
      <MediaBlock kind="series" media={each} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "series" },
]} />

<Main>
  <SearchFilters bind:filters result_count={SeriesSearchFilter.count_results(series_filtered)} />

  {#if series_filtered.is_grouped}
    {#each series_filtered.data as [collection, series]}
      {#if series.length > 0}
        <section>
          <Header text={collection?.toUpperCase()} />
          {@render cards(series)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(series_filtered.data)}

  {/if}
</Main>
