<!-- @component ClickySelect

A button that selects a single option from a list of available options when clicked.
-->

<script lang="ts">

interface Props {
  text: string;
  active: boolean;
  disabled?: boolean;
  onclick: () => void;
}

let { text, active, disabled = false, onclick }: Props = $props();

</script>


<button class:active {disabled} {onclick}>
  {text}
</button>


<style lang="scss">

button {
  padding: 0.15em 0.4em 0;
  @include font-fun;
  color: $col-text-deut;
  font-size: 120%;
  background: none;
  border: none;
  outline: none;
  @include shear-card();
  opacity: 0.8;
  transition: #{trans()};

  &.active, &:hover, &:focus-visible, &:active {
    &::before {
      background: $col-card-hover;
    }
  }

  &.active {
    padding-left: 0.6em;
    padding-right: 0.6em;
    color: $col-quat;
    opacity: 1;
  }

  &:hover {
    cursor: pointer;
    color: $col-text !important;
    opacity: 1;
  }

  &:active {
    color: $col-trit !important;
    transform: scale(96%);
    opacity: 1;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.2;
  }
}

</style>
