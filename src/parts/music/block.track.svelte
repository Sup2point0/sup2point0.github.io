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


<div class="track block"
  class:feat={track.feat}
  class:preview={track.is_preview}
  class:shrink={track.name.length > 20}
  id={track.shard}
>
  <div class="img-container">
    <img alt={track.name} title={track.name}
      width="200px" height="200px"
      src="/covers/music/{track.cover ?? 'preview.png'}"
    />
  </div>

  <div class="info">
    <div class="upper">
      <h3> {track.name} </h3>

      <ul class="genres">
        {#each track.genres ?? [] as genre}
          <li class="genre"> {genre} </li>
        {/each}

        {#each track.vibes ?? [] as vibe}
          <li class="vibe"> {vibe} </li>
        {/each}
      </ul>
    </div>

    <div class="lower">
      {#if track.audio}
        <audio controls
          src="/audio/{track.audio}"
          preload="none"
        ></audio>
      {/if}
    </div>
  </div>
</div>


<style lang="scss">

@use 'sass:color';


.block.track {
  min-width: 40rem;
  padding: 1rem 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: stretch;
  gap: 2rem;
  @include shear-card($interactive: true);

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

.block.track.feat {
  img {
    box-shadow: 0 12px 64px color.change($col-trit, $alpha: 0.25);
  }
}

.block.track.preview {
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
