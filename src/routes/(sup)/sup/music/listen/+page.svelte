<script lang="ts">

import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

</script>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "listen" },
]} />

<div class="cards">
  <LinkCard link="/sup/music/listen/tracks" text="Tracks" />
  <LinkCard link="/sup/music/listen/artists" text="Artists" />
</div>


<style lang="scss">

.cards {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

</style>
