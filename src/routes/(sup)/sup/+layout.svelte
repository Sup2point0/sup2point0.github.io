<script>

import Nav from "#parts/ui/nav.svelte";
import Footer from "#parts/ui/footer.svelte";

</script>


<Nav />

<main>
  <slot> Uh, something went wrong! </slot>
</main>

<Footer />


<style lang="scss">

main {
  width: 100%;
  max-width: max(80vw, 800px);
  flex-grow: 1;
}

</style>
