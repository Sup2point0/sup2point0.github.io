<!-- @component AlbumCard

A card for an album with its cover, name and other info.
-->

<script lang="ts">

interface Props {
  name: string;
  year?: string;
  tracks?: number;
  intern: string;
  cover?: string;
  preview?: boolean;
}

let { name, year, tracks, intern, cover, preview = false }: Props = $props();

</script>


<a class="album-card"
  class:preview
  href="/sup/music/create/albums/{intern}"
>
  <div class="upper">
    {#if tracks}
      <p class="track-count"> {tracks} </p>
    {/if}

    <div class="img-container">
      <img alt={name} title={name}
        width="200px" height="200px"
        src="/music/covers/{cover ?? 'placeholder.png'}"
      />
        
      <h3> {name} </h3>
    </div>
  </div>

  <div class="lower">
    <p class="date"> {year} </p>
  </div>
</a>


<style lang="scss">

a.album-card {
  padding: 1rem 2.5rem;
  display: block;
  text-decoration: none;

  @include shear-card($interactive: true, $glow: true);
  transition: #{trans()};

  * {
    display: block;
  }

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

a.album-card.preview {
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
    transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);

    img {
      max-width: 25vw;
      aspect-ratio: 1;
    }

    h3 {
      width: 100%;
      padding: 2em 0 0.5em 0.75em;
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
