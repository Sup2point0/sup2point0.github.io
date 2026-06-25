<!-- @component ProfileShowerthought -->

<script lang="ts">
  
import { github_io } from "#scripts/suppety";
  
import { onMount } from "svelte";
import { fade } from "svelte/transition";


let showerthought: string = $state("");

function new_showerthought()
{
  showerthought = github_io.sample_value() ?? "";
}

onMount(new_showerthought);

</script>


{#if showerthought !== ""}
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <p in:fade={{ duration: 1000, delay: 1000 }}
    onclick={new_showerthought}
  >
    {@html showerthought}
  </p>
{/if}


<style lang="scss">

p {
  @include font-fun;
  color: $col-deut;
  text-shadow:
    0 1px 2px black,
    0 1px 2px black;

  &:hover {
    cursor: none;
  }
}

</style>
