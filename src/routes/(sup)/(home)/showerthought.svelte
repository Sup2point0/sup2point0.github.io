<!-- @component ProfileShowerthought -->

<script>
  
import { pick_daily } from "#scripts/utils";

import Block from "#parts/ui/block.svelte";
  
import { onMount } from "svelte";


let displayed_showerthought = $state("");

onMount(async () => {
  displayed_showerthought = await pick_daily(showerthoughts);
});

const showerthoughts = [
  `everything is a human construct.`,
  `the most dangerous assumption you can make is that you are correct.`,
  `suffering builds character.`,
  `everything will be fine.`,
  `sup sup’s sups sup sup’s sup sup sup sup’s sup sups`,
  `If a capacitive capacitor could capacitate capacitance, how much capacitance could a capacitative capacitor capacitate if it capacitatively capacitated capacitance?`,

  `life is one huge logistical issue`,
  `“ice lolly” and “popsicle” are just “icicle” and “lollipop” intersected.`,

  `don’t mind me, just being productively unproductive`,
  `suffering from life deprivation`,
  `high on clutch catalyst`,
  `sleep is so good.`,
  `music is love, music is life.`,
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
