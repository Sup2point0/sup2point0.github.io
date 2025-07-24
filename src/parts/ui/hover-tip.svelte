<!-- @component HoverTip

A popup that displays when hovering over another component.
-->

<script lang="ts">

interface Props {
  text: string;
}

let { text }: Props = $props();

</script>


<div class="hover-tip">
  {text}
</div>


<style lang="scss">

.hover-tip {
  padding: 0.5em 1em;
  display: none;
  @include font-ui;
  color: white;
  background: $col-ui-back-transp;
}

</style>
