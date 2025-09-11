<!-- @component ArtistBlock

-->

<script lang="ts">
  
import type { ArtistData } from "#scripts/types";


interface Props {
  artist: ArtistData;
}

let { artist }: Props = $props();

</script>


<button class="artist block"
  class:shrink={artist.name.length > 12}
  id={artist.shard}
>
  <div class="img-container">
    <img alt={artist.name} title={artist.name}
      width="120px" height="120px"
      src="/music/icons/{artist.icon ?? 'purple-portal.png'}"
    />

    {#if artist.track}
      <div class="favourites">
        {#if Array.isArray(artist.track)}
          {#each artist.track as track}
            <a class="favourite" href={track.link}>
              {track.name}
            </a>
          {/each}
        {:else}
          <a class="favourite" href={artist.track.link}>
            {artist.track.name}
          </a>
        {/if}
      </div>
    {/if}
  </div>

  <div class="info">
    <div class="upper">
      <h3> {artist.name} </h3>

      {#if artist.date}
        <p class="date">
          {artist.date}
        </p>
      {/if}
    </div>

    <div class="inner">
      <p class="discovered">
        {artist.discovered}
      </p>
    </div>

    <div class="lower">
      <ul class="genres">
        {#each artist.genres ?? [] as genre}
          <li class="genre">{genre}</li>
        {/each}
      </ul>
    </div>
  </div>
</button>


<style lang="scss">

@use 'sass:color';


button.block.artist {
  max-width: 32rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
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


.img-container {
  height: 120px;
  position: relative;

  img {
    border-radius: 50%;
    box-shadow: 0 8px 16px rgb(black, 40%);
  }

  .favourites {
    width: max-content;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;
    transform: translateY(1rem) scale(120%);
    opacity: 0;
    transition: opacity 0.2s ease-out, transform 0s 0.5s;
  }

  a.favourite {
    padding: 0.5em 1em;
    @include font-ui;
    color: $col-text;
    text-decoration: none;
    white-space: nowrap;
    @include shear-card();

    &::before {
      background: $col-prot;
    }
  }

  &:hover .favourites {
    transform: translateY(1rem) scale(100%);
    opacity: 1;
    transition: opacity 0.5s ease-out, transform 1s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp
  }
}

.info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
}

.upper {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: end;
  gap: 0.5rem;

  h3 {
    @include font-ui;
    font-size: 200%;
    font-weight: normal;
    color: $col-deut;
    text-align: start;

    button.shrink & {
      font-size: 200%;
    }
  }

  p.date {
    padding-bottom: 0.25em;
    @include font-tech;
    font-size: 150%;
    color: $col-text-deut;
  }
}

.inner {
  flex-grow: 1;

  p.discovered {
    @include font-fun;
    font-size: 150%;
    color: $col-text;
  }
}

.lower {
  ul.genres {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0 0.5em;
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
