<script lang="ts">

import "#styles/essence.scss";

import { nav, save_visited } from "#scripts/stores";
import { client_live } from "#scripts/state";

import Back   from "#parts/core/back.svelte";
import Portal from "#parts/portal/portal.svelte";

import { onMount } from "svelte";
import { page } from "$app/state";
import { onNavigate } from "$app/navigation";


let { children } = $props();


onMount(client_live);
onMount(() => {
  $nav.visits++;
  save_visited(page.url.pathname);
});

onNavigate(navigation => {
	if (!document.startViewTransition) return;

	return new Promise(resolve => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
      window?.scrollTo(0, 0);
      save_visited(page.url.pathname);
		});
	});
});

</script>


<Back />

<div id="page">
  {#if children}
    {@render children()}
  {:else}
    <p class="error"> Uh, something went wrong! </p>
  {/if}
</div>

<Portal />


<style lang="scss">

#page {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

</style>
