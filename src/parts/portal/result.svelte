<!-- @component PortalResult -->

<script lang="ts">

import type { PortalSearchFilter, PortalSearchResult } from "./filter.portal.svelte";


interface Props {
  result: PortalSearchResult;
  idx: number;
  live: boolean;
  filters: PortalSearchFilter;
  results: PortalSearchResult[];
}

let { idx, result, live, filters = $bindable(), results = $bindable() }: Props = $props();


function onkeydown(e: KeyboardEvent)
{
  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      filters.jump_next(results);
      break;
    
    case "ArrowUp":
      e.preventDefault();
      filters.jump_prev(results);
      break;
  }
}

</script>


<button class="result"
  class:live
  class:focused={filters.focused_idx === idx}
  bind:this={results[idx].element}
  tabindex={0}
  onmousedown={() => { filters.focused_idx = idx; }}
  onclick={e => { if (result.action(e)) activate(false)(e); }}
  {onkeydown}
  style:--delay="{idx * 69}ms"
>
  <div class="upper">
    <h4> {result.title} </h4>
    <p> {result.capt} </p>
  </div>

  <div class="lower">
    <p> {result.desc} </p>
  </div>
</button>


<style lang="scss">

.result {
  padding: 0.5rem 1rem;
  @include font-fun;
  font-size: unset;
  text-align: left;
  background: none;
  border: none;
  outline: none;
  @include shear-card($interactive: true);

  &::before {
    background: rgb(white, 25%);
    opacity: 0;
    transition: opacity #{trans-exp()}, background 0.12s ease-out;
  }

  &.live::before {
    opacity: 1;
  }

  &.focused, &:hover {
    &::before {
      background: rgb(#ddd, 50%);
    }
  }
}

.upper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;

  h4 {
    margin-bottom: -0.25em;
    font-size: 150%;
    font-weight: normal;
    color: transparent;
    transition: color #{trans-exp()};
    
    .result.live & {
      color: $col-trit;
    }
  }

  p {
    color: transparent;
    transition: color #{trans-exp()};
    
    .result.live & {
      color: $col-text-deut;
    }
  }
}

.lower {
  p {
    color: transparent;
    transition: color #{trans-exp()};
    
    .result.live & {
      color: $col-text;
    }
  }
}

</style>
