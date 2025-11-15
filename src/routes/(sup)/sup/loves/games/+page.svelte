<script lang="ts">

import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import GameBlock from "#parts/loves/block.game.svelte";

import { games } from "./games";
import { GameSearchFilter } from "./filter.svelte.ts";


let filters = new GameSearchFilter();

let displayed_games = $derived(filters.apply(games));

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

  <div class="browse">
    {#each displayed_games as game (game.shard)}
      <GameBlock {game} />
    {/each}
  </div>
</Main>



<style lang="scss">

.browse {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

</style>
