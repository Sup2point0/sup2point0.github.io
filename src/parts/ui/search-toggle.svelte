<!-- @component SearchToggle
 
A single toggle in search filters for enabling/disabling a particular search tag.
-->

<script lang="ts">

import { all, any, shardify } from "#scripts/utils";
import type { SearchFilter } from "#scripts/search-filter.svelte.ts";


interface Props {
  filters: SearchFilter<any>;
  category: string;
  option: string;
  resetting?: boolean;
}

let { filters, category, option, resetting = true }: Props = $props();


let options = $derived(filters[category]);
let active = $derived(options[option]);

function toggle(option: string, current_state: boolean)
{
  filters.is_dirty = true;

  if (!resetting) {
    options[option] = !current_state;
  }
  else {
    if (all(options)) {
      for (let opt in options) {
        options[opt] = false;
      }

      options[option] = true;
    }
    else {
      options[option] = !current_state;

      if (!any(options)) {
        for (let opt in options) {
          options[opt] = true;
        }
      }
    }
  }
}

</script>


<button
  class="toggle {category} {shardify(option)}"
  class:active
  onclick={() => toggle(option, active)}
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

  &.active, &:hover, &:focus-visible, &:active {
    &::before {
      background: $col-card-hover;
    }
  }

  &.active {
    padding-left: 0.6em;
    padding-right: 0.6em;
    color: $col-quat;
    opacity: 1;

    &.tech       { color: #4090f1; }
    &.supcode    { color: #40f190; }
    &.python     { color: #0064f1; }
    &.c-         { color: #ff0090; }
    &.ruby       { color: #ff1000; }
    &.haskell    { color: #9090f1; }
    &.rust       { color: #f160f1; }
    &.svelte-kit { color: #ff7020; }
    &.javascript { color: #ffc720; }
    &.javascript-typescript { color: #ffc720; }
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
