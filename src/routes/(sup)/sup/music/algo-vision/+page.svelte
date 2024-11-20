<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Algorhythm Vision </h1>
  <p> New soundtracks created for the revival of my rhythm game <em>Algorhythm</em>.

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
  shard="reminiscence"
  name="Reminiscence"
  tags={["muted", "mood"]}
  album="algo-vision"
  file="reminiscence.m4a"
/>
<Track
  preview={true}
  shard="daybreak"
  name="Daybreak"
  tags={["vibrant"]}
  album="algo-vision"
  file="daybreak.m4a"
/>
<Track
  preview={true}
  feat={true}
  shard="midnight"
  name="Midnight"
  album="algo-vision"
  file="midnight.m4a"
/>
