<script lang="ts">

import sample from "@stdlib/random-sample";
  
import { facts_pinned, facts } from "./facts";
import type { Fact } from "./facts";

import Block from "#parts/ui/block.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import FactCard from "#parts/ui/card.fact.svelte";
import PurplePortal from "#parts/special/portal.svelte";

import { untrack } from "svelte";
import { base } from "$app/paths";


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
  <meta name="description" content="All about Sup#2.0!" />
</svelte:head>

<table>
  <tbody>
    
  </tbody>
</table>


<section class="profile">
  <PurplePortal />

  <table><tbody>
    <tr>
      <th> USERNAME </th>
      <td>
        <span>Sup#2.0</span>
        <span class="sep">/</span>
        <span>Sup2.0</span>
        <span class="sep">/</span>
        <span>Sup2point0</span>
      </td>
    </tr>
    <tr>
      <th> PRONOUNS </th>
      <td>
        <span>he</span>
        <span class="sep">/</span>
        <span>him</span>
      </td>
    </tr>
    <tr>
      <th> LOCALE </th>
      <td> <span>Antarctica</span> </td>
    </tr>
    <tr>
      <th> TIMEZONE </th>
      <td> <span>UTC</span> </td>
    </tr>
    <tr>
      <th> LANGUAGES </th>
      <td>
        <span>English (British)</span>
        <span class="sep">/</span>
        <span>Chinese (Mandarin)</span>
      </td>
    </tr>
    <tr>
      <th> CAKE DAY </th>
      <td> <span>September</span> </td>
    </tr>
    <tr>
      <th> GENERATION </th>
      <td> <span>Gen Z</span> </td>
    </tr>
  </tbody></table>
</section>


<section class="facts">
  <div class="fact-cards">
    {#each facts_display as quirk (quirk.idx)}
      <FactCard {...quirk} />
    {/each}
  </div>

  {#if limit < facts_shuffled.length}
    <Clicky text="LOAD MORE" action={() => { limit += 6; }} />
  {/if}
</section>

<Block>
  <p id="note"> thank you for stalking me, it’s been my pleasure ^v^ </p>
</Block>


<style lang="scss">

section.profile {
  padding: 2rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  table {
    $space-col: 2em;
    $space-row: 0.8em;

    height: max-content;
    padding: 1rem 12rem 1rem 8rem;
    position: relative;
    z-index: -1;
    @include shear-card;
    transform: translateX(-7rem);

    tr {
      text-align: left;
    }

    th {
      padding: 0 $space-col 0 0;
      @include font-head;
      font-weight: normal;
      color: $col-text-deut;
    }

    td {
      padding: 0;
      @include font-flavour;
      transform: scale(150%) translateY(0.2em);
      transform-origin: left;

      span { transition: #{trans()}; }
      span:hover { color: $col-deut; }
      span.sep { color: $col-text-deut; }
    }

    th, td {
      padding-top: $space-row / 2;
      padding-bottom: $space-row / 2;
    }
  }
}

section.facts {
  max-width: 100rem;
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
