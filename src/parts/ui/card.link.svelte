<!-- @component LinkCard

A card that links to another page.
-->

<script lang="ts">

import { shuffle } from "#scripts/utils";

import { base } from "$app/paths";


interface Props {
  link: string;
  text?: string;
  capt?: string;
  picts?: string[];
    fixed?: boolean;
    aspect?: "tall" | "square";
  children?: any;
}

let { link, text, capt, picts, fixed = false, aspect = "tall", children }: Props = $props();

</script>


<a class="card"
  href={link}
>
  {#if picts}
    <div class="picts {aspect}">
      {#each (fixed ? picts : shuffle(picts)) as pict}
        <div class="img-container">
          <img alt="" src="{base}/{pict}" />
        </div>
      {/each}
    </div>
  {/if}

  {#if text}
    <h3> {@html text.toUpperCase()} </h3>
  {/if}

  {#if capt}
    <p> {@html capt} </p>
  {/if}

  {@render children?.()}
</a>


<style lang="scss">

a.card {
  min-width: 12em;
  min-height: 9em;
  // aspect-ratio: 3 / 2;
  padding: 0 3rem 1rem 1rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: end;

  @include shear-card;
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
  }

  img {
    filter: blur(4px);
    transition: all 0.2s ease-out;
  }
}

.picts.tall {
  .img-container { width: 3.5rem; }

  img {
    height: 8rem;
    transform: translateX(-1rem) skew(-$shear-factor);
  }
}

.picts.square {
  .img-container { width: 4rem; }

  img {
    height: 5rem;
    transform: translateX(-0.5rem) skew(-$shear-factor);
  }
}

a.card:where(:hover, :focus) img {
  filter: none;
}

</style>
