<!-- @component ProjectBlock

-->

<script lang="ts">

import { display_date } from "#scripts/utils";
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


<a class="project block"
  class:intersected={anim.intersected}
  class:shrink={project.name.length > 20}
  id={project.shard}
  bind:this={self}
  target={"_blank"}
  href={project.link}
  style:--delay={calc_delay(anim, 0.2)}
>
  <div class="content">
    <img alt={project.name} title={project.name}
      width="120px" height="120px"
      src={project.icon ? `/projects/icons/${project.icon}` : "/purple-portal.png"}
    />

    <div class="info">
      <div class="upper">
        <h3> {project.name} </h3>

        <p class="love">
          {#each { length: project.love } as _}
            ❤️‍🔥
          {/each}
        </p>
      </div>

      <div class="capt">
        {#if project.date}
          <p class="date">
            {display_date(project.date)}
          </p>
        {/if}

        <p class="state {project.state}">
          {project.state!.toUpperCase()}
        </p>
      </div>

      <div class="inner">
        {#if project.desc}
          {@html project.desc}
        {/if}
      </div>

      <div class="lower">
        <ul class="tags">
          {#each project.tech ?? [] as tech}
            <li class="tech"> {tech} </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</a>


<style lang="scss">

@use 'sass:color';


a.block.project {
  flex-grow: 1;
  max-width: 36rem;
  padding: 1rem 2.5rem;
  font-size: 80%;
  color: unset;
  text-decoration: none;
  background: none;
  border: none;
  @include shear-card($interactive: true);
  @include anim-block;

  &:hover {
    cursor: auto;
    opacity: 1 !important;

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

  a.block.project.intersected & {
    transform: none;
    opacity: 1;
  }
}


img {
  max-width: 100%;
  box-shadow: 0 8px 16px rgb(black, 40%);
}

.info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
}


.upper {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: end;
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
}

.capt {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;

  p {
    @include font-tech;
    font-size: 100%;
    color: $col-text-deut;
    transition: #{trans()};
  }

  span.separator {
    @include font-fun;
    color: $col-text-deut;
    font-size: 125%;
  }
}

.lower {
  ul.tags {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0 0.5em;
      @include font-fun;
      font-size: 150%;
      color: $col-text;
      @include shear-card();
      transition: #{trans()};

      &:hover {
        cursor: auto;
        padding: 0 0.8em;
        color: black;
      
        &::before {
          background: white;
        }
      }
    }

    li:not(:hover) {
      &.tech::before { background: color.change($col-trit, $alpha: 0.69); }
    }
  }
}

</style>
