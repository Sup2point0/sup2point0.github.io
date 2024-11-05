<!-- @component Album -->
<script lang="ts">

import { base } from "$app/paths";

export let preview: boolean = false;
export let shard: string;
export let name: string;
export let year: string = "";

</script>


<a class="part album-block"
  class:preview
  href="{base}/sup/music/{shard}"
>
  <img alt={name} title={name}
    width="200px" height="200px"
    src="music/covers/{shard}/{shard}.png"
  />

  <h4> {name} </h4>
  <p> {year} </p>
</a>


<style lang="scss">

.part {
  padding: 1rem;
  display: block;
  text-decoration: none;
  background-color: $col-card;

  transition: all 0.2s ease-out;

  &.preview {
    opacity: 50%;
  }

  * {
    display: block;
  }

  &:not(.preview) {
    &:hover, &:focus {
      background-color: $col-card-hover;

      img {
        transform: scale(1.08);
      }
    }

    &:focus {
      outline: 2px solid $col-prot;
    }
  }
}


img {
  max-width: 25vw;
  aspect-ratio: 1;
  transition: transform 0.12s ease-out;
}

h4 {
  @include font-ui;
  font-size: 110%;
  color: white;
}

p {
  @include font-ui;
  font-size: 90%;
  color: $col-text-deut;
}

</style>
