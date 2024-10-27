<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> Algorhythm Origins </h1>
  <Tags tags={["electronic", "rhythm"]}
</AlbumInfo>

<Track
  shard="dawn"
  name="Dawn"
  tags={["muted", "chill"]}
  album="algo-origins"
  file="dawn.m4a"
/>
<Track
  shard="day"
  name="Day"
  tags={["vibrant"]}
  album="algo-origins"
  file="day.m4a"
/>
<Track
  shard="tomorrow"
  name="Tomorrow"
  tags={["vibrant"]}
  album="algo-origins"
  file="tomorrow.m4a"
/>
<Track
  feat={true}
  shard="night"
  name="Night"
  tags={["vibrant"]}
  album="algo-origins"
  file="night.m4a"
/>
<Track
  preview={true}
  shard="dusk"
  name="Dusk"
  tags={[]}
  album="algo-origins"
  file=""
/>
<Track
  preview={true}
  feat={true}
  shard="time"
  name="Time"
  tags={[]}
  album="algo-origins"
  file=""
/>
<Track
  preview={true}
  shard="twilight"
  name="Twilight"
  tags={[]}
  album="algo-origins"
  file="twilight.m4a"
/>
