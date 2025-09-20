<!-- @component AlbumBlock

A wide block card for viewing an album's info.
-->

<script lang="ts">

import type { AlbumData } from "#scripts/types";


interface Props {
  album: AlbumData;
}

let { album }: Props = $props();

</script>


<div class="album block">
  <div class="info">
    <h1> {album.name} </h1>
    <div class="capt">
      <p class="date"> {album.date} </p>
      {#if album.daw}
        <div class="separator"> × </div>
        <p class="daw"> MADE IN {album.daw.toUpperCase()} </p>
      {/if}
    </div>

    {#if album.desc}
      <p class="desc"> {@html album.desc} </p>
    {/if}
  </div>
  
  <img alt={album.name} title={album.name}
    width="240px" height="240px"
    src="/music/covers/{album.cover ?? 'preview.png'}"
  />
</div>


<style lang="scss">

.block.album {
  min-width: 50%;
  padding: 1rem 5rem;
  display: flex;
  flex-flow: row wrap;
  gap: 4rem;
  @include shear-card();
}

.info {
  h1 {
    @include font-fun;
    font-weight: normal;
    font-size: 500%;
  }

  p.desc {
    padding-top: 2em;
    font-size: 125%;
  }
}

.capt {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;

  p {
    @include font-tech;
    font-size: 100%;
    color: $col-text-deut;
    transition: #{trans()};

    &:hover {
      color: $col-text;
    }
  }

  .separator {
    @include font-fun;
    color: $col-text-deut;
    font-size: 125%;
  }
}

</style>
