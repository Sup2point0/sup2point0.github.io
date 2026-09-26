<!-- @component `<ProfileUpdates>`

What's new.
-->

<script lang="ts">

import { a } from "#scripts/utils";

import { Cards } from "#parts/core";
import { InfoCard as FactCard } from "#parts/ui";
import { Adventure } from "#parts/special";

import { fade } from "svelte/transition";


const updates = [
  {
    title: `Rewriting in Rust...`,
    link: "https://github.com/Sup2point0/stranger-quarkdown/tree/rust-rewrite",
    project: "Squarkdown",
    desc: `I’m sorry, little one.`,
  },
  {
    title: `Better mobile support!`,
    link: "https://sup2point0.github.io",
    project: "sup2point0.github.io",
    desc: `The site has always looked a little cursed on mobile, but now it should be less so.`,
  },
  {
    title: `Making a LaTeX to Desmos compiler!`,
    link: "https://github.com/Sup2point0/desmost",
    project: "desmost",
    desc: `Write LaTeX in code blocks alongside your Markdown, then compile it to a Desmos graphing calculator embed!`,
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
