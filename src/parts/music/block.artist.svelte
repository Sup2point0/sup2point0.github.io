<!-- @component `ArtistBlock`

A block display info for a musical artist.
-->

<script lang="ts">

import { anim } from "#scripts/anim.svelte.ts";
import { display_date } from "#scripts/utils";
import type { ArtistData } from "#scripts/types";

import { onMount } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  artist: ArtistData;
  invert?: boolean;
}

let { artist, invert = false }: Props = $props();


let open = $state(false);

onMount(() => {
  requestAnimationFrame(() => {
    if (invert) {
      open = !open;
    }
  })
});

</script>


<button class="block-artist"
  class:shrink={artist.name.length > 12}
  class:open
  id={artist.shard}
  onclick={() => { open = !open; }}
  {@attach anim}
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
        {display_date(artist.date)}
      </p>
    {/if}
  </div>

  <div class="sep"></div>

  {#if open}
    <div class="lower desc" transition:slide={{ duration: 800, easing: expoInOut }}>
      {#each artist.desc ?? [] as block}
        <p> {@html block} </p>
      {/each}
    </div>

  {:else}
    <div class="lower" transition:slide={{ duration: 800, easing: expoInOut }}>
      <div class="inner">
        <p class="discovered">
          {@html artist.discovered}
        </p>

        {#if artist.links}
          <div class="links">
            {#each Object.entries(artist.links) as [platform, link]}
              <a target="_blank" href={link} rel="external">
                <img
                  class="platform"
                  alt={platform}
                  title={platform.toUpperCase()}
                  src="/icons/socials/{platform}.svg"
                />
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <ul class="tags">
        {#each artist.genres ?? [] as genre}
          <li class="genre"> {genre} </li>
        {/each}

        {#each artist.vibes ?? [] as vibe}
          <li class="vibe"> {vibe} </li>
        {/each}
      </ul>
    </div>
  
  {/if}
</div>

  </div>
</button>


<style lang="scss">

@use 'sass:color';


.block-artist {
  scroll-margin: 4rem;
  flex-grow: 1;
  max-width: 32rem;
  padding: 1rem 1.5rem;
  // font-size: unset;
  background: none;
  border: none;
  outline: none;
  transition: #{trans()};
  @include shear-card($interactive: true, $glow: true);
  @include anim-block;

  &:hover, &:focus-visible {
    cursor: pointer;
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

  /* NOTE: Need `:global` to avoid CSS being purged!! */
  :global(.block-artist.intersected) & {
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

    .block-artist:hover & {
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
      background: rgb(white, 4%);
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

    .block-artist.shrink & {
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


.sep {
  width: 69%;
  height: 1px;
  margin: 0.25rem 0 0.75rem;
  background: rgb(white, 10%);
}


.lower.desc {
  p {
    padding-left: 0.2em;
    margin-bottom: 0.5em;
    @include font-ui;
    font-size: 75%;
    font-weight: 300;
    color: $col-text-deut;
    text-align: left;
    transition: #{trans()};
  }
}

.lower {
  width: 100%;
  
  .inner {
    flex-grow: 1;
    width: 100%;
    margin-bottom: 0.5em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    p.discovered {
      @include font-fun;
      font-size: 150%;
      color: $col-text;
      text-align: left;
    }

    img.platform {
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
      
      .block-artist:hover & {
        opacity: 1;
      }
    }
  }

  :global(button.block-artist p.discovered a) {
    @include link;
  }
  :global(button.block-artist p.discovered .highlight) {
    color: $col-acc;
  }

  ul.tags {
    padding: 0 0.2rem;
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
