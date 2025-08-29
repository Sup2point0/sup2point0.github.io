<!-- @component Clicky

A button.
-->

<script lang="ts">

import { base } from "$app/paths";

interface Props {
  text?: string;
  intern?: string;
  action?: () => void;
  children?: any;
}

let { text, intern, action, children }: Props = $props();

</script>


{#snippet content()}
  {#if children}
    {@render children()}
  {:else}
    {@html text}
  {/if}
{/snippet}


{#if intern}
  <a class="clicky"
    href="{base}/{intern}"
  >
    {@render content()}
  </a>

{:else}
  <button class="clicky"
    onclick={action}
  >
    {@render content()}
  </button>

{/if}


<style lang="scss">

@use 'sass:color';

.clicky {
  $border-width: 4px;
  
  padding: 0.5em 1.5em 0.5em calc(2em - $border-width);
  position: relative;

  @include font-head;
  color: $col-prot;
  font-size: 100%;
  text-decoration: none;
  background: none;
  border: none;
  transition: #{trans()};
  @include shear-card;

  &::before {
    border-left: $border-width solid $col-prot;
  }
}

.clicky:hover {
  cursor: pointer;
  color: $col-deut;

  &::before {
    $hover-expansion: 0.4em;

    padding: 0 $hover-expansion;
    left: -$hover-expansion;
    background: $col-card-hover;
    border-color: $col-deut;
  }
}

.clicky:active {
  color: $col-trit;

  &::before {
    border-color: $col-trit;
  }
}

</style>
