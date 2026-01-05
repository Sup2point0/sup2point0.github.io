<script lang="ts">

import Cards from "#parts/core/cards.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

</script>


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
      "covers/music/cortex.dactyl.png",
      "covers/music/cortex.voxel.png",
      "covers/music/elysion.aphenia.png",
      "covers/music/elysion.ceruleus.png",
      "covers/music/vision.another-dawn.png",
      "covers/music/vision.reminiscence.png",
    ]}
    aspect="square"
  />
</Cards>
