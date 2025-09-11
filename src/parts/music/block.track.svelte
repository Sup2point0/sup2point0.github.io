<!-- @component TrackBlock

A wide block card for viewing and playing a soundtrack.
-->

<script lang="ts">

import type { TrackData } from "#scripts/types";

interface Props {
  track: TrackData;
}

let { track }: Props = $props();

</script>


<button class="track block"
  class:preview={track.is_preview}
  class:shrink={track.name.length > 16}
  id={track.shard}
>
  <div class="img-container">
    <img alt={track.name} title={track.name}
      width="200px" height="200px"
      src="/music/covers/{track.cover ?? 'placeholder.png'}"
    />
  </div>

  <div class="info">
    <div class="upper">
      <h3> {track.name} </h3>

      <ul class="genres">
        {#each track.genres ?? [] as genre}
          <li class="genre">{genre}</li>
        {/each}

        {#each track.vibes ?? [] as vibe}
          <li class="vibe">{vibe}</li>
        {/each}
      </ul>
    </div>

    <div class="lower">
      {#if track.audio}
        <audio controls
          src="/music/tracks/{track.audio}"
          preload="none"
        ></audio>
      {/if}
    </div>
  </div>
</button>


<style lang="scss">

@use 'sass:color';


button.block.track {
  min-width: 40rem;
  padding: 1rem 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: stretch;
  gap: 2rem;

  background: none;
  border: none;
  @include shear-card($interactive: true);

  &:hover img {
    box-shadow: 0 0 42px rgb(white, 20%);
    animation-name: shine;
    animation-duration: 0.8s;
    // animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);  // ease-in-exp
  }
}

button.block.track.preview {
  pointer-events: none;
  opacity: 25%;
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
    font-size: 300%;
    font-weight: normal;
    color: $col-text;
    text-align: start;

    button.shrink & {
      font-size: 200%;
    }
  }

  ul.genres {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0 0.5em;
      @include font-fun;
      font-size: 175%;
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


@keyframes shine {
  0%   { filter: brightness(100%); }
  50%  { filter: brightness(108%); }
  100% { filter: brightness(100%); }
}

</style>
