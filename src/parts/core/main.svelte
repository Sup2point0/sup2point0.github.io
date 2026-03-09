<!-- @component Main

A width-restricting container.
-->

<script lang="ts">

interface Props {
  gap?: string;
  children?: any;
}

let { gap = "4rem", children }: Props = $props();

</script>


<main style:gap>
  {#if children}
    {@render children()}
  {:else}
    <p class="error"> Uh, something went wrong! </p>
  {/if}
</main>


<style lang="scss">

main {
  max-width: min(100vw, 120rem);
  padding: 0 4rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

@media (max-width: $width-shrink) {
  main {
    padding: 0 2rem;
  }
}

</style>
