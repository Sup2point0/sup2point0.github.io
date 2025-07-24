<!-- @component Block

A solid block of text.
-->

<script lang="ts">

interface Props {
  title?: string;
  text?: string;
  children: any;
}

let { title, text, children }: Props = $props();

</script>


<section>
  {#if title} <h3> {title} </h3> {/if}
  {#if text} <p> {@html text} </p> {/if}

  {#if children}
    <div class="content">
      {@render children()}
    </div>
  {/if}
</section>


<style lang="scss">

section {
  padding: 1em;
  background: $col-card;
}

h3 {
  color: $col-deut;
}

p, .content {
  @include font-ui;
}

</style>
