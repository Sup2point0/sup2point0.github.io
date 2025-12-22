<script lang="ts">

import type { FilterResults } from "#scripts/search-filter.svelte.ts";

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import MediaBlock from "#parts/loves/block.media.svelte";

import { series_data, series_list, type SeriesData } from "./series";
import { SeriesSearchFilter } from "./filter.series.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new SeriesSearchFilter();

let displayed_series: FilterResults<SeriesData> = $derived(filters.apply(series_list));

</script>


<svelte:head>
  <title> Series × Loves × Sup#2.0 </title>
  <meta name="description" content="All the TV series and shows I have watched, am currently watching, or would like to watch!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "series" },
]} />

<Main gap="4rem">
  <SearchFilters bind:filters result_count={displayed_series.length} />

  {#if filters.query === "" && filters.dirtiness === 0}
    {#each Object.entries(series_data) as [collection, series]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each series as series}
            <MediaBlock kind="series" media={series} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== "default"}
    {@const displayed = displayed_series as [string, SeriesData[]][]}

    {#each displayed as [collection, series]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each series as series (series.shard)}
            <MediaBlock kind="series" media={series} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = displayed_series as SeriesData[]}

    <Cards>
      {#each displayed as series (series.shard)}
        <MediaBlock kind="series" media={series} />
      {/each}
    </Cards>

  {/if}
</Main>


<style lang="scss">

h2 {
  margin-bottom: 2rem;
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-align: center;
}

</style>
