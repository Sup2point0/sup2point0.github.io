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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 30%);
  justify-content: center;
  gap: 1rem;
}

@media only screen and (max-width: $width-shrink) {
  .cards {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
  }
}

</style>
