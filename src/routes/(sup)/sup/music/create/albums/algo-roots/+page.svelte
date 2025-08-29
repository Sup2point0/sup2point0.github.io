<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Algorhythm Roots </h1>
  <p> More soundtracks created for my rhythm game <em>Algorhythm</em>! </p>

  <Tags tags={["electronic", "rhythm"]} />
</AlbumInfo>

<Track
  shard="rejuvenate"
  name="Rejuvenate"
  tags={["vibrant", "chill"]}
  album="algo-roots"
  file="rejuvenate.m4a"
/>
<Track
  preview={true}
  shard="away"
  name="Away"
  tags={[]}
  album="algo-roots"
  file="away.m4a"
/>
