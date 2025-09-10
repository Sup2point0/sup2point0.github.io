<script lang="ts">

import LinkCard from "#parts/ui/card.link.svelte";

</script>


<div class="cards">
  <LinkCard intern="sup/music/listen" text="Music I Listen To">
  </LinkCard>

  <LinkCard intern="sup/music/create" text="Music I Make">
  </LinkCard>
</div>


<style lang="scss">

.cards {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

</style>
