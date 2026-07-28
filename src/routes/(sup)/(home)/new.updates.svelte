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
    title: `Making a mathematical synthesiser!`,
    link: `https://sup2point0.github.io/awxynth`,
    domain: "awxynth",
    desc: `It uses Desmos (!)`
  },
  {
    title: `Preferences are saved locally!`,
    link: `https://sup2point0.github.io/lattix`,
    domain: "lattix",
    desc: `(finally!) took me long enough lol`
  },
  {
    title: `Music player supports drag to seek!`,
    link: `https://sup2point0.github.io`,
    domain: `sup2point0.github.io`,
    desc: `Head to ${a("music/create", "/sup/music/create", true)}, play any track of mine, and drag the playhead to move around playback`
  },
];

</script>


<h2 transition:fade={{ duration: 500 }}>
  <Adventure tagless={true} routes={[
    [20, `what’s popping`],
    [20, `recent updates`],
    [10, `what I’ve been working on`],
  ]} />
</h2>

<Cards>
  {#each updates as update}
    <FactCard
      text={update.title}
      capt={a(update.domain, update.link)}
      capt_pos="right"
      desc={update.desc}
    />
  {/each}
</Cards>


<style lang="scss">



</style>
