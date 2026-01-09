<!-- @component HexContent

-->

<script lang="ts">

interface Props {
  x: number;
  y: number;
  icon: string;
}

let { x, y, icon: src }: Props = $props();

</script>



<div class="position-container"
  style:--x={x}
  style:--y={y}
  style:--offset={y % 2}
>
  <div class="hex-content">
    <img alt="" {src} />
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
