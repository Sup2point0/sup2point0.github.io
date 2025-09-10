<script>

import AlbumCard from "#parts/music/album-block.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";

</script>


<svelte:head>
  <title> Albums × Music × Sup#2.0 </title>
  <meta name="description" content="All the albums of music I’m working on!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create", intern: "sup/music/create" },
  { text: "albums" },
]} />

<div class="container">
  <section>
    <AlbumCard
      name="Singles"
      tracks={2}
      intern="singles"
      cover="sunset.png"
    />
  </section>

  <section>
    <AlbumCard
      name="Algorhythm Origins"
      year="2023 – PRESENT"
      tracks={7}
      intern="algo-origins"
      cover="origins.night.png"
    />
    <AlbumCard
      name="Algorhythm Roots"
      year="2024 – PRESENT"
      tracks={5}
      intern="algo-roots"
      cover="placeholder.png"
    />
    <AlbumCard
      name="Algorhythm Vision"
      year="2024 – PRESENT"
      tracks={5}
      intern="algo-vision"
      cover="vision.another-dawn.png"
    />
    <AlbumCard
      name="ELYSION"
      year="2023 – PRESENT"
      tracks={7}
      intern="elysion"
      cover="elysion.ceruleus.png"
    />
    <AlbumCard
      name="Cortex"
      year="2024 – PRESENT"
      tracks={8}
      intern="cortex"
      cover="cortex.voxel.png"
    />
    <AlbumCard
      preview={true}
      name="Integral"
      year="2024 – PRESENT"
      tracks={8}
      intern="integral"
      cover="placeholder.png"
    />
    <AlbumCard
      preview={true}
      name="Affinity"
      tracks={9}
      year="FUTURE"
      intern="affinity"
      cover="placeholder.png"
    />
    <AlbumCard
      preview={true}
      name="Fidelity"
      tracks={7}
      year="FUTURE"
      intern="fidelity"
      cover="placeholder.png"
    />
    <AlbumCard
      name="Stranded"
      tracks={7}
      year="2025 – PRESENT"
      intern="stranded"
      cover="placeholder.png"
    />
  </section>

  <section>
    <AlbumCard
      name="GarageBand Archives"
      year="2024 and earlier"
      tracks={4}
      intern="archives/garageband"
      cover="garageband.jpg"
    />
    <AlbumCard
      name="MuseScore Archives"
      year="2023 and earlier"
      tracks={3}
      intern="archives/musescore"
      cover="musescore.png"
    />
  </section>
</div>


<style lang="scss">

.container {
  width: 80%;
  max-width: 100rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 4rem;
}

section {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

</style>
