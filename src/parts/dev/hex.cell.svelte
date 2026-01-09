<!-- @component HexCell -->

<script lang="ts" module>

export type CellUpdater = (
  mode: "prox" | "shimmer",
  args: ProximityArgs | ShimmerArgs,
) => void;

interface ProximityArgs {
  mouse: { x: number, y: number},
  scroll: { x: number, y: number},
}

interface ShimmerArgs {
  delay: number;
  anim: number;
}

</script>

<script lang="ts">

import { onMount, getContext } from "svelte";


interface Props {
  x: number;
  y: number;
  updaters?: CellUpdater[];
}

let { x, y, updaters }: Props = $props();


const X: number = getContext("cols");
const Y: number = getContext("rows");

const SHIMMER_PEAK = 0.5;
const SHIMMER_RATE_UP = 0.025;
const SHIMMER_RATE_DOWN = 0.010;


let proximity: number = $state(0);
let shimmer: number = $state(0);

let self: HTMLElement;
let cx: number;
let cy: number;


onMount(() => {
  let rect = self.getBoundingClientRect();
  cx = rect.x + rect.width / 2;
  cy = rect.y + rect.height / 2;
  
  updaters?.push(updater);
});


const updater: CellUpdater = (mode, args) => {
  switch (mode)
  {
    case "prox":
      let { mouse, scroll } = args as ProximityArgs;

      let dx = mouse.x - (cx - scroll.x);
      let dy = mouse.y - (cy - scroll.y);
      let norm = dx**2 + dy**2;

      let scaled = norm / 100;
      let prox = 100 / (scaled + 1);

      let target = Math.min(prox, 1);
      proximity += (target - proximity) / 8;
      break;

    case "shimmer":
      let { delay, anim } = args as ShimmerArgs;

      // if (shimmering > 0) clearInterval(shimmering);

      switch (anim) {
        case 1: delay *=   x +   y; break;
        case 2: delay *=   x + Y-y; break;
        case 3: delay *= X-x +   y; break;
        case 4: delay *= X-x + Y-y; break;
      }
      delay += Math.random();

      let shimmering = setTimeout(() => {
        let i = 0;

        shimmering = setInterval(() => {
          shimmer += SHIMMER_RATE_UP;
          i++;

          if (shimmer > SHIMMER_PEAK || i > SHIMMER_PEAK / SHIMMER_RATE_UP) {            
            shimmer = SHIMMER_PEAK;
            clearInterval(shimmering);
            i = 0;

            shimmering = setInterval(() => {
              shimmer -= SHIMMER_RATE_DOWN;
              i++;

              if (shimmer < 0 || i > SHIMMER_PEAK / SHIMMER_RATE_DOWN) {                
                clearInterval(shimmering);
                shimmer = 0;
                shimmering = 0;
              }
            }, 1000 / 60);
          }
        }, 1000 / 60);
      }, delay);

      break;
  }
};

</script>


<div class="position-container"
  bind:this={self}
  style:--x={x}
  style:--y={y}
  style:--offset={y % 2}
  style:--prox={proximity + shimmer}
>
  <div class="hex-cell"></div>
</div>


<style lang="scss">

$width: 7rem;
$height: calc($width * cos(30deg));
$tight: 0.94;

.position-container {
  position: absolute;
  left: -2 * $width;
  top: -2 * $height;
  transform:
    translateX(calc( $tight * $width * (var(--x) + var(--offset, 0) / 2) ))
    translateY(calc( $tight * $height * var(--y) ))
  ;
}

.hex-cell {
  width: $width;
  height: $height;
  position: relative;

  background: $col-hexback-cell;
  clip-path: polygon(50% -50%,100% 50%,50% 150%,0 50%);
  transform:
    rotate(30deg)
    scale(calc( 100% - var(--prox) * 4.5% ));
  filter: brightness(calc( 100% + var(--prox) * 100% ));
}

</style>
