<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Algorhythm Roots </h1>
  <Tags tags={["electronic", "rhythm"]}
</AlbumInfo>

<Track
  shard="rejuvenate"
  name="Rejuvenate"
  tags={["vibrant", "chill"]}
  album="algo-roots"
  file="rejuvenate.m4a"
/>
