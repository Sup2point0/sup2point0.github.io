<!-- @component Tunes

The site-wide music player!
-->

<script lang="ts">

import { tunes, stop_playing } from "#scripts/state";
import { display_timestamp } from "#scripts/utils";

import { expoOut } from "svelte/easing";
import { scale } from "svelte/transition";


let duration: number | null = $state(null);

let interval = 0;
let tick = $state(1);

function onplay()
{
  interval = setInterval(() => { tick = -tick; }, 500);
}

function onended()
{
  clearInterval(interval)
}

</script>


<audio src="/audio/{tunes.track?.audio}"
  bind:this={tunes.audio}
  {onplay}
  {onended}
  onloadeddata={() => { duration = this.duration; }}
>
</audio>

{#if tunes.track}
  <div class="popup" transition:scale={{ start: 0.8, duration: 600, easing: expoOut }}>
    <div class="upper">
      <h3> {tunes.track.name} </h3>
      <p> {tunes.track.album?.name ?? ""} </p>
    </div>

    <button class="stop" onclick={stop_playing}>
      ×
    </button>

    <div class="progress">
      {#key tick}
        <p class="start">
          {display_timestamp(tunes.audio.currentTime)}
        </p>

        <div class="bar"
          style:--frac={duration ? tunes.audio.currentTime / duration : 0}>
        </div>
      {/key}

      {#key tunes.track.shard}
        <p class="end"> {display_timestamp(duration)} </p>
      {/key}
    </div>
  </div>
{/if}


<style lang="scss">

audio {
  display: none;
}

.popup {
  width: max-content;
  min-width: 20rem;
  width: 32vw;
  max-width: 40rem;
  padding: 0.75rem 1.5rem 0.5rem 1rem;
  @include shear-card();
  position: fixed;
  z-index: 200;
  bottom: 1rem;
  right: 2vw;

  &::before {
    background: $col-card-light;
  }
}

.upper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: baseline;
  gap: 1em;

  h3 {
    @include font-fun;
    font-size: 150%;
    font-weight: normal;
    color: $col-quat;
    line-height: 100%;
  }

  p {
    @include font-fun;
    font-size: 120%;
    color: $col-text-deut;
    line-height: 100%;
  }
}

button.stop {
  position: absolute;
  top: 0.1em;
  right: 0.5rem;
  @include font-fun;
  font-size: 150%;
  color: $col-card;
  background: none;
  border: none;
  outline: none;
  transition: #{trans()};

  &:hover, &:focus-visible {
    cursor: pointer;
    color: $col-text;
  }
}

.progress {
  padding-top: 0.25rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
  gap: 1rem;

  p {
    min-width: 2em;
    text-align: center;
  }

  .bar {
    $h: 0.5rem;
    flex-grow: 1;
    height: $h;
    position: relative;
    background: rgb(black, 20%);
    transform: skew($shear-factor);

    &::after {
      width: calc(var(--frac, 0) * 100%);
      height: $h;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      z-index: 250;
    }
  }
}

</style>
