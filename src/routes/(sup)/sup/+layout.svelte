<script>

import { Footer, Nav } from "#parts/core";

let { children } = $props();

</script>


<Nav />

{#if children}
  {@render children()}
{:else}
  <p class="error"> Uh, something went wrong! </p>
{/if}

<Footer />
