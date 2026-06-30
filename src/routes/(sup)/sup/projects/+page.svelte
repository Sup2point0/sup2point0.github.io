<script lang="ts">

import Cards  from "#parts/core/cards.svelte";
import Main   from "#parts/core/main.svelte";
import Block  from "#parts/ui/block.svelte";
import Header from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import ProjectBlock  from "#parts/dev/block.project.svelte";

import { projects_data, type ProjectData } from "./projects";
import { ProjectSearchFilter } from "./filter.projects.svelte.ts";


// svelte-ignore non_reactive_update
let filters = new ProjectSearchFilter();

let projects_filtered = $derived(filters.apply(projects_data));

</script>


<svelte:head>
  <title> Projects × Sup#2.0 </title>
  <meta name="description" content="All my software development, creative and personal projects!" />
</svelte:head>


{#snippet cards(projects: ProjectData[])}
  <Cards>
    {#each projects as project (project.shard)}
      <ProjectBlock {project} />
    {/each}
  </Cards>
{/snippet}


<Main>
  <Block>
    <p> Here are the projects I’ve worked on over the years! ^v^ </p>
  </Block>

  <SearchFilters bind:filters result_count={ProjectSearchFilter.count_results(projects_filtered)} />

  {#if projects_filtered.is_grouped}
    {#each projects_filtered.data as [collection, projects]}
      {#if projects.length > 0}
        <section>
          <Header> {collection?.toUpperCase()} </Header>
          {@render cards(projects)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(projects_filtered.data)}

  {/if}
</Main>
