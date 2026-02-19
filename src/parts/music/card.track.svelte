<!-- @component TrackCard

A small square card for a soundtrack with its cover and name.
-->

<script lang="ts">

import type { TrackData } from "#scripts/types";

interface Props {
  track: TrackData;
}

let { track }: Props = $props();

</script>


<a class="track card"
  class:feat={track.feat}
  class:preview={track.is_preview}
  href="/sup/music/create/albums/{track.album.shard}#{track.shard}"
>
  <div class="img-container">
    <img alt={track.name} title={track.name}
      width="200px" height="200px"
      src="/covers/music/create/{track.cover ?? 'preview.png'}"
    />

    <h3> {track.name} </h3>
  </div>
</a>


<style lang="scss">

@use 'sass:color';


a.card.track {
  padding: 1rem 2rem;
  display: block;
  text-decoration: none;

  @include shear-card($interactive: true, $glow: true);
  transition: #{trans()};

  &:hover, &:focus-visible {
    &::before {
      border-radius: 0.6em;
      @include focus-glow;
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
}

a.card.track.feat {
  img {
    box-shadow: 0 12px 64px color.change($col-trit, $alpha: 0.25);
  }
}

a.card.track.preview {
  pointer-events: none;
  opacity: 25%;
}


.img-container {
  height: 200px;
  transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);

  h3 {
    width: 100%;
    padding: 2em 0 0.5em 0.75em;
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
