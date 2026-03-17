<!-- @component ProfileBio -->

<script lang="ts">

import { a, i } from "#scripts/utils";

import Block     from "#parts/ui/block.svelte";
import Adventure from "#parts/special/adventure.svelte";

</script>


<Block width="clamp(20em, 42vw, 42em)">
  <p> sup, I’m Sup o/ </p>

  <Adventure routes={[
    [20, `I’m a creator, developer, musician, and nerd. I love reading, writing, worldbuilding and words. I dream of maths and chemistry after dark, but computer science is the one that’s stolen my heart.`],

    [20, `thanks for stopping by. I’m just another dreamer making cool stuff. You can explore some of what I do here, or pop over to my personal wiki, ${a(i("Assort"), "https://sup2point0.github.io/Assort")}. Enjoy!`],

    [2, `encapsulating the essence of who I am in a short bio is hopelessly nontrivial, so to simulate the superposition of nonzero isotopes of this introduction, uh... try reloading the page. cya!`],
  ]} />

  <Adventure routes={[
    [20, `I hope your day’s going well. Mine usually is, if I’d had my daily dose of integration, piano and/or programming memes.`],

    [20, `Have fun exploring the site ;)`],

    [2,  `How many of these do you think there are?`],

    [1,  `woah, this is a rare bio. Looks like you just expended a cut of your lifetime RNG!`],
  ]} />
</Block>
