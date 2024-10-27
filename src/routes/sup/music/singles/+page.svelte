<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Singles </h1>
  <Tags tags={["electronic"]}
</AlbumInfo>

<Track
  shard="sunset"
  name="Sunset"
  tags={["chill"]}
  album="singles"
  file="sunset.m4a"
/>
