<!-- @component Header -->

<script lang="ts">

let { children } = $props();

</script>


<h2> {@render children?.()} </h2>


<style lang="scss">

h2 {
  margin-bottom: 2rem;
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-align: center;
}

</style>
