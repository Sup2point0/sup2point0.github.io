<section class="card">
  <p>
    I’ll delve deeper into all my interests over in <a href="sup/loves">loves</a>. If you’re looking for software development stuff, slide over to <a href="sup/dev">dev</a> or check out my <a href="sup/projects">projects</a>. Check out my <a href="sup/music">music</a> too!
  </p>
</section>

<section id="trivia" class="centre">
  <h2> Nontrivial Trivia </h2>
  <ul>
    <li> I love light mode. </li>
    <li> You’ll find me as <code>Sup2point0</code> on many platforms, since they don’t allow <code>#</code> or <code>.</code> in their usernames. </li>
    <li> I’m infatuated with Antarctica. </li>
    <li> oh, and btw, I like carrots! </li>
  </ul>
</section>


<style lang="scss">

@use './src/styles/links' as *;


section {
  margin-bottom: 4rem;

  &.card {
    @include card;
  }
}

#trivia {
  h2 {
    margin-bottom: 0.5em;
    @include font-flavour;
    font-weight: normal;
    font-size: 250%;
  }

  ul {
    max-width: 50vw;
    list-style-type: none;
    text-align: left;
  }

  li {
    margin: 1em 0;
  }
}

</style>
