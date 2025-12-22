<script lang="ts">

import { pick_random, shuffle } from "#scripts/utils";
import type { FilterResults } from "#scripts/search-filter.svelte.ts";

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Block from "#parts/ui/block.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import MediaBlock from "#parts/loves/block.media.svelte";

import { films_data, films_list, type FilmData } from "./films";
import { FilmSearchFilter } from "./filter.films.svelte.ts";

import { onMount } from "svelte";


// svelte-ignore non_reactive_update
let filters = new FilmSearchFilter();

let displayed_films: FilterResults<FilmData> = $derived(filters.apply(films_list));

let displayed_route = $state("");

onMount(() => {
  displayed_route = pick_random(routes);
});


const routes = [
  `btw, please treat this as more of a tier list than ranking. It’s impossible to pick if I like a movie more than another :v`,
  
  `This isn’t quite a list of every film I’ve watched, but if I enjoyed it, it’ll be on here. If you’re reading this, I’m probably still searching for films I’ve watched but forgotten to put here =)`,
];

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
  <Block>
    {#if displayed_route}
      <p> I <em>lovvve</em> watching films. I went on a whole film-watching arc in 2022–2023 where I’d watch a film every couple of nights, just cuz I’d been so deprived of them so far in life. It made me really come to love cinema. </p>
      
      <p> That being said, after experiencing a cinema properly after CoViD-19 died down, I really could not go back to watching films on a tiny phone screen or crappy plane screen. </p>

      <p> {@html displayed_route} </p>
    {/if}
  </Block>

  <SearchFilters bind:filters result_count={displayed_films.length} />

  {#if filters.query === "" && filters.dirtiness === 0}
    {#each Object.entries(films_data) as [collection, films]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each shuffle(films) as film}
            <MediaBlock kind="films" media={film} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== "default"}
    {@const displayed = displayed_films as [string, FilmData[]][]}

    {#each displayed as [collection, films]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each films as film (film.shard)}
            <MediaBlock kind="films" media={film} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = displayed_films as FilmData[]}

    <Cards>
      {#each displayed as film (film.shard)}
        <MediaBlock kind="films" media={film} />
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
