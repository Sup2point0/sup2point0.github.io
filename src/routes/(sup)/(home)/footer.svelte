<!-- @component ProfileFooter -->

<script>
  
import Block from "#parts/ui/block.svelte"

import { onMount } from "svelte";


let displayed_title = $state("");

onMount(() => {
  displayed_title = title_routes[Math.floor(Math.random() * title_routes.length)];
});

const title_routes = [
  `keep exploring`,
  `adventure awaits`,
];

</script>


{#if displayed_title}
  <h2> {displayed_title} </h2>

  <Block kind="fun">
    woah, you’ve reached the end!
    <div style:height="0.69em"></div>
    fun fact: this site has loads of easter eggs ;)
  </Block>
{/if}


<style lang="scss">
  
h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-transform: uppercase;
}

</style>
