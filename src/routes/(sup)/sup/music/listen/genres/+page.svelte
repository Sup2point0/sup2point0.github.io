<script lang="ts">

import { genres_data } from ".";

import { shuffle } from "#scripts/utils";
import type { GenreData } from "#scripts/types";

import { Cards, Main } from "#parts/core";
import { Block, Breadcrumbs } from "#parts/ui";
import { Adventure } from "#parts/special";
import GenreBlock from "#parts/music/block.genre.svelte";

import { onMount } from "svelte";
import { fade } from "svelte/transition";


let displayed_genres: {
  [collection: string]: GenreData[];
} = $state({});

onMount(() => {
  for (let [collection, genres] of Object.entries(genres_data)) {
    displayed_genres[collection] = shuffle(genres);
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

<Main>
  <Block>
    <p> I’m not kidding when I say I vibe to almost all kinds of music. Grouping these would be a nightmare, so instead, here’s a massive list for your perusal! </p>

    <Adventure routes={[
      [1, `In all honesty I find genres a bit arbitrary, and I’d rather categorise music by its feeling. So I’ve included both :P`],

      [1, `I won’t lie, I’m extraordinarily bad at describing the music I listen to. Sooo, a lot of this might be ‘inaccurate’ ¯ \\_(ツ)_/¯`],

      [1, `For each genre or vibe, I’ve included artists and tracks I listen to that are pretty representative (I reckon) of that kinda music, so if you listen to it too, there’s a good chance you’ll have heard of them!`],
    ]} />
  </Block>

  {#each Object.entries(displayed_genres) as [collection, genres]}
    <section>
      <h2 transition:fade={{ duration: 500 }}> {collection.toUpperCase()} </h2>

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
