<!-- @component GameBlock

A block displaying info for a game.
-->

<script lang="ts">

import { display_date } from "#scripts/utils";
import { type GameData } from "#routes/(sup)/sup/loves/games/games";

import { AnimationData, register_animation, calc_delay } from "#scripts/anim.svelte.ts";

import { onMount } from "svelte";


interface Props {
  game: GameData;
}

let { game }: Props = $props();


let self: HTMLElement;
let anim = new AnimationData();

onMount(() => {
  if (self) {
    register_animation(self, anim);
  } else {
    setTimeout(() => register_animation(self, anim), 1000);
  }
});

</script>


<button class="game block {game.state} {game._style}"
  class:intersected={anim.intersected}
  id={game.shard}
  bind:this={self}
  style:--delay={calc_delay(anim, 0.2)}
>
  <div class="content">
    <div class="img-container">
      <img alt={game.name} title={game.name}
        width="120px" height="120px"
        src={game.icon ? `/games/icons/${game.icon}` : "/purple-portal.png"}
      />
    </div>

    <div class="info">
      <div class="upper">
        <h3> {game.name} </h3>

        <p class="love">
          {#each { length: game.love } as _}
            ❤️‍🔥
          {/each}
        </p>
      </div>

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

      <div class="lower">
        <ul class="genres">
          {#each game.genres ?? [] as genre}
            <li> {genre} </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</button>


<style lang="scss">

@use 'sass:color';


.block.game {
  flex-grow: 1;
  max-width: 32rem;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  transition: #{trans()};
  @include shear-card($interactive: true);
  @include anim-block;

  &:hover {
    cursor: auto;
    opacity: 1 !important;

    .inner p {
      color: $col-text;
    }
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

  .block.game.intersected & {
    transform: none;
    opacity: 1;
  }
}


.img-container {
  height: 120px;
  
  img {
    box-shadow: 0 8px 16px rgb(black, 40%);
    
    .block.game:not(.no-crop) & {
      border-radius: 50%;
    }

    .block.game.active & {
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
  gap: 0.5rem;
}


.upper {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 0.5rem;

  h3 {
    @include font-ui;
    font-size: 200%;
    font-weight: normal;
    color: $col-text;
    text-align: start;

    .block.game.active &, .block.game.opportunistic & {
      color: $col-quat;
    }
  }

  p.love {
    min-width: max-content;
    font-size: 150%;
  }
}

.inner {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  @include separator;

  p {
    @include font-tech;
    font-size: 100%;
    color: $col-text-deut;
    transition: #{trans()};

    &.active {
      color: $col-deut !important;
    }

    &.opportunistic {
      color: $col-acc !important;
    }
  }
}

.lower {
  ul.genres {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    gap: 0.5em;
    list-style-type: none;

    li {
      padding: 0 0.5em;
      @include font-fun;
      font-size: 150%;
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
