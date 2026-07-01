<script lang="ts">

import { status } from "#scripts/state";
import { shuffle } from "#scripts/utils";
import type { TrackData } from "#scripts/types/music/create";

import { tracks_list } from "../create";
import { TrackSearchFilter } from "./filter.tracks.svelte.ts";

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import TrackCard     from "#parts/music/card.track.create.svelte";


// svelte-ignore non_reactive_update
let filters = new TrackSearchFilter();

let tracks_filtered = $derived(filters.apply(tracks_list));

</script>


<svelte:head>
  <title> Tracks × Music × Sup#2.0 </title>
  <meta name="description" content="All the tracks I’ve created!" />
</svelte:head>


{#snippet cards(tracks: TrackData[], wants_shuffle: boolean)}
  {@const _tracks =
    wants_shuffle ?
      (status.client ? shuffle(tracks) : [])
    : tracks
  }

  <Cards>
    {#each _tracks as track (track.shard)}
      <TrackCard {track} />
    {/each}
  </Cards>
{/snippet}


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create", intern: "sup/music/create" },
  { text: "tracks" },
]} />

<Main>
  <SearchFilters bind:filters result_count={TrackSearchFilter.count_results(tracks_filtered)} />

  {#if tracks_filtered.is_grouped}
    {#each tracks_filtered.data as [collection, tracks]}
      {#if tracks.length > 0}
        <section>
          <Header> {collection?.toUpperCase()} </Header>
          {@render cards(tracks, false)}
        </section>
      {/if}
    {/each}

  {:else}
    {@render cards(tracks_filtered.data, filters.is_clear)}

  {/if}
</Main>
