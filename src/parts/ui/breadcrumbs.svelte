<!-- @component `<Breadcrumbs>`

Shows the current navigation path.
-->

<script lang="ts">

import { routes_data } from "#routes";
import type { url } from "#scripts/types";

import { page } from "$app/state";


let frags = $derived(page.url.pathname.split("/").slice(2));

let levels: Array<{
  title: string
  href: url
}>
= $derived.by(() => {
  let traversed_page = routes_data.sup;

  let out = [];
  let href = "/sup";

  for (let frag of frags) {
    // @ts-expect-error: uncheckable
    traversed_page = traversed_page[frag];

    href += "/";
    href += frag;

    out.push({
      title:
        (
          // @ts-expect-error: uncheckable
          traversed_page._s ?? traversed_page._t
        ).toUpperCase(),
      
      /* NOTE: Need a copy to detach from future mutations */
      href: `${href}`,
    });
  }

  return out;
});

</script>


<nav class="breadcrumbs">
  {#each levels as { title, href }, i}
    {#if i === levels.length - 1}
      <div class="text current"> {title} </div>
    
    {:else}
      <a class="text" {href}>{title}</a>
      <div class="separator">×</div>
    
    {/if}
  {/each}
</nav>


<style lang="scss">

nav {
  padding: 1rem 0 2rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.75em;
}

.text {
  padding: 0.2em 0.5em 0;
  @include font-fun;
  font-size: 125%;
}

.separator {
  @include font-fun;
  color: $col-text-deut;
  font-size: 125%;
}

a {
  @include link($lesser: true);
  @include shear-card($interactive: true) {
    background: transparent;
    backdrop-filter: none;
  }
  transition: $trans;

  &::after {
    bottom: -1px;
  }

  &:hover, &:focus, &:focus-visible {
    padding-left: 0.8em;
    padding-right: 0.8em;
  }
}

</style>
