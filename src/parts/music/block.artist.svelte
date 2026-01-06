<!-- @component ArtistBlock -->

<script lang="ts">

import { AnimationData, register_animation, calc_delay } from "#scripts/anim.svelte.ts";
import type { ArtistData } from "#scripts/types";

import { onMount } from "svelte";


interface Props {
  artist: ArtistData;
}

let { artist }: Props = $props();


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


<button class="artist block"
  class:intersected={anim.intersected}
  class:shrink={artist.name.length > 12}
  id={artist.shard}
  bind:this={self}
  style:--delay={calc_delay(anim)}
>
  <div class="content">

<div class="img-container">
  <img alt={artist.name} title={artist.name}
    width="120px" height="120px"
    src="/icons/artists/{artist.icon ?? 'purple-portal.png'}"
  />

  {#if artist.track}
    <div class="favourites">
      {#if Array.isArray(artist.track)}
        {#each artist.track as track}
          <div class="favourite">
            <a target="_blank" href={track.link} rel="external">
              {track.name}
            </a>
          </div>
        {/each}
      {:else}
        <div class="favourite">
          <a href={artist.track.link}>
            {artist.track.name}
          </a>
        </div>
      {/if}
    </div>
  {/if}
</div>

<div class="info">
  <div class="upper">
    <h3> {artist.name} </h3>

    {#if artist.date}
      <p class="date">
        {artist.date.toString().toUpperCase()}
      </p>
    {/if}
  </div>

  <div class="inner">
    <p class="discovered">
      {@html artist.discovered}
    </p>

    {#if artist.links}
      <div class="links">
        {#each Object.entries(artist.links) as [platform, link]}
          <a target="_blank" href={link} rel="external">
            <img
              alt={platform}
              title={platform.toUpperCase()}
              src="/icons/socials/{platform}.svg"
            />
          </a>
        {/each}
      </div>
    {/if}
  </div>

  <div class="lower">
    <ul class="genres">
      {#each artist.genres ?? [] as genre}
        <li class="genre"> {genre} </li>
      {/each}

      {#each artist.vibes ?? [] as vibe}
        <li class="vibe"> {vibe} </li>
      {/each}
    </ul>
  </div>
</div>

  </div>
</button>


<style lang="scss">

@use 'sass:color';


button.block.artist {
  flex-grow: 1;
  max-width: 32rem;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  @include shear-card($interactive: true);
  @include anim-block;

  &:hover {
    cursor: auto;
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

  button.block.artist.intersected & {
    transform: none;
    opacity: 1;
  }
}


.img-container {
  height: 120px;
  position: relative;

  img {
    border-radius: 50%;
    box-shadow: 0 8px 16px rgb(black, 40%);
    transition: #{trans()};

    button.block.artist:hover & {
      box-shadow: 0 0 42px rgb(white, 20%);
      animation-name: shine;
      animation-duration: 0.8s;
      // animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);  // ease-in-exp
    }
  }

  .favourites {
    width: max-content;
    position: absolute;
    left: -10%;
    bottom: 0;
    z-index: 10;
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;
    transform: translateY(1rem) scale(120%);
    transition: transform 0s 0.5s;
  }

  .favourite {
    $border-width: 4px;

    padding: 0.5em 1em 0.3em calc(2em - $border-width);
    white-space: nowrap;
    @include shear-card($interactive: true);

    &::before {
      background: rgb(white, 8%);
      border-left: $border-width solid $col-prot;
      opacity: 0;
      transition: #{trans()}, opacity 0.2s ease-out;
    }

    a {
      @include font-ui;
      font-size: 125%;
      color: $col-prot;
      text-decoration: none;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }
  }

  &:hover .favourites {
    transform: translateY(1rem) scale(100%);
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

    .favourite {
      &::before {
        opacity: 1;
        transition: #{trans()}, opacity 0.5s ease-out;
      }

      a {
        opacity: 1;
        transition: opacity 0.5s ease-out;
      }
    }
  }

  .favourite:hover {
    &::before {
      $hover-expansion: 0.4em;

      padding: 0 $hover-expansion;
      left: -$hover-expansion;
      background: rgb(white, 16%);
      border-color: $col-deut;
    }

    a {
      color: $col-deut;
    }
  }

  .favourite:active {
    &::before {
      background: rgb(grey, 16%);
      border-color: $col-trit;
    }

    a {
      color: $col-trit;
    }
  }
}


.info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
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
    color: $col-quat;
    text-align: start;

    button.shrink & {
      font-size: 200%;
    }
  }

  p.date {
    padding-bottom: 0.25em;
    @include font-tech;
    font-size: 150%;
    color: $col-text-deut;
  }
}

.inner {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  p.discovered {
    @include font-fun;
    font-size: 150%;
    color: $col-text;
    text-align: left;
  }

  img {
    max-height: 1.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    opacity: 0;
    transition: #{trans()}, opacity 0.3s;

    &:hover {
      box-shadow: 0 0 16px black;
      transform: scale(120%);
    }

    &:active {
      transform: scale(115%);
      filter: brightness(75%);
    }
    
    button.block.artist:hover & {
      opacity: 1;
    }
  }
}

:global(button.block.artist p.discovered a) {
  @include link;
}
:global(button.block.artist p.discovered .highlight) {
  color: $col-acc;
}

.lower {
  ul.genres {
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
      &.vibe::before { background: color.change($col-deut, $alpha: 0.69); }
    }
  }
}

</style>
