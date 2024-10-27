<script>

import "#styles/essence.scss";

import Nav from "#parts/ui/nav.svelte";
import Back from "#parts/ui/back.svelte";

</script>


<Back style="scarlet" />

<div id="page">
  <Nav />

  <main>
    <slot> Uh, something went wrong! </slot>
  </main>
</div>


<style lang="scss">

#page {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-color: $col-prot black;
}

main {
  width: 100%;
  max-width: max(80vw, 800px);
}

</style>
