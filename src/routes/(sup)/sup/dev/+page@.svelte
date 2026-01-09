<script lang="ts">

import "#styles/essence.scss";

import Nav from "#parts/core/nav.svelte";
import HexCell from "./cell.hex.svelte";
import type { CellUpdater } from "./cell.hex.svelte";

import { setContext } from "svelte";


const cols = 31;
const rows = 36;

setContext("cols", cols);
setContext("rows", rows);


let mouse = { x: 0, y: 0 };;
let scroll = { x: 0, y: 0 };

let lattice: HTMLElement | null = $state(null);
let updaters: CellUpdater[] = [];


function sync_mouse(e: MouseEvent)
{
  /* Dirty little hack to ensure a reactive update on scroll :P */
  mouse.x = e.pageX ?? mouse.x - 1;
  mouse.y = e.pageY ?? mouse.y;

  scroll.x = lattice?.scrollLeft ?? 0;
  scroll.y = lattice?.scrollTop ?? 0;

  for (let update of updaters) update("prox", { mouse, scroll });

  if (Math.random() > 0.99) {
    let delay = 100 + Math.floor(Math.random() * 200);
    let anim = 1 + Math.floor(Math.random() * 4);
    // window.alert(`HI ${delay} ${anim}`)
    for (let update of updaters) update("shimmer", { delay, anim });
  }
}

</script>


<svelte:document onmousemove={sync_mouse} />

<div class="root">
  <div class="nav-container">
    <Nav />
  </div>

  <div id="lattice"
    bind:this={lattice}
    onscroll={sync_mouse}
  >
    <div id="lattice-content">
      <!-- back -->
      {#each { length: cols } as _, x}
        {#each { length: rows } as _, y}
          <HexCell {x} {y} {updaters} />
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
  position: relative;
  background-image:
    radial-gradient(circle at 25% 25%, $col-hexback-dots 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, $col-hexback-dots 1px, transparent 1px),
  ;
  background-size: 1rem calc(1rem / cos(60deg));
}

</style>
