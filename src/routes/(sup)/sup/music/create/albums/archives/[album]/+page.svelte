<script lang="ts">

import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import TrackBlock from "#parts/music/block.track.svelte";
  
import type { AlbumData } from "#scripts/types";

import { page } from "$app/state";


let album: AlbumData = $derived(page.data as AlbumData);

</script>


<svelte:head>
  <title> {album.name} × Archives × Music × Sup#2.0 </title>
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create", intern: "sup/music/create" },
  { text: "albums", intern: "sup/music/create/albums" },
  { text: "archives", intern: "sup/music/create/albums/archives" },
  { text: album.name }
]} />

<Main gap="2rem">
  <section class="info">
    <h1> {album.name} </h1>
  </section>

  <section class="tracks">
    {#each album.tracks as track}
      <TrackBlock {track} />
    {/each}
  </section>
</Main>


<style lang="scss">

.info {
  min-width: 50%;
  padding: 1rem 3rem;
  @include shear-card();

  h1 {
    @include font-fun;
  }
}

.tracks {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

</style>
