<script lang="ts">

import { pick_random, display_date } from "#scripts/utils";

import Main        from "#parts/core/main.svelte";
import Block       from "#parts/ui/block.svelte"
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import TrackBlock  from "#parts/music/block.track.listen.svelte";

import { chronicle_data } from "./chronicle";

import { onMount } from "svelte";


let invert: boolean;
let displayed_route = $state("");

onMount(() => {
  invert = Math.random() > 0.5;
  displayed_route = pick_random(routes);
});


const routes = [
  `While I’ve split these into discrete “eras”, in reality there was definitely overlap between them – not everything was perfectly linear, many eras evolved in parallel! Also, the dates don’t mean I don’t listen to these tracks anymore, they just indicate when I first came across them!`,

  `It goes without saying that if a track’s in here, I already love it to bits. So I’ll try refrain from reiterating “I LOVE THIS TRACK SO MUCH”, altho sometimes it really does just need emphasising. And while I could probably say whether I like one track more than another if held at gunpoint, music is music, and I love it all, there’s no competition or rankings.`,
];

</script>


<svelte:head>
  <title> Chronicle × Music × Sup#2.0 </title>
  <meta name="description" content="A brief selection of my favourite music over the years" />
</svelte:head>


<Breadcrumbs levels={[
  { text: "music", intern: "sup/music" },
  { text: "listen", intern: "sup/music/listen" },
  { text: "chronicle" },
]} />

<Main>
  <Block>
    {#if displayed_route}
      <p> This is a brief selection of my favourite tracks over the years! They’re not exactly “favourites” per se, but more just tracks that I really notably liked, and are a landmark along my evolution of music tastes. </p>
      
      <p> {@html displayed_route} </p>

      <p> You can find these tracks in a <a target="_blank" href="https://youtube.com/playlist?list=PLYWIouv-DSkA_6f6V_ZChkIKn7_Foqxnd">YouTube playlist of mine</a> ;) </p>
    {/if}
  </Block>

  <div class="chronicle">
    {#each chronicle_data as { era, date, desc, tracks }}
      <section>
        <div class="bar"></div>

        <div class="pane">
          <header>
            <p class="date"> {display_date(date)} </p>
            <h2> {era} </h2>
          </header>
          
          <aside>
            {#each desc as block}
              <p> {@html block} </p>
            {/each}
          </aside>
        </div>

        <div class="content">
          {#each tracks as track}
            <TrackBlock {track} {invert} />
          {/each}
        </div>
      </section>
    {/each}
  </div>
</Main>


<style lang="scss">

.chronicle {
  width: 100%;
  max-width: max-content;
  padding: 0 2rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 10rem;

  section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    gap: 4rem;
  }
}


.bar {
  width: 0.1rem;
  max-height: 85vh;
  position: sticky;
  top: 5rem;
  background: white;
  border-radius: 0.05rem;
}

.pane {
  flex-grow: 1;
  height: 100%;
  position: sticky;
  top: 5rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 2.5rem;
}


header {
  p.date {
    @include font-tech;
    font-size: 125%;
    color: $col-text-deut;
  }

  h2 {
    padding-top: 0.5em;
    @include font-fun;
    font-weight: 300;
    font-size: 400%;
    line-height: 75%;
  }
}

aside {
  p {
    margin-bottom: 1em;
    @include font-ui;
    color: $col-text-deut;
    line-height: 150%;
  }
}

.content {
  flex-grow: 2;
  max-width: max-content;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}


@media (max-width: $width-shrink) {
  .chronicle section {
    flex-flow: column nowrap;

    .bar, .pane {
      position: unset;
    }
  }
}

</style>
