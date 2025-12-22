<script lang="ts">

import Cards from "#parts/core/cards.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

</script>


<Cards>
  <LinkCard
    link="/sup/loves/games"
    text="Games"
    capt="rhythm games, tower defence"
  />
  <LinkCard
    link="/sup/loves/films"
    text="Films"
    capt="sci-fi, dystopian, romance"
  />
  <LinkCard
    link="/sup/loves/series"
    text="Series"
    capt="heart-wrenching soul-wrecking sagas"
  />
  <LinkCard
    link="/sup/loves/anime"
    text="Anime"
    capt="wish I could watch more"
  />
  <LinkCard
    link="/sup/loves/book-series"
    text="Book Series"
    capt="losing my soul in fictional worlds"
  />
</Cards>
