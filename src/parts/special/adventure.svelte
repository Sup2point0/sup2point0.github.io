<!-- @component Adventure
 
A randomised adventure route.
-->

<script lang="ts">

import { FrozenWeightedList, type LikeWeightedItem } from "@sup2.0/weighted-list";

import type { Description } from "#scripts/types";

import { onMount } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  routes: LikeWeightedItem<Description>[] | FrozenWeightedList<Description>;
  multi?: number;
  tagless?: boolean;
}

let {
  routes,
  multi = 0,
  tagless = false,
}: Props = $props();


let displayed_route: Description | null = $state(null);
let displayed_routes: Description[] | null = $state(null);

onMount(() => {
  let pool = Array.isArray(routes) ? new FrozenWeightedList(...routes) : routes;

  if (multi > 0) {
    displayed_routes = pool.sample_values_unique(multi).toArray();
  } else {
    displayed_route = pool.sample_value()!;
  }
});

</script>


{#snippet p(text)}
  {#if tagless}
    {@html text}
  {:else}
    <p> {@html text} </p>
  {/if}
{/snippet}

{#snippet parts(blocks)}
  {#if Array.isArray(blocks)}
    {#each blocks as block}
      {@render p(block)}
    {/each}
  {:else}
    {@render p(blocks)}
  {/if}
{/snippet}


{#if displayed_routes}
  <span transition:slide={{ duration: 800, easing: expoInOut }}>
    {#each displayed_routes as route}
      {@render parts(route)}
    {/each}
  </span>

{:else if displayed_route}
  <span transition:slide={{ duration: 800, easing: expoInOut }}>
    {@render parts(displayed_route)}
  </span>

{/if}
