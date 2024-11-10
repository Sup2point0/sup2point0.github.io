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

  <section class="card">
    <p>
      I’ll delve deeper into all my interests over in <a href="sup/loves">loves</a>. If you’re looking for software development stuff, slide over to <a href="sup/dev">dev</a> or check out my <a href="sup/projects">projects</a>. Check out my <a href="sup/music">music</a> too!
    </p>
  </section>

  <section id="trivia" class="centre">
    <h2> Nontrivial Trivia </h2>
    <ul>
      <li> I love light mode. </li>
      <li> You’ll find me as <code>Sup2point0</code> on many platforms, since they don’t allow <code>#</code> or <code>.</code> in their usernames. </li>
      <li> I’m infatuated with Antarctica. </li>
      <li> oh, and btw, I like carrots! </li>
    </ul>
  </section>
</div>


<style lang="scss">

@use './src/styles/links' as *;


h2, h3 {
  margin-bottom: 0.5em;
  @include font-flavour;
  font-weight: normal;
  font-size: 250%;
}

.centre {
  text-align: center;
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


.stuff {
  margin-top: 2rem;
}

section {
  margin-bottom: 4rem;
}

#trivia {
  ul {
    list-style-type: none;
  }
}


</style>
