<script>

import Nav from "#parts/core/nav.svelte";
import Footer from "#parts/core/footer.svelte";

let { children } = $props();

</script>


<Nav />

{#if children}
  {@render children()}
{:else}
  <p class="error"> Uh, something went wrong! </p>
{/if}

<Footer />
