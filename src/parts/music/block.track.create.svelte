<!-- @component TrackBlock

A wide block card for viewing and playing a soundtrack I created.
-->

<script lang="ts">

import { tunes, play_tune, toggle_pause } from "#scripts/state";
import type { TrackData } from "#scripts/types/music/create";

interface Props {
  track: TrackData;
}

let { track }: Props = $props();

</script>


<button class="block-track"
  class:feat={track.feat}
  class:preview={track.is_preview}
  class:shrink={track.name.length > 20}
  id={track.shard}
  onclick={() => (tunes.track.shard === track.shard) ? tunes.toggle_pause() : tunes.play(track)}
>
  <div class="cover">
    <img alt={track.name} title={track.name}
      width="200px" height="200px"
      src="/covers/music/create/{track.cover ?? 'preview.png'}"
    />

    {#if track.audio}
      <div class="play" class:paused={!tunes.playing}>
        {#if tunes.playing}
          ⏸
        {:else}
          ▶
        {/if}
      </div>
    {/if}
  </div>

  <div class="info">
    <div class="upper">
      <h3> {track.name} </h3>
    </div>

    <div class="sep"></div>

    <div class="lower">
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
</button>


<style lang="scss">

@use 'sass:color';


.block-track {
  scroll-margin: 4rem;
  min-width: 40rem;
  padding: 1rem 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: stretch;
  gap: 2rem;
  font-size: unset;
  background: none;
  border: none;
  outline: none;
  @include shear-card($interactive: true, $glow: true);

  &.preview {
    pointer-events: none;
    opacity: 25%;
  } 
}


.cover {
  position: relative;

  img {
    box-shadow: 0 0 0px transparent;
    transition: box-shadow 0.4s ease-out;

    .block-track.feat & {
      box-shadow: 0 12px 64px color.change($col-trit, $alpha: 0.25);
    }

    .block-track:hover & {
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

  .play {
    width: 3rem;
    height: 3rem;
    padding-bottom: 0.2em;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @include font-ui;
    font-size: 150%;
    color: white;
    text-align: center;
    background: $col-card-hover;
    backdrop-filter: blur(4px);
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
    transition:
      background 0.08s ease-out,
      opacity 0.12s ease-out
    ;

    &.paused {
      padding-left: 0.15em;
      padding-bottom: 0;
    }

    .block-track:hover &, &:focus-visible {
      opacity: 1;
    }

    &:hover {
      background: $col-prot;
    }

    &:active {
      background: $col-trit;
    }
  }
}


.info {
  flex-grow: 1;
}


.upper {
  h3 {
    @include font-ui;
    font-size: 250%;
    font-weight: normal;
    color: $col-text;
    text-align: start;

    .block.shrink & {
      font-size: 175%;
    }
  }
}

.sep {
  width: 69%;
  height: 1px;
  margin: 0.25rem 0 0.75rem;
  background: rgb(white, 10%);
}

.lower {
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

</style>
