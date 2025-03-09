<!-- @component Back -->
<script lang="ts">

import { onMount } from "svelte";
import { browser } from "$app/environment";


interface Props {
  root: HTMLElement;
  col: "violet" | "scarlet";
}

let { root, col = "scarlet" } = $props();


let back: HTMLElement | undefined = $state();

let window_height = $derived(browser ? window.innerHeight : undefined);
let page_height = $derived(root?.scrollHeight);
let back_height;

let scroll_frac: number = $state(0);


onMount(() => {
  if (browser) {
    back_height = back?.scrollHeight;

    root?.addEventListener("scroll", () => {
      let scroll = root.scrollTop;

      if (scroll && page_height && window_height) {
        scroll_frac = scroll / (page_height - window_height);
        console.log(scroll_frac);
      }
    })
  }
})


</script>


<img id="back"
  alt="cortex-{col}"
  src="/ui/cortex-{col}-vert.jpg"
  style:filter="blur({8 - (scroll_frac**8) * 6}px) brightness({0.88 - scroll_frac * 0.0})"
  bind:this={back}
/>
  <!-- style:top="{Math.round(scroll_frac * (window_height - back_height))}px" -->


<style lang="scss">

#back {
  max-width: 100%;
  max-height: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(4px) brightness(0.88);
  transform: scale(2.5) translateZ(-1px);
}

</style>
