<script lang="ts">

import { games_data, type GameData } from ".";
import { GameSearchFilter } from "./filter.games.svelte.ts";

import { Cards, Main } from "#parts/core";
import { Breadcrumbs, Header, SearchFilters } from "#parts/ui";
import { GameBlock, MediaOverlay } from "#parts/loves";

import { onMount } from "svelte";


// svelte-ignore non_reactive_update
let filters = new GameSearchFilter();

let games_filtered = $derived(filters.apply(games_data));

let active_game: GameData | null = $state(null);


onMount(() => {
  filters.extra["expand all"] = (Math.random() > 0.5);
});

</script>


<svelte:head>
  <title> Games × Loves × Sup#2.0 </title>
  <meta name="description" content="All the games I currently play, have played, and would like to play!" />
</svelte:head>


{#snippet cards(games: GameData[])}
  <Cards>
    {#each games as game (game.shard)}
      <GameBlock {game} expanded={filters.extra["expand all"]} bind:active_game />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "games" },
]} />

<MediaOverlay kind="games" media={active_game} />

<Main>
  <SearchFilters bind:filters result_count={filters.count_results(games_filtered)} />

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
