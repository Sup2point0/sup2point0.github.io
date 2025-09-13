<script>

import Main from "#parts/core/main.svelte";
import Cards from "#parts/core/cards.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import ArtistBlock from "#parts/music/block.artist.svelte";

import { artists as artists_lists } from "../artists";

</script>


<svelte:head>
  <title> Artists × Music × Sup#2.0 </title>
  <meta name="description" content="All the artists whose music I listen to!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "listen", intern: "sup/music/listen" },
  { text: "artists" },
]} />

<Main gap="4rem">
  {#each Object.entries(artists_lists) as [collection, artists]}
    <section>
      <h2> {collection.toUpperCase()} </h2>

      <Cards>
        {#each artists as artist}
          <ArtistBlock {artist} />
        {/each}
      </Cards>
    </section>
  {/each}
</Main>


<style lang="scss">

h2 {
  margin-bottom: 2rem;
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-align: center;
}

</style>
