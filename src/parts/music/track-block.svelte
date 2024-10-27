<!-- @component Track -->
<script lang="ts">

import Tags from "#parts/music/tags.svelte";

import { base } from "$app/paths";

export let preview: boolean = false;
export let fav: boolean = false;
export let shard: string;
export let name: string;
export let year: string | undefined = undefined;
export let tags: string[] = [];
export let album: string = "singles";
export let file: string;

</script>

<div class="part track-block">
  <img alt={name} title={name}
    src="{base}/covers/{album}/{shard}.png"
  />

  <div class="details">
    <h4> {name} </h4>
    {#if year}
      <p> {year} </p>
    {/if}

    <Tags {tags} />
  </div>

  {#if file}
    <audio src="{base}/tracks/{album}/{file}" />
  {/if}
</div>


<style lang="scss">

.part {
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: $col-card;

  transition: all 0.2s ease-out;

  &.preview {
    opacity: 50%;
  }

  &:hover {
    background-color: $col-card-hover;
  }
}


img {
  height: 100%;
  max-height: 20vh;
  aspect-ratio: 1;
}

h4 {
  margin-bottom: 1em;
  @include font-flavour;
  font-size: 150%;
  color: white;
}

p {
  @include font-ui;
  font-size: 90%;
  color: $col-text-deut;
}

</style>
