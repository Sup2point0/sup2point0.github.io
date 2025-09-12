<!-- @component Back
 
The parallax background picture.
-->

<script>

import { browser } from "$app/environment";
import { onMount } from "svelte";
import { fade } from "svelte/transition";
import { expoInOut } from "svelte/easing";


const backs = [
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


let pict = $state(null);

onMount(() => {
  pict = backs[Math.floor(Math.random() * backs.length)];
});

</script>


{#if pict}
  <img id="back"
    alt=""
    height="2560px"
    src="/ui/{pict.file}"
    transition:fade={{ duration: 2000, easing: expoInOut }}
    style:--window-height="{browser ? window?.innerHeight : 640}px"
    style:--blur-init="{pict.blur.init ?? 4}px"
    style:--blur-end="{pict.blur.end ?? 4}px"
    style:--brightness-init="{pict.brightness.init ?? 88}%"
    style:--brightness-end="{pict.brightness.end ?? 100}%"
  />
{/if}


<style lang="scss">

#back {
  max-width: 100%;
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
      translateY(calc(var(--window-height) - 2560px))
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
