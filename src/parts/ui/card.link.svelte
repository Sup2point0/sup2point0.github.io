<!-- @component LinkCard

A card that links to another page.
-->

<script lang="ts">

import { FrozenWeightedList, type LikeWeightedItem } from "@sup2.0/weighted-list";

import sample from "@stdlib/random-sample";

import { anim } from "#scripts/anim.svelte";

import { onMount } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";
import { base } from "$app/paths";


interface Props {
  link: string;
  text?: string | LikeWeightedItem<string>[];
  capt?: string | LikeWeightedItem<string>[];
  picts?: string[];
    fixed?: boolean;
    aspect?: "tall" | "square";
  children?: any;
}

let {
  link,
  text,
  capt,
  picts,
  fixed = false,
  aspect = "tall",
  children,
}: Props = $props();


const picts_shuffled = sample(picts ?? [], { replace: false }).slice(0, 5);

let displayed_text: string | undefined = $state();
let displayed_capt: string | undefined = $state();

onMount(() => {
  displayed_text = Array.isArray(text) ? new FrozenWeightedList(...text).sample_value() : text;
  displayed_capt = Array.isArray(capt) ? new FrozenWeightedList(...capt).sample_value() : capt;
});

</script>


<a class="card"
  href={link}
  {@attach anim}
>
  <div class="content">

    {#if picts}
      <div class="picts {aspect}">
        {#each (fixed ? picts : picts_shuffled) as pict}
          <div class="img-container">
            <img alt="" src="{base}/{pict}" />
          </div>
        {/each}
      </div>
    {/if}

    {#if displayed_text}
      <h3 transition:slide={{ duration: 1000, delay: delay + 300, easing: expoInOut }}>
        {@html displayed_text.toUpperCase()}
      </h3>
    {/if}

    {#if displayed_capt}
      <p transition:slide={{ duration: 1000, delay: delay + 100, easing: expoInOut }}>
        {@html capt}
      </p>
    {/if}

    {@render children?.()}

  </div>
</a>


<style lang="scss">

.card {
  min-width: 12em;
  min-height: 9em;
  padding: 0 3rem 1rem 1rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: end;

  @include shear-card;
  @include anim-block;
  color: $col-text;
  text-decoration: none;

  &:hover, &:active, &:focus-visible {
    &::before {
      background: $col-card-hover;
      border-radius: 0.6em;
      transform: skew(calc($shear-factor * 2 / 3));
      @include focus-glow;
    }
  }
}

.content {
  transform: scale(90%);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) var(--delay, 0s);  // ease-out-exp

  :global(.card.intersected) & {
    transform: none;
    opacity: 1;
  }
}


h3 {
  @include font-fun;
  font-size: 200%;
  font-weight: normal;
}

p {
  color: $col-text-deut;
}


.picts {
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
  gap: 0.4rem;

  .img-container {
    overflow: hidden;
    transform: skew($shear-factor);
    transition: #{trans()};

    .card:where(:hover, :focus-visible, :active) & {
      transform: skew(calc($shear-factor * 2 / 3));
    }
  }

  img {
    filter: blur(4px);
    transition: #{trans()}, filter 0.25s ease-out;
  }
}

.picts.tall {
  .img-container { width: 3.5rem; }

  img {
    height: 8rem;
    transform: translateX(-1rem) skew(-$shear-factor);

    .card:where(:hover, :focus-visible, :active) & {
      transform: skew(calc($shear-factor * -2 / 3)) translateX(-1rem);
    }
  }
}

.picts.square {
  .img-container { width: 4rem; }

  img {
    height: 5rem;
    transform: translateX(-0.5rem) skew(-$shear-factor);
    
    .card:where(:hover, :focus-visible, :active) & {
      transform: skew(calc($shear-factor * -2 / 3)) translateX(-0.5rem);
    }
  }
}


a.card:where(:hover, :focus) img {
  filter: none;
}

</style>
