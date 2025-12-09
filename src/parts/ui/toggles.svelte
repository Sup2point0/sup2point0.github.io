<!-- @component Toggles
 
A collection of search filter toggles.
-->

<script lang="ts">

interface Props {
  options: Record<string, boolean>;
}

let { options = $bindable() }: Props = $props();

</script>


<div class="toggles">
  {#each Object.entries(options) as [option, state]}
    <button
      class:active={state}
      onclick={() => { options[option] = !state }}
    >
      {option}
    </button>
  {/each}
</div>


<style lang="scss">

@use 'sass:color';


.toggles {
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;
}

button {
  padding: 0.15em 0.5em 0;
  @include font-fun;
  color: $col-text-deut;
  font-size: 110%;
  background: none;
  border: none;
  outline: none;
  @include shear-card();
  transition: #{trans()};

  &.active {
    color: $col-text;

    &::before {
      background: color.change($col-trit, $alpha: 0.42);
    }
  }

  &:hover {
    cursor: pointer;
    color: black;
  }
}

</style>
