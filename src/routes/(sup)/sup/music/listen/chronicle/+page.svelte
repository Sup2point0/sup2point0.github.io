<script>

import { display_date } from "#scripts/utils";

import Main        from "#parts/core/main.svelte";
import Block       from "#parts/ui/block.svelte"
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import TrackBlock  from "#parts/music/block.track.listen.svelte";

import { chronicle_data } from "./chronicle";

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
    This is a brief selection of my favourite tracks over the years! They’re not exactly “favourites” per se, but more just tracks that I really notably liked, and are a landmark along my evolution of music tastes.
    <div style:height="0.69rem"></div>
    While I’ve split these into discrete “eras”, in reality there was definitely overlap between them – not everything was perfectly linear, many eras evolved in parallel! Also, the dates don’t mean I don’t listen to these tracks anymore, they just indicate when I came across them!
  </Block>

  <div class="chronicle">
    {#each chronicle_data as { era, date, tracks }}
      <section>
        <div class="bar"></div>

        <div class="pane">
          <header>
            <p class="date"> {display_date(date)} </p>
            <h2> {era} </h2>
          </header>
        </div>

        <div class="content">
          {#each tracks as track}
            <TrackBlock {track} />
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
  flex-flow: row nowrap;
  gap: 1rem;
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
