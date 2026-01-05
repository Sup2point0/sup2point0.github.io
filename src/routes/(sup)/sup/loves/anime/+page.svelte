<script lang="ts">

import type { FilterResults } from "#scripts/search-filter.svelte.ts";

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import MediaBlock from "#parts/loves/block.media.svelte";

import { animes_data, animes_list, type AnimeData } from "./anime";
import { AnimeSearchFilter } from "./filter.anime.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new AnimeSearchFilter();

let displayed_animes: FilterResults<AnimeData> = $derived(filters.apply(animes_list));

</script>


<svelte:head>
  <title> Series × Loves × Sup#2.0 </title>
  <meta name="description" content="All the anime series and films I have watched, am currently watching, or would like to watch!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "anime" },
]} />

<Main>
  <SearchFilters bind:filters result_count={displayed_animes.length} />

  {#if filters.query === "" && filters.dirtiness === 0}
    {#each Object.entries(animes_data) as [collection, series]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each series as anime}
            <MediaBlock kind="anime" media={anime} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== "default"}
    {@const displayed = displayed_animes as [string, AnimeData[]][]}

    {#each displayed as [collection, series]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each series as anime (anime.shard)}
            <MediaBlock kind="anime" media={anime} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = displayed_animes as AnimeData[]}

    <Cards>
      {#each displayed as anime (anime.shard)}
        <MediaBlock kind="anime" media={anime} />
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
