<script lang="ts">

import Words from "#parts/words.svelte";

</script>


  <section class="centre">
    <h2> Reading ftw!! </h2>
    <div class="words">
      <Words words={[
        "Legend", "Power of Five",
        "Harry Potter", "Percy Jackson", "The Maze Runner", "The Hunger Games", "Alex Rider",
        "Red Queen", "Shatter Me",
      ]} />
    </div>
  </section>

  <div class="card">
    <p> yeah, I really can’t cover everything here, can I? you can find way more over in <a href="https://sup2point0.github.io/Assort">Assort</a>... </p>
  </div>


<style lang="scss">

@use './src/styles/_words' as *;

.card {
  @include card;

  p {
    @include font-fun;
    font-size: 120%;
    color: $col-deut;
  }
}

</style>
