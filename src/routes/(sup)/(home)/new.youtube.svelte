<!-- @component `ProfileYouTube`

Latest released YouTube videos!
-->

<script lang="ts">

import { Cards } from "#parts/core";
import { Adventure } from "#parts/special";

import { fade } from "svelte/transition";
import { page } from "$app/state";

</script>


{#if page.data.videos}
  <h2 transition:fade={{ duration: 500 }}>
    <Adventure tagless={true} routes={[
      [20, `latest videos`],
      [20, `recent videos`],
      [10, `new videos`],
    ]} />
  </h2>

  <Cards>
    {#each page.data.videos as { title, href, thumb }}
      <a {title} {href} target="_blank">
        <img class="thumbnail" alt={title} src={thumb} />

        <img class="youtube" alt="" src="/icons/socials/youtube-full.svg" />
      </a>
    {/each}
  </Cards>
{/if}


<style lang="scss">

a {
  width: 20rem;
  aspect-ratio: 16 / 9;
  display: block;
  position: relative;
  overflow: hidden;
  transform: skew($shear-factor);
  transition: $trans;

  &:hover, &:focus-visible {
    transform: skew($shear-factor) scale(102%);
    filter: saturate(120%);
    @include glow();
  }

  &:active {
    filter: saturate(120%) brightness(70%);
    transition: none;
  }
}

img.thumbnail {
  width: 22.5rem;
  position: relative;
  top: -50px;
  transform: translateX(-1.25rem) skew(-$shear-factor);
}

img.youtube {
  width: 2rem;
  aspect-ratio: 1 / 1;
  position: absolute;
  top: 5px;
  right: 10px;
  transform: skew(-$shear-factor);
}

</style>
