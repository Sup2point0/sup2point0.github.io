<!-- @component SearchFilters

A search bar input and dropdown filters for searching content.
-->

<script lang="ts">

import SearchInput from "#parts/ui/search-input.svelte";

import { SearchFilter } from "#scripts/search-filter.svelte";


interface Props {
  /* @ts-ignore */
  filters: SearchFilter;
}

let { filters = $bindable() }: Props = $props();

</script>


<search>
  <SearchInput bind:query={filters.query} />
</search>


<style lang="scss">

search {
  padding: 0 0 2rem;
}

</style>
