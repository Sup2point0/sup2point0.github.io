<!-- @component `<Block>`

A generic block containing any content. Waits a small duration (for dynamic content to be provided) before animating in.
-->

<script lang="ts">
  
import { onMount, type Snippet } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  kind?: "ui" | "fun" | "ui expanded";
  width?: string;
  delay?: number;
  style?: string;
  children?: Snippet;
}

let {
  kind = "ui",
  width = "69%",
  delay = 0,
  style,
  children,
}: Props = $props();


let is_live = $state(false);

onMount(() => {
  let timeout = setTimeout(() => {
    is_live = true;
  }, 50);

  return () => clearTimeout(timeout);
})

</script>


<div class="block {kind}"
  class:live={is_live}
  style:width
  style:--delay="{delay}ms"
  {style}
>
  {#if is_live}
    <div class="content"
      transition:slide={{ duration: 1000, delay: delay + 100, easing: expoInOut }}
    >
      {@render children?.()}
    </div>
  {/if}
</div>


<style lang="scss">

.block {
  height: max-content;

  @include font-fun;
  color: $col-text;
  line-height: 150%;
  @include shear-card($mobile: true);

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

  &.expanded {
    padding: 1em 4em;

    @include mobile {
      padding: 1em;
    }
  }

  &::after {
    content: '';
    width: min(69%, 20rem);
    position: absolute;
    bottom: 0;
    left: 50%;
    border-bottom: 1px solid $col-deut;
    transform: translateX(-50%) skew(0, calc($shear-factor * 1 / 3)) scaleX(0);
    transition: transform 1s cubic-bezier(1, 0, 0, 1);  // ease-in-out exp
    transition-delay: calc(var(--delay, 0) + 500ms);
  }

  &.live::after {
    transform: translateX(-50%);

    @include mobile {
      transform: translateX(-50%) skew(0, calc($shear-factor * 1 / 3));
    }
  }

  :global(p) {
    margin-bottom: 0.5em;
    line-height: 125%;
  }

  :global(a) {
    @include link;
  }
}

</style>
