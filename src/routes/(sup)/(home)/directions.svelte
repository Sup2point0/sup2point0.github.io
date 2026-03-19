<!-- @component ProfileDirections -->

<script lang="ts">

import { a, h } from "#scripts/utils";

import Block     from "#parts/ui/block.svelte";
import Adventure from "#parts/special/adventure.svelte";

</script>


<Block width="clamp(20em, 42vw, 42em)" delay={500}>
  <Adventure routes={[
    [20, `If you’re an employer interested in my software development skills and experience, head over to ${a("dev", "/sup/dev", true)} and ${a("projects", "/sup/projects", true)}, or you can see the raw stuff on ${a("GitHub", "https://github.com/Sup2point0")}.`],
  ]} />

  <Adventure routes={[
    [20, `If you’re a fellow nerd, I’m sure you’ll have no problem exploring for yourself. If you’re a stalker, you can doxx me through ${a("info", "sup/info")}, track my life on ${a("YouTube", "https://youtube.com/@SuppetySup")}, and explore my universe in ${a("Assort", "https://sup2point0.github.io/Assort")} ^v^`],

    [7, `If you’re also a programmer, you might enjoy the command line available across the site – access it with ${h("ctrl")} + ${h("/")} and speed away >:)`],
  ]} />
</Block>
