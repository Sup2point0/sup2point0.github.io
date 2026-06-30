<script lang="ts">

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import MediaBlock    from "#parts/loves/block.media.svelte";

import { book_series_data, type BookSeriesData } from "./book-series";
import { BookSeriesSearchFilter } from "./filter.book-series.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new BookSeriesSearchFilter();

let books_filtered = $derived(filters.apply(book_series_data));

</script>


<svelte:head>
  <title> Series × Loves × Sup#2.0 </title>
  <meta name="description" content="All the book series I have read and loved!" />
</svelte:head>


{#snippet cards(books: BookSeriesData[])}
  <Cards>
    {#each books as book (book.shard)}
      <MediaBlock kind="books" media={book} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "book series" },
]} />

<Main>
  <SearchFilters bind:filters result_count={BookSeriesSearchFilter.count_results(books_filtered)} />

  {#if books_filtered.is_grouped}
    {#each books_filtered.data as [collection, books]}
      {#if books.length > 0}
        <section>
          <Header text={collection?.toUpperCase()} />
          {@render cards(books)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(books_filtered.data)}

  {/if}
</Main>
