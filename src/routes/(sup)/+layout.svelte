<script lang="ts">

import "#styles/essence.scss";

import Back   from "#parts/core/back.svelte";
import Portal from "#parts/special/portal.svelte";

import { onNavigate } from "$app/navigation";


let { children } = $props();


onNavigate(navigation => {
	if (!document.startViewTransition) return;

	return new Promise(resolve => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
      window?.scrollTo(0, 0);
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
