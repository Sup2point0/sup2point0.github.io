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
    <LinkCard
      link="/sup/dev/"
      text="software development"
    />
    <LinkCard
      link="/sup/music/create"
      text="music production"
      />
    <LinkCard
      link="/sup/loves/games"
      text="rhythm games"
      capt="Phigros, Milthm, CHUNITHM, Arcaea"
    />
    <LinkCard
      link="https://sup2point0.github.io/Assort/yugioh"
      text="Yu-Gi-Oh!"
      capt="The lawyers’ card game"
    />
    <LinkCard
      link="https://sup2point0.github.io/integrity"
      text="desmos"
      capt="The superior programming language"
    />
    <LinkCard
      link="https://sup2point0.github.io/integrity/questions/integrals"
      text="integration"
      capt="The art of mathematics"
    />
    <LinkCard
      link="https://sup2point0.github.io/skyscraping"
      text="Skyscrapers"
      capt="Sudoku on steroids"
    />
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
