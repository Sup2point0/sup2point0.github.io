<script lang="ts">

import Words from "#parts/words.svelte";

</script>


<svelte:head>
  <title> loves · Sup#2.0 </title>
  <meta name="description" content="All my loves, hobbies and interests!" />
</svelte:head>

<div class="axis">
  <section class="centre">
    <h2> I spend my time </h2>
    <div class="words">
      <Words words={[
        "programming", "developing games",
        "doing Desmos", "doing maths", "drawing chemical structures",
        "producing music", "playing piano",
        "creating custom Yu-Gi-Oh! cards",
        "watching YouTube", "reading Wikipedia",
      ]} />
    </div>
  </section>

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

  <section class="centre">
    <h2> Also anime and other media. </h2>
    <div class="words">
      <Words words={[
        "Ultraman", "Yu-Gi-Oh!", "Pokémon",
        "熊出没", "全职高手 (The King’s Avatar)", "亲爱的、热爱的", "小欢喜",
        "Oshi no Ko", "Suzume no Tojimari", "Kanojo Okarishimasu", "Yosuga no Sora",
      ]} />
    </div>
  </section>

  <div class="card">
    <p> yeah, I really can’t cover everything here, can I? you can find way more over in <a href="https://sup2point0.github.io/Assort">Assort</a>... </p>
  </div>
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
