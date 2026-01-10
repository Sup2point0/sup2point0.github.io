<!-- @component Overlay -->

<script lang="ts">

import { projects_list } from "#routes/(sup)/sup/projects/projects";
import type { DevEntity } from "#src/scripts/types/dev";

import ProjectBlock from "#parts/dev/block.project.svelte";

import { fade, scale } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
  entity: DevEntity | null;
}

let { entity = $bindable() }: Props = $props();


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
    <div class="content-layout">

      <div class="side left">
        <h1 transition:scale={{ start: 0.8, duration: 700, delay: 200, easing: expoOut }}>
          {entity.name?.toUpperCase() ?? "???"}
        </h1>
      </div>

      <div class="side right">
        <h2> PROJECTS </h2>

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
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(black, 25%);
  backdrop-filter: blur(4px);
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
  flex-grow: 1;
  height: 80vh;
  max-height: 80vh;

  &.right {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
  }
}

h2 {
  @include font-dev;
  font-weight: 400;
}

.blocks {
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

</style>
