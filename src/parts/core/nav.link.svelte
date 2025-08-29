<script lang="ts">

import { base } from "$app/paths";
import { browser } from "$app/environment";


interface Props {
  text: string;
  link?: string;
  intern?: string;
}

let { text, link, intern }: Props = $props();

</script>


<a class="nav-link"
  class:active={browser && window?.location.pathname === intern}
  href={link || `${base}/${intern}`}
>
  {text}
</a>


<style lang="scss">

a.nav-link {
  min-width: 2rem;
  padding: 0.2em 0.5em 0;
  position: relative;
  display: inline-block;

  @include font-flavour;
  color: white;
  font-size: 150%;
  text-decoration: none;
  background: none;
  @include trans;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    padding: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: transparent;
    transform: skew(-12deg);
    @include trans;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: $col-deut;

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.16s ease-out;
  }

  &.active {
    color: $col-prot;
  }

  &:hover, &:focus, &:focus-visible {
    color: $col-deut;
    padding-left: 0.8em;
    padding-right: 0.8em;

    &::before {
      background: $col-card-hover;
    }

    &:after {
      transform: scaleX(1);
      transform-origin: center;
    }
  }

  &:active {
    color: $col-trit;

    &::after {
      background: $col-trit;
    }
  }
}

</style>
