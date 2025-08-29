<script>

import NavLink from "#parts/core/nav.link.svelte";

</script>


<nav>
  <NavLink text="INFO" intern="sup/info" />
  <NavLink text="SUP" link="https://sup2point0.github.io" />
  <NavLink text="LOVES" intern="sup/loves" />
  <NavLink text="MUSIC" intern="sup/music" />
  <NavLink text="PROJECTS" intern="sup/projects" />
  <NavLink text="DEV" intern="sup/dev" />
</nav>


<style lang="scss">

nav {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgb(white, 4%);
  backdrop-filter: blur(12px) brightness(0.9);
}

</style>
