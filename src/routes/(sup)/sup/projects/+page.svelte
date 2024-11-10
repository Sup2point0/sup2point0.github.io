<script lang="ts">

import { projects } from "./projects";
import { search_data } from "./search-data.svelte.ts";

import ContentCard from "#parts/content-card.svelte";
import Search from "./search.projects.svelte";


let filtered = $derived(search_data.apply(projects));

</script>


<p> I’ve created way too many projects to list all of them in one place – but here’s a selection of my favourites for you to explore ^v^ </p>

<Search />

{#each filtered ?? [] as project}
  <ContentCard
    title={project.title}
    body={project.desc}
    pict="projects/{project.cover}"
    extern={project.link}
    flags={project.flags}
  />
{/each}


<style lang="scss">

</style>
