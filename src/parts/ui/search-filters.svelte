<!-- @component SearchFilters

A search bar input and dropdown filters for searching content.
-->

<script lang="ts">

import SearchInput from "#parts/ui/search-input.svelte";

interface Props {
  query: string;
}

let { query = $bindable() }: Props = $props();

</script>


<search>
  <SearchInput bind:query />
</search>


<style lang="scss">

search {
  padding: 0 0 2rem;
}

</style>
