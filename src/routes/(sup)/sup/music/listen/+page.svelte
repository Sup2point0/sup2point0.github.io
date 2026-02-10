<script lang="ts">

import Cards from "#parts/core/cards.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

</script>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "listen" },
]} />

<Cards>
  <!-- <LinkCard link="/sup/music/listen/tracks" text="tracks I listen to" /> -->
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
  <LinkCard link="/sup/music/listen/chronicle" text="taste over the years" />
</Cards>
