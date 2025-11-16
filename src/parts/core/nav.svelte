<script lang="ts">

import NavLink from "#parts/core/nav.link.svelte";

import { onMount } from "svelte";


interface Props {
  back?: boolean;
}

let { back = true }: Props = $props();


let self: HTMLElement;
let fixed = $state(false);

onMount(() => {
  if (back) return;

  let observer = new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio < 1) {
      fixed = true;
    } else {
      fixed = false;
    }
  }, {
    threshold: 1.0,
  });

  observer.observe(self);
});

</script>


<nav class={{ back, fixed }}
  bind:this={self}
>
  <NavLink text="INFO" link="/sup/info" />
  <NavLink text="SUP" link="https://sup2point0.github.io" />
  <NavLink text="LOVES" link="/sup/loves" />
  <NavLink text="MUSIC" link="/sup/music" />
  <NavLink text="PROJECTS" link="/sup/projects" />
  <NavLink text="DEV" link="/sup/dev" dead={true} />
</nav>


<style lang="scss">

nav {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  position: sticky;
  top: -1px;
  z-index: 20;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: #{trans()};

  &.back, &.fixed {
    background: rgb(white, 4%);
    backdrop-filter: blur(12px) brightness(90%);
  }
}

</style>
