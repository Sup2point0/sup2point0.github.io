<script>

import Album from "#parts/music/album-block.svelte";

</script>


<svelte:head>
  <title> music · Sup#2.0 </title>
  <meta name="description" content="All the music I produce!" />
</svelte:head>

<div class="collection">
  <Album
    shard="archives/singles"
    name="Singles"
    year="2023 – present"
    cover="singles/sunset.png"
  />
  <Album
    shard="archives/garageband"
    name="GarageBand Archives"
    year="2024 and earlier"
    cover="garageband-archives.jpg"
  />
  <Album
    shard="musescore"
    name="MuseScore Archives"
    year="2023 and earlier"
    cover="musescore-archives.png"
  />
</div>

<div class="collection">
  <Album
    shard="algo-origins"
    name="Algorhythm Origins"
    year="2023 – present"
    cover="algo-origins/night.png"
  />
  <Album
    shard="algo-roots"
    name="Algorhythm Roots"
    year="2024 – present"
    cover="algo-roots/rejuvenate.png"
  />
  <Album
    shard="algo-vision"
    name="Algorhythm Vision"
    year="2024 – future"
    cover="algo-vision/another-dawn.png"
  />
  <Album
    shard="elysion"
    name="ELYSION"
    year="2023 – present"
    cover="elysion/ceruleus.png"
  />
  <Album
    shard="cortex"
    name="Cortex"
    year="2024 – present"
    cover="cortex/voxel.png"
  />
  <Album
    preview={true}
    shard="fidelity"
    name="Fidelity"
    year="future"
  />
  <Album
    preview={true}
    shard="stranded"
    name="Stranded"
    year="future"
  />
  <Album
    preview={true}
    shard="Integral"
    name="Integral"
    year="2024 – present"
  />
</div>


<style lang="scss">

.collection {
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
