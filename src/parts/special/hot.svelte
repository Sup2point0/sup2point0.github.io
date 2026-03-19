<!-- @component Hot -->

<script lang="ts">

import type { Style } from "#scripts/types";
import { construct_styles } from "#scripts/utils";

import { onMount } from "svelte";
import { scale } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
  style?: Style;
}

let { style = "" }: Props = $props();


let show = $state(false);

onMount(() => {
  show = true;
})

</script>


{#if show}
  <div class="hot"
    style={construct_styles(style)}
    transition:scale={{ duration: 600, delay: 1000, easing: expoOut }}
  >
    !
  </div>
{/if}


<style lang="scss">

.hot {
  position: absolute;
  font-size: 60%;
  font-weight: 700;
  color: $col-quat;
  transition: #{trans()};
}

</style>
