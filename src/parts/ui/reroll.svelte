<!-- @component Reroll

A button for re-rolling non-deterministic profile elements.
-->

<script lang="ts">

import HoverTip from "#parts/ui/hover-tip.svelte";

interface Props {
  onclick: any;
}

let { onclick }: Props = $props();

</script>


<button {onclick}>

  <div class="tip">
    <HoverTip text="REROLL" />
  </div>
</button>


<style lang="scss">

button {
  background: none;

  &:hover, &:focus {
    background: black;
  }
}

.tip {
  display: none;
  position: relative;

  button:where(:hover, :focus) & {
    display: block;
  }
}

</style>
