<!-- @component Block

-->

<script lang="ts">

interface Props {
  kind?: "ui" | "fun";
  text?: string;
  children?: any;
}

let { kind = "ui", text, children }: Props = $props();

</script>


<div class="block {kind}">
  {#if children}
    {@render children()}
  {:else if text}
    {@html text}
  {/if}
</div>


<style lang="scss">

.block {
  width: 69%;
  padding: 1em 1.5em;
  position: relative;

  @include font-fun;
  color: $col-text;
  text-align: center;
  line-height: 150%;
  @include shear-card;

  &.ui {
    @include font-ui;
    font-size: 100%;
  }

  &.fun {
    @include font-fun;
  font-size: 120%;
  }

  &::after {
    content: '';
    width: min(69%, 20rem);
    position: absolute;
    bottom: 0;
    left: 50%;
    border-bottom: 1px solid $col-deut;
    transform: translateX(-50%);
  }
}

</style>
