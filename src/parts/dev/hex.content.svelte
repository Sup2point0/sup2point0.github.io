<!-- @component HexContent

-->

<script lang="ts">

import type { DevEntity } from "#scripts/types/dev";


interface Props {
  entity: DevEntity;
  x: number;
  y: number;
  selected_entity: DevEntity | null;
  viewport: HTMLElement;
}

let {
  entity, x, y,
  selected_entity = $bindable(), viewport = $bindable(),
}: Props = $props();

</script>



<div class="position-container"
  style:--x={x}
  style:--y={y}
  style:--offset={y % 2}
  style:--col={entity.colour}
>
  <button class="hex-content" onclick={e => {
    selected_entity = entity;

    let rect = e.target?.getBoundingClientRect();
    if (rect !== undefined) {
      viewport.scrollTo({
        left: viewport.scrollLeft + rect.x + (rect.width - viewport.clientWidth) / 2,
        top:  viewport.scrollTop + rect.y + (rect.height - viewport.clientHeight) / 2,
        behavior: "smooth",
      })
    }
  }}>
    <img alt="" src="/icons/dev/{entity.icon}"
      style:border-radius={entity._style === "round" ? "20%" : undefined}
    />
  </button>
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
    rotate(30deg)
    scale(96%)
  ;
}

.hex-content {
  width: $width;
  height: $height;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  outline: none;
  clip-path: polygon(50% -50%,100% 50%,50% 150%,0 50%);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover, &:focus-visible {
    background: var(--col, rgb(white, 10%));

    img {
      transform: rotate(-30deg) scale(110%);
    }
  }

  &:active {
    transform: scale(95%);
  }
}

img {
  width: 0.5 * $width;
  aspect-ratio: 1 / 1;
  transform: rotate(-30deg) scale(102%);
  transition: #{trans()};
}

</style>
