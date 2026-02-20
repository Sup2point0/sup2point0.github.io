<!-- @component Portal

An overlay for quick navigation and commands execution.
-->

<script lang="ts">
  
import { fade, scale } from "svelte/transition";
import { expoOut } from "svelte/easing";


let input: HTMLInputElement | null = null;
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
    (e.ctrlKey || e.metaKey) && (
      e.key.toLowerCase() === "k"
      || e.key === "/"
    )
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
        input?.focus();
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
    <div class="input-container">
      <input type="search"
        bind:value={query}
        bind:this={input}
        name="portal"
        placeholder="quicknav to page, run a command, or search for secrets!"
      />
    </div>
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

  background: rgb(black, 25%);
  backdrop-filter: blur(8px);
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
  transition: all #{trans-exp()};
  
  &.live {
    transform: translateX(-50%) translateY(-50%);
  }
}

.input-container {
  width: min(36rem, 80vw);
  @include shear-card();
  transition: #{trans()};

  &::before {
    background: rgb(white, 25%);
    opacity: 0;
    transition: opacity #{trans-exp()};
  }

  &:hover, &:has(input:focus) {
    width: min(37rem, 85vw);

    &::before {
      background: rgb(white, 30%);
    }
  }

  &:has(input:active)::before {
    background: rgb(#ccc, 30%);
  }

  .portal-content.live &::before {
    opacity: 1;
  }
}

input {
  width: 100%;
  padding: 0.5rem 1rem 0.45rem;

  appearance: none;
  @include font-fun;
  font-size: 1.25rem;
  color: $col-text;
  background: none;
  border: none;
  outline: none;
  opacity: 0;
  transition: all #{trans-exp()};

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  .portal-content.live & {
    opacity: 1;
  }
}

input::placeholder {
  @include font-fun;
  font-size: 1.25rem;
  color: $col-deut;
}

</style>
