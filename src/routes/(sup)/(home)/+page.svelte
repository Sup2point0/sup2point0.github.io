<script>

import Nav from "#parts/ui/nav.svelte";
import Words from "#parts/words.svelte";

import Profile from "../Profile.svelte";

</script>


<main>
  <Profile />

  <section id="intro">
    <p> sup, I’m Sup o/ </p>
    <p> Capturing the essence of me in a short bio is a hopelessly nontrivial NP-hard problem, so I’ll leave you to explore ^v^ </p>
  </section>

  <Nav />

  <section class="left anim">
    <h2> You could call me a </h2>
    <div class="words">
      <Words words={[
        "nerd", "creator", "artist", "dreamer", "ambivert", "jack-of-all-knives",
        "programmer", "developer", "musician", "gamer", "mathematician", "chemist", "logician"
      ]} />
    </div>
  </section>
</main>


<style lang="scss">
  
main {
  width: 100%;
  max-width: max(80vw, 800px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.words {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
