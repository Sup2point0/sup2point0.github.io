<script lang="ts">

import { base } from "$app/paths";
import { page } from "$app/state";
import { browser } from "$app/environment";


interface Props {
  text: string;
  link?: string;
  intern?: string;
}

let { text, link, intern }: Props = $props();


let active = $derived(
  browser && page.url && intern &&
  window?.location.pathname.includes(intern)
);

</script>


<a class="nav-link"
  class:active
  href={link || `${base}/${intern}`}
>
  {text}
</a>


<style lang="scss">

a.nav-link {
  min-width: 2rem;
  padding: 0.2em 0.5em 0;

  @include font-flavour;
  color: white;
  font-size: 150%;
  text-decoration: none;

  @include link($lesser: true);
  @include shear-card($interactive: true);

  transition: #{trans()};

  &::before {
    background: transparent;
    backdrop-filter: none;
  }

  &::after {
    bottom: -1px;
  }

  &:hover, &:focus-visible {
    padding-left: 0.8em;
    padding-right: 0.8em;
  }
}

a.nav-link.active {
  pointer-events: none;
  color: $col-text;
}

</style>
