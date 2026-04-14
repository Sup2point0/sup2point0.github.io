<script lang="ts">

import { status } from "#scripts/state";
import type { FilterResults } from "#scripts/search-filter.svelte.ts";
import type { TrackData } from "#scripts/types/music/create";

import { tracks_list } from "../create";
import { TrackSearchFilter } from "./filter.tracks.svelte.ts";

import Cards         from "#parts/core/cards.svelte";
import Main          from "#parts/core/main.svelte";
import Breadcrumbs   from "#parts/ui/breadcrumbs.svelte";
import Header        from "#parts/ui/header.svelte";
import SearchFilters from "#parts/ui/search-filters.svelte";
import TrackCard     from "#parts/music/card.track.svelte";


// svelte-ignore non_reactive_update
let filters = new TrackSearchFilter();

let displayed_tracks: FilterResults<TrackData> = $derived(filters.apply(tracks_list));

</script>


<svelte:head>
  <title> Tracks × Music × Sup#2.0 </title>
  <meta name="description" content="All the tracks I’ve created!" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "create", intern: "sup/music/create" },
  { text: "tracks" },
]} />

<Main>
  <SearchFilters bind:filters result_count={displayed_tracks.length} />

  {#if filters.group_by !== "default"}
    {@const displayed = displayed_tracks as [string, TrackData[]][]}

    {#each displayed as [collection, tracks]}
      <section>
        <Header> {collection?.toUpperCase()} </Header>

        <Cards>
          {#each tracks as track (track.shard)}
            <TrackCard {track} />
          {/each}
        </Cards>
      </section>
    {/each}

  {:else}
    {@const displayed = status.client ? (displayed_tracks as TrackData[]) : []}

    <Cards>
      {#each displayed as track (track.shard)}
        <TrackCard {track} />
      {/each}
    </Cards>

  {/if}
</Main>
