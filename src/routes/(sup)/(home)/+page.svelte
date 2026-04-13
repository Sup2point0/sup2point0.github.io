<script>

import { set_portal_state } from "#scripts/state";

import Footer from "#parts/core/footer.svelte";
import Main   from "#parts/core/main.svelte";
import Nav    from "#parts/core/nav.svelte";

import ProfileHeader     from "./header.svelte";
import ProfileBio        from "./bio.svelte";
import ProfileDirections from "./directions.svelte";

import ProfileCards         from "./create.svelte";
import ProfileLoves         from "./loves.svelte";
import ProfileShowerthought from "./showerthought.svelte";

</script>


<svelte:head>
  <title> Sup#2.0 </title>
  <meta name="author" content="Sup#2.0" />
  <meta name="description" content="an avid portal with way too much in their neural cortex" />

  <meta property="og:title" content="Sup#2.0" />
  <meta property="og:description" content="an avid portal with way too much in their neural cortex" />

  <meta name="google-site-verification" content="ua2bFDon6yUD7LDNbH4IBTAo6cVfiPAZaWkoMfhhBAc" />
</svelte:head>


<Main gap="5rem">
  <section class="upper">
    <div class="left">
      <ProfileHeader />
      <Nav with-back={false} />
    </div>

    <div class="right">
      <ProfileBio />
      <ProfileDirections />
    </div>

    <button onclick={set_portal_state(true)}>explore...</button>
  </section>

  <section><ProfileCards /></section>
  <section><ProfileLoves /></section>

  <section><ProfileShowerthought /></section>
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
  padding-top: 1rem;
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

button {
  min-width: min(30em, 90vw);
  padding: 0.5rem 1rem 0.45rem;
  appearance: none;
  @include font-fun;
  font-size: 1.25rem;
  color: $col-text;
  @include shear-card($light: true);
  background: none;
  border: none;
  outline: none;

  &::before {
    background: $col-card-light;
  }

  &:hover {
    cursor: pointer;

    &::before {
      background: $col-card-light-hover;
    }
  }
}

@media (max-width: $width-shrink) {
  section.upper {
    flex-flow: column nowrap;
  }
}

</style>
