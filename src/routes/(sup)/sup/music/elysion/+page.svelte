<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> ELYSION </h1>
  <p> Experimental soundtracks in a variety of genres </p>

  <Tags tags={["electronic", "rhythm", "experimental"]} />
</AlbumInfo>

<Track
  shard="aphenia"
  name="Aphenia"
  tags={["neurofunk", "sinister"]}
  album="elysion"
  file="aphenia.m4a"
/>
<Track
  preview={true}
  shard="lullacry"
  name="Lullacry"
  tags={["lo-fi"]}
  album="elysion"
  file="lullacry.m4a"
/>
<Track
  feat={true}
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
  tags={["artcore", "piano", "vibrant"]}
  album="elysion"
  file="viridian.m4a"
/>
<Track
  preview={true}
  feat={true}
  shard="scars"
  name="Scars"
  tags={["hardcore", "melodramatic"]}
  album="elysion"
  file="scars.m4a"
/>
