<script lang="ts">

import { base } from "$app/paths";
import { browser } from "$app/environment";

export let text: string;
export let link: string | undefined = undefined;
export let intern: string | undefined = undefined;

</script>


<a class="part nav-link"
  href={link || `${base}/${intern}`}
  class:active={browser && window?.location.href == `${base}/${intern}`}
>
  {text}
</a>


<style lang="scss">

.part {
  min-width: 2rem;
  padding: 0.5em 1em;
  display: inline-block;

  @include font-ui;
  color: white;
  text-decoration: none;
  background-color: transparent;

  transition: background-color 0.2s ease-out;

  &.hover {
    color: $col-prot;
    background-color: $col-card;
  }

  &:hover, &.active {
    color: red;
  }
}

</style>
