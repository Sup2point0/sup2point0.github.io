<script lang="ts">

import Cards from "#parts/core/cards.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

</script>


<Cards>
  <LinkCard
    link="/sup/loves/games"
    text="Games"
    capt="rhythm games, tower defence"
    picts={[
      "icons/games/bloons-td6.png",
      "icons/games/diep-io.webp",
      "icons/games/manifold-garden.png",
      "icons/games/master-duel.webp",
      "icons/games/phigros.webp",
    ]}
    aspect="square"
  />
  <LinkCard
    link="/sup/loves/films"
    text="Films"
    capt="sci-fi, dystopian, romance"
    picts={[
      "covers/films/dune-part-1.jpg",
      "covers/films/ne-zha-1.jpg",
      "covers/films/rogue-one.jpg",
      "covers/films/spider-man-homecoming.jpg",
      "covers/films/wild-robot.jpg",
    ]}
  />
  <LinkCard
    link="/sup/loves/series"
    text="Series"
    capt="heart-wrenching soul-wrecking sagas"
    picts={[
      "covers/series/arcane-s1.jpg",
      "covers/series/andor-s1.webp",
      "covers/series/the-kings-avatar.png",
      "covers/series/the-mandalorian.jpg",
    ]}
  />
  <LinkCard
    link="/sup/loves/anime"
    text="Anime"
    capt="wish I could watch more"
    picts={[
      "covers/anime/oshi-no-ko.webp",
      "covers/anime/pokemon-xyz.jpg",
      "covers/anime/suzume.jpg",
      "covers/anime/ygo-arc-v.jpg",
    ]}
  />
  <LinkCard
    link="/sup/loves/book-series"
    text="Book Series"
    capt="losing my soul in fictional worlds"
  />
</Cards>
