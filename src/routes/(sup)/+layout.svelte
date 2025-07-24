<script lang="ts">

import "#styles/essence.scss";

import Back from "#parts/core/back.svelte";


let { children } = $props();

let root: HTMLElement | undefined = $state();

</script>



<div id="parallax-container"
  bind:this={root}
>
  <Back {root} col="scarlet" />

  <div id="page">
    {#if children}
      {@render children()}
    {:else}
      <p class="error"> Uh, something went wrong! </p>
    {/if}
  </div>
</div>


<style lang="scss">

#parallax-container {
  min-height: 100vh;
  max-height: 100vh;
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: $col-prot black;
  scrollbar-width: thin;
}

#page {
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: center;
}

</style>
