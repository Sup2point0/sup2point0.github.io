<script lang="ts">

import { status } from "#scripts/state";
import { shuffle } from "#scripts/utils";

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Block         from "#parts/ui/block.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import MediaBlock    from "#parts/loves/block.media.svelte";
import Adventure     from "#parts/special/adventure.svelte";

import { films_data, type FilmData } from "./films";
import { FilmSearchFilter } from "./filter.films.svelte.ts";

// svelte-ignore non_reactive_update
let filters = new FilmSearchFilter();

let films_filtered = $derived(filters.apply(films_data));

</script>


<svelte:head>
  <title> Films × Loves × Sup#2.0 </title>
  <meta name="description" content="All the films I have watched, or would like to watch!" />
</svelte:head>


{#snippet cards(films: FilmData[], wants_shuffle: boolean)}
  {@const _films =
    wants_shuffle
    ? (status.client ? shuffle(films) : [])
    : films
  }

  <Cards>
    {#each _films as film (film.shard)}
      <MediaBlock kind="films" media={film} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "films" },
]} />

<Main>
  <Block kind="ui expanded">
    <p> I <em>lovvve</em> watching films. I went on a whole film-watching arc in 2022–2023 where I’d watch a film every couple of nights, just cuz I’d been so deprived of them so far in life. It made me really come to love cinema. </p>
    
    <p> That being said, after experiencing a cinema properly after CoViD-19 died down, I really could not go back to watching films on a tiny phone screen or crappy plane screen. </p>

    <Adventure routes={[
      [1, `btw, please treat this as more of a tier list than ranking. It’s impossible to pick if I like a movie more than another :v`],

      [1, `This isn’t quite a list of every film I’ve watched, but if I enjoyed it, it’ll be on here. If you’re reading this, I’m probably still searching for films I’ve watched but forgotten to put here =)`],
    ]} />
  </Block>

  <SearchFilters bind:filters result_count={FilmSearchFilter.count_results(films_filtered)} />

  {#if films_filtered.is_grouped}
    {#each films_filtered.data as [collection, films]}
      {#if films.length > 0}
        <section>
          <Header> {collection?.toUpperCase()} </Header>
          {@render cards(films, filters.is_clear)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(films_filtered.data, false)}

  {/if}
</Main>
