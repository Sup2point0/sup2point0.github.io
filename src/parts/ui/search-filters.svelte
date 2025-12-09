<!-- @component SearchFilters

A search bar input and dropdown filters for searching content.
-->

<script lang="ts">

import SearchInput from "#parts/ui/search-input.svelte";
import SearchToggle from "#parts/ui/search-toggle.svelte";

import { SearchFilter } from "#scripts/search-filter.svelte";

import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  filters: SearchFilter<any>;
}

let { filters = $bindable() }: Props = $props();


let open = $state(false);

</script>


<search>
  <div class="row">
    <SearchInput bind:query={filters.query} />

    <button class="expand" onclick={() => { open = !open; }}>
      ×
    </button>
  </div>

  {#if open}
    {@const toggles = filters.get_toggles()}

    <div class="filters"
      transition:slide={{ duration: 1000, easing: expoInOut }}
    >
      <table><tbody>
        {#each Object.entries(toggles) as [category, options]}
          <tr>
            <th> {category.toUpperCase()} </th>
            <td>
              <div class="toggles">
                {#each Object.keys(options) as option}
                  <SearchToggle {filters} {category} {option} />
                {/each}
              </div>
            </td>
          </tr>
        {/each}

        <tr>
          <th> GROUP BY </th>
          <td></td>
        </tr>

        <tr>
          <th> SORT BY </th>
          <td></td>
        </tr>
      </tbody></table>
    </div>
  
  {:else}
    <div class="filters">
      <div class="toggles">

      </div>
    </div>
  
  {/if}
</search>


<style lang="scss">

search {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.row {
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;

  button.expand {
    width: 2.5rem;
    @include shear-card();
    @include font-fun;
    color: $col-text;
    font-size: 1.5rem;
    background: none;
    border: none;
    outline: none;

    &::before {
      background: rgb(white, 25%);
    }

    &:hover {
      &::before {
        background: rgb(white, 30%);
      }
    }
  }
}

.filters {
  padding-top: 2rem;
  
  table {
    max-width: min(80vw, 60rem);

    th, td {
      padding: 0.8rem 0;
    }

    th {
      padding-right: 2rem;
      @include font-tech;
      font-weight: normal;
      text-align: right;
    }
  }
}

.toggles {
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;
}

</style>
