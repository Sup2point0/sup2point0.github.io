<script lang="ts">

import LinkCard from "#parts/ui/card.link.svelte";

</script>


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
