<!-- @component ProfileCards -->

<script lang="ts">

import { pick_random } from "#scripts/utils";

import Cards    from "#parts/core/cards.svelte";
import Clicky   from "#src/parts/ui/clicky.svelte";
import LinkCard from "#parts/ui/card.link.svelte";

import { onMount } from "svelte";
import { fade } from "svelte/transition";


let displayed_title = $state("");
let displayed_routes: Record<string, string> = {};

onMount(() => {
  displayed_title = pick_random(title_routes);

  for (let [section, routes] of Object.entries(content_routes)) {
    displayed_routes[section] = pick_random(routes);
  }
});

const title_routes = [
  `stuff I create`,
  `my stuff`,
  `stuff to check out`,
];

const content_routes = {
  games: [
    `I make games!`,
    `game developer at heart.`,
    `life-long love.`,
  ],
  websites: [
    `I make websites!`,
    `can’t stop making them.`,
    `too fun.`,
  ],
  software: [
    `I make... applications, I guess you could call them?`,
    `tools and experiments `,
    `what is a <code>.py</code> file anyway?`,
  ],
  graphics: [
    `I make posters, adverts and infographics!`,
    `PowerPoint my beloved~`,
  ],
  writing: [
    `I like writing!`,
  ],
  poetry: [
    `yes, I write poetry.`,
    `yes, I unironically enjoy it.`,
  ],
};

</script>


{#if displayed_title}
  <h2 transition:fade={{ duration: 500 }}>
    {displayed_title}
  </h2>

  <Cards force_grid={true}>
    <LinkCard text="games" link="sup/projects" capt={displayed_routes.games} />
    <LinkCard text="websites" link="sup/projects" capt={displayed_routes.websites} />
    <LinkCard text="software" link="sup/projects" capt={displayed_routes.software} />
    <LinkCard text="graphics" link="https://sup2point0.github.io/Assort/graphics" capt={displayed_routes.graphics} />
    <LinkCard text="writing" link="https://sup2point0.github.io/Assort/writing" capt={displayed_routes.writing} />
    <LinkCard text="poetry" link="https://sup2point0.github.io/Assort/poetry" capt={displayed_routes.poetry} />
  </Cards>

  <Clicky text="VIEW MORE" link="/sup/projects" />
{/if}


<style lang="scss">

h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-transform: uppercase;
}

</style>
