<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";
import Tags from "#parts/music/tags.svelte";

</script>


<AlbumInfo daw="gb">
  <h1> GarageBand Archives </h1>
  <p> Miscellaneous and ancient creations in GarageBand. </p>

  <Tags tags={["electronic"]} />
</AlbumInfo>

<Track
  shard="let-you-down"
  name="Let You Down"
  year="2024 spring"
  tags={["chill", "jokes"]}
  album="singles"
  file="let-you-down.m4a"
/>
<Track
  shard="canon-in-d-remix"
  name="Canon in D (remix)"
  year="2019"
  tags={["orchestral", "vibrant"]}
  album="singles"
  file="canon-in-d-remix.m4a"
/>
<Track
  shard="rush"
  name="Rush"
  year="2019"
  tags={["bass", "experimental"]}
  album="singles"
  file=""
/>
<Track
  feat={true}
  shard="base-memories"
  name="Base Memories"
  year="2019"
  tags={["bass", "muted", "experimental"]}
  album="singles"
  file="base-memories.m4a"
/>
