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
}

let { filters, category, option }: Props = $props();


let options = $derived(filters[category]);

function toggle(option: string, current_state: boolean)
{
  filters.is_dirty = true;

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

</script>


<button
  class="toggle {category} {shardify(option)}"
  class:active={options[option]}
  onclick={() => toggle(option, options[option])}
>
  {option}
</button>


<style lang="scss">

button {
  padding: 0.15em 0.5em 0;
  @include font-fun;
  color: $col-text-deut;
  font-size: 120%;
  background: none;
  border: none;
  outline: none;
  @include shear-card();
  transition: #{trans()};

  &.active {
    padding-left: 0.8em;
    padding-right: 0.8em;
    color: $col-quat;

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
  }

  &:active {
    color: $col-trit !important;
    transform: scale(96%);
  }
}

</style>
