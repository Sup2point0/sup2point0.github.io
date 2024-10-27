<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Cortex </h1>
  <Tags tags={["electronic", "rhythm", "techy"]}
</AlbumInfo>

<Track
  preview={true}
  shard="erhythm-pure"
  name="eRhythm PURE"
  tags={["neurofunk"]}
  album="cortex"
  file=""
/>
<Track
  shard="voxel"
  name="Voxel"
  tags={["electronic", "rhythm", "complextro", "arcade"]}
  album="cortex"
  file="voxel.m4a"
/>
<Track
  preview={true}
  shard="dactyl"
  name="Dactyl"
  tags={["electronic"]}
  album="cortex"
  file=""
/>
