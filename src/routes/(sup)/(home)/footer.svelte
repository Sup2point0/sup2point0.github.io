<!-- @component ProfileFooter -->

<script>
  
import Block  from "#parts/ui/block.svelte";
import Header from "#parts/ui/header.svelte";

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
  <Header> {displayed_title} </Header>

  <Block kind="fun">
    woah, you’ve reached the end!
    <div style:height="0.69em"></div>
    fun fact: this site has loads of easter eggs ;)
  </Block>
{/if}
