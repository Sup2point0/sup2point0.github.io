<!-- @component PurplePortal

The iconic purple portal profile picture icon, complete with animations and special effects.
-->

<script lang="ts">

import { base } from "$app/paths";

</script>


<div class="container">
  <img
    class="purple-portal"
    alt="purple portal"
    src="{base}/purple-portal.png"
  />
</div>


<style lang="scss">

@use 'sass:color';


img.purple-portal {
  height: max(400px, 20vh);

  animation-name: spinny;
  animation-duration: 42s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  transition: filter 0.42s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

  &:hover {
    filter: drop-shadow(0 0 69px color.change($col-prot, $alpha: 0.25));
  }

  @keyframes spinny {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}

</style>
