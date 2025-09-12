<!-- @component Back
 
The parallax background picture.
-->

<script lang="ts">

import { browser } from "$app/environment";


interface Props {
  pict: string;
}

let { pict }: Props = $props();


$effect(() => { console.log(window.innerHeight) });

</script>


<img id="back"
  alt=""
  height="2560px"
  src="/ui/{pict}"
  style:--window-height="{browser ? window?.innerHeight : 0}px"
/>


<style lang="scss">

#back {
  max-width: 100%;
  max-height: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  
  transform: scale(105%);
  filter: blur(4px) brightness(88%);
  animation: parallax-transform linear, parallax-filter cubic-bezier(0.95, 0.05, 0.795, 0.035);  // ease-in-exp
  animation-timeline: --parallax;
}

@keyframes parallax-transform {
  from {
    transform:
      translateY(0)
      scale(105%);
  }
  to {
    transform:
      translateY(calc(var(--window-height, 0px) - 2560px))
      scale(125%);
  }
}

@keyframes parallax-filter {
  from {
    filter: blur(4px) brightness(88%);
  }
  to {
    filter: blur(2px) brightness(100%);
  }
}

</style>
