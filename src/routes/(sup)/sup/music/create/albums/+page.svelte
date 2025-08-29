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
    tracks={1}
    intern="singles"
    cover="singles/sunset.png"
  />
</div>

<div class="collection">
  <Album
    name="Algorhythm Origins"
    year="2023 – present"
    tracks={8}
    intern="algo-origins"
    cover="algo-origins/night.png"
  />
  <Album
    name="Algorhythm Roots"
    year="2024 – present"
    tracks={4}
    intern="algo-roots"
    cover="algo-roots/rejuvenate.png"
  />
  <Album
    name="Algorhythm Vision"
    year="2024 – future"
    tracks={4}
    intern="algo-vision"
    cover="algo-vision/reminiscence.png"
  />
  <Album
    name="ELYSION"
    year="2023 – present"
    tracks={7}
    intern="elysion"
    cover="elysion/ceruleus.png"
  />
  <Album
    name="Cortex"
    year="2024 – present"
    tracks={8}
    intern="cortex"
    cover="cortex/voxel.png"
  />
  <Album
    preview={true}
    name="Integral"
    year="2024 – present"
    intern="integral"
  />
  <Album
    preview={true}
    name="Affinity"
    tracks={9}
    year="2024 – present"
    intern="affinity"
  />
  <Album
    preview={true}
    name="Fidelity"
    tracks={7}
    year="future"
    intern="fidelity"
  />
  <Album
    preview={true}
    name="Stranded"
    tracks={6}
    year="future"
    intern="stranded"
  />
</div>

<div class="collection">
  <Album
    name="GarageBand Archives"
    year="2024 and earlier"
    tracks={4}
    intern="archives/garageband"
    cover="garageband-archives.jpg"
  />
  <Album
    name="MuseScore Archives"
    year="2023 and earlier"
    tracks={3}
    intern="archives/musescore"
    cover="musescore-archives.png"
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
