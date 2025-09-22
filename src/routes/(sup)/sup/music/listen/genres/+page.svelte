<script>

import sample from "@stdlib/random-sample";

import Main from "#parts/core/main.svelte";
import Cards from "#parts/core/cards.svelte";
import Block from "#parts/ui/block.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import GenreBlock from "#parts/music/block.genre.svelte";

import { genres as genres_map } from "./genres";

import { onMount } from "svelte";


let displayed_genres = {};

onMount(() => {
  for (let [collection, genres] of Object.entries(genres_map)) {
    displayed_genres[collection] = sample(genres, { replace: false });
  }
});

</script>


<svelte:head>
  <title> Genres × Music × Sup#2.0 </title>
  <meta name="description" content="All the genres of music I listen to!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "listen", intern: "sup/music/listen" },
  { text: "genres" },
]} />

<Main gap="4rem">
  <Block>
    I’m not kidding when I say I vibe to almost all kinds of music. Grouping these would be a nightmare, so here’s a massive list for your perusal (shuffled for flavour!).
  </Block>

  {#each Object.entries(displayed_genres) as [collection, genres]}
    <section>
      <h2> {collection.toUpperCase()} </h2>

      <Cards>
        {#each genres as genre}
          <GenreBlock {genre} />
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
