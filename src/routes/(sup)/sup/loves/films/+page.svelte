<script lang="ts">

import type { Groups } from "#scripts/types";

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";

import { films_data, films_list, type FilmData } from "./films";
import { FilmSearchFilter } from "./filter.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new FilmSearchFilter();

let displayed_films: FilmData[] | Groups<FilmData> = $derived(filters.apply(films_list))

</script>


<svelte:head>
  <title> Films × Loves × Sup#2.0 </title>
  <meta name="description" content="All the films I have watched, or would like to watch!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "films" },
]} />

<Main>
  <SearchFilters bind:filters />

  {#if filters.query === ""}
    {#each Object.entries(films_data) as [collection, films]}
      <section>
        <h2> {collection.toUpperCase()} </h2>

        <Cards>
          {#each films as film}
            <p> {film.name} </p>
            <!-- <FilmBlock /> -->
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== null}
    {#each displayed_films as [collection, films]}
      <section>
        <h2> {collection.toUpperCase()} </h2>

        <Cards>
          {#each films as film}
            <p> {film.name} </p>
            <!-- <FilmBlock {film} /> -->
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    <Cards>
      {#each displayed_films as film (film.shard)}
        <p> {film.name} </p>
        <!-- <FilmBlock {film} /> -->
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
