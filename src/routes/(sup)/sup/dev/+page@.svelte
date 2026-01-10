<script lang="ts">

import "#styles/essence.scss";

import { shuffle, zip } from "#scripts/utils";
import type { DevEntity } from "#scripts/types/dev";

import { lattice } from "./dev.cells";

import Nav          from "#parts/core/nav.svelte";
import HexCell      from "#parts/dev/hex.cell.svelte";
import HexContent   from "#parts/dev/hex.content.svelte";
import Overlay from "./overlay.svelte";

import { onMount, type SvelteComponent } from "svelte";
import { onNavigate } from "$app/navigation";


const COLS = 40; const CX = 20;
const ROWS = 47; const CY = 20;


let live = $state(false);
let selected_entity: DevEntity | null = $state(null);

/** Is the mouse pressed? */
let mousedown = $state(0);

/** Mouse cords */
let mx = 0, my = 0;

/** Scroll cords */
let sx = 0, sy = 0;

/** Max scroll cords*/
let rx = 0, ry = 0;


let viewport: HTMLElement | undefined = $state(undefined);
let cells: SvelteComponent[] = [];

onMount(() => {
  if (viewport === undefined) return;

  viewport!.scrollLeft = (viewport!.scrollWidth - viewport!.clientWidth) / 2;
  viewport!.scrollTop = (viewport!.scrollHeight - viewport!.clientWidth) / 2;

  setTimeout(() => { live = true; }, 10);
});

onNavigate(navigation => {
	if (!document.startViewTransition) return;

	return new Promise(resolve => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
      window?.scrollTo(0, 0);
		});
	});
});


function sync_mouse(e: any)
{
  if (selected_entity !== null) return;
  
  /* Dirty little hack to ensure a reactive update on scroll :P */
  let nx = e.pageX ?? mx - 1;
  let ny = e.pageY ?? my;

  mx = nx;
  my = ny;

  sx = viewport?.scrollLeft ?? 0;
  sy = viewport?.scrollTop ?? 0;

  if (viewport !== undefined) {
    rx = viewport.scrollWidth - viewport.clientWidth;
    ry = viewport.scrollHeight - viewport.clientHeight;

    if      (sx == 0)  { viewport.scrollLeft = rx - 1; }
    else if (sx >= rx) { viewport.scrollLeft = 1; }

    if      (sy == 0)  { viewport.scrollTop = ry - 1; }
    else if (sy >= ry) { viewport.scrollTop = 1; }
  }

  /* NOTE PERF: Avoid updates on insignificant mouse movements to lighten load */
  // if (
  //   Math.abs(nx - mx) < 100
  //   && Math.abs(ny - my) < 100
  // ) return;

  for (let cell of cells) {
    cell.update(mx, my, sx, sy, rx, ry);
  }
}

function get_random_hex_cords(): [number, number][]
{
  return shuffle([
    [0, 0],
    [1, -1], [1, 0], [1, 1],
    [0, 1], [-1, 0], [0, -1],
  ]);
}

</script>


<svelte:document
  onmousemove={sync_mouse}
  onmousedown={e => { sync_mouse(e); mousedown = 1; }}
  onmouseup={e => { sync_mouse(e); mousedown = 0; }}
/>

<div class="root">
  <div id="lattice" bind:this={viewport} onscroll={sync_mouse}>
    <div id="lattice-content" class:live>

      <!-- back -->
      {#each { length: COLS } as _, x}
        {#each { length: ROWS } as _, y}
          <!-- svelte-ignore binding_property_non_reactive -->
          <HexCell bind:this={cells[x*ROWS + y]} {x} {y} scale={1 + mousedown / 2} />
        {/each}
      {/each}

      <!-- icons -->
      {#each Object.values(lattice) as collection}
        {@const cells = zip(get_random_hex_cords(), collection.cells)}

        {#each cells as [[dx, dy], entity]}
          {@const x = CX + collection.x + dx}
          {@const y = CY + collection.y + dy}

          <HexContent {entity} {x} {y}
            bind:selected_entity bind:viewport
          />
        {/each}
      {/each}

    </div>
  </div>

  <div class="overlay-layout" class:expand={selected_entity !== null}>
    <Nav margin="0" />
    <Overlay bind:entity={selected_entity} />
  </div>
</div>


<style lang="scss">

:global(html:has(#dev-lattice)) {
  overflow-y: hidden;
}

.root {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
}
  
#lattice {
  user-select: none;
  margin-top: -1rem;
  flex-grow: 1;
  overflow: scroll;
  scrollbar-width: none;
}

#lattice-content {
  width: 300vw;
  height: 300vw;
  overflow: hidden;
  position: relative;
  background-image:
    radial-gradient(circle at 25% 25%, $col-hexback-dots 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, $col-hexback-dots 1px, transparent 1px),
  ;
  background-size: 1rem calc(1rem / cos(60deg));
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.live  {
    opacity: 1;
  }
}

.overlay-layout {
  pointer-events: none;
  width: 100vw;
    height: 100vh;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;

  &.expand {
    pointer-events: auto;
  }
}

</style>
