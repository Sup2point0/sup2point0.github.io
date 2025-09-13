<!-- @component Cards

A flex container for cards.
-->

<script lang="ts">

interface Props {
  children: any;
}

let { children }: Props = $props();

</script>


<div class="cards">
  {@render children()}
</div>


<style lang="scss">

.cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 30rem) {
  .cards {
    flex-flow: column nowrap;
    align-items: stretch;
  }
}

</style>
