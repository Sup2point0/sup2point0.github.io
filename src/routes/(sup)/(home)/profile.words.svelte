<script>
import Words from "#parts/words.svelte";

</script>


<main>
  <section class="left anim">
    <h2> You could call me a </h2>
    <div class="words">
      <Words words={[
        "nerd", "creator", "artist", "dreamer", "ambivert", "jack-of-all-knives",
        "programmer", "developer", "musician", "gamer", "mathematician", "chemist", "logician"
      ]} />
    </div>
  </section>
  
  <section class="right anim">
    <h2> who is </h2>
    <div class="words">
      <Words words={[
        "curious", "creative", "independent", "driven", "serene", "overthinking", "turbulent", "nihilist", "avid"
      ]} />
    </div>
  </section>
</main>


<style lang="scss">

.words {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
