<script>

import Nav from "#parts/ui/nav.svelte";
import Footer from "#parts/ui/footer.svelte";

import Profile from "./profile.svelte";
import ProfileWords from "./profile.words.svelte";

</script>


<main>
  <Profile />

  <Nav />

  <ProfileWords />

  <div style:padding="2rem"></div>

  <Footer />
</main>


<style lang="scss">
  
main {
  width: 100%;
  max-width: max(80vw, 800px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
