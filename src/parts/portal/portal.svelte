<!-- @component Portal

An overlay for quick navigation and commands execution.
-->

<script lang="ts">

import { portal } from "#scripts/state";

import { PortalSearchFilter, type PortalSearchResult } from "./filter.portal.svelte";

import { fade, scale } from "svelte/transition";
import { cubicIn, cubicOut, expoOut } from "svelte/easing";


let input: HTMLInputElement;
let previously_focused: HTMLElement;

let filters = new PortalSearchFilter();
let displayed_results = $derived(filters.apply() as PortalSearchResult[]);


function should_deactivate(e: KeyboardEvent): boolean
{
  if (!portal.open) return false;

  return (
    e.key === "Escape"
  );
}

function should_activate(e: KeyboardEvent): boolean
{
  if (portal.open) return false;

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
    e.preventDefault();
    portal.open = state;
    filters.focused_idx = 0;

    requestAnimationFrame(() => {
      portal.live = state;

      if (portal.open) {
        previously_focused = document.activeElement;
        input?.focus();
      } else {
        previously_focused?.focus();
      }
    });
  }
}


function handle_hotkeys(e: KeyboardEvent)
{
  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      if (e.ctrlKey || e.modKey || e.altKey) {
        filters.focused_idx = displayed_results.length - 1;
      } else {
        filters.focused_idx++;
      }
      filters.update_focus(displayed_results);
      break;
    
    case "ArrowUp":
      e.preventDefault();
      if (e.ctrlKey || e.modKey || e.altKey) {
        filters.focused_idx = 0;
      } else {
        filters.focused_idx--;
      }
      filters.update_focus(displayed_results);
      break;
  }
}

</script>


<svelte:window
  onkeydown={e => {
    if    (should_deactivate(e)) { activate(false)(e); }
    else if (should_activate(e)) { activate(true)(e); }
  }}
/>


{#if portal.open}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="portal-overlay"
    onclick={activate(false)}
    in:fade={{ duration: 400, easing: cubicOut }}
    out:fade={{ duration: 400, easing: cubicIn }}
  ></div>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="portal-content"
  class:live={portal.live}
  onclick={e => e.stopPropagation()}
  out:scale={{ start: 0.9, duration: 400, easing: expoOut }}
>
<div class="input-container">
  <input type="search"
    name="portal"
    placeholder="quicknav to page, run a command, or hunt for secrets!"
    bind:value={filters.query}
    bind:this={input}
    onkeydown={handle_hotkeys}
  />
</div>

<div class="results {filters.mode}">
  {#each displayed_results as result, i (result.title + result.capt)}
    <button class="result"
      class:live={portal.live}
      class:focused={filters.focused_idx === i}
      bind:this={displayed_results[i].element}
      tabindex={0}
      onkeydown={handle_hotkeys}
      onmousedown={() => { filters.focused_idx = i; }}
      onclick={e => {
        if (result.action()) {
          activate(false)(e);
        }
      }}
      style:--delay="{i * 69}ms"
    >
      <div class="upper">
        <h4> {result.title} </h4>
        <p> {result.capt} </p>
      </div>

      <div class="lower">
        <p> {result.desc} </p>
      </div>
    </button>
  {/each}
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

  background: rgb(black, 40%);
  backdrop-filter: blur(8px);
}

.portal-content {
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 2rem;

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


.results {
  list-style: none;
  min-width: min(30em, 90vw);
  max-width: max-content;
  max-height: 50vh;
  padding: 0 1rem;
  overflow-y: auto;
  scrollbar-width: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  gap: 0.5rem;
  transition: #{trans()};
}

button.result {
  scroll-margin: 20vh;
  padding: 0.25rem 1rem;
  @include font-fun;
  font-size: unset;
  text-align: left;
  background: none;
  border: none;
  outline: none;
  @include shear-card($interactive: true);

  &::before {
    background: rgb(white, 25%);
    opacity: 0;
    transition: opacity #{trans-exp()}, background 0.12s ease-out;
  }

  .portal-content.live &::before {
    opacity: 1;
  }
  
  /* NOTE: We handle focusing purely programmatically, this counteracts the :focus CSS from `shear-card($interactive: true) */
  &:focus::before {
    background: rgb(white, 25%);
  }

  &.focused, &:hover {
    &::before {
      background: rgb(#ddd, 50%);
    }
  }
}

.result {
  .upper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: baseline;

    h4 {
      margin-bottom: -0.25em;
      font-size: 150%;
      font-weight: normal;
      color: transparent;
      transition: color #{trans-exp()};
      
      .portal-content.live .shortcut   & { color: $col-deut; }
      .portal-content.live .navigating & { color: $col-trit; }
    }

    p {
      color: transparent;
      transition: color #{trans-exp()};
      
      .portal-content.live & {
        color: $col-text-deut;
      }
    }
  }

  .lower {
    p {
      color: transparent;
      transition: color #{trans-exp()};
      
      .portal-content.live & {
        color: $col-text;
      }
    }
  }
}

</style>
