<!-- @component Search -->

<script lang="ts">

import { search_data } from "./search-data.svelte.ts";

</script>


<div class="search-projects">
  <input class="search"
    type="search"
    bind:value={search_data.query}
  />
</div>


<style lang="scss">

div.search-projects {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

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
