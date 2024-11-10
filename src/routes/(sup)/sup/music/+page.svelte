<script>

import Album from "#parts/music/album-block.svelte";

</script>


<svelte:head>
  <title> music · Sup#2.0 </title>
  <meta name="description" content="All the music I produce!" />
</svelte:head>

<div class="collection">
  <Album
    shard="singles"
    name="Singles"
    year=""
  />
  <Album
    shard="archives/garageband"
    name="GarageBand Archives"
    year="2024 and earlier"
  />
  <Album
    shard="archives/musescore"
    name="MuseScore Archives"
    year="2023 and earlier"
  />
</div>

<div class="collection">
  <Album
    shard="algo-origins"
    name="Algorhythm Origins"
    year="2023 – present"
  />
  <Album
    shard="algo-roots"
    name="Algorhythm Roots"
    year="2024 – present"
  />
  <Album
    shard="algo-vision"
    name="Algorhythm Vision"
    year="2024 – future"
  />
  <Album
    shard="elysion"
    name="ELYSION"
    year="2023 – present"
  />
  <Album
    shard="cortex"
    name="Cortex"
    year="2024 – present"
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
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
}

</style>
