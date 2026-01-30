<!-- @component ProfileBio -->

<script>

import { a, i } from "#scripts/utils";

import Block from "#parts/ui/block.svelte";

import { onMount } from "svelte";


let displayed_route = $state("");

onMount(() => {
  displayed_route = (all_routes
    .map(routes => routes[Math.floor(Math.random() * routes.length)])
    .join(`\n<div style="height: 0.69em"></div>\n`)
  );
});

const all_routes = [
  [
    // TODO
    // `encapsulating the essence of who I am in a short bio is hopelessly nontrivial, so to simulate the superposition of multiple isotopes of this introduction, you can view alternative renditions by clicking [RECONSTRUCT].`,
    
    `I’m a creator, developer, musician, and nerd. I love reading, writing, worldbuilding and words. I dream of maths and chemistry after dark, but computer science is the one that’s stolen my heart.`,
    
    `thanks for stopping by. I’m just another dreamer making cool stuff. You can explore some of what I do here, or pop over to my personal wiki, ${a(i("Assort"), "https://sup2point0.github.io/Assort")}. Enjoy!`,
  ],
  [
    `I’m currently in the process of renovating this site, so please bear with me while some stuff remains broken or unfinished!`,
    
    `I hope your day’s going well. Mine usually is, if I’d had my daily dose of integration, piano and/or programming memes.`,
    
    `Have fun exploring the site ;)`,
    
    `How many of these do you think there are?`,
    
    `woah, this is a rare bio. Looks like you just expended a cut of your lifetime RNG!`,
  ],
];

</script>


<Block width="clamp(20em, 42vw, 42em)">
  sup, I’m Sup o/

  <div style:height="0.69em"></div>

  {#if displayed_route}
    {@html displayed_route}
  {/if}
</Block>
