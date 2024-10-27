<!-- @component AlbumInfo -->
<script lang="ts">

export let daw: "gb" | "ms" | "ms-4" = "gb";

const DAW = {
  gb: "GarageBand (iPad)",
  ms: "MuseScore 3",
  "ms-4": "MuseScore 4",
}[daw];

</script>


<div class="part album-info">
  <slot> Something went wrong! </slot>

  <p class="daw"> Made in {DAW} </p>
</div>


<style lang="scss">

.part {
  width: 100%;
  padding: 1rem;
  background-color: $col-card;
}


p.daw {
  text-align: right;
}

</style>
