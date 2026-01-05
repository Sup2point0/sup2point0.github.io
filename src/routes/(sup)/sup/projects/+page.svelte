<script lang="ts">

import type { FilterResults } from "#scripts/search-filter.svelte.ts";

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Block         from "#parts/ui/block.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import ProjectBlock  from "#parts/dev/block.project.svelte";

import { projects_data, projects_list, type ProjectData } from "./projects";
import { ProjectSearchFilter } from "./filter.projects.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new ProjectSearchFilter();

let displayed_projects: FilterResults<ProjectData> = $derived(filters.apply(projects_list));

</script>


<svelte:head>
  <title> Projects × Sup#2.0 </title>
  <meta name="description" content="All my software development, creative and personal projects!" />
</svelte:head>


<Main>
  <Block>
    <p> Here are the projects I’ve worked on over the years! ^v^ </p>
  </Block>

  <SearchFilters bind:filters result_count={displayed_projects.length} />

  {#if filters.query === "" && filters.dirtiness === 0}
    {#each Object.entries(projects_data) as [collection, projects]}
      <section>
        <Header> {collection?.toUpperCase()} </Header>

        <Cards>
          {#each projects as project}
            <ProjectBlock {project} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else if filters.group_by !== "default"}
    {@const displayed = displayed_projects as [string, ProjectData[]][]}

    {#each displayed as [collection, projects]}
      <section>
        <Header> {collection?.toUpperCase()} </Header>

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
