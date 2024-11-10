<script lang="ts">

import Words from "#parts/words.svelte";

</script>


<svelte:head>
  <title> loves · Sup#2.0 </title>
  <meta name="description" content="All my loves, hobbies and interests!" />
</svelte:head>

<section class="left">
  <h2> I spend my time </h2>
  <div class="words">
    <Words words={[]} />
  </div>
</section>


<style lang="scss">

section {
  margin-bottom: 4rem;
}

.words {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
