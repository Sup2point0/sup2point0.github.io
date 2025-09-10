<!-- @component Breadcrumbs

Shows the current navigation path.
-->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  levels: {
    text: string;
    intern?: string;
  }[];
}

let { levels }: Props = $props();

</script>


<nav class="breadcrumbs">
  {#each levels.entries() as [i, { text, intern }]}
    {#if i === levels.length -1}
      <div class="text current"> {text.toUpperCase()} </div>
    
    {:else}
      <a class="text" href="{base}/{intern}">{text.toUpperCase()}</a>
      <div class="separator">×</div>
    
    {/if}
  {/each}
</nav>


<style lang="scss">

nav {
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.75em;
}

.text {
  @include font-flavour;
  font-size: 125%;
}

.separator {
  @include font-flavour;
  color: $col-text-deut;
  font-size: 125%;
  // transform: skew(10deg) scaleX(60%);
}

a {
  padding: 0.2em 0.5em 0;
  @include link($lesser: true);
  @include shear-card($interactive: true);
  transition: #{trans()};

  &::before {
    background: transparent;
  }

  &::after {
    bottom: -1px;
  }

  &:hover, &:focus, &:focus-visible {
    padding-left: 0.8em;
    padding-right: 0.8em;
  }
}

</style>
