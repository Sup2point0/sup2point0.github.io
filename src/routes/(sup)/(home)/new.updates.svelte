<!-- @component ProfileUpdates

What's new.
-->

<script lang="ts">

import { a } from "#scripts/utils";

import Cards     from "#parts/core/cards.svelte";
import FactCard  from "#src/parts/ui/card.info.svelte";
import Adventure from "#parts/special/adventure.svelte";

import { fade } from "svelte/transition";


const updates = [
  {
    title: "Making a LaTeX to Desmos compiler!",
    link: "https://github.com/Sup2point0/desmost",
    project: "desmost",
    desc: `Write LaTeX in code blocks alongside your Markdown, then compile it to a Desmos graphing calculator embed!`,
  },
  {
    title: `Now installable as a Windows app!`,
    link: `https://sup2point0.github.io/lattix`,
    project: "lattix",
    desc: `Tauri is a breeze`
  },
  {
    title: `Making a mathematical synthesiser!`,
    link: `https://sup2point0.github.io/awxynth`,
    project: "awxynth",
    desc: `It uses Desmos (!)`
  },
];

</script>


<h2 transition:fade={{ duration: 500 }}>
  <Adventure tagless={true} routes={[
    [20, `what’s popping`],
    [20, `recent updates`],
    [10, `what I’ve been working on`],
    [10, `new stuff`],
  ]} />
</h2>

<Cards>
  {#each updates as update}
    <FactCard
      text={update.title}
      capt={a(update.project, update.link)}
      capt_pos="right"
      desc={update.desc}
    />
  {/each}
</Cards>


<style lang="scss">



</style>
