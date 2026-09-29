<script lang="ts">

import { puzzles_list, type PuzzleData } from ".";
import { SearchFilter, type FlatResults } from "#scripts/search";

import { Cards, Main } from "#parts/core";
import { Block, Breadcrumbs, SearchFilters } from "#parts/ui";
import { PuzzleBlock } from "#parts/loves";


// svelte-ignore non_reactive_update
let filters = new SearchFilter<PuzzleData>();

let puzzles_filtered = $derived(
	filters.apply(puzzles_list) as FlatResults<PuzzleData>
);

</script>


<svelte:head>
  <title> Puzzles × Loves × Sup#2.0 </title>
  <meta name="description" content="The puzzles I enjoy solving!" />
</svelte:head>


{#snippet cards(puzzles: PuzzleData[])}
  <Cards>
    {#each puzzles as puzzle (puzzle.shard)}
      <PuzzleBlock {puzzle} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs />

<Main>
  <SearchFilters bind:filters result_count={filters.count_results(puzzles_filtered)} />

  <Block>
    <p> These are the puzzles I like to solve! </p>
  </Block>

	{@render cards(puzzles_filtered.data)}
</Main>
