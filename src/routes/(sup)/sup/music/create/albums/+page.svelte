<script lang="ts">

import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import AlbumCard from "#parts/music/card.album.svelte";

import { albums } from "#src/routes/(sup)/sup/music/music";

</script>


<svelte:head>
  <title> Albums × Music × Sup#2.0 </title>
  <meta name="description" content="All the albums of music I’m working on!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create", intern: "sup/music/create" },
  { text: "albums" },
]} />

<Main gap="4rem">
  <section>
    {#each albums.pinned as album}
      <AlbumCard {album} />
    {/each}
  </section>

  <section>
    {#each albums.gen1 as album}
      <AlbumCard {album} />
    {/each}
  </section>

  <section>
    {#each albums.archives as album}
      <AlbumCard {album} collection="archives/" />
    {/each}
  </section>
</Main>


<style lang="scss">

section {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

</style>
