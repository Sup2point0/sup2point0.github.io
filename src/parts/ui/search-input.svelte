<!-- @component SearchInput

A search input bar.
-->

<script lang="ts">

interface Props {
  query: string;
}

let { query = $bindable() }: Props = $props();

</script>


<div class="input-container">
  <input type="search"
    bind:value={query}
    placeholder="search"
  />
</div>


<style lang="scss">

.input-container {
  width: 32rem;
  @include shear-card();
  transition: #{trans()};

  &::before {
    background: rgb(white, 25%);
  }

  &:hover, &:has(input:focus) {
    width: 33rem;

    &::before {
      background: rgb(white, 30%);
    }
  }
}

input {
  width: 100%;
  padding: 0.5rem 1rem 0.45rem;

  appearance: none;
  @include font-fun;
  font-size: 1.25rem;
  color: $col-text;
  background: none;
  border: none;
  outline: none;

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
}

input::placeholder {
  @include font-fun;
  font-size: 1.25rem;
  color: $col-deut;
}

</style>
