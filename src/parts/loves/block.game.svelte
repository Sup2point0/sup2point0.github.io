<!-- @component GameBlock -->

<script lang="ts">

import { anim } from "#scripts/anim.svelte.ts";
import { display_date } from "#scripts/utils";
import { type GameData } from "#sup/loves/games/games";

import { onMount } from "svelte";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";


interface Props {
  game: GameData;
  invert?: boolean;
}

let { game, invert = false }: Props = $props();


let open = $state(false);

onMount(() => {
  requestAnimationFrame(() => {
    if (invert) {
      open = !open;
    }
  });
});

</script>


<button class="block-game {game.state} {game._style}"
  class:open
  id={game.shard}
  onclick={() => { open = !open; }}
  {@attach anim}
>
  <div class="content">

<div class="img-container">
  <img alt={game.name} title={game.name}
    width="120px" height="120px"
    src={game.icon ? `/icons/games/${game.icon}` : "/purple-portal.png"}
  />
</div>

<div class="info">
  <div class="upper">
    <h3> {game.name} </h3>

    {#if game.love}
      <p class="love">
        {#each { length: game.love } as _}
          ❤️‍🔥
        {/each}
      </p>
    {/if}
  </div>

  <div class="sep"></div>

  {#if open}
    <div class="lower desc" transition:slide={{ duration: 800, easing: expoInOut }}>
      {#each game.desc as block}
        <p> {@html block} </p>
      {/each}
    </div>

  {:else}
    <div class="lower" transition:slide={{ duration: 800, easing: expoInOut }}>
      <div class="inner">
        {#if game.date}
          <p class="date">
            {display_date(game.date)}
          </p>

          <span class="separator"> × </span>
        {/if}

        <p class="state {game.state}">
          {game.state.toUpperCase()}
        </p>
      </div>

      <ul class="genres">
        {#each game.genres ?? [] as genre}
          <li> {genre} </li>
        {/each}
      </ul>
    </div>

  {/if}
</div>

  </div>
</button>


<style lang="scss">

@use 'sass:color';


.block-game {
  flex-grow: 1;
  max-width: 32rem;
  padding: 1rem 1.5rem;
  font-size: unset;
  background: none;
  border: none;
  outline: none;
  transition: #{trans()};
  @include shear-card($interactive: true, $glow: true);
  @include anim-block;

  &:hover, &:focus-visible {
    cursor: pointer;
    opacity: 1 !important;

    .inner p {
      color: $col-text;
    }
  }

  &.open {
    max-width: 40rem;
  }

  &.wishlist::before {
    border: 1px solid rgb(white, 42%);
  }

  &.retired.intersected {
    opacity: 0.5;
  }
}

.content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  
  transform: scale(90%);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) var(--delay, 0s);  // ease-out-exp

  .block-game.intersected & {
    transform: none;
    opacity: 1;
  }

  .block-game.open & {
    padding: 0 1rem;
  }
}


.img-container {
  height: 120px;
  
  img {
    .block-game:not(.no-crop) & {
      border-radius: 50%;
      box-shadow: 0 8px 16px rgb(black, 40%);
    }

    .block-game.active & {
      box-shadow: 0 0 32px color.change($col-trit, $alpha: 0.5);
    }
  }
}

.info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
}


.upper {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 0.5rem;

  h3 {
    @include font-ui;
    font-size: 150%;
    font-weight: normal;
    color: $col-text;
    text-align: start;

    .block-game.active &, .block-game.opportunistic & {
      color: $col-quat;
    }
  }

  p.love {
    min-width: max-content;
    font-size: 125%;
  }
}


.sep {
  width: 69%;
  height: 1px;
  margin: 0.25rem 0 0.75rem;
  background: rgb(white, 10%);
}


.lower.desc {
  p {
    padding-left: 0.2em;
    margin-bottom: 0.5em;
    @include font-ui;
    font-size: 75%;
    font-weight: 300;
    color: $col-text-deut;
    text-align: left;
    transition: #{trans()};

    .block-game:where(:hover, :focus-visible) & {
      color: $col-text;
    }
  }
}

.lower {
  .inner {
    flex-grow: 1;
    width: 100%;
    margin-bottom: 0.5em;
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;
    font-size: 75%;
    @include separator;

    p {
      margin: 0;
      @include font-tech;
      color: $col-text-deut;
      transition: #{trans()};

      &.wishlist      { color: #f190f1 !important; }
      &.active        { color: #40f190 !important; }
      &.opportunistic { color: #c7c7ff !important; }
    }
  }

  ul.genres {
    padding: 0 0.2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0 0.5em;
      @include font-fun;
      font-size: 120%;
      color: $col-text;
      @include shear-card();
      transition: #{trans()};

      &::before {
        background: color.change($col-trit, $alpha: 0.69);
      }

      &:hover {
        cursor: auto;
        padding: 0 0.8em;
        color: black;
      
        &::before {
          background: white;
        }
      }
    }
  }
}

</style>
