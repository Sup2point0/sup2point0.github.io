<!-- @component SearchToggle
 
A single toggle in search filters for enabling/disabling a particular search tag.
-->

<script lang="ts">

import { all, any, shardify } from "#scripts/utils";
import type { SearchFilter } from "#scripts/search";


interface Props {
  filters: SearchFilter<any>;
  category: string;
  option: string;
  resetting?: boolean;
}

let { filters, category, option, resetting = true }: Props = $props();


let options = $derived(filters[category]);
let enabled = $derived(options[option]);
let dirty_polarity = 1;

function toggle(option: string, current_state: boolean)
{
  if (!resetting) {
    options[option] = !current_state;
    filters.dirtiness += dirty_polarity;
    dirty_polarity *= -1;
  }
  else {
    if (all(options)) {
      for (let opt in options) {
        options[opt] = false;
        filters.dirtiness++;
      }

      options[option] = true;
    }
    else {
      options[option] = !current_state;

      if (!any(options)) {
        for (let opt in options) {
          options[opt] = true;
          filters.dirtiness--;
        }
      }
    }
  }
}

</script>


<button
  class="toggle {category} {shardify(option)}"
  class:enabled
  onclick={() => toggle(option, enabled)}
>
  {option?.toUpperCase()}
</button>


<style lang="scss">

button {
  padding: 0.15em 0.4em 0;
  @include font-fun;
  color: $col-text-deut;
  font-size: 120%;
  background: none;
  border: none;
  outline: none;
  @include shear-card();
  opacity: 0.8;
  transition: #{trans()};

  &.enabled, &:hover, &:focus-visible, &:active {
    &::before {
      background: $col-card-hover;
    }
  }

  &.enabled {
    padding-left: 0.6em;
    padding-right: 0.6em;
    color: $col-quat;
    opacity: 1;

    &.tech       { color: #40e0ff; }
    // &.supcode    { color: white; }
    &.python     { color: #0064f1; }
    &.c-         { color: #ff0090; }
    &.ruby       { color: #ff1000; }
    &.haskell    { color: #9090f1; }
    &.rust       { color: #f160f1; }
    &.svelte-kit { color: #ff7020; }
    &.javascript { color: #ffc720; }
    &.javascript-typescript { color: #ffc720; }
    &.unity      { color: #40f190; }

    &.developing,
    &.active        { color: #40f190; }
    &.maintaining   { color: #40e0ff; }
    &.opportunistic { color: #c7c7ff; }
    &.wishlist      { color: #f190f1; }
  }

  &:hover {
    cursor: pointer;
    color: $col-text !important;
    opacity: 1;
  }

  &:active {
    color: $col-trit !important;
    transform: scale(96%);
    opacity: 1;
  }
}

</style>
