<script lang="ts">

import Cards from "#parts/core/cards.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

</script>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create" },
]} />

<Cards>
  <LinkCard
    link="/sup/music/create/tracks"
    text="My Tracks"
    picts={[
      "covers/music/create/cortex.syntax-error.png",
      "covers/music/create/cortex.elysion.png",
      "covers/music/create/roots.rush-reloaded.png",
      "covers/music/create/vision.another-dawn.png",
      "covers/music/create/vision.reminiscence.png",
      "covers/music/create/elysion.aphenia.png",
    ]}
    aspect="square"
  />
  <LinkCard
    link="/sup/music/create/albums"
    text="My Albums"
    picts={[
      "covers/music/create/cortex.png",
      "covers/music/create/elysion.png",
      "covers/music/create/vision.nightfall.png",
      "covers/music/create/origins.night.png",
      "covers/music/create/single.skies-above.png",
    ]}
    aspect="square"
  />
</Cards>
