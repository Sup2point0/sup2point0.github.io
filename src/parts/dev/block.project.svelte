<!-- @component ProjectBlock

-->

<script lang="ts">

import { shardify, display_date } from "#scripts/utils";
import type { ProjectData } from "#routes/(sup)/sup/projects/projects";

import { AnimationData, register_animation, calc_delay } from "#scripts/anim.svelte.ts";

import { onMount } from "svelte";


interface Props {
  project: ProjectData;
}

let { project }: Props = $props();


let self: HTMLElement;
let anim = new AnimationData();

onMount(() => {
  if (self) {
    register_animation(self, anim);
  } else {
    setTimeout(() => register_animation(self, anim), 1000);
  }
});

</script>


<button class="project block"
  class:intersected={anim.intersected}
  class:shrink={project.name.length > 20}
  id={project.shard}
  bind:this={self}
  style:--delay={calc_delay(anim, 0.2)}
>
  <div class="content">

{#if project.icon}
  <img class="project-icon"
    alt={project.name} title={project.name}
    width="120px" height="120px"
    src={project.icon ? `/projects/icons/${project.icon}` : "/purple-portal.png"}
  />
{/if}

<div class="info">
  <div class="upper">
    <div class="title">
      <h3> {project.name} </h3>

      {#if project.love}
        <p class="love"> {#each { length: project.love } as _} ❤️‍🔥 {/each} </p>
      {/if}
    </div>

    <div class="ext-links">
      {#each Object.entries(project.links ?? {}) as [platform, link]}
        <a class="project-link" target="_blank" href={link}>
          {#if platform === "github"}
            <img class="ext-link" alt="git" title="GitHub" height="25px" src="/ui/icons/github.svg" />
          {:else if platform === "site"}
            <img class="ext-link" alt="site" title="Site" height="30px" src="/ui/icons/open-external.svg" />
          {/if}
        </a>
      {/each}
    </div>
  </div>

  <div class="inner">
    {#if project.date}
      <p class="date"> {display_date(project.date)} </p>
      <span class="separator"> × </span>
    {/if}
    
    {#if Array.isArray(project.state)}
      {#each project.state.entries() as [i, state]}
        {#if i > 0} <span class="separator"> × </span> {/if}
        <p class="state {state}"> {state.toUpperCase()} </p>
      {/each}
    {:else}
      <p class="state {project.state}"> {project.state.toUpperCase()} </p>
    {/if}
  </div>

  <div class="body">
    {#if Array.isArray(project.desc)}
      {#each project.desc as block}
        <p> {@html block} </p>
      {/each}
    {:else if project.desc}
      <p> {@html project.desc} </p>
    {/if}
  </div>

  <div class="inner">
    {#if Array.isArray(project.kind)}
      {#each project.kind.entries() as [i, kind]}
        {#if i > 0} <span class="separator"> × </span> {/if}
        <p class="kind {kind}"> {kind.toUpperCase()} </p>
      {/each}
    {:else}
      <p class="kind {project.kind}"> {project.kind.toUpperCase()} </p>
    {/if}

    <span class="separator"> × </span>

    {#if Array.isArray(project.flavour)}
      {#each project.flavour.entries() as [i, flavour]}
        {#if i > 0} <span class="separator"> × </span> {/if}
        <p class="flavour {flavour}"> {flavour.toUpperCase()} </p>
      {/each}
    {:else}
      <p class="flavour {project.flavour}"> {project.flavour.toUpperCase()} </p>
    {/if}
  </div>

  <div class="lower">
    <ul class="tags">
      {#each project.tech ?? [] as tech}
        <li class="tech {shardify(tech)}"> {tech} </li>
      {/each}
    </ul>
  </div>
</div>

  </div>
</button>


<style lang="scss">

@use 'sass:color';


.block.project {
  flex-grow: 1;
  max-width: 36rem;
  padding: 1rem 1rem 1rem 2.5rem;
  background: none;
  border: none;
  @include shear-card($interactive: true);
  @include anim-block;

  &:hover {
    cursor: auto;
    opacity: 1 !important;

    img.project-icon {
      transform: scale(110%);
    }

    .inner p {
      color: $col-text;
    }
  }
}

.content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  
  transform: scale(90%);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) var(--delay, 0s);  // ease-out-exp

  button.block.project.intersected & {
    transform: none;
    opacity: 1;
  }
}


img.project-icon {
  max-width: 100%;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1) var(--delay, 0s);  // ease-out-exp
}

.info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  gap: 0.25rem;
}


.upper {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  h3 {
    @include font-ui;
    font-size: 200%;
    font-weight: normal;
    color: $col-text;
    text-align: start;

    .block.shrink & {
      font-size: 175%;
    }
  }

  p.love {
    min-width: max-content;
    font-size: 150%;
  }

  > div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 0.5rem;
  }

  .ext-links {
    img.ext-link {
      max-height: 100%;
      aspect-ratio: 1;
      transition: #{trans()};

      &:hover {
        transform: scale(110%);
      }
    }
  }
}

.inner {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.5rem;
  @include separator;

  p {
    @include font-tech;
    font-size: 100%;
    color: $col-text-deut;
    transition: #{trans()};

    &.developing {
      color: $col-deut !important;
    }
  }
}

.body {
  padding-bottom: 0.5rem;

  p {
    @include font-ui;
    color: $col-text;
    text-align: left;
  }
}

.lower {
  padding-top: 0.1rem;

  ul.tags {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0.15em 0.5em 0;
      @include font-ui;
      font-size: 110%;
      color: $col-text;
      @include shear-card();
      transition: #{trans()};

      &:hover {
        cursor: auto;
        padding: 0.15em 0.8em 0;
        color: black;
      
        &::before {
          background: white;
        }
      }
    }

    li:not(:hover) {
      &.tech::before { background: color.change(#4090f1, $alpha: 0.69); }
      &.unity::before { background: color.change(#40f190, $alpha: 0.6); }
      &.python::before { background: color.change(#0064f1, $alpha: 0.8); }
      &.c-::before { background: color.change(#ff0090, $alpha: 0.8); }
      &.ruby::before { background: color.change(#ff1000, $alpha: 0.8); }
      &.haskell::before { background: color.change(#9090f1, $alpha: 0.69); }
      &.rust::before { background: color.change(#f160f1, $alpha: 0.69); }
      &.svelte-kit::before { background: color.change(#ff7020, $alpha: 0.8); }
      &.javascript::before { background: color.change(#ffc720, $alpha: 0.69); }
      &.javascript-typescript::before { background: color.change(#ffc720, $alpha: 0.69); }
    }
  }
}


@media (min-width: $width-expand) {
  .block.project {
    max-width: 42rem;
  }
}

</style>
