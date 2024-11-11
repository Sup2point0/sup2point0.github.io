<script>

import Album from "#parts/music/album-block.svelte";

</script>


<svelte:head>
  <title> music · Sup#2.0 </title>
  <meta name="description" content="All the music I produce!" />
</svelte:head>

<div class="collection">
  <Album
    name="Singles"
    year="2023 – present"
    intern="singles"
    cover="singles/sunset.png"
  />
  <Album
    name="GarageBand Archives"
    year="2024 and earlier"
    intern="archives/garageband"
    cover="garageband-archives.jpg"
  />
  <Album
    name="MuseScore Archives"
    year="2023 and earlier"
    intern="archives/musescore"
    cover="musescore-archives.png"
  />
</div>

<div class="collection">
  <Album
    name="Algorhythm Origins"
    year="2023 – present"
    intern="algo-origins"
    cover="algo-origins/night.png"
  />
  <Album
    name="Algorhythm Roots"
    year="2024 – present"
    intern="algo-roots"
    cover="algo-roots/rejuvenate.png"
  />
  <Album
    name="Algorhythm Vision"
    year="2024 – future"
    intern="algo-vision"
    cover="algo-vision/another-dawn.png"
  />
  <Album
    name="ELYSION"
    year="2023 – present"
    intern="elysion"
    cover="elysion/ceruleus.png"
  />
  <Album
    name="Cortex"
    year="2024 – present"
    intern="cortex"
    cover="cortex/voxel.png"
  />
  <Album
    preview={true}
    name="Fidelity"
    year="future"
    intern="fidelity"
  />
  <Album
    preview={true}
    name="Stranded"
    year="future"
    intern="stranded"
  />
  <Album
    preview={true}
    name="Integral"
    year="2024 – present"
    intern="Integral"
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
