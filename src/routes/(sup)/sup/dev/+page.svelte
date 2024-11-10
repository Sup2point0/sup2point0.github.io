<script lang="ts">

import Words from "#parts/words.svelte";

</script>


<div class="axis">
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
    <h2> I develop in </h2>
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
    <h2> and I’d like to learn </h2>
    <div class="words">
      <Words words={[
        "Swift", "Julia", "Carbon", "Elixir"
      ]} />
    </div>
  </section>
</div>


<style lang="scss">

.axis {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4rem;
}

section {
  width: min(80%, 800px);
}

h2 {
  margin-bottom: 0.5em;
  padding: 0 2rem;
  @include font-flavour;
  font-size: 200%;
}

.words {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 150%;
}

</style>
