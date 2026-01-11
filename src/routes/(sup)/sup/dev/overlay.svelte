<!-- @component Overlay -->

<script lang="ts">

import { display_date } from "#scripts/utils";
import { Fluency, type DevEntity } from "#scripts/types/dev";

import SearchFilters from "#parts/ui/search-filters.svelte";
import ProjectBlock  from "#parts/dev/block.project.svelte";

import { projects_list, type ProjectData } from "#sup/projects/projects";
import { ProjectSearchFilter } from "#sup/projects/filter.projects.svelte.ts";

import { fade, scale, slide } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
  entity: DevEntity | null;
}

let { entity = $bindable() }: Props = $props();


// svelte-ignore non_reactive_update
let filters = new ProjectSearchFilter();

let displayed_projects = $derived(
  entity
    ? filters.apply(
      projects_list.filter(
        proj => proj.tech.some(shard => (shard === entity!.shard))
      )
    ) as ProjectData[]
    : []
);

</script>


<svelte:document
  onkeydown={e => { if (e.key === "Escape") entity = null; }}
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
      transition:scale={{ start: 0.8, duration: 700, delay: 200, easing: expoOut }}
    >

      <div class="side left"
        transition:slide={{ axis: "y", duration: 700, easing: expoOut }}
      >
        <h1> {entity.name?.toUpperCase() ?? "???"} </h1>

        <table><tbody>
          <tr>
            <th> SINCE </th>
            <td> {display_date(entity.date)} </td>
          </tr>

          {#if entity.versions}
            <tr>
              <th> VERSIONS </th>
              <td> {entity.versions[0]}–{entity.versions[1]} </td>
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
          
          {#if entity.technicals}
            <tr>
              <th> TECHNICALS </th>
              <td>
                {#each entity.technicals as detail}
                  <p class="detail"> {detail.toUpperCase()} </p>
                {/each}
              </td>
            </tr>
          {/if}
        </tbody></table>

        {#if entity.desc}
          <section> {@html entity.desc} </section>
        {/if}
      </div>

      <div class="side right">
        <h2> PROJECTS </h2>

        <SearchFilters bind:filters
          allow_expand={false}
          result_count={displayed_projects.length}
        />

        <div class="blocks">
          {#each displayed_projects as project}
            <ProjectBlock {project} />
          {/each}
        </div>
      </div>
    
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

  background: rgba(black, 25%);
  backdrop-filter: blur(20px);
}

.content-layout {
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: start;
  gap: 4rem;
}


.side {
  flex-grow: 1 1;
  height: 80vh;
  max-height: 80vh;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
}


.left {
  padding: 0 2rem;
  align-items: start;

  h1 {
    width: max-content;
    padding: 0.5rem 3rem 0.4rem 2rem;
    @include font-dev;
    font-weight: 200;
    text-align: center;
    @include shear-card;
    
    &::before {
      background: $col-back-overlay;
      border-left: 4px solid $col-prot;
    }
  }

  .date {
    @include font-dev;
    color: $col-text-deut;
    font-weight: 300;
    font-size: 100%;

    span {
      padding-left: 0.4em;
      font-weight: 500;
      font-size: 125%;
    }
  }

  table {
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
      background: $col-back-overlay;
    }
  }
}


.right {
  align-items: center;

  h2 {
    @include font-dev;
    font-weight: 400;
  }

  .blocks {
    width: max-content;
    padding: 0 2rem;
    overflow-y: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;
  }
}

</style>
