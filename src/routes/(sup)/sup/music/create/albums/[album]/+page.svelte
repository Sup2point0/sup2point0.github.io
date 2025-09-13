<script lang="ts">

import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import TrackBlock from "#parts/music/block.track.svelte";
  
import type { AlbumData } from "#scripts/types";

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
  <section class="album">
    <div class="info">
      <h1> {album.name} </h1>
      <p class="date"> {album.date} </p>

      {#if album.desc}
        <p class="desc"> {@html album.desc} </p>
      {/if}
    </div>
    
    <img alt={album.name} title={album.name}
      width="240px" height="240px"
      src="/music/covers/{album.cover ?? 'placeholder.png'}"
    />
  </section>

  <section class="tracks">
    {#each album.tracks as track}
      <TrackBlock {track} />
    {/each}
  </section>
</Main>


<style lang="scss">

.album {
  min-width: 50%;
  padding: 1rem 5rem;
  display: flex;
  flex-flow: row wrap;
  gap: 4rem;
  @include shear-card();

  h1 {
    @include font-fun;
    font-weight: normal;
    font-size: 500%;
  }

  p.date {
    @include font-tech;
    font-size: 150%;
    color: $col-text-deut;
  }
}

.tracks {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

</style>
