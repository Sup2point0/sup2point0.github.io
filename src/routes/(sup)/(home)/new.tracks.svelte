<!-- @component ProfileTracks

Latest released soundtracks!
-->

<script lang="ts">

import { tracks_list } from "#sup/music/create/create";

import Cards      from "#parts/core/cards.svelte";
import TrackCard from "#parts/music/card.track.create.svelte";
import Adventure  from "#parts/special/adventure.svelte";

import { fade } from "svelte/transition";

</script>


<h2 transition:fade={{ duration: 500 }}>
  <Adventure tagless={true} routes={[
    [20, `latest tracks`],
    [20, `recent tracks`],
    [10, `new music`],
  ]} />
</h2>

<Cards>
  <TrackCard track={tracks_list.find(t => t.shard === "protos")!} />
  <TrackCard track={tracks_list.find(t => t.shard === "ephemerald")!} />
  <TrackCard track={tracks_list.find(t => t.shard === "skies-above")!} />
</Cards>


<style lang="scss">



</style>
