<!-- @component Words

A list of words that shimmer mysteriously!
-->

<script lang="ts">

export let words: string[] = [];
export let shuffle: boolean = false;


const dur = 7;

const worded = check_shuffle(words).entries().map(data => (
  {
    word: data[1],
    delay: data[0] * Math.round(Math.random() * dur*20 - dur*10) % dur,
  }
));


function check_shuffle(words: string[]): string[]
{
  if (shuffle) {
    return words.sort(() => Math.random() - 0.5);
  } else {
    return words;
  }
}

</script>


{#each worded as data}
  <span class="word"
    style:animation-duration="{dur}s"
    style:animation-delay="{data.delay}s"
  >
    {data.word}
  </span>
{/each}


<style lang="scss">

span {
  @include font-ui;
  color: rgb(white, 80%);
  opacity: 25%;

  transition: color 0.2s ease-out,
              opacity 0.2s ease-out,
              transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  animation-name: ephemeral-shimmer;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:hover {
    color: $col-prot;
    opacity: 100%;
    transform: scale(1.04);
  }
}

@keyframes ephemeral-shimmer {
  to {
    opacity: 90%;
  }
}

</style>
