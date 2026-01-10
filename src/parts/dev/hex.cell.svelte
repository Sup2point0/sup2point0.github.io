<!-- @component HexCell -->

<script lang="ts">

import { onMount } from "svelte";


interface Props {
  x: number;
  y: number;
  scale: number;
}

let { x, y, scale }: Props = $props();


let proximity: number = $state(0);

let self: HTMLElement;
let cx: number;
let cy: number;


onMount(() => {
  let rect = self.getBoundingClientRect();
  cx = rect.x + rect.width / 2;
  cy = rect.y + rect.height / 2;
});


export function update(
  mx: number, my: number,
  sx: number, sy: number,
)
{
  let dx = mx - (cx - sx);
  let dy = my - (cy - sy);
  let norm = dx**2 + dy**2;

  let scaled = norm / 100;
  let prox = 100 / (scaled + 1);

  let target = Math.min(prox, 1) * scale;
  // proximity = target;
  proximity += (target - proximity) / 8;
}

</script>


<div class="position-container"
  bind:this={self}
  style:--x={x}
  style:--y={y}
  style:--offset={y % 2}
  style:--prox={Math.round(proximity * 50) / 50}
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
