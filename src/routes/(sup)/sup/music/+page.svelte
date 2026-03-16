<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";

import Main        from "#parts/core/main.svelte";
import Cards       from "#parts/core/cards.svelte";
import Block       from "#parts/ui/block.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import LinkCard    from "#parts/ui/card.link.svelte";

import { onMount } from "svelte";


let displayed_route = $state("");

onMount(() => {
  displayed_route = routes.sample_value()!;
});


const routes = new FrozenWeightedList
(
  [1, `Music is such an irreplaceable part of my life and who I am. It’s been a long time coming, but I’ve fallen totally in with every aspect – listening to it, playing instruments, improvising, producing music, and everything in between.`],
);

</script>


<svelte:head>
  <title> Loves × Sup#2.0 </title>
  <meta name="description" content="All the music I listen to and create." />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music" },
]} />

<Main>
  <Block>
    {#if displayed_route}
      <p> {@html displayed_route} </p>
    {/if}
  </Block>

  <Cards>
    <LinkCard
      link="/sup/music/listen"
      text="Music I Listen To"
      capt="electronic, hardcore, beatbox, rhythm game music"
      picts={[
        "icons/artists/bo-burnham.webp",
        "icons/artists/camellia.png",
        "icons/artists/pikasonic.jpg",
        "icons/artists/silentroom.jpg",
        "icons/artists/vexento.jpg",
        "icons/artists/wing.jpg",
      ]}
      aspect="square"
    />
    <LinkCard
      link="/sup/music/create"
      text="Music I Make"
      capt="electronic, wackcore, game music"
      picts={[
        "covers/music/create/cortex.dactyl.png",
        "covers/music/create/cortex.voxel.png",
        "covers/music/create/elysion.aphenia.png",
        "covers/music/create/elysion.ceruleus.png",
        "covers/music/create/vision.another-dawn.png",
        "covers/music/create/vision.reminiscence.png",
      ]}
      aspect="square"
    />
  </Cards>
</Main>
