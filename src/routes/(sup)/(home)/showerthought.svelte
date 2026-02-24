<!-- @component ProfileShowerthought -->

<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";
  
import { pick_daily } from "#scripts/utils";

import Block  from "#parts/ui/block.svelte";
import Header from "#parts/ui/header.svelte";
  
import { onMount } from "svelte";


let displayed_showerthought: string | undefined = $state(undefined);

onMount(async () => {
  displayed_showerthought = (await pick_daily(showerthoughts))?.value;
});

const showerthoughts = new FrozenWeightedList
(
  [1, `everything is a human construct.`],
  [1, `the most dangerous assumption you can make is that you are correct.`],
  [1, `suffering builds character.`],
  [1, `everything will be fine.`],
  [1, `sup sup’s sups sup sup’s sup sup sup sup’s sup sups`],
  [1, `Saw what you mean, and mean what you say.`],
  [1, `If a capacitive capacitor could capacitate capacitance, how much capacitance could a capacitative capacitor capacitate if it capacitatively capacitated capacitance?`],

  [1, `life is one huge logistical issue`],
  [1, `“ice lolly” and “popsicle” are just “icicle” and “lollipop” intersected.`],

  [1, `don’t mind me, just being productively unproductive`],
  [1, `suffering from life deprivation`],
  [1, `high on clutch catalyst`],
  [1, `sleep is so good.`],
  [1, `music is love, music is life.`],
  [1, `growing up has got to be one of the saddest things I’ve ever experienced.`],
);

</script>


{#if displayed_showerthought}
  <Header margin={false}> TODAY’S SHOWERTHOUGHT </Header>

  <Block kind="fun">
    {@html displayed_showerthought}
  </Block>
{/if}
