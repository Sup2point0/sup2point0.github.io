<script lang="ts">

import AlbumCard from "#parts/music/album-block.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";

import { albums, type AlbumData } from "./albums";

</script>


{#snippet album_cards(albums: AlbumData[])}
  {#each albums as album}
    <AlbumCard
      name={album.name}
      year={album.year}
      tracks={album.tracks?.length}
      intern={album.shard}
      cover={album.cover}
      preview={album.is_preview}
    />
  {/each}
{/snippet}


<svelte:head>
  <title> Albums × Music × Sup#2.0 </title>
  <meta name="description" content="All the albums of music I’m working on!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create", intern: "sup/music/create" },
  { text: "albums" },
]} />

<div class="container">
  <section>
    {@render album_cards(albums.pinned)}
  </section>

  <section>
    {@render album_cards(albums.gen1)}
  </section>

  <section>
    {@render album_cards(albums.archives)}
  </section>
</div>


<style lang="scss">

.container {
  width: 80%;
  max-width: 100rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 4rem;
}

section {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

</style>
