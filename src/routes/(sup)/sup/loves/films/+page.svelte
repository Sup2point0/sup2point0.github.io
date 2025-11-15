<script lang="ts">

import type { FilterResults } from "#scripts/search-filter.svelte.ts";

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import FilmBlock from "#parts/loves/block.film.svelte";

import { films_data, films_list, type FilmData } from "./films";
import { FilmSearchFilter } from "./filter.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new FilmSearchFilter();

let displayed_films: FilterResults<FilmData> = $derived(filters.apply(films_list))

</script>


<svelte:head>
  <title> Films × Loves × Sup#2.0 </title>
  <meta name="description" content="All the films I have watched, or would like to watch!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "films" },
]} />

<Main gap="4rem">
  <SearchFilters bind:filters />

  {#if filters.query === ""}
    {#each Object.entries(films_data) as [collection, films]}
      <section>
        <h2> {collection.toUpperCase()} </h2>

        <Cards>
          {#each films as film}
            <FilmBlock {film} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== null}
    {@const displayed = displayed_films as [string, FilmData[]][]}

    {#each displayed as [collection, films]}
      <section>
        <h2> {collection.toUpperCase()} </h2>

        <Cards>
          {#each films as film}
            <FilmBlock {film} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = displayed_films as FilmData[]}

    <Cards>
      {#each displayed as film (film.shard)}
        <FilmBlock {film} />
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
