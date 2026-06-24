<!-- @component TrackCard

A small square card for a soundtrack with its cover and name.
-->

<script lang="ts">

import { tunes } from "#scripts/state";
import type { TrackData } from "#scripts/types/music/create";

import { goto } from "$app/navigation";


interface Props {
  track: TrackData;
}

let { track }: Props = $props();

</script>


<button class="card-track"
  class:feat={track.feat}
  onclick={async () => {
    await goto(`/sup/music/create/albums/${track.album.shard}#${track.shard}`);
    tunes.play_track(track);
  }}
>
  <div class="img-container">
    <img alt={track.name} title={track.name}
      width="200px" height="200px"
      src="/covers/music/create/{track.cover ?? 'preview.png'}"
    />

    <h3> {track.name} </h3>
  </div>
</button>


<style lang="scss">

@use 'sass:color';


.card-track {
  padding: 1rem 2rem;
  font-size: unset;
  text-align: left;
  background: none;
  border: none;
  outline: none;

  @include shear-card($interactive: true, $glow: true);
  transition: #{trans()};

  &:hover, &:focus-visible {
    &::before {
      border-radius: 0.6em;
      @include glow();
    }

    .img-container {
      transform: scale(105%);

      img {
        filter: brightness(96%);
      }

      h3 {
        opacity: 1;
      }
    }
  }

  &.feat {
    img {
      box-shadow: 0 12px 64px color.change($col-trit, $alpha: 0.25);
    }
  }
}


.img-container {
  height: 200px;
  transition: transform 1.0s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

  h3 {
    width: 100%;
    padding: 5em 0 0.5em 0.75em;
    margin: 0;
    position: absolute;
    left: 0;
    bottom: 0;

    @include font-ui;
    font-weight: normal;
    font-size: 110%;
    color: white;
    background: linear-gradient(to bottom in oklch, transparent, rgb(black, 90%) 90%);
    opacity: 0;
    transition: #{trans()}, opacity 0.25s ease-out;
  }
}

</style>
