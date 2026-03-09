<!-- @component Block

A generic block containing any content. Animates in when the content to display is provided.
-->

<script lang="ts">
  
import { onMount } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  kind?: "ui" | "fun";
  width?: string;
  delay?: number;
  style?: string;
  children?: any;
}

let {
  kind = "ui",
  width = "69%",
  delay = 0,
  style,
  children
}: Props = $props();


let active = $state(false);

onMount(() => {
  setTimeout(() => {
    active = true;
  }, 50);
});

</script>


<div class="block {kind}"
  class:active
  style:width
  style:--delay="{delay}ms"
  {style}
>
  {#if active}
    <div class="content"
      transition:slide={{ duration: 1000, delay, easing: expoInOut }}
    >
      {@render children()}
    </div>
  {/if}
</div>


<style lang="scss">

.block {
  height: max-content;
  position: relative;

  @include font-fun;
  color: $col-text;
  line-height: 150%;
  @include shear-card;

  &.ui {
    padding: 1em 2em;
    @include font-ui;
    font-size: 100%;
  }

  &.fun {
    padding: 0.5em 2em;
    @include font-fun;
    font-size: 150%;
  }

  &::after {
    content: '';
    width: min(69%, 20rem);
    position: absolute;
    bottom: 0;
    left: 50%;
    border-bottom: 1px solid $col-deut;
    transform: translateX(-50%) scaleX(0);
    transition: transform 1s cubic-bezier(1, 0, 0, 1);  // ease-in-out exp
    transition-delay: calc(var(--delay, 0) + 500ms);
  }

  &.active::after {
    transform: translateX(-50%);
  }

  :global(p) {
    padding: 0.5em 0;
  }

  :global(a) {
    @include link;
  }
}

</style>
