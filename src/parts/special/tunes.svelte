<!-- @component Tunes

The site-wide music player!
-->

<script lang="ts">

import { tunes, toggle_pause, stop_playing } from "#scripts/state";
import { display_timestamp } from "#scripts/utils";

import { expoOut } from "svelte/easing";
import { scale } from "svelte/transition";


let duration: number | undefined = $state();
let timestamp: number | undefined = $state();
let interval = 0;

function onplay()
{
  interval = setInterval(() => { timestamp = tunes.audio?.currentTime }, 200);
}

function onended()
{
  clearInterval(interval);
  stop_playing();
}

</script>


<audio src={tunes.track && `/audio/${tunes.track?.audio}`}
  bind:this={tunes.audio}
  {onplay}
  {onended}
  onloadeddata={() => { duration = this.duration; }}
>
</audio>

{#if tunes.track}
  <div class="popup" transition:scale={{ start: 0.8, duration: 600, easing: expoOut }}>

<div class="left">
  {#if tunes.track}
    <button class="pause"
      class:paused={!tunes.playing}
      onclick={toggle_pause}
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

  <button class="close" onclick={stop_playing}>
    ×
  </button>

  <div class="playback">

    <p class="start">
      {display_timestamp(timestamp)}
    </p>

    <div class="bar" class:long={duration >= 5 * 60}
      style:--frac={(timestamp ?? 0) / (duration ?? 1)}>
    </div>

    {#key tunes.track.shard}
      <p class="end"> {display_timestamp(duration)} </p>
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
    background: color.adjust($col-prot, $lightness: -20%);
    transform: scale(96%);
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
      background: linear-gradiant(to right in oklch, $col-prot, $col-quat, $col-deut, $col-trit);
    }
  }
}

</style>
