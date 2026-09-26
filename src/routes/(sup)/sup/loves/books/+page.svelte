<script lang="ts">

import { books_data, type BooksData } from "./index.ts";
import { BookSearchFilter } from "./filter.books.svelte.ts";

import { Cards, Main } from "#parts/core";
import { Breadcrumbs, Header, SearchFilters } from "#parts/ui";
import { MediaBlock } from "#parts/loves";


// svelte-ignore non_reactive_update
let filters = new BookSearchFilter();

let books_filtered = $derived(filters.apply(books_data));

</script>


<svelte:head>
  <title> Books × Loves × Sup#2.0 </title>
  <meta name="description" content="All the books and book series I have read and loved!" />
</svelte:head>


{#snippet cards(books: BooksData[])}
  <Cards>
    {#each books as book (book.shard)}
      <MediaBlock kind="books" media={book} expanded={filters.extra["expand all"]} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "books" },
]} />

<Main>
  <SearchFilters bind:filters result_count={filters.count_results(books_filtered)} />

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
