<!-- @component Tunes

The site-wide music player!
-->

<script lang="ts">

import { tunes } from "#scripts/state";
import { display_timestamp } from "#scripts/utils";

import { expoOut } from "svelte/easing";
import { scale } from "svelte/transition";


let slider: HTMLElement | undefined = $state();
let slider_width = $derived(slider?.clientWidth ?? 200);

let drag = $state({
  dragging: false,
  x_init: 0,
  timestamp_init: 0,
  was_playing: false,
});


// when the user clicks on the playback slider, start tracking their drag movement
function onmousedown(e: MouseEvent)
{
  e.preventDefault();

  if (!tunes.audio) return;

  drag.dragging = true;
  drag.x_init = e.clientX;
  drag.timestamp_init = tunes.timestamp!;

  drag.was_playing = tunes.playing;
  tunes.pause();
}

// as they drag, seek the playhead, using delta from their original position
// this is more reliable than finding the frame-by-frame delta
function onmousemove(e: MouseEvent)
{
  if (tunes.audio == null) return;
  if (!drag.dragging) return;
  
  if (!tunes.timestamp) return;
  if (!tunes.duration) return;

  let delta = e.clientX - drag.x_init;
  let frac = delta / slider_width;
  let shift = frac * tunes.duration;

  tunes.seek(drag.timestamp_init + shift);
}

// when the user lets go, unpause the music if it was previously playing
async function onmouseup()
{
  if (!drag.dragging) return;

  drag.dragging = false;

  if (drag.was_playing) {
    await tunes.unpause();
  }
}

</script>


<svelte:window {onmousemove} {onmouseup} />

<audio src={tunes.track && `/audio/${tunes.track?.audio ?? "unknown.mp3"}`}
  bind:this={tunes.audio}
  onplay={() => tunes.sync_duration()}
  onended={() => tunes.stop_playing()}
  onloadeddata={() => tunes.sync_duration()}
>
</audio>

{#if tunes.track}
  <div class="popup" transition:scale={{ start: 0.8, duration: 600, easing: expoOut }}>

<div class="left">
  {#if tunes.track}
    <button class="pause"
      class:paused={!tunes.playing}
      onclick={async () => await tunes.toggle_pause()}
    >
      {#if tunes.playing}
        ⏸
      {:else}
        ▶
      {/if}
    </button>
  {/if}
</div>

<div class="right">
  <div class="upper">
    <h3> {tunes.track.name} </h3>
    <p> {tunes.track.album?.name ?? ""} </p>
  </div>

  <button class="close" onclick={() => tunes.stop_playing()}>
    ×
  </button>

  <div class="playback">
    <p class="start">
      {display_timestamp(tunes.timestamp)}
    </p>

    <div class="bar" class:long={(tunes.duration ?? 0) >= 5 * 60}
      role="slider"
      aria-valuenow={tunes.timestamp}
      tabindex={0}
      bind:this={slider}
      {onmousedown}
      style:--frac={Math.min(1, (tunes.timestamp ?? 0) / (tunes.duration ?? 1))}>
    </div>

    {#key tunes.track.shard}
      <p class="end"> {display_timestamp(tunes.duration)} </p>
    {/key}
  </div>
</div>

  </div>
{/if}


<style lang="scss">

@use 'sass:color';


audio {
  display: none;
}

.popup {
  width: max(32vw, max-content);
  min-width: 20rem;
  max-width: 40rem;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
  gap: 1rem;
  @include shear-card();
  position: fixed;
  z-index: 200;
  bottom: 1rem;
  right: 2vw;

  &::before {
    background: $col-card-light;
  }
}


button.pause {
  width: 2rem;
  height: 2rem;
  padding-bottom: 0.2em;
  font-size: 100%;
  color: $col-text;
  line-height: 100%;
  text-align: center;
  background: rgb(black, 40%);
  border: none;
  border-radius: 50%;
  outline: none;
  transition:
    background 0.08s ease-out,
    transform 0.12s ease-out,
  ;

  &.paused {
    padding-left: 0.1em;
    padding-bottom: 0;
  }

  &:hover, &:focus-visible {
    cursor: pointer;
    background: $col-prot;
  }

  &:active {
    background: $col-trit;
  }
}


.right {
  flex-grow: 1;
}

.upper {
  padding: 0 0.5em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 1em;

  h3 {
    @include font-fun;
    font-size: 200%;
    font-weight: normal;
    color: $col-quat;
    line-height: 100%;
  }

  p {
    @include font-fun;
    font-size: 150%;
    color: $col-text-deut;
    line-height: 100%;
  }
}

button.close {
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0;
  right: -0.3rem;
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

.playback {
  padding-top: 0.25rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
  gap: 1rem;

  p {
    min-width: 2.4em;
    @include font-tech;
    font-size: 80%;
    color: $col-text-deut;
    text-align: center;
  }

  .bar {
    $h: 0.5rem;
    flex-grow: 1;
    min-width: 12rem;
    height: $h;
    position: relative;
    background: rgb(black, 20%);
    transform: skew($shear-factor);

    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }

    &::after {
      width: calc(var(--frac, 0) * 100%);
      height: $h;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(to right in oklch, $col-prot, $col-quat);
      background-size: calc(1 / var(--frac, 1) * 100%);
      z-index: 250;
    }

    &.long::after {
      background: linear-gradient(to right in oklch, $col-prot, $col-quat, $col-deut, $col-trit);
      background-size: calc(1 / var(--frac, 1) * 100%);
    }
  }
}

</style>
