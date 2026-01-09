<script lang="ts">

import "#styles/essence.scss";

import Nav        from "#parts/core/nav.svelte";
import HexCell    from "#parts/dev/hex.cell.svelte";
import HexContent from "#parts/dev/hex.content.svelte";
import type { CellUpdater } from "#parts/dev/hex.cell.svelte";

import { onMount, setContext } from "svelte";
import { fade } from "svelte/transition";


const COLS = 31; setContext("cols", COLS);
const ROWS = 36; setContext("rows", ROWS);


let live = $state(false);

let mouse = { x: 0, y: 0 };
let scroll = { x: 0, y: 0 };

let lattice: HTMLElement | null = $state(null);
let updaters: CellUpdater[] = [];


onMount(() => {
  if (lattice === undefined) return;

  lattice!.scrollLeft = (lattice!.scrollWidth - lattice!.clientWidth) / 2;
  lattice!.scrollTop = (lattice!.scrollHeight - lattice!.clientWidth) / 2;

  live = true;
});


function sync_mouse(e: MouseEvent)
{
  /* Dirty little hack to ensure a reactive update on scroll :P */
  mouse.x = e.pageX ?? mouse.x - 1;
  mouse.y = e.pageY ?? mouse.y;

  scroll.x = lattice?.scrollLeft ?? 0;
  scroll.y = lattice?.scrollTop ?? 0;

  for (let update of updaters) update("prox", { mouse, scroll });

  // NOTE: Not performant enough, maybe we can try adding again at some point in the future =()
  // if (Math.random() > 0.99) {
  //   let delay = 100 + Math.floor(Math.random() * 200);
  //   let anim = 1 + Math.floor(Math.random() * 4);
  //   for (let update of updaters) update("shimmer", { delay, anim });
  // }
}

</script>


<svelte:document onmousemove={sync_mouse} />

<div class="root">
  <div class="nav-container">
    <Nav />
  </div>

  <div id="lattice" bind:this={lattice} onscroll={sync_mouse}>

    <div id="lattice-content"
      class:live
      in:fade={{ duration: 500, delay: 500 }}
    >
      <!-- back -->
      {#each { length: COLS } as _, x}
        {#each { length: ROWS } as _, y}
          <HexCell {x} {y} {updaters} />
        {/each}
      {/each}

      <HexContent x={15} y={16} icon="/icons/dev/haskell.svg" />
      <HexContent x={16} y={16} icon="/icons/dev/vscode.svg" />
      <HexContent x={17} y={16} icon="/icons/dev/rust.svg" />
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
