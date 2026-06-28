<!-- @component `Header`
 
An `<h2>`-level header.
-->

<script lang="ts">

interface Props {
  text?: string;
  margin?: boolean;
  children?: any;
}

let { text, margin = true, children }: Props = $props();

</script>


<h2 style:margin-bottom={margin ? "2rem" : undefined}>
  {#if children}
    {@render children()}
  {:else}
    {@html text ?? "–––"}
  {/if}
</h2>


<style lang="scss">

h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-align: center;
}

</style>
