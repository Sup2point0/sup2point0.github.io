<!-- @component MediaBlock

A block displaying info for a media, series, anime, show, etc.
-->

<script lang="ts">

import { display_date } from "#scripts/utils";
import type { MediaData } from "#scripts/types";
import type { FilmData } from "#src/routes/(sup)/sup/loves/films/films";

import { AnimationData, register_animation, calc_delay } from "#scripts/anim.svelte.ts";

import { onMount } from "svelte";


interface Props {
  kind: "films" | "series" | "anime";
  media: MediaData;
}

let { kind, media }: Props = $props();


let self: HTMLElement;
let anim = new AnimationData();

onMount(() => {
  if (self) {
    register_animation(self, anim);
  } else {
    setTimeout(() => register_animation(self, anim), 1000);
  }
});

</script>


<button class="media {kind} block"
  class:intersected={anim.intersected}
  id={media.shard}
  bind:this={self}
  style:--delay={calc_delay(anim, 0.2)}
>
  <div class="content">
    <img alt={media.name} title={media.name}
      height="200px"
      src={media.cover ? `/covers/${kind}/${media.cover}` : "/purple-portal.png"}
    />

    <div class="info">
      <div class="upper">
        <h3> {media.name} </h3>

        {#if media.date}
          <p class="date">
            {display_date(media.date)}
          </p>
        {/if}
      </div>

      <div class="lower">
        <ul class="tags">
          {#each media.genres ?? [] as genre}
            <li class="genre"> {genre} </li>
          {/each}
          
          {#each media.themes ?? [] as theme}
            <li class="theme"> {theme} </li>
          {/each}
        </ul>
      </div>

      {#if kind == "films"}
        <div class="extra">
          {#if media.franchise}
            <p class="franchise {media.franchise}"> {media.franchise.toUpperCase()} </p>
          {/if}

          <!-- {#if media.franchise && media.flags?.length > 0}
            <span class="separator"> × </span>
          {/if}

          {#each (media as FilmData).flags?.entries() as [i, flag]}
            {#if i > 0} <span class="separator"> × </span> {/if}
            <p class="flag {flag}"> {flag.toUpperCase()} </p>
          {/each} -->
        </div>
      {/if}
    </div>
  </div>
</button>


<style lang="scss">

@use 'sass:color';


button.block.media {
  flex-grow: 1;
  max-width: 36rem;
  padding: 1rem 2.5rem;
  background: none;
  border: none;
  @include shear-card($interactive: true);
  @include anim-block;

  &:hover {
    cursor: auto;
    opacity: 1 !important;

    .extra p {
      color: $col-text;
    }
  }

  &.wishlist::before {
    border: 1px solid rgb(white, 42%);
  }
}

.content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  
  transform: scale(90%);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) var(--delay, 0s);  // ease-out-exp

  button.block.media.intersected & {
    transform: none;
    opacity: 1;
  }
}


img {
  max-width: 100%;
  box-shadow: 0 8px 16px rgb(black, 40%);
}

.info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
}


.upper {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: end;
  gap: 0.5rem;

  h3 {
    @include font-ui;
    font-size: 200%;
    font-weight: normal;
    color: $col-text;
    text-align: start;

    .block.media.active &, .block.media.opportunistic & {
      color: $col-quat;
    }
  }

  p.date {
    padding-bottom: 0.25em;
    @include font-tech;
    font-size: 150%;
    color: $col-text-deut;
  }
}

.lower {
  ul.tags {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0 0.5em;
      @include font-fun;
      font-size: 150%;
      color: $col-text;
      @include shear-card();
      transition: #{trans()};

      &:hover {
        cursor: auto;
        padding: 0 0.8em;
        color: black;
      
        &::before {
          background: white;
        }
      }
    }

    li:not(:hover) {
      &.genre::before { background: color.change($col-trit, $alpha: 0.69); }
      &.theme::before { background: color.change($col-deut, $alpha: 0.69); }
    }
  }
}

.extra {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.5rem;
  @include separator;

  p {
    @include font-tech;
    font-size: 100%;
    color: $col-text-deut;
  }
}

</style>
