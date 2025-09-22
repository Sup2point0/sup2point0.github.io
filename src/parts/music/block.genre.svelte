<!-- @component GenreBlock

-->

<script lang="ts">

import type { GenreData } from "#src/scripts/types";

import { onMount } from "svelte";


interface Props {
  genre: GenreData;
}

let { genre }: Props = $props();


let self: HTMLElement;
let intersected = $state(false);
let left = $state(0);

onMount(() => {
  let observer = new IntersectionObserver(entries => {
    for (let entry of entries) {
      if (!intersected && entry.isIntersecting) {
        intersected = true;
        left = entry.boundingClientRect.left;
      }
    }
  }, {
    threshold: 0.69,
  });

  observer.observe(self);
});

</script>


<button class="genre block"
  class:intersected
  class:fav={genre.fav}
  id={genre.name.toLowerCase()}
  bind:this={self}
  style:transition-delay="calc(({left}px / 100vw) * 420ms)"
>
  <div class="upper">
    <h3> {genre.name} </h3>
  </div>

  <div class="lower">
    {#each genre.artists ?? [] as artist}
      <!-- TODO find a better way to access shard -->
      <a href="artists#{artist.toLowerCase()}">
        {artist}
      </a>

      <span class="separator"> × </span>
    {/each}
  </div>
</button>


<style lang="scss">

@use 'sass:color';


button.block.genre {
  flex-grow: 1;
  max-width: 32rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;

  background: none;
  border: none;
  @include shear-card($interactive: true);

  transform: scale(90%);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

  &:hover {
    cursor: auto;
  }

  &.intersected {
    transform: scale(100%);
    opacity: 1;
  }
}


.upper {
  h3 {
    @include font-fun;
    font-size: 250%;
    font-weight: normal;
    color: $col-text;
    text-align: start;
  }
}


.lower {
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;

  a {
    padding-bottom: 0.1em;
    @include link($lesser: true);
    @include font-ui;
    font-size: 125%;
    line-height: 150%;
    transition: #{trans()};

    &:hover {
      cursor: pointer;
      color: $col-deut;
    }
  }

  span.separator {
    padding-bottom: 0.1em;
    @include font-fun;
    color: $col-text-deut;
    font-size: 125%;

    &:last-child {
      display: none;
    }
  }
}

</style>
