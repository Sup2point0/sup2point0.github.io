<!-- @component Toggles
 
A collection of search filter toggles.
-->

<script lang="ts">

import { shardify } from "#scripts/utils";


interface Props {
  property: string;
  options: Record<string, boolean>;
}

let { property, options = $bindable() }: Props = $props();


function toggle(option: string, current_state: boolean)
{
  if (Object.values(options).every(s => s)) {
    for (let opt in options) {
      options[opt] = false;
    }
    options[option] = true;
  }
  else {
    options[option] = !current_state;
  }
}

</script>


<div class="toggles">
  {#each Object.entries(options) as [option, state]}
    <button
      class="toggle {property} {shardify(option)}"
      class:active={state}
      onclick={() => toggle(option, state)}
    >
      {option}
    </button>
  {/each}
</div>


<style lang="scss">

.toggles {
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;
}

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
