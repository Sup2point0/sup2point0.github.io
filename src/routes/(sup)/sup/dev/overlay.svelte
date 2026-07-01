<!-- @component Overlay -->

<script lang="ts">

import type { FlatResults } from "#scripts/search-filter.svelte.ts";
import { display_date } from "#scripts/utils";

import { Fluency, type DevEntity } from "#scripts/types/dev";
import { projects_data, type ProjectData } from "#sup/projects/projects";
import { ProjectSearchFilter } from "#sup/projects/filter.projects.svelte.ts";

import SearchFilters from "#parts/ui/search-filters.svelte";
import ProjectBlock  from "#parts/dev/block.project.svelte";

import { untrack } from "svelte";
import { fade, scale, slide } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
  entity: DevEntity | null;
}

let { entity = $bindable() }: Props = $props();


// svelte-ignore non_reactive_update
let filters = new ProjectSearchFilter();
filters.group_by = "none";
filters.dirtiness++;

let projects_filtered = $derived(
  entity ?
    filters.apply(projects_data) as FlatResults<ProjectData>
  : { is_grouped: false, data: [] }
);

$effect(() => {
  entity;

  untrack(() => {
    for (let each in filters.tech) {
      filters.tech[each] = false;
    }
    if (entity?.shard) {
      filters.tech[entity.shard] = true;
    }
  });
});

</script>


<svelte:document
  onkeydown={e => {
    if (e.key === "Escape") {
      entity = null;
      e.preventDefault();
    }
  }}
/>

{#if entity}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="entity-overlay"
    onclick={() => entity = null}
    transition:fade={{ duration: 200 }}
  >
    <div class="content-layout"
      onclick={e => e.stopPropagation()}
      transition:scale={{ start: 0.85, duration: 700, delay: 200, easing: expoOut }}
    >

<!-- sec -->
<div class="side left"
  transition:slide={{ axis: "y", duration: 700, easing: expoOut }}
>
  <header>
    <img alt={entity.name} src="/icons/dev/{entity.icon}" />
    <h1> {entity.name?.toUpperCase() ?? "???"} </h1>
  </header>

  <div class="content">
    <table><tbody>
      <tr>
        <th> SINCE </th>
        <td> {display_date(entity.date)} </td>
      </tr>

      {#if entity.versions}
        <tr>
          <th> VERSIONS </th>
          <td> {entity.versions[0]} – {entity.versions[1]} </td>
        </tr>
      {/if}

      <tr style:height="0.5rem"></tr>

      {#if entity.love}
        <tr>
          <th> LOVE </th>
          <td> {#each { length: entity.love } as _} ❤️‍🔥 {/each} </td>
        </tr>
      {/if}

      {#if entity.fluency}
        <tr class="fluency">
          <th> FLUENCY </th>
          <td class="tier-{Object.values(Fluency).indexOf(entity.fluency)}">
            {entity.fluency.toUpperCase()}
          </td>
        </tr>
      {/if}
    </tbody></table>

    {#if entity.desc}
      {#if Array.isArray(entity.desc)}
        {#each entity.desc as block}
          <section> {@html block} </section>
        {/each}
      {:else}
        <section> {@html entity.desc} </section>
      {/if}
    {/if}

    {#if entity.describe}
      <section>
        <h3> HOW WOULD I DESCRIBE IT? </h3>
        <p> {entity.describe} </p>
      </section>
    {/if}

    {#if entity.lore}
      <h2 style:margin-top="2rem"> LORE </h2>
      <section> {@html entity.lore} </section>
    {/if}
  </div>
</div>
<!-- /sec -->

<!-- sec -->
<div class="side right">
  {#if entity.has_projects !== false}
    <h2> PROJECTS </h2>

    <SearchFilters bind:filters
      allow_expand={false}
      result_count={ProjectSearchFilter.count_results(projects_filtered)}
    />

    <div class="blocks">
      {#each projects_filtered.data as project}
        <ProjectBlock {project} />
      {/each}
    </div>
  {/if}
</div>
<!-- /sec -->

    </div>
  </div>
{/if}


<style lang="scss">

.entity-overlay {
  flex: 1 1;
  width: 100vw;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: $col-back-overlay;
  backdrop-filter: blur(20px);
}

.content-layout {
  width: 85vw;
  height: 80vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: start;
  gap: 2rem;
}


.side {
  flex-grow: 1;
  height: 80vh;
  max-height: 80vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: start;

  h2 {
    @include font-dev;
    font-weight: 400;
  }
}


.left {
  max-width: 40%;
  padding: 0 2rem;
  gap: 1rem;

  header {
    position: sticky;
    top: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 2rem;

    img {
      height: 5rem;
    }

    h1 {
      width: max-content;
      padding: 0.5rem 3rem 0.4rem 2rem;
      @include font-dev;
      font-weight: 200;
      text-align: center;
      @include shear-card;
      animation-delay: 0.1s;
      
      &::before {
        background: $col-card-overlay;
        border-left: 4px solid $col-prot;
      }
    }
  }
}

.content {
  padding: 0 1rem;
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  table {
    padding: 0.5rem 0 1rem;
    @include font-dev;
    text-align: left;

    th {
      color: $col-text-deut;
      font-weight: 300;
    }

    td {
      padding-left: 1em;
    }

    .fluency {
      .tier-1 { color: $col-acc; }
      .tier-2 { color: $col-trit; }
      .tier-3 { color: $col-quat; }
      .tier-4 { color: $col-deut; }
    }
  }

  section {
    padding: 1em 1.5em;
    @include font-dev;
    @include shear-card;

    &::before {
      background: $col-card-overlay;
    }

    h3 {
      color: $col-quat;
      font-weight: 300;
      font-size: 90%;
    }
  }
}


.right {
  gap: 2rem;

  .blocks {
    padding: 0 2rem;
    overflow-y: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    gap: 2rem;
  }
}


@keyframes slide-in {
  from {
    transform: translateX(-4rem);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}

</style>
