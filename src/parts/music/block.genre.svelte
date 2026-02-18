<!-- @component GenreBlock -->

<script lang="ts">

import { AnimationData, register_animation, calc_delay } from "#scripts/anim.svelte.ts";
import { shardify } from "#scripts/utils";
import type { GenreData } from "#scripts/types";

import { onMount } from "svelte";


interface Props {
  genre: GenreData;
}

let { genre }: Props = $props();


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


<button class="genre block {genre.kind}"
  class:intersected={anim.intersected}
  class:fav={genre.fav}
  id={genre.name.toLowerCase()}
  bind:this={self}
  style:--delay={calc_delay(anim)}
>
  <div class="content">
    <div class="upper">
      <h3> {genre.name} </h3>
    </div>

    <div class="lower">
      {#if genre.artists}
        <div class="artists">
          <h4> ARTISTS </h4>

          {#each genre.artists as artist}
            <!-- TODO find a better way to access shard -->
            <a href="artists#{shardify(artist)}">
              {artist}
            </a>

            <span class="separator"> × </span>
          {/each}
        </div>
      {/if}

      {#if genre.tracks}
        <div class="tracks">
          <h4> TRACK{genre.tracks.length > 1 ? "S" : ""} </h4>

          {#each genre.tracks as track}
            <p class="track">
              {track}
            </p>

            <span class="separator"> × </span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</button>


<style lang="scss">

@use 'sass:color';


button.block.genre {
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
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  
  transform: scale(90%);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) var(--delay, 0s);  // ease-out-exp

  button.block.genre.intersected & {
    transform: none;
    opacity: 1;
  }
}


.upper {
  h3 {
    @include font-fun;
    font-size: 250%;
    font-weight: normal;
    color: $col-trit;
    text-align: start;

    .block.genre.fav & {
      color: $col-quat;
    }

    .block.genre.vibe & {
      color: $col-deut;
    }
  }
}


.lower {
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;

  p, a {
    @include font-ui;
    font-size: 125%;
    color: $col-text;
    line-height: 150%;
  }

  a {
    padding-bottom: 0.1em;
    @include link($lesser: true);
    transition: #{trans()};
  }

  @include separator;
}

.artists, .tracks {
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;

  h4 {
    padding-bottom: 0.25em;
    padding-right: 1em;
    @include font-tech;
    font-weight: normal;
    font-size: 90%;
    color: $col-text-deut;
  }
}

</style>
