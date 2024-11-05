<script lang="ts">

import Words from "#parts/words.svelte";

</script>


<section class="left">
  <h2> I code in </h2>
  <div class="words">
    <Words words={[
      "Python", "C#", "Ruby",
      "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
    ]} />
  </div>
</section>

<section class="right">
  <h2> alongside </h2>
  <div class="words">
    <Words words={[
      "Svelte", "SvelteKit",
      "Markdown", "JSON", "JSON Schema", "YAML",
      "SQL", "LaTeX", "RegEx",
    ]} />
  </div>
</section>

<section class="left">
  <h2> and I develop in </h2>
  <div class="words">
    <Words words={[
      "VSCode", "GitHub Codespaces",
      "Unity", "Desmos",
      "GarageBand",
      "PowerPoint",
      "MolView",
    ]} />
  </div>
</section>

<section class="right">
  <h2> I’d like to learn </h2>
  <div class="words">
    <Words words={[
      "Swift", "Julia", "Carbon", "Elixir"
    ]} />
  </div>
</section>


<style lang="scss">

section {
  margin-bottom: 4rem;

  &.left { text-align: left; }
  &.right { text-align: right; }
}

.words {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
