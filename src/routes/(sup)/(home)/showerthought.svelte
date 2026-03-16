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
  [20, `sup sup’s sups sup sup’s sup sup sup sup’s sup sups`],
  [20, `jack of all knives, none of a kind, kind of a none`],
  [20, `don’t mind me, just being productively unproductive`],
  [20, `suffering from life deprivation`],
  [20, `high on clutch catalyst`],
  [20, `sleep is so good.`],
  [20, `music is love, music is life.`],
  [7, `growing up has got to be one of the saddest things I’ve ever experienced.`],

  [13, `everything is a human construct.`],
  [13, `the most dangerous assumption you can make is that you are correct.`],
  [13, `suffering builds character.`],
  [13, `everything will be fine.`],
  [13, `Say what you mean, and mean what you say.`],
  [13, `If a capacitive capacitor could capacitate capacitance, how much capacitance could a capacitative capacitor capacitate if it capacitatively capacitated capacitance?`],
  [13, `life is one huge logistical issue`],

  [1, `“ice lolly” and “popsicle” are just “icicle” and “lollipop” intersected.`],
);

</script>


{#if displayed_showerthought}
  <Header margin={false}> TODAY’S SHOWERTHOUGHT </Header>

  <Block kind="fun">
    {@html displayed_showerthought}
  </Block>
{/if}
