<script lang="ts">
  
import { facts_pinned, facts } from "./facts";
import type { Fact } from "./facts";

import FactCard from "#parts/ui/card.fact.svelte";
import Block from "#parts/ui/block.svelte";
  
import { onMount } from "svelte";


let facts_display: Fact[] = $state([]);
let apex = $state(20);

let load_button: HTMLElement;

/** Load more facts to be displayed. Returns `false` if all facts have been used, otherwise returns `true`. */
function load_facts()
{
  if (apex == facts.length) {
    return false;
  }

  apex += 4;
  if (apex > facts.length) {
    apex = facts.length;
    return false;
  }

  return true;
}

onMount(() => {
  let facts_shuffled = facts.sort(() => Math.random() - 0.5);
  facts_display = facts_pinned.concat(facts_shuffled);

  if ("IntersectionObserver" in window) {
    load_button.style.visibility = "none";
  } else {
    let loader = new IntersectionObserver(load_facts, {
      root: load_button,
    });
  }
});

</script>


<svelte:head>
  <title> info · Sup#2.0 </title>
  <meta name="description" content="All about me!" />
</svelte:head>

<table>
  <tbody>
    <tr>
      <th> username </th>
      <td> Sup#2.0 / Sup2.0 / Sup2point0 </td>
    </tr>
    <tr>
      <th> pronouns </th>
      <td> he / him </td>
    </tr>
    <tr>
      <th> locale </th>
      <td> Antarctica </td>
    </tr>
    <tr>
      <th> timezone </th>
      <td> UTC </td>
    </tr>
    <tr>
      <th> language </th>
      <td> English (British) / Chinese (Mandarin) </td>
    </tr>
    <tr>
      <th> cake day </th>
      <td> September </td>
    </tr>
    <tr>
      <th> generation </th>
      <td> Z </td>
    </tr>
  </tbody>
</table>


<section class="facts">
  <div class="fact-cards">
    {#each facts_display as quirk}
      <FactCard {...quirk} />
    {/each}
  </div>

  <button id="load-more"
    onclick={load_facts}
    bind:this={load_button}
  >
    LOAD MORE
  </button>
</section>

<Block>
  <p id="note"> thank you for stalking me, it’s been my pleasure ^v^ </p>
</Block>

<div class="block">
  <p> thank you for stalking me, it’s been my pleasure ^v^ </p>
</div>


<style lang="scss">

table {

}

tr {
  text-align: left;
}

th {
  padding: 0.5em 2rem 0.5em 0.5em;
  @include font-ui;
  font-weight: normal;
  color: rgb(white, 60%);
}

section.facts {
  padding: 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;

  .fact-cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
    // padding: 2rem;
  }
}

#note {
  @include font-flavour;
  font-size: 120%;
  color: $col-deut;
  text-align: center;
}

.block {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding: 0.5em 1em;
    @include font-flavour;
    text-align: center;
    background-color: $col-card;
    border-radius: 1em;
    transition: all 0.2s ease-out;

    &:hover {
      cursor: default;
      background-color: $col-card-hover;
      transform: scale(1.04);
    }
  }
}

</style>
