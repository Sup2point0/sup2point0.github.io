<script lang="ts">

import { games_data, type GameData } from "./games";
import { GameSearchFilter } from "./filter.games.svelte.ts";

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import GameBlock     from "#parts/loves/block.game.svelte";

import { onMount } from "svelte";


// svelte-ignore non_reactive_update
let filters = new GameSearchFilter();

let games_filtered = $derived(filters.apply(games_data));


let invert: boolean;

onMount(() => {
  invert = Math.random() > 0.5;
});

</script>


<svelte:head>
  <title> Games × Loves × Sup#2.0 </title>
  <meta name="description" content="All the games I currently play, have played, and would like to play!" />
</svelte:head>


{#snippet cards(games: GameData[])}
  <Cards>
    {#each games as game (game.shard)}
      <GameBlock {game} {invert} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "games" },
]} />

<Main>
  <SearchFilters bind:filters result_count={GameSearchFilter.count_results(games_filtered)} />

  {#if games_filtered.is_grouped}
    {#each games_filtered.data as [collection, games]}
      {#if games.length > 0}
        <section>
          <Header text={collection?.toUpperCase()} />
          {@render cards(games)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(games_filtered.data)}

  {/if}
</Main>
