<script lang="ts">

import { webtoons_data, type WebtoonData } from ".";
import { MediaSearchFilter } from "../filter.media.svelte.ts";

import { Cards, Main } from "#parts/core";
import { Breadcrumbs, Header, SearchFilters } from "#parts/ui";
import { MediaBlock } from "#parts/loves";


// svelte-ignore non_reactive_update
let filters = new MediaSearchFilter();

let webtoons_filtered = $derived(filters.apply(webtoons_data));

</script>


<svelte:head>
  <title> Webtoons × Loves × Sup#2.0 </title>
  <meta name="description" content="All the webtoons I’ve read in my time!" />
</svelte:head>


{#snippet cards(webtoons: WebtoonData[])}
  <Cards>
    {#each webtoons as webtoon (webtoon.shard)}
      <MediaBlock kind="webtoons" media={webtoon} expanded={filters.extra["expand all"]} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "webtoon" },
]} />

<Main>
  <SearchFilters bind:filters result_count={filters.count_results(webtoons_filtered)} />

  {#if webtoons_filtered.is_grouped}
    {#each webtoons_filtered.data as [collection, webtoons]}
      {#if webtoons.length > 0}
        <section>
          <Header> {collection?.toUpperCase()} </Header>
          {@render cards(webtoons)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(webtoons_filtered.data)}

  {/if}
</Main>
