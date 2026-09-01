<!-- @component `ProfileYouTube`

Latest released YouTube videos!
-->

<script lang="ts">

import Cards     from "#parts/core/cards.svelte";
import Adventure from "#parts/special/adventure.svelte";

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
    {#each page.data.videos as id}
      <iframe width="356" height="200" src="https://www.youtube.com/embed/{id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    {/each}
  </Cards>
{/if}


<style lang="scss">



</style>
