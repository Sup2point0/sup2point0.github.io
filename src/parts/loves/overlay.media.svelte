<!-- @component `<MediaOverlay>` -->

<script lang="ts">

import { display_date } from "#scripts/utils";
import { pick_random } from "#scripts/utils";
import type { MediaData, MediaKind } from "#scripts/types/media";

import { untrack } from "svelte";
import { fade, scale, slide } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
  kind: MediaKind
  media: MediaData | null
}

let { kind, media = $bindable() }: Props = $props();


let font = pick_random([
  "fun", "dev",
]);

</script>


<svelte:document
  onkeydown={e => {
    if (e.key === "Escape") {
      media = null;
      e.preventDefault();
    }
  }}
/>

{#if media}
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="overlay-media {font}"
  onclick={() => media = null}
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
      </header>

      <div class="content">
        <table><tbody>
          <tr>
            <th> WATCHED IN </th>
            <td> {display_date(media.date)} </td>
          </tr>

          {#if media.love}
            <tr>
              <th> LOVE </th>
              <td> {#each { length: media.love } as _} ❤️‍🔥 {/each} </td>
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: start;
  gap: 2rem;
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
  max-width: 40%;
  padding: 0 2rem;
  gap: 1rem;

  header {
    position: sticky;
    top: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 2rem;

    img {
      height: 5rem;
    }

    h1 {
      width: max-content;
      padding: 0.5rem 3rem 0.4rem 2rem;
      @include font-dev;
      font-weight: 200;
      text-align: center;
      @include shear-card;
      animation-delay: 0.1s;
      
      &::before {
        background: $col-card-overlay;
        border-left: 4px solid $col-prot;
      }
    }
  }
}

.content {
  padding: 0 1rem;
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  table {
    padding: 0.5rem 0 1rem;
    @include font-dev;
    text-align: left;

    th {
      color: $col-text-deut;
      font-weight: 300;
    }

    td {
      padding-left: 1em;
    }

    .fluency {
      .tier-1 { color: $col-acc; }
      .tier-2 { color: $col-trit; }
      .tier-3 { color: $col-quat; }
      .tier-4 { color: $col-deut; }
    }
  }
}


.right {
  section {
    margin-bottom: 1rem;
    padding: 1em 1.5em;
    @include shear-card;

    .fun & {
      @include font-fun;
      font-size: 150%;
    }

    .dev & {
      @include font-dev;
    }

    &::before {
      background: $col-card-overlay;
    }

    h3 {
      color: $col-quat;
      font-weight: 300;
      font-size: 90%;
    }
  }
}

</style>
