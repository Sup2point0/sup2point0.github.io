<script lang="ts">

import type { FilterResults } from "#scripts/search-filter.svelte.ts";

import Cards from "#parts/core/cards.svelte";
import Main from "#parts/core/main.svelte";
import Block from "#parts/ui/block.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import ProjectBlock from "#parts/dev/block.project.svelte";

import { projects_data, projects_list, type ProjectData } from "./projects";
import { ProjectSearchFilter } from "./filter.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new ProjectSearchFilter();

let displayed_projects: FilterResults<ProjectData> = $derived(filters.apply(projects_list));

</script>


<svelte:head>
  <title> Projects × Sup#2.0 </title>
  <meta name="description" content="All my software development, creative and personal projects!" />
</svelte:head>


<Main gap="4rem">
  <Block>
    <p> THIS PAGE IS STILL UNDER RENOVATION BTW LMAO </p>
    <p> I’ve created way too many projects to list all of them in one place – but here’s a selection of my favourites for you to explore ^v^ </p>
  </Block>

  <SearchFilters bind:filters />

  {#if filters.query === ""}
    {#each Object.entries(projects_data) as [collection, projects]}
      <section>
        <h2> {collection.toUpperCase()} </h2>

        <Cards>
          {#each projects as project}
            <ProjectBlock {project} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== null}
    {@const displayed = displayed_projects as [string, ProjectData[]][]}

    {#each displayed as [collection, projects]}
      <section>
        <h2> {collection.toUpperCase()} </h2>

        <Cards>
          {#each projects as project (project.shard)}
            <ProjectBlock {project} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = displayed_projects as ProjectData[]}

    <Cards>
      {#each displayed as project (project.shard)}
        <ProjectBlock {project} />
      {/each}
    </Cards>

  {/if}
</Main>


<style lang="scss">

h2 {
  margin-bottom: 2rem;
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-align: center;
}

</style>
