<script>

import "#styles/essence.scss";

import Back from "#parts/ui/back.svelte";

</script>


<Back style="scarlet" />

<div id="page">
  <slot> Uh, something went wrong! </slot>
</div>


<style lang="scss">

#page {
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-color: $col-prot black;
}

</style>
