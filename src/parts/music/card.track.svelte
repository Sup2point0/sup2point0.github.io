<!-- @component TrackCard

A card for viewing and playing a soundtrack.
-->

<script lang="ts">

import type { TrackData } from "#scripts/types";

interface Props {
  track: TrackData;
}

let { track }: Props = $props();

</script>


<button class="track-card"
  class:preview={track.is_preview}
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
      </ul>
    </div>

    <div class="lower">
      <audio controls
        src="/music/tracks/{track.audio}"
        preload="none"
      ></audio>
    </div>
  </div>
</button>


<style lang="scss">

@use 'sass:color';


button {
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
}

button.preview {
  pointer-events: none;
  opacity: 40%;
}


.info {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
}

.upper {
  h3 {
    padding: 0.25rem 0 0.5rem;
    @include font-ui;
    font-size: 300%;
    font-weight: normal;
    color: $col-text;
    text-align: start;
  }

  ul.genres {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li.genre {
      padding: 0 0.5em;
      @include font-fun;
      font-size: 175%;
      color: $col-text;
      @include shear-card();

      &::before {
        background: color.change($col-trit, $alpha: 0.6);
      }

      &:hover { color: black; }
      &:hover::before { background: white; }
    }
  }
}

.lower {
  audio {
    padding-bottom: 0.5rem;
  }
}

</style>
