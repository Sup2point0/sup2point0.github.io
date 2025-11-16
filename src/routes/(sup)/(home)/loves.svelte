<script>
  
import Cards from "#parts/core/cards.svelte";
import Block from "#parts/ui/block.svelte";
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

  <Block>
    Too many to fit here, so head over to <a class="link" href="/sup/loves">loves</a> ;)
  </Block>

  <Cards force_grid={true}>
    <LinkCard text="music production" link="/sup/music/create" />
    <LinkCard text="rhythm games" link="/sup/loves/games" />
  </Cards>
{/if}


<style lang="scss">

h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-transform: uppercase;
}

</style>
