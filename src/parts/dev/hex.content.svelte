<!-- @component HexContent

-->

<script lang="ts">

import type { LangData, TechData } from "#scripts/types/dev";

type CellSource = LangData | TechData;


interface Props {
  entity: CellSource;
  x: number;
  y: number;
}

let { entity, x, y }: Props = $props();

</script>



<div class="position-container"
  style:--x={x}
  style:--y={y}
  style:--offset={y % 2}
>
  <div class="hex-content">
    <img alt="" src="/icons/dev/{entity.icon}"
      style:border-radius={entity._style === "round" ? "20%" : undefined}
    />
  </div>
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

.hex-content {
  width: $width;
  height: $height;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(50% -50%,100% 50%,50% 150%,0 50%);
  transform: rotate(30deg);
  transition: #{trans()};

  &:hover {
    background: rgba(white, 5%);

    img {
      transform: rotate(-30deg) scale(105%);
    }
  }
}

img {
  width: 0.5 * $width;
  aspect-ratio: 1 / 1;
  transform: rotate(-30deg);
  transition: #{trans()};
}

</style>
