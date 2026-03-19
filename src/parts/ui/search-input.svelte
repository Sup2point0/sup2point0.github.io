<!-- @component SearchInput

A search input bar.
-->

<script lang="ts">

import { portal } from "#scripts/state";


interface Props {
  query: string;
  input?: HTMLInputElement | null;
}

let { query = $bindable(), input = $bindable(null) }: Props = $props();

</script>


<svelte:window onkeydown={e => {
  if (portal.live) return;
  
  if (e.key === "f" && document.activeElement !== input) {
    e.preventDefault();
    input?.focus();
  }
}} />


<div class="input-container">
  <input type="search"
    bind:value={query}
    placeholder="search"
    bind:this={input}
  />
</div>


<style lang="scss">

.input-container {
  width: min(32rem, 69vw);
  @include shear-card();
  transition: #{trans()};

  &::before {
    background: rgb(white, 25%);
  }

  &:hover, &:has(input:focus) {
    width: min(33rem, 75vw);

    &::before {
      background: rgb(white, 30%);
    }
  }

  &:has(input:active)::before {
    background: rgb(#ccc, 30%);
  }
}

input {
  width: 100%;
  padding: 0.5rem 1rem 0.45rem;

  appearance: none;
  @include font-fun;
  font-size: 1.25rem;
  color: $col-text;
  background: none;
  border: none;
  outline: none;

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
}

input::placeholder {
  @include font-fun;
  font-size: 1.25rem;
  color: $col-deut;
}

</style>
