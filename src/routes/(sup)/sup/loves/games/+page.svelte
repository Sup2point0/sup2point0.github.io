<script lang="ts">

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import GameBlock from "#parts/loves/block.game.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";

import { games_list } from "./games";
import { GameSearchFilter } from "./filter.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new GameSearchFilter();

let displayed_games = $derived(filters.apply(games_list));

</script>


<svelte:head>
  <title> Games × Loves × Sup#2.0 </title>
  <meta name="description" content="All the games I currently play, have played, and would like to play!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "loves", intern: "sup/loves" },
  { text: "games" },
]} />

<Main>
  <SearchFilters bind:filters />

  <Cards>
    {#each displayed_games as game (game.shard)}
      <GameBlock {game} />
    {/each}
  </Cards>
</Main>



<style lang="scss">

</style>
