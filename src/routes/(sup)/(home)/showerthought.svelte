<!-- @component ProfileShowerthought -->

<script>
  
import { pick_daily } from "#scripts/utils";

import Block  from "#parts/ui/block.svelte";
import Header from "#parts/ui/header.svelte";
  
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
  <Header> Today’s Showerthought </Header>

  <Block kind="fun">
    {@html displayed_showerthought}
  </Block>
{/if}
