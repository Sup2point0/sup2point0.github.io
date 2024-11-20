<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Cortex </h1>
  <p> Techy! </p>

  <Tags tags={["electronic", "rhythm", "techy"]} />
</AlbumInfo>

<Track
  preview={true}
  shard="purity"
  name="puri:ty"
  tags={["neurofunk"]}
  album="cortex"
  file="purity.m4a"
/>
<Track
  feat={true}
  shard="voxel"
  name="Voxel"
  tags={["electronic", "complextro", "arcade"]}
  album="cortex"
  file="voxel.m4a"
/>
<Track
  preview={true}
  shard="pseudorandom"
  name="pseudorandom"
  tags={["electronic", "random"]}
  album="cortex"
  file="pseudorandom.m4a"
/>
<Track
  preview={true}
  shard="dactyl"
  name="Dactyl"
  tags={["electronic"]}
  album="cortex"
  file="dactyl.m4a"
/>
