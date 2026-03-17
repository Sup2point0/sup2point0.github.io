<!-- @component Adventure
 
A randomised adventure route.
-->

<script lang="ts">

import { FrozenWeightedList, type LikeWeightedItem } from "@sup2.0/weighted-list";

import type { Description } from "#scripts/types";

import { onMount } from "svelte";


interface Props {
  routes: LikeWeightedItem<Description>[] | FrozenWeightedList<Description>;
  multi?: number;
}

let { routes, multi = 0 }: Props = $props();


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


{#snippet p(blocks)}
  {#if Array.isArray(blocks)}
    {#each blocks as route}
      <p> {@html route} </p>
    {/each}
  {:else}
    <p> {@html blocks} </p>
  {/if}
{/snippet}


{#if displayed_routes}
  {#each displayed_routes as route}
    {@render p(route)}
  {/each}

{:else if displayed_route}
  {@render p(displayed_route)}

{/if}
