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
<!-- <span class="word" style:animation-delay="1s"> one </span>
<span class="word" style:animation-delay="2s"> two </span>
<span class="word" style:animation-delay="3s"> three </span>
<span class="word" style:animation-delay="4s"> four </span>
<span class="word" style:animation-delay="5s"> five </span>
<span class="word" style:animation-delay="6s"> six </span>
<span class="word" style:animation-delay="7s"> seven </span> -->


<style lang="scss">

span {
  @include font-ui;
  color: rgb(white, 80%);
  opacity: 20%;

  transition: color 0.2s ease-out;
  animation-name: ephemeral-shimmer;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:hover {
    color: $col-prot;
  }
}

@keyframes ephemeral-shimmer {
  to {
    opacity: 80%;
  }
}

</style>
