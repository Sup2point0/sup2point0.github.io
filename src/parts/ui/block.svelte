<!-- @component Block

-->

<script lang="ts">
  
import { onMount } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  kind?: "ui" | "fun";
  width?: string;
  delay?: number;
  children?: any;
}

let { kind = "ui", width = "69%", delay = 0, children }: Props = $props();


let active = $state(false);

onMount(() => {
  setTimeout(() => {
    active = true;
  }, 50);
});

</script>


<div class="block {kind}"
  style:width
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
  padding: 1em 2em;
  position: relative;

  @include font-fun;
  color: $col-text;
  text-align: center;
  line-height: 150%;
  @include shear-card;

  &.ui {
    @include font-ui;
    font-size: 100%;
  }

  &.fun {
    @include font-fun;
    font-size: 120%;
  }

  &::after {
    content: '';
    width: min(69%, 20rem);
    position: absolute;
    bottom: 0;
    left: 50%;
    border-bottom: 1px solid $col-deut;
    transform: translateX(-50%);
  }
}

</style>
