<!-- @component ProfileUpdates

What's new.
-->

<script lang="ts">

import Block from "#parts/ui/block.svelte";
import Adventure from "#parts/special/adventure.svelte";

import { fade } from "svelte/transition";


const updates = [
  {
    title: `Preferences are now saved locally (finally!)`,
    link: `https://sup2point0.github.io/lattix`,
    domain: "lattix",
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

<div class="cards">
  {#each updates as update}
    <Block kind="ui expanded">
      <div class="upper">
        <h3> {@html update.title} </h3>

        <a href={update.link} target="_blank"> {update.domain} </a>
      </div>

      {#each update.desc ?? [] as block}
        <p> {@html block} </p>
      {/each}
    </Block>
  {/each}
</div>


<style lang="scss">

h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-transform: uppercase;
}

.cards {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1.5rem;

  .upper {
    padding: 0.25rem 0;
    margin-bottom: 0.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    @include font-fun;
    font-size: 150%;
    border-bottom: 1px solid rgb(white, 10%);

    h3 {
      font-size: 100%;
      font-weight: normal;
    }
  }
}

</style>
