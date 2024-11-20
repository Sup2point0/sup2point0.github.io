<!-- @component Album -->
<script lang="ts">

export let preview: boolean = false;
export let name: string;
export let year: string = "";
export let tracks: number | undefined = undefined;
export let intern: string;
export let cover: string | undefined = undefined;

</script>


<a class="album-block"
  class:preview
  href="/sup/music/{intern}"
>
  <img alt={name} title={name}
    width="200px" height="200px"
    src="/music/covers/{cover ?? "placeholder.png"}"
  />

  <div class="info">
    <div>
      <h4> {name} </h4>
      <p> {year} </p>
    </div>
    
    {#if tracks}
      <div>
        <p> {tracks} </p>
      </div>
    {/if}
  </div>
</a>


<style lang="scss">

a.album-block {
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

.info {
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
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
