<script>

import { base } from "$app/paths";

import ProfileLinks from "./ProfileLinks.svelte";

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

  <ProfileLinks />

  <div id="bio">
    <p> An avid portal with way too much in their neural cortex. </p>
    <p id="bio-hover">
      what does that even mean
    </p>
  </div>
</section>


<style lang="scss">

#profile {
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
}

#sup {
  padding: 1rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  #purple-portal {
    width: 20vw;
  }

  #sup2point0 {
    width: 42vw;
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
