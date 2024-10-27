<!-- @component Background -->
<script lang="ts">

export let style: "violet" | "scarlet" = "scarlet";

</script>


<img class="part back"
  src="/ui/cortex-{style}-vert.jpg"
/>


<style lang="scss">

.part {
  max-width: 100%;
  max-height: none;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  filter: blur(4px) brightness(0.88);
  transform: translateZ(-20px) scale(2);
}

</style>
