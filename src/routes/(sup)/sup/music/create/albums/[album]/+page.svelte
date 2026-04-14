<script lang="ts">
  
import type { AlbumData } from "#scripts/types";

import Main        from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import AlbumBlock  from "#parts/music/block.album.svelte";
import TrackBlock  from "#parts/music/block.track.create.svelte";

import { page } from "$app/state";


let album: AlbumData = $derived(page.data as AlbumData);

</script>


<svelte:head>
  <title> {album.name} × Music × Sup#2.0 </title>
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create", intern: "sup/music/create" },
  { text: "albums", intern: "sup/music/create/albums" },
  { text: album.name }
]} />

<Main gap="2rem">
  <AlbumBlock {album} />

  <section class="tracks">
    {#each album.tracks as track}
      <TrackBlock {track} />
    {/each}
  </section>
</Main>


<style lang="scss">

.tracks {
  max-width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

</style>
