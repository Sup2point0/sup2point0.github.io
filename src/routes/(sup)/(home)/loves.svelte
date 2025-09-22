<script>
  
import Block from "#parts/ui/block.svelte";

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
  `heartskips`,
];

</script>


{#if displayed_title}
  <h2 transition:fade={{ duration: 500 }}>
    {displayed_title}
  </h2>

  <Block>
    Oh, there’s <em>WAY</em> too many to fit here. Head over to <a class="link" href="sup/loves">loves</a> ;)
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
