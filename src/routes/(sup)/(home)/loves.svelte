<script>
  
import Cards    from "#parts/core/cards.svelte";
import Clicky   from "#parts/ui/clicky.svelte";
import LinkCard from "#parts/ui/card.link.svelte";


import { onMount } from "svelte";
import { fade } from "svelte/transition";


let displayed_title = $state("");

onMount(() => {
  displayed_title = title_routes[Math.floor(Math.random() * title_routes.length)];
});

const title_routes = [
  `loves`,
  `interests`,
  `hobbies`,
  `things I love`,
];

</script>


{#if displayed_title}
  <h2 transition:fade={{ duration: 500 }}>
    {displayed_title}
  </h2>

  <Cards force_grid={true}>
    <LinkCard text="music production" link="/sup/music/create" />
    <LinkCard text="rhythm games" link="/sup/loves/games" />
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
