<!-- @component Profile -->

<script>

import { base } from "$app/paths";

</script>


<div class="profile">
  <section id="sup">
    <img id="purple-portal" alt="purple portal"
      src="{base}/purple-portal.png"
    >
    <img id="sup2point0" alt="Sup#2.0"
      src="{base}/sup2point0.png"
    >
  </section>

  <div id="bio">
    <p> An avid portal with way too much in their neural cortex. </p>
  </div>
</div>


<style lang="scss">

.profile {
  margin-bottom: 1rem;
}

#sup {
  margin-bottom: -3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  #purple-portal {
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

  #sup2point0 {
    width: 42vw;
    position: relative;
    top: -5rem;

    transition: transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      transform: scale(1.04);
    }
  }
}

#bio {
  @include font-flavour;
  text-align: center;
}
  
</style>
