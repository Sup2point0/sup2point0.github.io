<!-- @component Adventure
 
A randomised adventure route.
-->

<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";

import { onMount } from "svelte";


interface Props {
  routes: Array<[number, string]>;
  multi?: number;
}

let { routes, multi = 0 }: Props = $props();


let displayed_route: string | null = $state(null);
let displayed_routes: string[] | null = $state(null);

onMount(() => {
  let pool = new FrozenWeightedList(...routes);

  if (multi > 0) {
    displayed_routes = pool.sample_values_unique(multi).toArray();
  } else {
    displayed_route = pool.sample_value()!;
  }
});

</script>


{#if displayed_routes}
  {#each displayed_routes as route}
    <p> {@html route} </p>
  {/each}

{:else if displayed_route}
  <p> {@html displayed_route} </p>

{/if}
