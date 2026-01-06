<script>

import Footer from "#parts/core/footer.svelte";
import Main from "#src/parts/core/main.svelte";
import Nav from "#parts/core/nav.svelte";

import ProfileHeader from "./header.svelte";
import ProfileBio from "./bio.svelte";
import ProfileDirections from "./directions.svelte";

import ProfileCards from "./cards.svelte";
import ProfileLoves from "./loves.svelte";
import ProfileShowerthought from "./showerthought.svelte";
import ProfileFooter from "./footer.svelte";

</script>


<svelte:head>
  <title> Sup#2.0 </title>
  <meta name="author" content="Sup#2.0" />
  <meta name="description" content="An avid portal with way too much in their neural cortex." />

  <meta property="og:title" content="Sup#2.0" />
  <meta property="og:description" content="An avid portal with way too much in their neural cortex." />

  <meta name="google-site-verification" content="ua2bFDon6yUD7LDNbH4IBTAo6cVfiPAZaWkoMfhhBAc" />
</svelte:head>


<Main gap="3rem">
  <section class="upper">
    <div class="left">
      <ProfileHeader />
      <Nav back={false} />
    </div>

    <div class="right">
      <ProfileBio />
      <ProfileDirections />
    </div>
  </section>

  <section><ProfileCards /></section>
  <section><ProfileLoves /></section>

  <section><ProfileShowerthought /></section>
  <section><ProfileFooter /></section>
</Main>

<Footer />


<style lang="scss">

section {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

section.upper {
  flex-flow: row wrap;

  div {
    display: flex;
    flex-flow: column nowrap;

    &.left {
      flex-grow: 1;
      min-width: max-content;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }
    &.right {
      flex-shrink: 1;
      gap: 2rem;
    }
  }
}

</style>
