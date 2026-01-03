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
      "games/icons/phigros.webp",
      "games/icons/manifold-garden.png",
      "games/icons/bloons-td6.png",
      "games/icons/master-duel.webp",
    ]}
    aspect="square"
  />
  <LinkCard
    link="/sup/loves/films"
    text="Films"
    capt="sci-fi, dystopian, romance"
    picts={[
      "covers/films/dune-part-1.jpg",
      "covers/films/wild-robot.jpg",
      "covers/films/rogue-one.jpg",
      "covers/films/spider-man-homecoming.jpg",
    ]}
  />
  <LinkCard
    link="/sup/loves/series"
    text="Series"
    capt="heart-wrenching soul-wrecking sagas"
    picts={[
      "covers/series/the-kings-avatar.png",
      "covers/series/arcane-s1.jpg",
      "covers/series/andor-s1.webp",
    ]}
  />
  <LinkCard
    link="/sup/loves/anime"
    text="Anime"
    capt="wish I could watch more"
    picts={[
      "covers/anime/suzume.jpg",
      "covers/anime/oshi-no-ko.webp",
      "covers/anime/pokemon-xyz.jpg",
    ]}
  />
  <LinkCard
    link="/sup/loves/book-series"
    text="Book Series"
    capt="losing my soul in fictional worlds"
  />
</Cards>
