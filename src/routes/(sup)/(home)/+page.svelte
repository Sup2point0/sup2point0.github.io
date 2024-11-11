<script>

import Nav from "#parts/ui/nav.svelte";
import Footer from "#parts/ui/footer.svelte";

import Profile from "./profile.svelte";
import ProfileWords from "./profile.words.svelte";
import ProfileBlocks from "./profile.blocks.svelte";

</script>


<svelte:head>
  <title> Sup#2.0 </title>
  <meta name="description" content="An avid portal with way too much in their neural cortex." />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Sup#2.0" />
  <meta property="og:description" content="An avid portal with way too much in their neural cortex." />
  <meta property="og:image" content="/purple-portal.png" />
</svelte:head>

<main>
  <Profile />
  <Nav />

  <ProfileWords />
  <ProfileBlocks />

  <Footer />
</main>


<style lang="scss">
  
main {
  width: 100%;
  max-width: 80vw;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
