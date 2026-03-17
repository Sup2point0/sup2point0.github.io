<!-- @component PurplePortal

The iconic purple portal profile picture icon, complete with animations and special effects.
-->

<script lang="ts">

</script>


<div class="container">
  <img alt="purple portal" src="/purple-portal.png" />
</div>


<style lang="scss">

@use 'sass:color';


.container {
  transform: scale(100%);
  transition: transform 2.0s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

  &:has(img:hover) {
    transform: scale(102%);
  }
}

img {
  height: max(400px, 20vh);
  transition: filter 0.42s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

  animation-name: spinny;
  animation-duration: 42s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:hover {
    filter: drop-shadow(0 0 69px color.change($col-prot, $alpha: 0.25));
  }

  @keyframes spinny {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}

</style>
