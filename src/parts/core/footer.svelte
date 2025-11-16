<!-- @component Footer -->

<footer>
  <p> crafted with <span>❤️</span> by <a target="_blank" href="https://github.com/Sup2point0">Sup#2.0</a> </p>
  
  <p> &middot; </p>

  <p> built with <a target="_blank" href="https://svelte.dev">Svelte 5</a> + <a target="_blank" href="https://svelte.dev/docs/kit/introduction">SvelteKit</a> </p>
  
  <p> &middot; </p>
  
  <p> hosted on <a target="_blank" href="https://github.com/Sup2point0/sup2point0.github.io">GitHub Pages</a> </p>
</footer>


<style lang="scss">

footer {
  margin: 4rem;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
}

p {
  @include font-fun;
  font-size: 125%;
  color: $col-text-deut;

  span {
    color: $col-text;
  }

  a {
    @include link;
  }
}

</style>
