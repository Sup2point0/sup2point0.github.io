<script lang="ts">

import NavLink from "./nav.link.svelte";


interface Props {
  home?: boolean
  margin?: string
}

let { home = false, margin = "1rem" }: Props = $props();

</script>


<nav class:home
  style:margin-bottom={margin}
>
  <NavLink text="INFO" link="/sup/info" />
  {#if !home}
    <NavLink text="SUP" link="https://sup2point0.github.io" />
  {/if}
  <NavLink text="LOVES" link="/sup/loves" />
  <NavLink text="MUSIC" link="/sup/music" />
  <NavLink text="PROJECTS" link="/sup/projects" />
  <NavLink text="DEV" link="/sup/dev" />
</nav>


<style lang="scss">

nav {
  pointer-events: initial;
  width: 100%;
  padding: 0.5rem;
  position: sticky;
  top: -1px;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgb(white, 4%);
  backdrop-filter: blur(12px) brightness(90%);
  transition: $trans;

  &.home {
    background: none;
    backdrop-filter: none;
  }
}

</style>
