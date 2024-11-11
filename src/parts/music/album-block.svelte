<!-- @component Album -->
<script lang="ts">

export let preview: boolean = false;
export let shard: string;
export let name: string;
export let year: string = "";
export let cover: string | undefined = undefined;

</script>


<a class="album-block"
  class:preview
  href="/sup/music/{shard}"
>
  <img alt={name} title={name}
    width="200px" height="200px"
    src="/music/covers/{cover ?? "placeholder.png"}"
  />

  <h4> {name} </h4>
  <p> {year} </p>
</a>


<style lang="scss">

.album-block {
  padding: 1.25rem;
  display: block;
  text-decoration: none;
  background-color: $col-card;
  border-radius: 1rem;

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
      box-shadow: 0 0 10px $col-prot;

      img {
        transform: scale(1.05);
      }
      h4 {
        color: $col-prot;
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
  transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
}

h4 {
  margin-top: 1em;
  @include font-ui;
  font-weight: normal;
  font-size: 110%;
  color: white;
  transition: color 0.2s ease-out;
}

p {
  @include font-ui;
  font-size: 90%;
  color: $col-text-deut;
}

</style>
