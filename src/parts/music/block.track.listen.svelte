<!-- @component TrackBlock

A wide block card for displaying info about a track I listen to.
-->

<script lang="ts">

import { anim } from "#scripts/anim.svelte.ts";
import { display_date } from "#scripts/utils";
import type { TrackData } from "#scripts/types/music/listen";

import { artists_data } from "#routes/(sup)/sup/music/listen/artists/artists";

import { onMount } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";

interface Props {
  track: TrackData;
  invert?: boolean;
}

let { track, invert = false }: Props = $props();


let open = $state(false);

onMount(() => {
  requestAnimationFrame(() => {
    if (invert) {
      open = !open;
    }
  });
});

</script>


<button class="block-track-listen"
  class:shrink={track.name.length > 20}
  class:open
  id={track.shard}
  onclick={() => { open = !open; }}
  {@attach anim}
>
  <div class="content">

<div class="img-container">
  <img alt={track.name} title={track.name}
    width="200px" height="200px"
    src="/covers/music/listen/{track.cover}"
  />
</div>

<div class="info">
  <div class="upper">
    <div class="title">
      <h3> {track.name} </h3>

      {#if track.date}
        <p class="date">
          {display_date(track.date)}
        </p>
      {/if}
    </div>

    <div class="artists">
      {#each track.artists as shard}
        <!-- TODO display artist name properly -->
        <a href="/sup/music/listen/artists#{shard}">
          {shard}
        </a>

        <span class="separator"> × </span>
      {/each}
    </div>
  </div>

  <div class="sep"></div>

  {#if open}
    <div class="lower" transition:slide={{ duration: 800, easing: expoInOut }}>
      {#each track.desc as block}
        <p> {@html block} </p>
      {/each}
    </div>

  {:else}
    <div class="lower" transition:slide={{ duration: 800, easing: expoInOut }}>
      {#if track.discovered}
        <p class="discovered">
          {@html track.discovered}
        </p>
      {/if}

      <ul class="genres">
        {#each track.genres ?? [] as genre}
          <li class="genre"> {genre} </li>
        {/each}

        {#each track.vibes ?? [] as vibe}
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


.block-track-listen {
  min-width: 45rem;
  max-width: 60rem;
  padding: 1rem 1.5rem 1rem 3rem;
  font-size: unset;
  background: none;
  border: none;
  outline: none;
  transition: #{trans()};
  @include shear-card($interactive: true, $glow: true);
  @include anim-block;

  &:hover img {
    box-shadow: 0 0 42px rgb(white, 20%);
    animation: 0.8s shine;

    @keyframes shine {
      0%   { filter: brightness(100%); }
      50%  { filter: brightness(108%); }
      100% { filter: brightness(100%); }
    }
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
  :global(.block-track-listen.intersected) & {
    transform: none;
    opacity: 1;
  }
}


img {
  box-shadow: 0 0 0px transparent;
  transition: box-shadow 0.4s ease-out;
}

.info {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
}


.upper {
  width: 100%;
  
  .title {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: end;
    gap: 0.5rem;

    h3 {
      @include font-ui;
      font-size: 175%;
      font-weight: normal;
      color: $col-text;
      text-align: start;

      .block-track-listen.shrink & {
        font-size: 150%;
      }
    }

    p.date {
      padding-bottom: 0.25em;
      @include font-tech;
      font-size: 125%;
      color: $col-text-deut;
    }
  }

  .artists {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 0.5rem;
    @include separator;

    a {
      @include font-fun;
      font-size: 150%;
      @include link;
    }
  }
}


.sep {
  width: 69%;
  height: 1px;
  margin: 0.5rem 0 1rem;
  background: rgb(white, 10%);
}


.lower {
  p {
    margin-bottom: 0.5em;
    @include font-ui;
    font-size: 80%;
    font-weight: 300;
    color: $col-text-deut;
    text-align: left;
    transition: #{trans()};

    .block-track-listen:where(:hover, :focus-visible) & {
      color: $col-text;
    }
  }

  p.discovered {
    @include font-fun;
    font-size: 125%;
    color: $col-text;
    text-align: left;
  }
  
  ul.genres {
    padding: 0 0.2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0.1em 0.5em 0;
      @include font-fun;
      font-size: 125%;
      color: $col-text;
      @include shear-card();
      transition: #{trans()};

      &:hover {
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
