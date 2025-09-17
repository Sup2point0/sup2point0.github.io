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
  <LinkCard link="/sup/music/create/tracks" text="My Tracks" />
  <LinkCard link="/sup/music/create/albums" text="My Albums" />
</Cards>
