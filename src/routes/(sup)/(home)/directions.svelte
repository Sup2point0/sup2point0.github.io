<!-- @component ProfileDirections -->

<script>

import { a, i } from "#scripts/utils";

import Block from "#parts/ui/block.svelte";

import { onMount } from "svelte";


let displayed_route = $state("");

onMount(() => {
  displayed_route = routes[Math.floor(Math.random() * routes.length)];
});

const routes = [
  `If you’re an employer and want to see my software development skills and experience, head over to ${a("dev", "sup/dev")}. If you’re a fellow nerd, I’m sure you’ll have no problem exploring for yourself. If you’re a stalker, you can start doxxing me through ${a("info", "sup/info")}, track my life on ${a("YouTube", "https://youtube.com/@SuppetySup")}, then you can follow me on ${a("GitHub", "https://github.com/Sup2point0")}.`,
];

</script>


<Block width="max(42vw, 20em)" delay={500}>
  {#if displayed_route}
    {@html displayed_route}
  {/if}
</Block>
