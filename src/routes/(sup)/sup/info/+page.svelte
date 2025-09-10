<script lang="ts">

import sample from "@stdlib/random-sample";
  
import { facts_pinned, facts } from "./facts";
import type { Fact } from "./facts";
import { frequerys } from "./faq";

import Clicky from "#parts/ui/clicky.svelte";
import FactCard from "#parts/ui/card.fact.svelte";
import PurplePortal from "#parts/special/portal.svelte";

import { untrack } from "svelte";


const facts_shuffled = sample(facts, { replace: false });
let limit = $state(12);

let facts_display: Fact[] = $state([]);


$effect(() => {
  limit;

  untrack(() => {
    facts_display = facts_pinned.concat(facts_shuffled.slice(0, limit));
  });
});

</script>


<svelte:head>
  <title> Info × Sup#2.0 </title>
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
  <h2> TIDBITS </h2>

  <div class="fact-cards">
    {#each facts_display as quirk (quirk.idx)}
      <FactCard {...quirk} />
    {/each}
  </div>

  {#if limit < facts_shuffled.length}
    <Clicky text="LOAD MORE" action={() => { limit += 6; }} />
  {/if}
</section>

<section class="frequerys">
  <h2> FREQUERYS </h2>

  <div class="frequery-cards">
    {#each frequerys as { q: question, a: answer }}
      <div>
        <h3> {@html question} </h3>
        {#if Array.isArray(answer)}
          {#each answer as block}
            <p> {@html block} </p>
          {/each}
        {:else}
          <p> {@html answer} </p>
        {/if}
      </div>
    {/each}
  </div>
</section>

<div class="note">
  <p> thank you for stalking me, it’s been my pleasure ^v^ </p>
</div>


<style lang="scss">

section {
  max-width: 100rem;
  margin: 1rem 0;

  h2 {
    margin-bottom: 1em;
    @include font-tech;
    font-weight: normal;
    font-size: 200%;
  }
}

section.profile {
  margin: 0;
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
      @include font-tech;
      font-weight: normal;
      color: $col-text-deut;
    }

    td {
      padding: 0;
      @include font-fun;
      transform: scale(150%) translateY(0.2em);
      transform-origin: left;

      span { transition: #{trans()}; }
      span:hover { color: $col-deut; }
      span.sep { color: $col-text-deut; }
    }

    th, td {
      padding-top: calc($space-row / 2);
      padding-bottom: calc($space-row / 2);
    }
  }
}

section.facts {
  padding: 2rem;
  margin-top: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .fact-cards {
    padding-bottom: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
  }
}

section.frequerys {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .frequery-cards {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;

    div {
      width: max(42em, 69%);
      padding: 1em 2em;
      @include shear-card;

      h3 {
        padding-bottom: 0.25em;
        @include font-fun;
        font-size: 150%;
        color: $col-trit;
        font-weight: normal;
      }

      p {
        margin: 0.5em 0;
        @include font-ui;
        font-size: 90%;
        line-height: 150%;
      }
    }
  }
}

:global(section.frequerys p a) {
  @include link;
}

.note {
  margin-top: 3rem;
  padding: 0.5em 1em;
  @include font-fun;
  font-size: 120%;
  color: $col-deut;
  text-align: center;
  @include shear-card;
}

</style>
