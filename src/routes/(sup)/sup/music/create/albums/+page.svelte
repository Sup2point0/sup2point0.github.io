<script lang="ts">

import Main from "#parts/core/main.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import AlbumCard from "#parts/music/card.album.svelte";

import { albums } from "#src/routes/(sup)/sup/music/music";
import type { AlbumData } from "#scripts/types";

</script>


{#snippet album_cards(albums: AlbumData[], collection?: string)}
  {#each albums as album}
    <AlbumCard
      name={album.name}
      date={album.date}
      tracks={album.tracks?.length}
      intern={(collection ?? "") + album.shard}
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

<Main>
  <div class="container">
    <section>
      {@render album_cards(albums.pinned)}
    </section>

    <section>
      {@render album_cards(albums.gen1)}
    </section>

    <section>
      {@render album_cards(albums.archives, "archives/")}
    </section>
  </div>
</Main>


<style lang="scss">

.container {
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
