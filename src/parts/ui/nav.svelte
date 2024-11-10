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
  margin: 1rem auto;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

</style>
