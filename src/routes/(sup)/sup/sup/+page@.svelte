<script lang="ts">

import "#styles/essence.scss";

import { onMount } from "svelte";


let root: HTMLElement;

let portals: Array<HTMLElement | null> = $state([]);


onMount(() => {
  if (root === undefined) return;
  root.scrollLeft = (root.scrollWidth - root.clientWidth) / 2;
  root.scrollTop = (root.scrollHeight - root.clientHeight) / 2;

  spawn();
});


function spawn()
{
  if (portals.length > 420) return;

  portals.push(null);
  let i = portals.length - 1;

  let observer = new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio == 0) spin(entry.target);
  });

  requestAnimationFrame(() => {
    let portal = portals[i]!;
    observer.observe(portal);
    spin(portal);
  });
}

function spin(target: HTMLElement)
{
  if (Math.random() > 0.8) return;

  for (let i = 0; i < 69; i++) {
    let x = ( 0.05 + Math.random() * 0.9) * root.scrollWidth;
    let y = ( 0.05 + Math.random() * 0.9) * root.scrollHeight;

    if (
      (root.scrollLeft - x > 100 || x - (root.scrollLeft + root.clientWidth) > 100)
    && (root.scrollTop - y > 100 || y - (root.scrollTop + root.clientHeight) > 100)
    ) {
      target.style.left = `${x}px`;
      target.style.top = `${y}px`;

      let s = 1 / (1 + portals.length / 4);
      target.style.transform = `scale(${s + Math.random() * (1 - s)})`;

      if (Math.random() > 0.69) {
        requestAnimationFrame(spawn);
      }

      break;
    }
  }
}

</script>


<div class="root" bind:this={root}>
  <div class="content">
    <img id="back" alt="" src="/back/soul.necropolis.jpg" />

    {#each portals as _, i}
      <div class="img-container" bind:this={portals[i]}>
        <img class="portal" alt="" src="/purple-portal.png" />
      </div>
    {/each}
  </div>
</div>


<style lang="scss">

.root {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  overflow: scroll;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  .content {
    width: 400vw; max-width: 400vw;
    height: 300vh; max-height: 300vh;
    position: relative;
  }
}

img#back {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  filter: blur(20px);
  transform: translateX(-50%) translateY(-50%) scale(120%);
}

.img-container {
  width: 6.9rem;
  height: 6.9rem;
  position: absolute;

  img.portal {
    width: 6.9rem;
    height: 6.9rem;
    animation: 20s linear infinite spinny;

    @keyframes spinny {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
  
</style>
