<script>

import "#styles/essence.scss";
import "#styles/page.scss";

import Back from "#parts/ui/back.svelte";
import Nav from "#parts/ui/nav.svelte";
import Footer from "#parts/ui/footer.svelte";

</script>


<Back style="scarlet" />

<div id="page">
  <Nav />

  <main>
    <slot> Uh, something went wrong! </slot>
  </main>

  <Footer />
</div>


<style lang="scss">

#page {
  min-height: 100vh;
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
