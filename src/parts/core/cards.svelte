<!-- @component Cards

A flex container for cards.
-->

<script lang="ts">

interface Props {
  force_grid?: boolean;
  children: any;
}

let { force_grid = false, children }: Props = $props();

</script>


<div class="cards" class:grid={force_grid}>
  {@render children()}
</div>


<style lang="scss">

.cards {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;

  &.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 30%);
  }
}

@media (max-width: $width-shrink) {
  .cards {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
  }
}

</style>
