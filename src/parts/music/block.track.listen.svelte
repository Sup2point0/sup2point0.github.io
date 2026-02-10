<!-- @component TrackBlock

A wide block card for displaying info about a track I listen to.
-->

<script lang="ts">

import type { TrackData } from "#scripts/types/music/listen";

import { artists_data } from "#src/routes/(sup)/sup/music/listen/artists/artists";

import { AnimationData, register_animation, calc_delay } from "#scripts/anim.svelte.ts";

import { onMount } from "svelte";

interface Props {
  track: TrackData;
}

let { track }: Props = $props();


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


<div class="block-track-listen"
  class:shrink={track.name.length > 20}
  class:intersected={anim.intersected}
  id={track.shard}
  bind:this={self}
  style:--delay={calc_delay(anim, 0.2)}
>
  <div class="content">
    <div class="img-container">
      <img alt={track.name} title={track.name}
        width="200px" height="200px"
        src="/covers/music/listen/elek.united.jpg"
      />
    </div>

    <div class="info">
      <div class="upper">
        <h3> {track.name} </h3>
        <div class="track-artists">
          {#each track.artists as shard}
            <!-- TODO -->
            <a href="/music/listen/artists#{shard}">
              {shard}
            </a>
          {/each}
        </div>

        <ul class="genres">
          {#each track.genres ?? [] as genre}
            <li class="genre"> {genre} </li>
          {/each}

          {#each track.vibes ?? [] as vibe}
            <li class="vibe"> {vibe} </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>


<style lang="scss">

@use 'sass:color';


.block-track-listen {
  min-width: 40rem;
  padding: 1rem 3rem;
  transition: #{trans()};
  @include shear-card($interactive: true);
  @include anim-block;

  &:hover img {
    box-shadow: 0 0 42px rgb(white, 20%);
    animation: 0.8s shine;
    // animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);  // ease-in-exp

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

  .block-track-listen.intersected & {
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
  gap: 1rem;
}

.upper {
  h3 {
    padding: 0.25rem 0 0.5rem;
    @include font-ui;
    font-size: 250%;
    font-weight: normal;
    color: $col-text;
    text-align: start;

    .block.shrink & {
      font-size: 175%;
    }
  }

  ul.genres {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0.1em 0.5em 0;
      @include font-fun;
      font-size: 150%;
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

.lower {
  audio {
    padding-bottom: 0.5rem;
  }
}

</style>
