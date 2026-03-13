<!-- @component ProfileBio -->

<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";

import { a, i } from "#scripts/utils";

import Block from "#parts/ui/block.svelte";

import { onMount } from "svelte";


let displayed_routes: Array<string | undefined> = $state([]);

onMount(() => {
  displayed_routes = all_routes.map(routes => routes.sample_value());
});

const all_routes =
[
  new FrozenWeightedList(
    // TODO
    // `encapsulating the essence of who I am in a short bio is hopelessly nontrivial, so to simulate the superposition of multiple isotopes of this introduction, you can view alternative renditions by clicking [RECONSTRUCT].`,
    
    [20, `I’m a creator, developer, musician, and nerd. I love reading, writing, worldbuilding and words. I dream of maths and chemistry after dark, but computer science is the one that’s stolen my heart.`],

    [20, `thanks for stopping by. I’m just another dreamer making cool stuff. You can explore some of what I do here, or pop over to my personal wiki, ${a(i("Assort"), "https://sup2point0.github.io/Assort")}. Enjoy!`],
  ),

  new FrozenWeightedList(
    [42, `I’m currently in the process of renovating this site, so please bear with me while some stuff remains broken or unfinished!`],

    [20, `I hope your day’s going well. Mine usually is, if I’d had my daily dose of integration, piano and/or programming memes.`],

    [20, `Have fun exploring the site ;)`],

    [4,  `How many of these do you think there are?`],

    [1,  `woah, this is a rare bio. Looks like you just expended a cut of your lifetime RNG!`],
  )
];

</script>


<Block width="clamp(20em, 42vw, 42em)">
  sup, I’m Sup o/

  {#each displayed_routes as route}
    {#if route}
      <div style:height="0.69em"></div>
      {@html route}
    {/if}
  {/each}
</Block>
