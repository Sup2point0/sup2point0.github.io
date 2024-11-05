<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Algorhythm Vision </h1>
  <Tags tags={["electronic", "rhythm"]} />
</AlbumInfo>

<Track
  preview={true}
  feat={true}
  shard="another-dawn"
  name="Another Dawn"
  tags={["epic", "vibrant"]}
  album="algo-vision"
  file="another-dawn.m4a"
/>
<Track
  preview={true}
  shard="reminiscence"
  name="Reminiscence"
  tags={["muted", "mood"]}
  album="algo-vision"
  file=""
/>
<Track
  shard="daybreak"
  name="Daybreak"
  tags={["vibrant"]}
  album="algo-vision"
  file=""
/>
<Track
  preview={true}
  feat={true}
  shard="rise"
  name="Rise"
  tags={["vocal", "melodramatic"]}
  album="algo-vision"
  file=""
/>
