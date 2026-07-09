<!-- @component ChannelBlock -->

<script lang="ts">

import { anim } from "#scripts/anim.svelte.ts";
import { display_date } from "#scripts/utils";
import { type YouTubeChannelData } from "#sup/loves/youtube/channels";


interface Props {
  channel: YouTubeChannelData;
}

let { channel }: Props = $props();

</script>


<button class="block-channel {channel._style}"
  id={channel.shard}
  {@attach anim}
>
  <div class="content">

<div class="img-container">
  <img
    alt={channel.name} title={channel.name}
    width="120px" height="120px"
    src={channel.icon ? `/icons/youtube/${channel.icon}` : "/purple-portal.png"}
  />
</div>

<div class="info">
  <div class="upper">
    <h3> {channel.name} </h3>

    {#if channel.love}
      <p class="love">
        {#each { length: channel.love } as _}
          ❤️‍🔥
        {/each}
      </p>
    {/if}
  </div>

  <div class="inner">
    {#if channel.date}
      <p class="date">
        {display_date(channel.date)}
      </p>

      <span class="separator"> × </span>
    {/if}
  </div>

  <div class="lower">
    <ul class="topics">
      {#each channel.topics ?? [] as topic}
        <li> {topic} </li>
      {/each}
    </ul>
  </div>
</div>

  </div>
</button>


<style lang="scss">

@use 'sass:color';


.block-channel {
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

  .block-channel.intersected & {
    transform: none;
    opacity: 1;
  }
}


.img-container {
  height: 120px;
  
  img {
    .block-channel:not(.no-crop) & {
      border-radius: 50%;
      box-shadow: 0 8px 16px rgb(black, 40%);
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
    font-size: 200%;
    font-weight: normal;
    color: $col-text;
    text-align: start;
  }

  p.love {
    min-width: max-content;
    font-size: 125%;
  }
}

.inner {
  flex-grow: 1;
  width: 100%;
  padding-top: 0.25rem;
  padding-bottom: 1rem;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  @include separator;

  p {
    @include font-tech;
    font-size: 100%;
    color: $col-text-deut;
    transition: #{trans()};
  }
}

.lower {
  ul.topics {
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
