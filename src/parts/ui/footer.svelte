<!-- @component Footer -->

<footer>
  <p> crafted with ❤️ by Sup#2.0 </p>
  
  <p> &middot; </p>

  <p> built with <a target="_blank" href="https://svelte.dev">Svelte 5</a> + <a target="_blank" href="https://svelte.dev/docs/kit/introduction">SvelteKit</a> </p>
  
  <p> &middot; </p>
  
  <p> hosted on <a target="_blank" href="https://pages.github.com/">GitHub Pages</a> </p>
</footer>


<style lang="scss">

@use './src/styles/links' as *;


footer {
  margin: 2rem;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;;
}

p {
  @include font-flavour;
  color: rgb(white, 50%);
}

</style>
