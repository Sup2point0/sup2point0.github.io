<script lang="ts">

import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

</script>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create" },
]} />

<div class="cards">
  <LinkCard intern="sup/music/create/tracks" text="Tracks">
  </LinkCard>

  <LinkCard intern="sup/music/create/albums" text="Albums">
  </LinkCard>
</div>


<style lang="scss">

.cards {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

</style>
