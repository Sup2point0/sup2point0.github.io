<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";
  
import Cards    from "#parts/core/cards.svelte";
import Clicky   from "#parts/ui/clicky.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

import { onMount } from "svelte";
import { fade } from "svelte/transition";


let displayed_title: string | undefined = $state(undefined);

onMount(() => {
  displayed_title = title_routes.sample_value();
});

const title_routes = new FrozenWeightedList(
  [42, `things I love`],
  [20, `loves`],
  [20, `interests`],
  [13, `hobbies`],
);

</script>


{#if displayed_title}
  <h2 transition:fade={{ duration: 500 }}>
    {displayed_title}
  </h2>

  <Cards force_grid={true}>
    <LinkCard text="software development" link="/sup/dev/" />
    <LinkCard text="music production" link="/sup/music/create" />
    <LinkCard text="rhythm games" link="/sup/loves/games" />
    <LinkCard text="<em>Yu-Gi-Oh!</em>" link="https://sup2point0.github.io/Assort/yugioh" />
    <LinkCard text="desmos" link="https://sup2point0.github.io/integrity" />
    <LinkCard text="integration" link="https://sup2point0.github.io/integrity/questions/integrals" />
  </Cards>

  <Clicky text="VIEW MORE" link="/sup/loves" />
{/if}


<style lang="scss">

h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-transform: uppercase;
}

</style>
