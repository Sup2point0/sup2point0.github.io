<!-- @component Back -->
<script lang="ts">

import { onMount } from "svelte";
import { browser } from "$app/environment";

let {
  col = "scarlet"
} = $props();


let page: HTMLElement | null;
let back: HTMLElement | null;

let window_height: number | undefined = $derived(browser ? window.innerHeight : undefined);
let page_height: number | undefined = $derived(page?.scrollHeight);
let back_height: number | undefined;

let scroll_frac: number = $state(0);
let scroll_offset: number = $state(0);


onMount(() => {
  if (browser) {
    page = document?.getElementById("page");
    back = document?.getElementById("back");
    back_height = back?.scrollHeight;

    page?.addEventListener("scroll", () => {
      let scroll = page!.scrollTop;

      if (scroll && page_height && window_height) {
        scroll_frac = scroll / (page_height - window_height);
      }
    })
  }
})

</script>


<img id="back"
  alt="cortex-{col}"
  src="/ui/cortex-{col}-vert.jpg"
  style:top="{Math.round(scroll_frac * (window_height - back_height))}px"
/>


<style lang="scss">

#back {
  max-width: 100%;
  max-height: none;
  position: absolute;
  left: 0;
  z-index: -1;
  filter: blur(4px) brightness(0.88);
  // transform: scale(1.05);
  // transition: top 0.1s ease-out;
}

</style>
