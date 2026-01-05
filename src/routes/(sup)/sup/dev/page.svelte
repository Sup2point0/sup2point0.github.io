<script lang="ts">

import Words from "#parts/words.svelte";

</script>


<svelte:head>
  <title> dev · Sup#2.0 </title>
  <meta name="description" content="My adventures in software development!" />
</svelte:head>

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

@use './src/styles/_words' as *;

</style>
