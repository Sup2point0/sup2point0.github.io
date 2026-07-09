<!-- @component `MediaBlock`

A block displaying info for a media, series, anime, show, etc.
-->

<script lang="ts">

import { anim } from "#scripts/anim.svelte.ts";
import { display_date } from "#scripts/utils";
import type { MediaData } from "#scripts/types/media";

import { untrack } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  kind: "films" | "series" | "anime" | "books";
  media: MediaData;
  expanded: boolean;
}

let { kind, media, expanded }: Props = $props();


let open = $state(false);

/* Clicking on one block can locally toggle, but global override should affect all blocks */
$effect(() => {
  expanded;

  untrack(() => {
    open = expanded;
  });
});

</script>


<button class="block-media {kind}"
  class:open
  id={media.shard}
  onclick={() => { open = !open; }}
  {@attach anim}
>
  <div class="content">

<img
  alt={media.name} title={media.name}
  height="200px"
  src={media.cover ? `/covers/${kind}/${media.cover}` : "/purple-portal.png"}
/>

<div class="info">
  <div class="upper">
    <h3> {media.name} </h3>

    {#if media.date}
      <p class="date">
        {display_date(media.date)}
      </p>
    {/if}
  </div>

  <div class="sep"></div>

  {#if open}
    <div class="lower desc" transition:slide={{ duration: 800, easing: expoInOut }}>
      {#each media.desc ?? [] as block}
        <p> {@html block} </p>
      {/each}
    </div>

  {:else}
    <div class="lower" transition:slide={{ duration: 800, easing: expoInOut }}>
      {#if media.fields}
        <table class="fields"><tbody>
          {#each Object.entries(media.fields) as [key, value]}
            {#if value != undefined}
              <tr>
                <th> {key.toUpperCase()} </th>
                <td> {value} </td>
              </tr>
            {/if}
          {/each}
        </tbody></table>
      {/if}

      <ul class="tags">
        {#each media.genres ?? [] as genre}
          <li class="genre"> {genre} </li>
        {/each}
        
        {#each media.themes ?? [] as theme}
          <li class="theme"> {theme} </li>
        {/each}
      </ul>
    </div>
  
  {/if}
</div>

  </div>
</button>


<style lang="scss">

@use 'sass:color';


.block-media {
  scroll-margin: 4rem;
  flex-grow: 1;
  max-width: 36rem;
  padding: 1rem 1.5rem 1rem 2.5rem;
  font-size: unset;
  background: none;
  border: none;
  outline: none;
  transition: #{trans()};
  @include shear-card($interactive: true, $glow: true);
  @include anim-block;

  &:hover, &:focus-visible {
    cursor: pointer;
    opacity: 1 !important;

    .extra p {
      color: $col-text;
    }
  }

  &.open {
    max-width: 40rem;
  }

  &.wishlist::before {
    border: 1px solid rgb(white, 42%);
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

  /* NOTE: Need `:global` to avoid CSS being purged!! */
  :global(.block-media.intersected) & {
    transform: none;
    opacity: 1;
  }
}


img {
  max-width: 100%;
  box-shadow: 0 8px 16px rgb(black, 40%);
  transition: #{trans()};

  .block-media:where(:hover, :focus-visible) & {
    transform: scale(103%);
  }
}

.info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
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
    font-size: 150%;
    font-weight: normal;
    color: $col-text;
    text-align: start;
  }

  p.date {
    min-width: max-content;
    padding-bottom: 0.25em;
    @include font-tech;
    font-size: 125%;
    color: $col-text-deut;
  }
}


.sep {
  width: 69%;
  height: 1px;
  margin: 0.25rem 0 0.75rem;
  background: rgb(white, 10%);
}


.lower.desc p {
  padding-left: 0.2em;
    margin-bottom: 0.5em;
    @include font-ui;
    font-size: 75%;
    font-weight: 300;
    color: $col-text-deut;
    text-align: left;
    transition: #{trans()};

    .block-media:where(:hover, :focus-visible) & {
      color: $col-text;
    }
}

.lower {
  table.fields {
    padding-bottom: 0.5rem;

    tr {
      text-align: left;
    }

    th {
      padding-bottom: 0.25em;
      padding-right: 1em;
      @include font-tech;
      font-weight: normal;
      font-size: 80%;
      color: $col-text-deut;
    }

    td {
      @include font-ui;
      color: $col-text;
      line-height: 150%;
    }
  }

  ul.tags {
    padding: 0 0.2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0 0.5em;
      @include font-fun;
      font-size: 120%;
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
      &.genre::before { background: color.change($col-trit, $alpha: 0.69); }
      &.theme::before { background: color.change($col-deut, $alpha: 0.69); }
    }
  }
}

</style>
