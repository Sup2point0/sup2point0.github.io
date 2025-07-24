<script lang="ts">

import sample from "@stdlib/random-sample";
  
import { facts_pinned, facts } from "./facts";
import type { Fact } from "./facts";

import Block from "#parts/ui/block.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import FactCard from "#parts/ui/card.fact.svelte";

import { untrack } from "svelte";


const facts_shuffled = sample(facts, { replace: false });
let limit = $state(12);

let facts_display: Fact[] = $state([]);

$effect(() => {
  limit;

  untrack(() => {
    facts_display = facts_pinned.concat(facts_shuffled.slice(0, limit))
  });
});

</script>


<svelte:head>
  <title> Info · Sup#2.0 </title>
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
    {#each facts_display as quirk (quirk.idx)}
      <FactCard {...quirk} />
    {/each}
  </div>

  <Clicky text="LOAD MORE" action={() => { limit += 6; }} />
</section>

<Block>
  <p id="note"> thank you for stalking me, it’s been my pleasure ^v^ </p>
</Block>


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
    padding-bottom: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
  }
}

#note {
  @include font-flavour;
  font-size: 120%;
  color: $col-deut;
  text-align: center;
}

</style>
