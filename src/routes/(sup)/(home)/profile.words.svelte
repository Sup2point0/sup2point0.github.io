<script>

import Words from "#parts/words.svelte";

</script>


<div class="stuff">
  <section class="centre anim">
    <h3> You could call me a </h3>
    <div class="words">
      <Words words={[
        "nerd", "creator", "artist", "dreamer", "ambivert", "jack-of-all-knives",
        "programmer", "developer", "musician", "gamer", "mathematician", "chemist", "logician"
      ]} />
    </div>
  </section>
  
  <section class="centre anim">
    <h3> who is </h3>
    <div class="words">
      <Words words={[
        "curious", "creative", "independent", "driven", "serene", "overthinking", "turbulent", "nihilist", "avid"
      ]} />
    </div>
  </section>
  
  <section class="centre anim">
    <h3> I love </h3>
    <div class="words">
      <Words words={[
        "game development",
        "music production", "piano", "drums",
        "rhythm games", "Yu-Gi-Oh!", "Ultraman",
        "geometry", "quaternions", "graph drawing",
        "organic chemistry", "organic synthesis",
        "graphic design", "typography",
        "reading", "creative writing", "poetry", "linguistics", "etymology",
        "skyscrapers puzzles",
        "anime", "light mode",
      ]} />
    </div>
  </section>
</div>


<style lang="scss">

.stuff {
  margin-top: 2rem;
}

section {
  margin-bottom: 4rem;
}

h3 {
  margin-bottom: 0.5em;
  @include font-flavour;
  font-weight: normal;
  font-size: 250%;
}

.words {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 150%;
}

</style>
