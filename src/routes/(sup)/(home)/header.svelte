<!-- @component ProfileHeader -->

<script>

import ProfileLinks from "./links.svelte";

</script>


<header>
  <section class="sup">
    <div class="portal-container">
      <img id="purple-portal" alt="purple portal" src="purple-portal.png" />
      <ProfileLinks />
    </div>

    <img id="sup2point0" alt="Sup#2.0" src="sup2point0.png" >
  </section>

  <p> An avid portal with way too much in their neural cortex. </p>
</header>


<style lang="scss">

header {
  width: max-content;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

section.sup {
  margin-bottom: -4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.portal-container {
  position: relative;

  img#purple-portal {
    width: max(400px, 20vw);

    animation-name: spinny;
    animation-duration: 42s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spinny {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
}

img#sup2point0 {
  width: 42vw;
  position: relative;
  top: -5rem;
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

  &:hover {
    transform: scale(103%);
  }
}


p {
  @include font-fun;
  font-size: 150%;
  text-align: center;
}
  
</style>
