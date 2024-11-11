<script>

import NavLink from "#parts/ui/nav.link.svelte";

</script>


<nav>
  <NavLink
    text="info"
    intern="/sup/info"
  />
  <NavLink
    text="sup"
    link="https://sup2point0.github.io"
  />
  <NavLink
    text="loves"
    intern="/sup/loves"
  />
  <NavLink
    text="music"
    intern="/sup/music"
  />
  <NavLink
    text="projects"
    intern="/sup/projects"
  />
  <NavLink
    text="dev"
    intern="/sup/dev"
  />
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
  gap: 0.5rem;
  background: transparent;
  backdrop-filter: blur(16px) brightness(0.9);
}

</style>
