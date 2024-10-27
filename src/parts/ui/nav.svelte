<script>

import NavLink from "#parts/ui/nav.link.svelte";

</script>


<nav>
  <NavLink
    text="info"
    intern="sup/info"
  />
  <NavLink
    text="sup"
    link="https://sup2point0.github.io"
  />
  <NavLink
    text="loves"
    intern="sup/loves"
  />
  <NavLink
    text="music"
    intern="sup/music"
  />
  <NavLink
    text="projects"
    intern="sup/projects"
  />
  <NavLink
    text="dev"
    intern="sup/dev"
  />
</nav>


<style lang="scss">

nav {
  margin: 1rem;
}

</style>
