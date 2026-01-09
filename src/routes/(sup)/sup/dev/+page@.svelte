<script lang="ts">

import "#styles/essence.scss";

import { shuffle, zip } from "#scripts/utils";

import { lattice } from "./dev.cells";

import Nav        from "#parts/core/nav.svelte";
import HexCell    from "#parts/dev/hex.cell.svelte";
import HexContent from "#parts/dev/hex.content.svelte";

import { onMount, type SvelteComponent } from "svelte";
import { fade } from "svelte/transition";


const COLS = 31; const CX = 14;
const ROWS = 36; const CY = 13;


let live = $state(false);

let mx = 0, my = 0;
let sx = 0, sy = 0;


let viewport: HTMLElement | null = $state(null);
let cells: SvelteComponent[] = [];

onMount(() => {
  if (viewport === undefined) return;

  viewport!.scrollLeft = (viewport!.scrollWidth - viewport!.clientWidth) / 2;
  viewport!.scrollTop = (viewport!.scrollHeight - viewport!.clientWidth) / 2;

  live = true;
});


function sync_mouse(e: any)
{
  /* Dirty little hack to ensure a reactive update on scroll :P */
  let nx = e.pageX ?? mx - 1;
  let ny = e.pageY ?? my;

  mx = nx;
  my = ny;

  sx = viewport?.scrollLeft ?? 0;
  sy = viewport?.scrollTop ?? 0;

  /* NOTE PERF: Avoid updates on insignificant mouse movements to lighten load */
  // if (
  //   Math.abs(nx - mx) < 100
  //   && Math.abs(ny - my) < 100
  // ) return;

  for (let cell of cells) {
    cell.update(mx, my, sx, sy);
  }
}

function get_random_hex_cords(): [number, number][]
{
  return shuffle([
    [0, 0],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]);
}

</script>


<svelte:document onmousemove={sync_mouse} />

<div class="root">
  <div class="nav-container">
    <Nav />
  </div>

  <div id="lattice" bind:this={viewport} onscroll={sync_mouse}>

    <div id="lattice-content"
      class:live
      in:fade={{ duration: 500, delay: 500 }}
    >
      <!-- back -->
      {#each { length: COLS } as _, x}
        {#each { length: ROWS } as _, y}
          <HexCell bind:this={cells[x*ROWS + y]} {x} {y} />
        {/each}
      {/each}

      {#each Object.values(lattice) as collection}
        {@const cells = zip(get_random_hex_cords(), collection.cells)}

        {#each cells as [[dx, dy], entity]}
          {@const x = CX + collection.x + dx}
          {@const y = CY + collection.y + dy}

          <HexContent {entity} {x} {y} />
        {/each}
      {/each}
    </div>

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

.nav-container {
  width: 100%;
  position: absolute;
}
  
#lattice {
  margin-top: -1rem;
  flex-grow: 1;
  overflow: scroll;
  scrollbar-width: none;
}

#lattice-content {
  width: 200vw;
  height: 200vw;
  overflow: hidden;
  position: relative;
  background-image:
    radial-gradient(circle at 25% 25%, $col-hexback-dots 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, $col-hexback-dots 1px, transparent 1px),
  ;
  background-size: 1rem calc(1rem / cos(60deg));
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.live {
    opacity: 1;
  }
}

</style>
