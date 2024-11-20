<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Singles </h1>

  <Tags tags={["electronic"]} />
</AlbumInfo>

<Track
  preview={true}
  feat={true}
  shard="rise"
  name="Rise"
  tags={["vocals", "melodramatic"]}
  album="singles"
  file="ride.m4a"
/>
<Track
  shard="sunset"
  name="Sunset"
  tags={["chill"]}
  album="singles"
  file="sunset.m4a"
/>
