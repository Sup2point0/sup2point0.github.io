<!-- @component AlbumInfo

A block containing title and description of an album.
-->

<script lang="ts">

export let daw: "fl" | "gb" | "ms" | "ms-4" = "gb";

const DAW = {
  fl: "FL Studio",
  gb: "GarageBand (iPad)",
  ms: "MuseScore 3",
  "ms-4": "MuseScore 4",
}[daw];

</script>


<div class="album-info">
  <slot> ... </slot>

  <p class="daw"> Made in {DAW} </p>
</div>


<style lang="scss">

.album-info {
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;
  background-color: $col-card;


  :global(h1) {
    @include font-ui;
  }
  
  :global(p) {
    @include font-ui;
  
    &.daw {
      @include font-flavour;
      text-align: right;
    }
  }
}

</style>
