<!-- @component Portal

An overlay for quick navigation and commands execution.
-->

<script lang="ts">
  
import SearchInput from "#parts/ui/search-input.svelte";

import { fade, scale } from "svelte/transition";
import { expoOut } from "svelte/easing";


let search_input: HTMLInputElement | null = null;
let previously_focused: HTMLElement | null = null;

let live  = $state(false);
let anim  = $state(false);
let query = $state("");


function should_deactivate(e: KeyboardEvent): boolean
{
  if (!live) return false;

  return (
    e.key === "Escape"
  );
}

function should_activate(e: KeyboardEvent): boolean
{
  if (live) return false;

  return (
    e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey)
  );
}

function activate(state: boolean): (e: Event) => void
{
  return e => {
    live = state;
    e.preventDefault();

    requestAnimationFrame(() => {
      anim = state;

      if (live) {
        previously_focused = document.activeElement;
        search_input?.focus();
      } else {
        previously_focused?.focus();
      }
    });
  }
}

</script>


<svelte:window
  onkeydown={e => {
    if (should_deactivate(e)) {
      activate(false)(e);
    }
    else if (should_activate(e)) {
      activate(true)(e);
    }
  }}
/>


{#if live}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="portal-overlay"
    onclick={activate(false)}
    transition:fade={{ duration: 250 }}
  ></div>

  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="portal-content"
    class:live={anim}
    onclick={e => e.stopPropagation()}
    out:scale={{ start: 0.9, duration: 500, easing: expoOut }}
  >
    <!-- in:scale={{ start: 0.85, duration: 700, easing: expoOut }}
    out:fade={{ duration: 300 }} -->
    <SearchInput bind:input={search_input} bind:query />
  </div>
{/if}


<style lang="scss">

.portal-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  background: rgb(black, 20%);
  backdrop-filter: blur(4px);
}

.portal-content {
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;

  --delay: 0.1s;
  transform: translateX(-50%) translateY(-50%) scale(85%);
  opacity: 0;
  transition: all #{trans-exp()};
  
  &.live {
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
  }
}

</style>
