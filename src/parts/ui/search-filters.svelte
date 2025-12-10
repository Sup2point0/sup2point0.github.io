<!-- @component SearchFilters

A search bar input and dropdown filters for searching content.
-->

<script lang="ts">

import SearchInput from "#parts/ui/search-input.svelte";
import SearchToggle from "#parts/ui/search-toggle.svelte";
import ClickySelect from "#parts/ui/clicky.select.svelte";

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
    <div class="filters"
      transition:slide={{ duration: 1000, easing: expoInOut }}
    >
      <table><tbody>
        {#each Object.entries(filters.toggles) as [category, options]}
          <tr> <th> {category?.toUpperCase()} </th>
            <td> <div class="toggles">
              {#each Object.keys(options) as option}
                <SearchToggle {filters} {category} {option} />
              {/each}
            </div> </td>
          </tr>
        {/each}

        <tr> <th> GROUP BY </th>
          <td> <div class="toggles">
            {#each filters.groups as group}
              <ClickySelect
                text={group.toUpperCase()}
                active={filters.group_by === group}
                onclick={() => {
                  if (group === "default") {
                    if (filters.group_by !== "default") {
                      filters.group_by = "default";
                      filters.dirtiness--;
                    }
                  }
                  else {
                    if (filters.group_by === "default") {
                      filters.dirtiness++;
                    }
                    filters.group_by = group;
                  }
                }}
              />
            {/each}
          </div> </td>
        </tr>

        <tr> <th> FILTER BY </th>
          <td> <div class="toggles">
            {#each Object.keys(filters.filter_by) as option}
              <SearchToggle {filters} category="filter_by" {option} resetting={false} />
            {/each}
          </div> </td>
        </tr>

        <tr> <th> SORT BY </th>
          <td> <div class="toggles">
            {#each filters.sorts as sort}
              <ClickySelect
                text={sort.toUpperCase()}
                active={filters.sort_by === sort}
                onclick={() => {
                  if (sort === "default") {
                    if (filters.sort_by !== "default") {
                      filters.sort_by = "default";
                      filters.dirtiness--;
                    }
                  }
                  else {
                    if (filters.sort_by === "default") {
                      filters.dirtiness++;
                    }
                    filters.sort_by = sort;
                  }
                }}
              />
            {/each}
          </div> </td>
        </tr>
      </tbody></table>
    </div>
  
  {:else}
    <div class="filters" transition:slide={{ duration: 1000, easing: expoInOut }}>
      <div class="toggles">
        <span> SHOWING </span>

        {#each filters.previews as [category, option]}
          <SearchToggle {filters} {category} {option} />
        {/each}
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
      white-space: nowrap;
    }
  }
}

.toggles {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.25rem;

  span {
    padding-right: 1em;
    @include font-tech;
    color: $col-text-deut;
    font-weight: normal;
  }
}

</style>
