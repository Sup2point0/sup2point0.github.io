<!-- @component Portal

An overlay for quick navigation and commands execution.
-->

<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";

import { portal } from "#scripts/state";

import { PortalSearchFilter } from "./filters.portal.svelte";

import { fade, scale } from "svelte/transition";
import { cubicIn, cubicOut, expoOut } from "svelte/easing";


// svelte-ignore non_reactive_update
let input: HTMLInputElement;
let previously_focused: HTMLElement;

let filters = new PortalSearchFilter();
let displayed_results = $derived(filters.apply());
let displayed_buttons: HTMLButtonElement[] = $state([]);


$effect(() => {
  filters.query;
  filters.focused_idx = 0;
});


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

    if (portal.open) {
      placeholder = placeholders.sample_value()!;
    }

    requestAnimationFrame(() => {
      portal.live = state;

      if (portal.open) {
        /* @ts-ignore */
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

      if (e.ctrlKey || e.metaKey || e.altKey) {
        filters.focused_idx = displayed_results.length - 1;
      } else {
        filters.focused_idx++;
      }

      filters.update_focus(displayed_results, displayed_buttons);
      break;
    
    case "ArrowUp":
      e.preventDefault();

      if (e.ctrlKey || e.metaKey || e.altKey) {
        filters.focused_idx = 0;
      } else {
        filters.focused_idx--;
      }

      filters.update_focus(displayed_results, displayed_buttons);
      break;

    case "Enter":
      if (e.repeat) return;
      e.preventDefault();
      displayed_buttons[filters.focused_idx]?.click();
      break;

    /* Don't allow starting the query with a space to keep shortcut handling easy */
    case " ":
      if (document.activeElement === input && filters.query === "") {
        e.preventDefault();
        break;
      }
  }
}


let placeholder = $state("");

const placeholders = new FrozenWeightedList(
  [20, `explore the site!`],
  [20, `quicknav to any page!`],
  [20, `type / to use a shortcut!`],
  [1, `never gonna give you up~`],
);

</script>


<svelte:window
  onkeydown={e => {
    if    (should_deactivate(e)) { activate(false)(e); }
    else if (should_activate(e)) { activate(true)(e); }
    
    if ("abcdefghijklmnopqrstuvwxyz/".includes(e.key.toLowerCase())) {
      if (input && document.activeElement !== input) {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        
        e.preventDefault();
        input?.focus();
        input.value = input.value + e.key;
      }
    }
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
    {placeholder}
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
      class:triggered={filters.triggered_idx === i}
      bind:this={displayed_buttons[i]}
      tabindex={0}
      onkeydown={handle_hotkeys}
      onmousedown={() => {
        filters.focused_idx = i;
        requestAnimationFrame(() => input?.focus());
      }}
      onclick={e => {
        filters.trigger(i);
        if (result.action()) {
          activate(false)(e);
        }
      }}
      style:--delay="{i * 69}ms"
    >
      <div class="upper">
        <h4 style:color={result.colour}> {@html result.title} </h4>
        <p> {@html result.capt} </p>
      </div>

      {#if result.desc}
        <div class="lower">
          <p> {@html result.desc} </p>
        </div>
      {/if}
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
  min-width: min(30rem, 90vw);
  max-width: 36rem;
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
  padding: 0.25rem 1rem 0.1rem;
  @include font-fun;
  font-size: unset;
  text-align: left;
  background: none;
  border: none;
  outline: none;
  @include shear-card($interactive: true);
  transition: #{trans()};

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
      background: rgb($col-trit, 40%);
    }
  }

  &.triggered, &:active {
    transform: scale(99%);

    &::before {
      background: rgb($col-deut, 40%);
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
      max-width: 69%;
      font-size: 150%;
      font-weight: normal;
      color: transparent;
      transition: color #{trans-exp()};
      
      .portal-content.live             & { color: $col-text; }
      .portal-content.live .shortcut   & { color: $col-deut; }
      .portal-content.live .navigating & { color: $col-trit; }
      .portal-content.live .vibing     & { color: $col-quat; @include font-ui; font-size: unset; }
      .portal-content.live .warping    & { color: $col-acc; }
    }

    p {
      color: transparent;
      line-height: 100%;
      transition: color #{trans-exp()};
      
      .portal-content.live & {
        color: $col-text-deut;
      }
    }
  }

  .lower {
    p {
      margin-top: -0.5em;
      color: transparent;
      transition: color #{trans-exp()};
      
      .portal-content.live & {
        color: $col-text;
      }
    }
  }
}

</style>
