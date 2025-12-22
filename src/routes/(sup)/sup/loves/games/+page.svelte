<script lang="ts">

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import GameBlock from "#parts/loves/block.game.svelte";

import { games_list, type GameData } from "./games";
import { GameSearchFilter } from "./filter.games.svelte.ts";


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

<Main gap="4rem">
  <SearchFilters bind:filters result_count={displayed_games.length} />

  {#if filters.group_by !== "default"}
    {@const displayed = displayed_games as [string, GameData[]][]}

    {#each displayed as [collection, games]}
      <section>
        <h2> {collection?.toUpperCase()} </h2>

        <Cards>
          {#each games as game (game.shard)}
            <GameBlock {game} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = displayed_games as GameData[]}

    <Cards>
      {#each displayed as game (game.shard)}
        <GameBlock {game} />
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
