<!-- @component FactCard

A card which reveals more text when clicked.
-->

<script lang="ts">

import { slide, scale } from "svelte/transition";
import { expoOut } from "svelte/easing";

interface Props {
  text: string;
  desc?: string | string[];
}

let { text, desc }: Props = $props();


let open = $state(false);

</script>


<button class="card fact"
  class:live={desc !== undefined}
  class:open
  transition:scale={{ duration: 600, easing: expoOut }}
  onclick={() => { open = !open; }}
>
  <p> {@html text} </p>

  {#if desc && open}
    <div class="desc"
      transition:slide={{ duration: 400, easing: expoOut }}
    >

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

button {
  max-width: 30vw;
  padding: 1em 1.5em;
  position: relative;
  background: none;
  border: none;
  transition: #{trans()};

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: $col-card;
    backdrop-filter: blur(16px);
    transform: skew(-12deg);
    transition: #{trans()};
  }
}

button.live {
  &:hover, &:active, &:focus-visible {
    outline: none;

    &::before {
      background: $col-card-hover;
      border-radius: 0.6em;
      @include focus-glow;
    }
  }

  &:hover, &:active {
    cursor: pointer;
    &::before {
      transform: skew(-8deg);
    }
  }
}

button.open {
  padding: 1em 2em;

  &::before {
    transform: skew(-8deg);
  }

  &:hover, &:active, &:focus-visible {
    .desc p {
      color: rgb(white, 70%);
    }
  }
}


p {
  @include font-ui;
  font-size: 125%;
  line-height: 150%;
  text-align: left;
}

button p {
  color: white;
}

.desc {
  padding-top: 0.5em;

  p {
    font-size: 100%;
    font-weight: 300;
    color: rgb(white, 50%);
    transition: #{trans()};
  }
}

:global(button.card.fact p a) {
  @include link;
}
:global(button.card.fact .highlight) {
  color: $col-acc;
}

</style>
