<!-- @component Words

A list of words that shimmer mysteriously!
-->
<script lang="ts">

export let words: string[] = [];


const seed = Math.round(Math.random() * 100);

</script>


{#each words.entries() as [i, word]}
  <span class="word"
    style:animation-delay="{seed * i % 20}s"
  >
    {word}
  </span>
{/each}


<style lang="scss">

span {
  @include font-ui;
  color: rgb(white, 80%);

  transition: color 0.2s ease-out;
  animation: 20s ease-in infinite alternate ephemeral-shimmer;

  &:hover {
    color: $col-prot;
  }
}

@keyframes ephemeral-shimmer {
  from {
    opacity: 40%;
  }
  to {
    opacity: 80%;
  }
}

</style>
