<!-- @component `MediaBlock`

A block displaying info for a media, series, anime, show, etc.
-->

<script lang="ts">

import { anim, expoSlide } from "#scripts/anim.svelte.ts";
import { display_date } from "#scripts/utils";
import type { MediaData, MediaKind } from "#scripts/types/media";

import { untrack } from "svelte";
import { slide } from "svelte/transition";


interface Props {
  kind: MediaKind
  media: MediaData
  expanded: boolean
  active_media?: MediaData | null
}

let { kind, media, expanded, active_media = $bindable() }: Props = $props();


let is_open = $state(false);

/* Clicking on one block can locally toggle, but global override should affect all blocks */
$effect(() => {
  expanded;

  untrack(() => {
    is_open = expanded;
  })
})


function open()
{
  if (
    Array.isArray(media.desc)
    && media.desc.length >= 4
    && window.innerWidth > 640
  ) {
    active_media = media;
  } else {
    is_open = !is_open;
  }
}

</script>


<button class="block-media {kind}"
  class:open={is_open}
  id={media.shard}
  onclick={open}
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
      {@const date = display_date(media.date)}
      <p class="date" class:long={date.length > 4}>
        {date}
      </p>
    {/if}
  </div>

  <div class="sep"></div>

  {#if is_open}
    <div class="lower desc" transition:slide={expoSlide}>
      {#each media.desc ?? [] as block}
        <p> {@html block} </p>
      {/each}
    </div>

  {:else}
    <div class="lower" transition:slide={expoSlide}>
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
  @include shear-card($interactive: true, $glow: true, $mobile: true);
  @include anim-block;

  &:hover, &:focus-visible {
    cursor: pointer;
    opacity: 1 !important;
  }

  &.open {
    max-width: 40rem;

    @include mobile {
      padding: 1rem;
    }
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

  @include mobile {
    .block-media.open & {
      flex-flow: column nowrap;
    }
  }
}


img {
  max-width: 100%;
  box-shadow: 0 8px 16px rgb(black, 40%);
  transition: #{trans()};

  .block-media:where(:hover, :focus-visible) & {
    transform: scale(103%);
  }

  @include mobile {
    transform: translateY(0.25rem);
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
  column-gap: 1rem;

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
    font-size: 120%;
    color: $col-text-deut;

    &.long {
      font-size: 100%;
    }
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

  @include mobile {
    font-size: 100%;
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
      @include shear-card($blur: false);
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
