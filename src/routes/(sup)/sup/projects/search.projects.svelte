<!-- @component Search -->

<script lang="ts">

import { search_data } from "./search-data.svelte.ts";

</script>


<input
  type="search"
  value={search_data.query}
/>
