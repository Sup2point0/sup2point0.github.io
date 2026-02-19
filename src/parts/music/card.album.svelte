<!-- @component AlbumCard

A card for an album with its cover, name and other info.
-->

<script lang="ts">

import { display_date } from "#scripts/utils";
import type { AlbumData } from "#scripts/types/music";


interface Props {
  album: AlbumData;
  collection?: string;
}

let { album, collection }: Props = $props();

</script>


<a class="album card"
  class:preview={album.is_preview}
  href="/sup/music/create/albums/{collection ?? ''}{album.shard}"
>
  <div class="upper">
    {#if album.tracks}
      <p class="track-count"> {album.tracks.length} </p>
    {/if}

    <div class="img-container">
      <img alt={album.name} title={album.name}
        width="200px" height="200px"
        src="/covers/music/create/{album.cover ?? 'preview.png'}"
      />
        
      <h3> {album.name} </h3>
    </div>
  </div>

  <div class="lower">
    {#if album.date}
      <p class="date"> {display_date(album.date)} </p>
    {/if}
  </div>
</a>


<style lang="scss">

a.card.album {
  padding: 1rem 2.5rem;
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

    p.track-count {
      color: $col-prot;
    }
  }
}

a.card.album.preview {
  pointer-events: none;
  opacity: 25%;
}


.upper {
  position: relative;

  p.track-count {
    position: absolute;
    top: 0;
    right: 0;

    @include font-tech;
    font-size: 200%;
    color: $col-text;
    transform: translateX(1.2em) translateY(-0.25em);
    transition: #{trans()};
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
}


p.date {
  padding-top: 0.8em;
  @include font-tech;
  font-size: 90%;
  color: $col-text-deut;
  text-align: center;
}

</style>
