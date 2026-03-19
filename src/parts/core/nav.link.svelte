<script lang="ts">

import { nav } from "#scripts/stores";
import { status } from "#scripts/state";

import { scale } from "svelte/transition";
import { expoOut } from "svelte/easing";
import { page } from "$app/state";
import { browser } from "$app/environment";


interface Props {
  text: string;
  link: string;
  dead?: boolean;
}

let { text, link, dead = false }: Props = $props();


let active = $derived(
  browser && page.url &&
  window?.location.pathname.includes(link)
);

</script>


<a class="nav-link"
  href={link}
  class:active
  class:dead
>
  {text}

  {#if status.client && $nav.directions.has(link)}
    <div class="hot" transition:scale={{ duration: 600, easing: expoOut }}>!</div>
  {/if}
</a>


<style lang="scss">

a.nav-link {
  min-width: 2rem;
  padding: 0.2em 0.5em 0;

  @include font-fun;
  color: white;
  font-size: 150%;
  text-decoration: none;

  @include link($lesser: true);
  @include shear-card($interactive: true);

  transition: #{trans()};

  &::before {
    background: transparent;
    backdrop-filter: none;
  }

  &::after {
    bottom: -1px;
  }

  &:hover, &:focus-visible {
    padding-left: 0.8em;
    padding-right: 0.8em;
  }
}

.nav-link.active:not(:hover, :focus-visible, :active) {
  color: $col-text;
}

.nav-link.dead {
  pointer-events: none;
  opacity: 25%;
}


.hot {
  position: absolute;
  top: 0.25em;
  right: 0.2em;
  font-size: 60%;
  font-weight: 700;
  color: $col-quat;
  transition: #{trans()};

  .nav-link:where(:hover, :focus-visible) & {
    color: transparent;
  }
}

</style>
