<script>

import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import TrackCard from "#parts/music/card.track.svelte";

import { tracks_list } from "#src/routes/(sup)/sup/music/music";
import { TrackSearchFilter } from "./filter.svelte";


let filters = new TrackSearchFilter();

let displayed_tracks = $derived(filters.apply(tracks_list));

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
  <search></search>

  <div class="browse">
    {#each displayed_tracks as track}
      <TrackCard {track} />
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
