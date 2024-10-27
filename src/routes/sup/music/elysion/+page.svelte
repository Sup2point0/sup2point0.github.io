<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> ELYSION </h1>
  <Tags tags={["electronic", "rhythm", "experimental"]}
</AlbumInfo>

<Track
  shard="aphenia"
  name="Aphenia"
  tags={["neurofunk", "creepy"]}
  album="elysion"
  file="aphenia.m4a"
/>
<Track
  shard="ceruleus"
  name="Ceruleus"
  tags={["orchestral", "neurofunk", "poignant"]}
  album="elysion"
  file="ceruleus.m4a"
/>
<Track
  preview={true}
  shard="viridian"
  name="Viridian"
  tags={[]}
  album="elysion"
  file=""
/>
<Track
  preview={true}
  feat={true}
  shard="scars"
  name="Scars"
  tags={["hardcore", "melodramatic"]}
  album="elysion"
  file=""
/>
