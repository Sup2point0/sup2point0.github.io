<script lang="ts">

import { base } from "$app/paths";
import { browser } from "$app/environment";

export let text: string;
export let intern: string;

</script>


<a class="part nav-link"
  href="{base}/{intern}"
  class:active={browser && window?.location.href == `${base}/${intern}`}
>
  {text}
</a>


<style lang="scss">

.part {
  margin: 0 0.5rem;
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
