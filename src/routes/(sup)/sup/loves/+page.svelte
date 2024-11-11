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
    <h2> Music? It’s complicated. </h2>
    <div class="words">
      <Words shuffle={true} words={[
        "electronic", "house",
        "artcore", "hardcore", "speedcore", "breakcore",
        "complextro", "neurofunk", "dubstep", "drum N’ bass", "glitch hop",
        "kawaii bass", "future bass",
        "game", "anime", "arcade",
        "J-pop", "J-core", "oriental electronic",
        "C-pop",
        "full-flavour", "vocaloid",
      ]} />
    </div>
  </section>

  <section class="centre">
    <h2> TOO MANY ARTISTS </h2>
    <div class="words">
      <Words words={[
        "Camellia", "Silentroom", "tn-shi", "MYUKKE.", "PIKASONIC", "Hinkik",
        "Vexento", "Elektronomia", "Alan Walker", "Jim Yosef", "Alex Skrindo", "Electro-Light",
        "A-39", "茶鸣拾贰律",
        "Bo Burnham", "Johannes Bornlöf",
        "Avril Lavigne",
      ]} />
    </div>
  </section>

  <section class="centre">
    <h2> I game too, I guess. </h2>
    <div class="words">
      <Words words={[
        "Phigros", "Arcaea", "DEEMO II", "CHUNITHM", "maimai",
        "Bloons TD 6", "Bloons TD 5", "Bloons Pop!", "Bloons Super Monkey 2",
        "Asphalt 8: Airborne", "Asphalt 9: Legends",
        "Plants vs. Zombies 2", "Plants vs. Zombie",
        "Soul Knight",
        "Minecraft",
      ]} />
    </div>
  </section>
</div>


<style lang="scss">

@use './src/styles/_words' as *;

</style>
