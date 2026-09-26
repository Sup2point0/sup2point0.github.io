<!-- @component `<MediaOverlay>` -->

<script lang="ts">

import { display_date } from "#scripts/utils";
import type { MediaData, MediaKind } from "#scripts/types/media";
import type { int } from "#scripts/types";

import { fade, scale, slide } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
  kind: MediaKind
  media: MediaData | null
}

let { kind, media = $bindable() }: Props = $props();


function close() {
  media = null;
}

</script>


<svelte:document
  onkeydown={e => {
    if (e.key === "Escape") {
      close();
      e.preventDefault();
    }
  }}
/>

{#if media}
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="overlay-media {kind}"
  onclick={close}
  transition:fade={{ duration: 200 }}
>
  <div class="content-layout"
    onclick={e => e.stopPropagation()}
    transition:scale={{ start: 0.85, duration: 700, delay: 200, easing: expoOut }}
  >

    <div class="side left"
      transition:slide={{ axis: "y", duration: 700, easing: expoOut }}
    >
      <header>
        <img alt={media.name} src="/covers/{kind}/{media.cover}" />
        
        <h1> {media.name?.toUpperCase() ?? "???"} </h1>
        
        {#if media.translation}
          <h2> {(media.translation as string).toUpperCase()} </h2>
        {/if}
      </header>

      <div class="content">
        <table><tbody>
          <tr>
            <th> WATCHED IN </th>
            <td> {display_date(media.date)} </td>
          </tr>

          {#if media.order}
            <tr>
              <th> ORDER </th>
              <td>
                {#each (media.order as string[]) as chunk}
                  <p> {chunk.toUpperCase()} </p>
                  <span class="separator"> › </span>
                {/each}
              </td>
            </tr>
          {/if}

          {#if media.love}
            <tr>
              <th> LOVE </th>
              <td> {#each { length: media.love as int } as _} ❤️‍🔥 {/each} </td>
            </tr>
          {/if}
        </tbody></table>
      </div>
    </div>

    {#if media.desc}
      <div class="side right">
        {#if Array.isArray(media.desc)}
          {#each media.desc as block}
            <section> {@html block} </section>
          {/each}
        {:else}
          <section> {@html media.desc} </section>
        {/if}
      </div>
    {/if}

  </div>
</div>
{/if}


<style lang="scss">

.overlay-media {
  width: 100vw;
  height: 100vh;
  padding-top: 3rem;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(black, 50%);
  backdrop-filter: blur(20px);
}

.content-layout {
  width: 85vw;
  height: 80vh;
  max-width: 100rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: start;
} 


.side {
  flex-grow: 1;
  height: 80vh;
  max-height: 80vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
}


.left {
  min-width: max-content;
  max-width: 50%;
  gap: 1rem;
}

header {
  img {
    max-width: 20rem;
    max-height: 50vh;
    box-shadow: 0 4px 16px black;
  }

  h1 {
    max-width: 30vw;
    margin-top: 1rem;
    @include font-dev;
    font-weight: 500;
    text-align: left;
    text-wrap: wrap;
  }

  h2 {
    @include font-dev;
    color: $col-text-deut;
    font-size: 100%;
    font-weight: 100;
  }
  
  &::after {
    content: '';
    width: 8rem;
    height: 1px;
    display: block;
    margin-top: 1rem;
    background: $col-prot;

    .films & { background: $col-prot; }
    .anime & { background: $col-prot; }
  }
}

.content {
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  table {
    padding: 0.5rem 0 1rem;
    @include font-dev;
    text-align: left;

    th {
      padding-bottom: 0.5rem;
      color: $col-text-deut;
      font-weight: 300;
    }

    td {
      padding-left: 1em;
      display: flex;
      flex-flow: row wrap;
      gap: 0.5rem;
      
      span.separator {
        color: $col-text-deut;

        &:last-child {
          display: none;
        }
      }
    }
  }
}


.right {
  padding: 0 2rem;
  overflow-y: auto;

  section {
    margin-bottom: 1rem;
    padding: 1em 2em;
    @include font-ui;
    font-weight: 300;
    line-height: 150%;
    @include shear-card {
      background: $col-card;
      backdrop-filter: none;
    }
  }
}

</style>
