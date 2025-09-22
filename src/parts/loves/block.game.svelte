<!-- @component GameBlock

A block displaying info for a game.
-->

<script lang="ts">

import { State, type GameData } from "#src/routes/(sup)/sup/loves/games/games";

import { onMount } from "svelte";


interface Props {
  game: GameData;
}

let { game }: Props = $props();


let self: HTMLElement;

onMount(() => {
  let observer = new IntersectionObserver(entries => {
    for (let [i, entry] of entries.entries()) {
      if (entry.isIntersecting) {
        entry.target.classList.add("intersected");
        /* having to use this cuz using CSS on .intersected isn't working?? */
        entry.target.style = `
          transform: scale(100%);
          opacity: ${game.state == State.RETIRED ? "0.42" : "1"};
        `;
      }
    }
  });

  observer.observe(self);
});

</script>


<button class="game block {game.state}"
  id={game.shard}
  bind:this={self}
>
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
          {#if Array.isArray(game.date)}
            {#if game.date.length > 1}
              {game.date[0].toString().toUpperCase()} – {game.date[1].toString().toUpperCase()}
            {:else}
              {game.date[0].toString().toUpperCase()}
            {/if}
          {:else}
            {game.date.toString().toUpperCase()}
          {/if}
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
</button>


<style lang="scss">

@use 'sass:color';


button.block.game {
  flex-grow: 1;
  max-width: 32rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 2rem;

  background: none;
  border: none;
  @include shear-card($interactive: true);

  transform: scale(90%);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp

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
}

.img-container {
  height: 120px;
  
  img {
    border-radius: 50%;
    box-shadow: 0 8px 16px rgb(black, 40%);

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

  span.separator {
    @include font-fun;
    color: $col-text-deut;
    font-size: 125%;
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
