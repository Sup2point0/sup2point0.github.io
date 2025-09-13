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
  padding: 1rem 0 2rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.75em;
}

.text {
  padding: 0.2em 0.5em 0;
  @include font-fun;
  font-size: 125%;
}

.separator {
  @include font-fun;
  color: $col-text-deut;
  font-size: 125%;
}

a {
  @include link($lesser: true);
  @include shear-card($interactive: true);
  transition: #{trans()};

  &::before {
    background: transparent;
    backdrop-filter: none;
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
