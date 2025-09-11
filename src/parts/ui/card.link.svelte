<!-- @component LinkCard

A card that links to another page.
-->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  intern: string;
  text?: string;
  children?: any;
}

let { intern, text, children }: Props = $props();

</script>


<a href="{base}/{intern}">
  {#if text}
    <h3> {@html text.toUpperCase()} </h3>
  {/if}

  {@render children?.()}
</a>


<style lang="scss">

a {
  min-width: 12em;
  min-height: 8em;
  aspect-ratio: 3 / 2;
  padding: 1rem;
  @include shear-card;
  color: $col-text;
  text-decoration: none;

  &:hover, &:active, &:focus-visible {
    &::before {
      background: $col-card-hover;
      border-radius: 0.6em;
      transform: skew(calc($shear-factor * 2 / 3));
      @include focus-glow;
    }
  }
}

h3 {
  @include font-tech;
  font-weight: normal;
}

</style>
