<!-- @component Search -->

<script lang="ts">

import { search_data } from "./search-data.svelte.ts";

</script>


<input class="search"
  type="search"
  bind:value={search_data.query}
/>


<style lang="scss">

input.search {
  min-width: 50%;
  max-width: 75%;
  padding: 0.5em 1em;
  @include font-ui;
  font-size: 110%;
  color: white;
  background-color: rgb(white, 20%);
  border: none;
  outline: none;
  border-radius: 1rem;
}

</style>
