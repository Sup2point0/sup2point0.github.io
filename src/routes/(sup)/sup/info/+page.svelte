<script lang="ts">

import { shuffle } from "#scripts/utils";

import Clicky       from "#parts/ui/clicky.svelte";
import FactCard     from "#parts/ui/card.fact.svelte";
import Block        from "#parts/ui/block.svelte";
import Header       from "#parts/ui/header.svelte";
import PurplePortal from "#parts/special/purple-portal.svelte";
import Adventure    from "#parts/special/adventure.svelte";

import { facts_pinned, facts, type Fact } from "./facts";
import { frequerys } from "./faq";

import { untrack } from "svelte";


const facts_shuffled = shuffle(facts);

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
  <meta name="description" content="Who is Sup#2.0? Why is Sup#2.0?" />
</svelte:head>


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
  <Header> TIDBITS </Header>

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
  <Header> FREQUERYS </Header>

  <div class="frequery-cards">
    {#each frequerys as { q: question, a: answer }, i}
      <Block kind="ui expanded" delay={i * 100}>
        <h3> {@html question} </h3>

        {#if Array.isArray(answer)}
          {#each answer as block}
            <p> {@html block} </p>
          {/each}
        {:else}
          <Adventure routes={answer} />
        {/if}
      </Block>
    {/each}
  </div>
</section>

<p class="note">
  thank you for stalking me, it’s been my pleasure ^v^
</p>


<style lang="scss">

section.profile {
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
      font-size: 90%;
      font-weight: normal;
      color: $col-text-deut;
    }

    td {
      padding: 0;
      @include font-fun;
      transform: scale(150%) translateY(0.1em);
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
  padding: 0 2rem;
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
  margin: 4rem 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .frequery-cards {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1.5rem;

    h3 {
      padding: 0.25em 0;
      margin-bottom: 0.5em;
      @include font-fun;
      font-size: 150%;
      color: $col-quat;
      font-weight: normal;
      border-bottom: 1px solid rgb(white, 10%);
    }

    :global(p) {
      font-size: 90%;
    }
  }
}

:global(section.frequerys p a) {
  @include link;
}

p.note {
  @include font-fun;
  font-size: 150%;
  color: $col-trit;
}

</style>
