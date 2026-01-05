<script lang="ts">

import type { FilterResults } from "#scripts/search-filter.svelte.ts";

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import MediaBlock from "#parts/loves/block.media.svelte";

import { book_series_data, book_series_list, type BookSeriesData } from "./book-series";
import { BookSeriesSearchFilter } from "./filter.book-series.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new BookSeriesSearchFilter();

let displayed_series: FilterResults<BookSeriesData> = $derived(
  filters.apply(book_series_list) as FilterResults<BookSeriesData>
);

</script>


<svelte:head>
  <title> Series × Loves × Sup#2.0 </title>
  <meta name="description" content="All the book series I have read and loved!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "book series" },
]} />

<Main>
  <SearchFilters bind:filters result_count={displayed_series.length} />

  {#if filters.query === "" && filters.dirtiness === 0}
    {#each Object.entries(book_series_data) as [collection, series]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each series as anime}
            <MediaBlock kind="book-series" media={anime} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== "default"}
    {@const displayed = displayed_series as [string, BookSeriesData[]][]}

    {#each displayed as [collection, series]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each series as anime (anime.shard)}
            <MediaBlock kind="book-series" media={anime} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = displayed_series as BookSeriesData[]}

    <Cards>
      {#each displayed as anime (anime.shard)}
        <MediaBlock kind="book-series" media={anime} />
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
