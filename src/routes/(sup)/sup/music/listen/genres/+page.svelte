<script lang="ts">

import sample from "@stdlib/random-sample";

import type { GenreData } from "#scripts/types";

import Main from "#parts/core/main.svelte";
import Cards from "#parts/core/cards.svelte";
import Block from "#parts/ui/block.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import GenreBlock from "#parts/music/block.genre.svelte";

import { genres as genres_map } from "./genres";

import { onMount } from "svelte";
import { fade } from "svelte/transition";


let displayed_route: string | null = $state(null);

let displayed_genres: {
  [collection: string]: GenreData[];
} = $state({});

onMount(() => {
  displayed_route = routes[Math.floor(Math.random() * routes.length)];

  for (let [collection, genres] of Object.entries(genres_map)) {
    displayed_genres[collection] = sample(genres, { replace: false });
  }
});


const routes = [
  `In all honesty I find genres a bit arbitrary, and I’d rather categorise music by its feeling. So I’ve included both :P`,

  `Lowkey I can’t really accurately ascertain what genres the music I listen to are, sooo`,

  `For each genre or vibe, I’ve included artists and tracks I listen to that are pretty representative (I reckon) of that kinda music, so if you listen to it too, there’s a good chance you’ll have heard of them!`,
];

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
    {#if displayed_route}
      I’m not kidding when I say I vibe to almost all kinds of music. Grouping these would be a nightmare, so here’s a massive list for your perusal (shuffled for flavour!).

      <div style:height="0.69em"></div>

      {displayed_route}
    {/if}
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
