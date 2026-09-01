<!-- @component SearchFilters

A search bar input and dropdown filters for searching content.
-->

<script lang="ts">

import SearchInput from "#parts/ui/search-input.svelte";
import SearchToggle from "#parts/ui/search-toggle.svelte";
import ClickySelect from "#parts/ui/clicky.select.svelte";

import { SearchFilter } from "#scripts/search";

import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  filters: SearchFilter<any>;
  allow_expand?: boolean;
  result_count?: number;
}

let { filters = $bindable(), allow_expand = true, result_count }: Props = $props();


let open = $state(false);

</script>


<search>
  <div class="row">
    <SearchInput bind:query={filters.query} />

    {#if allow_expand}
      <button class="expand" class:open onclick={() => { open = !open; }}>
        <div> › </div>
      </button>
    {/if}
  </div>

  {#if open}
    <div class="filters" transition:slide={{ duration: 750, easing: expoInOut }}>
      <table><tbody>
        {#each Object.entries(filters.toggles ?? []) as [category, options]}
          <tr> <th> {category?.toUpperCase()} </th>
            <td> <div class="toggles">
              {#each Object.keys(options ?? {}) as option}
                <SearchToggle {filters} {category} {option} />
              {/each}
            </div> </td>
          </tr>
        {/each}

        {#if Object.keys(filters.filter_by ?? {}).length > 0}
          <tr> <th> FILTER BY </th>
            <td> <div class="toggles">
              {#each Object.keys(filters.filter_by) as option}
                <SearchToggle {filters} category="filter_by" {option} resetting={false} />
              {/each}
            </div> </td>
          </tr>
        {/if}

        <tr> <th> GROUP BY </th>
          <td> <div class="toggles">
            {#each filters.groups ?? ["default"] as group}
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

        <tr> <th> EXTRA </th>
          <td> <div class="toggles">
            {#each Object.entries(filters.extra) as [option, active]}
              <ClickySelect text={option.toUpperCase()}
                {active}
                onclick={() => { filters.extra[option] = !active; }}
              />
            {/each}
          </div> </td>
        </tr>
      </tbody></table>
    </div>
  {/if}
  
  <div class="preview toggles">
    {#if filters.previews.length > 0}
      <span>
        {#if result_count}
          <span>{result_count} RESULT{result_count > 1 ? "S" : ""}</span>&ensp;FROM
        {:else}
          SHOWING
        {/if}
      </span>

      {#each filters.previews as [category, option]}
        <SearchToggle {filters} {category} {option} />
      {/each}
    
    {:else if result_count}
      <span>
        SHOWING <span>{result_count} RESULT{result_count > 1 ? "S" : ""}</span>
      </span>
    {/if}
  </div>
</search>


<style lang="scss">

search {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.row {
  padding-bottom: 1rem;
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

    div {
      transform: rotate(90deg) translateY(-3px);
      transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp
    }

    &.open div {
      transform: rotate(-90deg) translateY(-3px);
    }

    &:where(:hover, :focus-visible) {
      cursor: pointer;

      &::before {
        background: rgb(white, 30%);
      }
    }

    &:active::before {
      background: rgb(#ccc, 30%);
    }
  }
}

.filters {
  table {
    max-width: min(80vw, 60rem);

    th, td {
      padding: 0.5rem 0;
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

.preview {
  span {
    @include font-tech;
    font-weight: normal;

    &:has(span) {
      padding-right: 1em;
      color: $col-text-deut;
      font-size: 90%;
    }

    > span {
      color: $col-text;
    }
  }
}


.toggles {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.25rem;
}

</style>
