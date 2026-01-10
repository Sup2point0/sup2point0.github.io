<!-- @component Overlay -->

<script lang="ts">

import type { DevEntity } from "#src/scripts/types/dev";

import SearchFilters from "#parts/ui/search-filters.svelte";
import ProjectBlock  from "#parts/dev/block.project.svelte";

import { projects_list } from "#routes/(sup)/sup/projects/projects";
import { ProjectSearchFilter } from "#routes/(sup)/sup/projects/filter.projects.svelte.ts";

import { fade, scale } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
  entity: DevEntity | null;
}

let { entity = $bindable() }: Props = $props();


// svelte-ignore non_reactive_update
let filters = new ProjectSearchFilter();

let displayed_projects = $derived(
  projects_list.filter(proj => proj.tech.includes("Svelte/Kit"))
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
    >

      <div class="side left">
        <h1 transition:scale={{ start: 0.8, duration: 700, delay: 200, easing: expoOut }}>
          {entity.name?.toUpperCase() ?? "???"}
        </h1>
      </div>

      <div class="side right">
        <h2> PROJECTS </h2>

        <SearchFilters bind:filters />

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
  // z-index: 100;
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

h1 {
  width: max-content;
  padding: 0.5rem 3rem 0.5rem 2rem;
  @include font-dev;
  font-weight: 200;
  text-align: center;
  @include shear-card;
  
  &::before {
    background: $col-back-overlay;
    border-left: 4px solid $col-prot;
  }
}

.side {
  height: 80vh;
  max-height: 80vh;

  &.right {
    flex: 1 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;
  }
}

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

</style>
