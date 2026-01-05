<script lang="ts">

import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import AlbumCard from "#parts/music/card.album.svelte";

import { albums_data } from "../create";

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

<Main>
  <section>
    {#each albums_data.pinned as album}
      <AlbumCard {album} />
    {/each}
  </section>

  <section>
    {#each albums_data.gen1 as album}
      <AlbumCard {album} />
    {/each}
  </section>

  <section>
    {#each albums_data.archives as album}
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
