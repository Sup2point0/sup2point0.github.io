<script>

import AlbumInfo from "#parts/music/album-info.svelte";
import Track from "#parts/music/track-block.svelte";

</script>


<AlbumInfo daw="ms">
  <h1> MuseScore Archives </h1>
  <Tags tags={["orchestral", "film"]}
</AlbumInfo>

<Track
  shard="wingless-butterfly"
  name="The Wingless Fire-Wielding Butterfly ..."
  year="2023 winter"
  tags={["piano", "jokes"]}
  album="singles"
  file="wingless-butterfly.mp3"
/>

<Track
  shard="bubble-iris"
  name="Bubble Iris"
  year="2023"
  tags={["film"]}
  album="singles"
  file="bubble-iris.mp3"
/>
<Track
  shard="insenza"
  name="Insenza"
  year="2022 – 2023"
  tags={["creepy"]}
  album="singles"
  file="insenza.mp3"
/>
