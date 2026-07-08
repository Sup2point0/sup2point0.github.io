<!-- @component ProfileShowerthought -->

<script lang="ts">
  
import { github_io } from "#scripts/suppety";
  
import { onMount } from "svelte";
import { fade } from "svelte/transition";


let showerthought: string = $state("");
let recently_seen: string[] = [];

onMount(new_showerthought);

function new_showerthought()
{
  let candidate = github_io.sample_value();

  for (let i = 0; i < 10; i++) {
    if (candidate && !recently_seen.includes(candidate)) break;
    candidate = github_io.sample_value();
  }

  if (candidate) {
    if (recently_seen.length > 7) {
      recently_seen.shift();
    }
    recently_seen.push(candidate);
    
    showerthought = candidate;
  }
}

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
  font-size: 120%;
  color: $col-deut;
  text-shadow:
    0 1px 2px black,
    0 1px 2px black;

  &:hover {
    cursor: none;
  }
}

</style>
