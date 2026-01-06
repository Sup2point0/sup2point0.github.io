<!-- @component Header -->

<script lang="ts">

let { margin = true, children } = $props();

</script>


<h2 style:margin-bottom={margin ? "2rem" : undefined}>
  {@render children?.()}
</h2>


<style lang="scss">

h2 {
  @include font-tech;
  font-weight: normal;
  font-size: 200%;
  text-align: center;
}

</style>
