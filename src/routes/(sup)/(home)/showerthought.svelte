<!-- @component ProfileShowerthought -->

<script>
  
import Block from "#parts/ui/block.svelte";
  
import { onMount } from "svelte";


let displayed_showerthought = $state("");

onMount(() => {
  displayed_showerthought = showerthoughts[Math.floor(Math.random() * showerthoughts.length)];
});

const showerthoughts = [
  `everything is a human construct.`,
  `the most dangerous assumption you can make is that you are correct.`,
  `suffering builds character.`,
  `everything will be fine.`,
  `sup sup’s sups sup sup’s sup sup sup sup’s sup sups`,

  `life is one huge logistical issue`,
  `“ice lolly” and “popsicle” are just “icicle” and “lollipop” intersected.`,

  `don’t mind me, just being productively unproductive`,
  `suffering from life deprivation`,
  `high on clutch catalyst`,
];

</script>


{#if displayed_showerthought}
  <h2> Today’s Showerthought </h2>

  <Block kind="fun">
    {@html displayed_showerthought}
  </Block>
{/if}


<style lang="scss">

h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-transform: uppercase;
}
  
</style>
