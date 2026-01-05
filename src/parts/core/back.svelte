<!-- @component Back
 
The parallax background picture.
-->

<script lang="ts">

import { backs, type PictData } from "./backs";

import { onMount } from "svelte";
import { fade } from "svelte/transition";
import { expoInOut } from "svelte/easing";
import { onNavigate } from "$app/navigation";


let pict: PictData | null = $state(null);
let timeout: number = 0;


function pick_backdrop()
{
  pict = backs[Math.floor(Math.random() * backs.length)];
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(pick_backdrop, 2 * 60 * 1000);
}


onMount(pick_backdrop);

onNavigate(nav => {
  let from = nav.from?.url.pathname.split("/", 4);
  let to   = nav.to?.url.pathname.split("/", 4);

  if (
    from?.at(2) !== (to?.at(2) ?? 2)
    || from?.at(3) !== (to?.at(3) ?? 3)
  ) {
    pick_backdrop();
  }
});

</script>


{#key pict}
  <img id="back"
    alt=""
    src={pict ? `/back/${pict?.file}` : undefined}
    transition:fade={{ duration: 2500, easing: expoInOut }}
    style:--scale-init="{pict?.scale?.init ?? 105}%"
    style:--scale-end="{pict?.scale?.end ?? 125}%"
    style:--blur-init="{pict?.blur?.init ?? 4}px"
    style:--blur-end="{pict?.blur?.end ?? 4}px"
    style:--brightness-init="{pict?.brightness?.init ?? 88}%"
    style:--brightness-end="{pict?.brightness?.end ?? 100}%"
  />
{/key}


<style lang="scss">

img#back {
  min-width: max(100vw, 720px);
  max-width: 100vw;
  max-height: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  
  transform: scale(105%);
  filter: blur(4px) brightness(88%);
  animation:
    parallax-transform linear,
    parallax-filter cubic-bezier(0.95, 0.05, 0.795, 0.035)  // ease-in-exp
  ;
  animation-timeline: --parallax;
}

@keyframes parallax-transform {
  from {
    transform:
      translateY(0)
      scale(var(--scale-init, 105%));
  }
  to {
    transform:
      translateY(calc(100vh - 100vw * 16 / 9))
      scale(var(--scale-end, 120%));
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
