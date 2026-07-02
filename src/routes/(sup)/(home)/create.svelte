<!-- @component ProfileCards -->

<script lang="ts">

import Cards     from "#parts/core/cards.svelte";
import Clicky    from "#parts/ui/clicky.svelte";
import LinkCard  from "#parts/ui/card.link.svelte";
import Adventure from "#parts/special/adventure.svelte";

import { fade } from "svelte/transition";

</script>


<h2 transition:fade={{ duration: 500 }}>
  <Adventure tagless={true} routes={[
    [20, `stuff I create`],
    [20, `my stuff`],
    [10, `stuff to check out`],
  ]} />
</h2>

<Cards force_grid={true}>
  <!-- <LinkCard
    text="games"
    link="sup/projects"
    capt={[
      [20, `I make games!`],
      [20, `game developer at heart.`],
      [20, `life-long love.`],
    ]}
  /> -->
  <LinkCard
    link="sup/projects"
    text="websites"
    capt={[
      [20, `I make websites!`],
      [20, `can’t stop making them.`],
      [20, `too fun.`],
      [20, `certified web dev junkie`],
    ]}
    aspect="square"
  />
  <LinkCard
    link="sup/projects"
    text="software"
    capt={[
      [20, `Applications, websites and games I’ve made`],
      [20, `I make... applications, I guess you could call them?`],
      [20, `tools and experiments `],
      [1, `what is a <code>.py</code> file anyway?`],
    ]}
  />
  <LinkCard
    link="https://sup2point0.github.io/Assort/graphics"
    text="graphics"
    capt={[
      [20, `I make posters, infographics and more!`],
      [2, `PowerPoint my beloved~`],
    ]}
  />
  <LinkCard
    link="https://sup2point0.github.io/Assort/writing"
    text="writing"
    capt={null}
  />
  <LinkCard
    link="https://sup2point0.github.io/Assort/poetry"
    text="poetry"
    capt={[
      [20, `ravings and ponderings on life`],
    ]}
  />
</Cards>

<Clicky text="VIEW MORE" link="/sup/projects" />


<style lang="scss">

h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-transform: uppercase;
}

</style>
