<!-- @component Back
 
The parallax background picture.
-->

<script lang="ts">

import { browser } from "$app/environment";
import { onMount } from "svelte";
import { fade } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface InterpData {
  init: number;
  end: number;
}

interface PictData {
  file: string;
  blur?: InterpData;
  brightness?: InterpData;
}

const backs: PictData[] = [
  {
    file: "cortex.scarlet.jpg",
    blur: { init: 4, end: 2 },
    brightness: { init: 88, end: 100 },
  },
  {
    file: "cortex.violet.jpg",
    blur: { init: 3, end: 1 },
    brightness: { init: 92, end: 100 },
  },
  {
    file: "geometric.cyber.jpg",
    blur: { init: 8, end: 4 },
    brightness: { init: 40, end: 60 },
  },
];


let pict: PictData | null = $state(null);

onMount(() => {
  pict = backs[Math.floor(Math.random() * backs.length)];
});

</script>


{#if pict}
  <img id="back"
    alt=""
    src="/ui/{pict.file}"
    transition:fade={{ duration: 2000, easing: expoInOut }}
    style:--blur-init="{pict.blur?.init ?? 4}px"
    style:--blur-end="{pict.blur?.end ?? 4}px"
    style:--brightness-init="{pict.brightness?.init ?? 88}%"
    style:--brightness-end="{pict.brightness?.end ?? 100}%"
  />
{/if}


<style lang="scss">

img#back {
  min-width: max(100vw, 720px);
  max-width: 100vw;
  max-height: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  
  transform: scale(105%);
  filter: blur(4px) brightness(88%);
  animation: parallax-transform linear, parallax-filter cubic-bezier(0.95, 0.05, 0.795, 0.035);  // ease-in-exp
  animation-timeline: --parallax;
}

@keyframes parallax-transform {
  from {
    transform:
      translateY(0)
      scale(105%);
  }
  to {
    transform:
      translateY(calc(100vh - 100vw * 16 / 9))
      scale(125%);
  }
}

@keyframes parallax-filter {
  from {
    filter: blur(var(--blur-init)) brightness(var(--brightness-init));
  }
  to {
    filter: blur(var(--blur-end)) brightness(var(--brightness-end));
  }
}

</style>
