<!-- @component Words

A list of words that shimmer mysteriously!
-->

<script lang="ts">

export let words: string[] = [];


const worded = words.entries().map(data => (
  {
    word: data[1],
    delay: data[0] * Math.round(Math.random() * 200 - 100) % 10,
  }
));

</script>


{#each worded as data}
  <span class="word" style:animation-delay="{data.delay}s">
    {data.word}
  </span>
{/each}


<style lang="scss">

span {
  @include font-ui;
  color: rgb(white, 80%);
  opacity: 25%;

  transition: color 0.2s ease-out, opacity 0.2s ease-out;
  animation-name: ephemeral-shimmer;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:hover {
    color: $col-prot;
    opacity: 100%;
  }
}

@keyframes ephemeral-shimmer {
  to {
    opacity: 90%;
  }
}

</style>
