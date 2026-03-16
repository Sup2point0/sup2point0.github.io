<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";

import Cards       from "#parts/core/cards.svelte";
import Main        from "#parts/core/main.svelte";
import Block       from "#parts/ui/block.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import LinkCard    from "#parts/ui/card.link.svelte";

import { onMount } from "svelte";


let displayed_route = $state("");

onMount(() => { displayed_route = routes.sample_value()!; });


const routes = new FrozenWeightedList
(
  [1, `I vibe to pretty much all music. No no, genuinely.`],

  [1, `I’m not gonna lie, I listen to quite a ridiculous variety of music.`],
);

</script>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "listen" },
]} />

<Main>
  <Block>
    {#if displayed_route}
      <p> {@html displayed_route} </p>
    {/if}
  </Block>

  <Cards>
    <!-- <LinkCard link="/sup/music/listen/tracks" text="tracks I listen to" /> -->
    <LinkCard
      link="/sup/music/listen/chronicle"
      text="music? it’s complicated"
      picts={[
        "covers/music/listen/what-if.jpg",
        "covers/music/listen/ming-huo.jpg",
        "covers/music/listen/synthesis.jpg",
        "covers/music/listen/oo-parts.jpg",
        "covers/music/listen/ashed-wings.jpg",
        "covers/music/listen/terabyte-connection.jpg",
        "covers/music/listen/united.jpg",
      ]}
      aspect="square"
    />
    <LinkCard
      link="/sup/music/listen/artists"
      text="artists I listen to"
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
    <LinkCard link="/sup/music/listen/genres" text="genres I listen to" />
  </Cards>
</Main>
