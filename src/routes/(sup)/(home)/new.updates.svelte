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
    title: `ASSORT IS RENOVATED`,
    link: "https://sup2point0.github.io/Assort",
    project: "Assort",
    desc: `finally bit the bullet, Assort has a fresh new redesign and now uses Squarkdown 4.0!`,
  },
  {
    title: `we reached 321 integrals!`,
    link: "https://sup2point0.github.io/integrity/questions/integrals",
    project: "Integrity",
    desc: `next milestone is 360 which I doubt I’m ever reaching at my current activity`,
  },
  {
    title: `Rewrote in Rust`,
    link: "https://github.com/Sup2point0/stranger-quarkdown/tree/rust-rewrite",
    project: "Squarkdown",
    desc: `lol I know`,
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
