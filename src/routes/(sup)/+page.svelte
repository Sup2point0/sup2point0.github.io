<script>

import Words from "#parts/words.svelte";

import Back from "#parts/ui/back.svelte";

import { base } from "$app/paths";

</script>


<section id="profile">
  <section id="sup">
    <img id="purple-portal" alt="purple portal"
      src="{base}/purple-portal.png"
    >
    <img id="sup2point0" alt="Sup#2.0"
      src="{base}/sup2point0.png"
    >
  </section>

  <!-- <ProfileLinks /> -->

  <div id="bio">
    <p> An avid portal with way too much in their neural cortex. </p>
  </div>
</section>

<section id="intro">
  <p> sup, I’m Sup o/ </p>
  <p> Capturing the essence of me in a short bio is a hopelessly nontrivial NP-hard problem, so I’ll leave you to explore ^v^ </p>
</section>


<style lang="scss">

#profile {
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: transparent;
}

#sup {
  padding: 1rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  #purple-portal {
    width: max(400px, 20vw);
  }

  #sup2point0 {
    width: 42vw;
    position: relative;
    top: -2rem;
  }
}

#bio {
  p {
    @include font-flavour;
  }

  #bio-hover {
    display: none;
    color: rgba(white, 0.42);
    opacity: 0;

    transition: opacity 0.2s ease-out;
  }
  &:hover #bio-hover {
    display: block;
    opacity: 1;
  }
}

</style>
