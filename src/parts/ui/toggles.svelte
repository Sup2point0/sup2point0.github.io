<!-- @component Toggles
 
A collection of search filter toggles.
-->

<script lang="ts">

interface Props {
  options: Record<string, boolean>;
}

let { options = $bindable() }: Props = $props();


function toggle(option: string, current_state: boolean)
{
  if (Object.values(options).some(state => !state)) {
    options[option] = !current_state;
  }
  else {
    for (let opt in options) {
      options[opt] = false;
    }
    options[option] = true;
  }
}

</script>


<div class="toggles">
  {#each Object.entries(options) as [option, state]}
    <button
      class:active={state}
      onclick={() => toggle(option, state)}
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
    padding-left: 0.8em;
    padding-right: 0.8em;
    color: $col-quat;

    &::before {
      // background: color.change($col-prot, $alpha: 0.69);
    }
  }

  &:hover {
    cursor: pointer;
    color: $col-deut;
  }

  &:active {
    color: $col-trit;
    transform: scale(96%);
  }
}

</style>
