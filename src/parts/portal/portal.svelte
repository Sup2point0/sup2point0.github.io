<!-- @component Portal

An overlay for quick navigation and commands execution.
-->

<script lang="ts">

import { portal } from "#scripts/state";

import { fade, scale } from "svelte/transition";
import { cubicIn, cubicOut, expoOut } from "svelte/easing";


// svelte-ignore non_reactive_update
let previously_focused: HTMLElement;

let displayed_results = $derived(portal.filters.apply());
let displayed_buttons: HTMLButtonElement[] = $state([]);


$effect(() => {
  portal.filters.query;
  portal.filters.focused_idx = 0;
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


function handle_hotkeys(e: KeyboardEvent)
{
  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();

      if (e.ctrlKey || e.metaKey || e.altKey) {
        portal.filters.focused_idx = displayed_results.length - 1;
      } else {
        portal.filters.focused_idx++;
      }

      portal.filters.update_focus(displayed_results, displayed_buttons);
      break;
    
    case "ArrowUp":
      e.preventDefault();

      if (e.ctrlKey || e.metaKey || e.altKey) {
        portal.filters.focused_idx = 0;
      } else {
        portal.filters.focused_idx--;
      }

      portal.filters.update_focus(displayed_results, displayed_buttons);
      break;

    case "Enter":
      if (e.repeat) return;
      e.preventDefault();
      displayed_buttons[portal.filters.focused_idx]?.click();
      break;

    /* Don't allow starting the query with a space to keep shortcut handling easy */
    case " ":
      if (document.activeElement === portal.input && portal.filters.query === "") {
        e.preventDefault();
        break;
      }

    default:
      portal.filters.focused_idx = 0;
      portal.filters.update_focus(displayed_results, displayed_buttons);
  }
}

</script>


<svelte:window
  onkeydown={e => {
    if    (should_deactivate(e)) { portal.set_state(false)(e); }
    else if (should_activate(e)) { portal.set_state(true)(e); }
    
    if ("abcdefghijklmnopqrstuvwxyz/".includes(e.key.toLowerCase())) {
      if (portal.input && document.activeElement !== portal.input) {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        
        e.preventDefault();
        portal.input?.focus();
        portal.input.value = portal.input.value + e.key;
      }
    }
  }}
/>


{#if portal.open}
  {@const has_icons = displayed_results.some(res => res.icon)}

  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="portal-overlay"
    onclick={portal.set_state(false)}
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
      placeholder={portal.placeholder}
      autocomplete="off"
      bind:value={portal.filters.query}
      bind:this={portal.input}
      onkeydown={handle_hotkeys}
    />
  </div>

  <div class="results {portal.filters.shortcut.title.toLowerCase()}">
    {#each displayed_results as result, i (result.title + result.capt)}

      <button class="result"
        class:live={portal.live}
        class:focused={portal.filters.focused_idx === i}
        class:triggered={portal.filters.triggered_idx === i}
        bind:this={displayed_buttons[i]}
        tabindex={0}
        onkeydown={handle_hotkeys}
        onmousedown={() => {
          portal.filters.focused_idx = i;
          requestAnimationFrame(() => portal.input?.focus());
        }}
        onclick={e => {
          portal.filters.trigger(i);
          if (result.action()) {
            portal.set_state(false)(e);
          }
        }}
        style:--delay="{i * 69}ms"
      >
        {#if has_icons}
          <div class="icon">
            <img alt="" src={result.icon} />
          </div>
        {/if}

        <div class="info">
          <h4 style:color={result.colour}> {@html result.title} </h4>

          {#if result.desc}
            <p> {@html result.desc} </p>
          {/if}
        </div>

        <div class="capt">
          <p> {@html result.capt} </p>
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
  padding: 0.2rem 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
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
  width: 100%;
  .icon {
    flex-grow: 0;
    height: 2em;

    img {
      max-height: 2em;
      aspect-ratio: 1;
    }
  }

  .info {
    flex-grow: 1;

    h4 {
      max-width: 69%;
      font-size: 150%;
      font-weight: normal;
      color: transparent;
      text-shadow: 0 1px 3px rgb(black, 50%);
      transition: color #{trans-exp()};
      
      .portal-content.live            & { color: $col-text; }
      .portal-content.live .shortcuts & { color: $col-deut; }
      .portal-content.live .navigate  & { color: $col-trit; }
      .portal-content.live .warp      & { color: $col-acc; }
      .portal-content.live .music     & { color: $col-quat; @include font-ui; font-size: unset; }
      .portal-content.live .project   & { color: $col-quat; }
    }

    p {
      margin-top: -0.25em;
      color: transparent;
      line-height: 100%;
      transition: color #{trans-exp()};
      
      .portal-content.live & {
        color: $col-text;
      }
    }
  }

  .capt {
    min-width: max-content;
    justify-self: right;

    p {
      color: transparent;
      line-height: 100%;
      transition: color #{trans-exp()};
      
      .portal-content.live & {
        color: $col-text-deut;
      }
    }
  }
}

</style>
