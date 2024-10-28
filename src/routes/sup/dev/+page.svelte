<script lang="ts">

import Words from "#parts/words.svelte";

</script>


<section>
  <h2> I develop in </h2>

  <div class="words">
    <Words words={[
      "Python", "C#", "Ruby",
      "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
    ]} />
  </div>
</section>


<style lang="scss">

.words {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
