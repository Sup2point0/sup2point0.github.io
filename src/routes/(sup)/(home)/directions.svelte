<!-- @component ProfileDirections -->

<script>

import { a } from "#scripts/utils";

import Block from "#parts/ui/block.svelte";

import { onMount } from "svelte";


let displayed_route = $state("");

onMount(() => {
  displayed_route = all_routes
    .map(routes => routes[Math.floor(Math.random() * routes.length)])
    .join(`\n<div style="height: 0.69em"></div>\n`)
});

const all_routes = [
  [
    `If you’re an employer interested in my software development skills and experience, head over to ${a("dev", "/sup/dev", true)} and ${a("projects", "/sup/projects", true)}, or you can see the raw stuff on ${a("GitHub", "https://github.com/Sup2point0")}.`,
  ],
  [
    `If you’re a fellow nerd, I’m sure you’ll have no problem exploring for yourself. If you’re a stalker, you can doxx me through ${a("info", "sup/info")}, track my life on ${a("YouTube", "https://youtube.com/@SuppetySup")}, and explore my universe in ${a("Assort", "https://sup2point0.github.io/Assort")} ;)`,
  ],
];

</script>


<Block width="clamp(20em, 42vw, 42em)" delay={500}>
  {#if displayed_route}
    {@html displayed_route}
  {/if}
</Block>
