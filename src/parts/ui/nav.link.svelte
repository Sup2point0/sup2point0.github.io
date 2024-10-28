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
  position: relative;
  display: inline-block;

  @include font-ui;
  color: white;
  text-decoration: none;
  background-color: transparent;

  transition: background-color 0.2s ease-out;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $col-prot;

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.16s ease-out;
  }

  &.active {
    color: $col-prot;
  }

  &:hover, &:focus {
    color: $col-prot;
    background-color: $col-card;

    &:after {
      transform: scaleX(1);
      transform-origin: center;
    }
  }
}

</style>
