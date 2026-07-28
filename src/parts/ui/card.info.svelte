<!-- @component InfoCard

A card which reveals more text when clicked.
-->

<script lang="ts">

import type { Description } from "#scripts/types";

import { slide, scale } from "svelte/transition";
import { expoOut } from "svelte/easing";

interface Props {
  text: string;
  capt?: string;
    capt_pos?: "below" | "right";
  desc?: Description;
  open?: any;
}

let { text, capt, capt_pos = "below", desc, open }: Props = $props();


// svelte-ignore state_referenced_locally
let is_open = $state(open ? true : false);

</script>


<button class="card-info"
  class:live={desc !== undefined}
  class:open
  transition:scale={{ duration: 600, easing: expoOut }}
  onclick={() => { open = !open; }}
>
  <div class="upper {capt_pos}">
    <p class="text"> {@html text} </p>

    {#if capt}
      <p class="capt"> {@html capt} </p>
    {/if}
  </div>

  {#if desc && open}
    <div class="lower" transition:slide={{ duration: 400, easing: expoOut }}>
      {#if Array.isArray(desc)}
        {#each desc as block}
          <p> {@html block} </p>
        {/each}
      {:else}
        <p> {@html desc} </p>
      {/if}
    </div>
  {/if}
</button>


<style lang="scss">

.card-info {
  max-width: 30vw;
  padding: 1em 1.5em;
  position: relative;
  font-size: 100%;
  background: none;
  border: none;
  @include shear-card($interactive: true, $glow: true);
  transition: #{trans()};

  &.open {
    padding: 1em 2em;

    &::before {
      transform: skew(calc($shear-factor * 2 / 3));
    }

    &:hover, &:active, &:focus-visible {
      .desc p {
        color: rgb(white, 70%);
      }
    }
  }

  &.live {
    &:hover, &:focus-visible, &:active {
      outline: none;
    }
  }
}


p {
  @include font-ui;
  line-height: 150%;
  text-align: left;
}

.upper {
  &.right {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    column-gap: 1rem;
  }

  p.text {
    color: white;
  }
}

.lower {
  padding-top: 0.5em;

  p {
    font-size: 80%;
    font-weight: 300;
    color: $col-text-deut;
    transition: #{trans()};
  }
}

:global(.card-info p a) {
  @include link;
}
:global(.card-info .highlight) {
  color: $col-acc;
}

</style>
