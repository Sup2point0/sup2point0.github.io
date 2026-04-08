<script lang="ts">

import type { TrackData } from "#scripts/types";

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import TrackCard from "#parts/music/card.track.svelte";

import { tracks_list } from "../create";
import { TrackSearchFilter } from "./filter.tracks.svelte";


// svelte-ignore non_reactive_update
let filters = new TrackSearchFilter();

let displayed_tracks: TrackData[] = $derived(filters.apply(tracks_list));

</script>


<svelte:head>
  <title> Tracks × Music × Sup#2.0 </title>
  <meta name="description" content="All the tracks I’ve created!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create", intern: "sup/music/create" },
  { text: "tracks" },
]} />

<Main>
  <SearchFilters bind:filters />

  <Cards>
    {#each displayed_tracks as track (track.shard)}
      <TrackCard {track} />
    {/each}
  </Cards>
</Main>


<style lang="scss">

</style>
