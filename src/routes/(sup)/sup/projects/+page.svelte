<script lang="ts">

import Synopsis from "#parts/synopsis.svelte";
import ContentCard from "#parts/content-card.svelte";

import { base } from "$app/paths";

</script>


<Synopsis>
  <p> I’ve created way too many projects to list all of them in one place – but here’s a selection of my favourites for you to explore ^v^ </p>
</Synopsis>


<ContentCard title="Assort"
  icon=""
  link="https://sup2point0.github.io/Assort"
>
  <p class="caption">
    An assortment of all my creations!
  </p>
</ContentCard>

<ContentCard title="Antarctica"
  icon=""
  link="https://sup2point0.github.io/Antarctica"
>
  <p class="caption">
    A fictional reimagining of the coolest place on Earth.
  </p>
</ContentCard>

<ContentCard title="supcode"
  icon=""
  link="https://sup2point0.github.io/supcode"
>
  <p class="caption">
    A syntactically delicious conceptual programming language!
  </p>
</ContentCard>

<ContentCard title="Victory!"
  icon=""
  link="https://sup2point0.github.io/Victory"
>
  <p class="caption">
    A card game inspired by <em>Yu-Gi-Oh!</em>
  </p>
</ContentCard>


<style lang="scss">

h3 {

}

</style>
