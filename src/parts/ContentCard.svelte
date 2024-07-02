<script lang="ts">

export let align: "left" | "right" = "left";
export let pict: string | null = null;
export let title: string;
  export let link: string | null = null;
  export let extern: string | null = null;
  export let col: string | null = null;
export let caption: string | null = null;
export let body: string = "";

</script>


<div class="content-card {align}">
  {#if pict}
    <div class="pict">
      <img alt={title} src={pict}>
    </div>
  {/if}

  <div class="text">
    <header>
      <h3 style:color={col}>
        {#if extern}
          <a href={extern} target="_blank"> {title} </a>
        {:else if link}
          <a href={link}> {title} </a>
        {:else}
          {title}
        {/if}
      </h3>
      <p class="caption"> {caption} </p>
    </header>

    {#if $$slots}
      <slot />
    {:else}
      {@html body}
    {/if}
  </div>
</div>


<style lang="scss">

h3 {
  @include font-fun;
  font-size: 200%;
  color: $blue-elec;

  a {
    color: inherit;
  }
}

p {
  @include font-body;
  font-size: 100%;
  color: white;
}

p.caption {
  @include font-flavour;
  font-size: 125%;
  color: $grey-storm;
}


.content-card {
  min-height: 2rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  &.right { flex-direction: row-reverse; }
  align-items: start;
  background-color: $col-overlay;
  border-radius: 1rem;

  transition: all 0.12s ease-out;

  &:hover {
    background-color: $col-overlay-hover;
    box-shadow: 20px 0 0 $pink-elec;
  }
}

header {
  padding: 0 0 1rem;
  border-bottom: 2px solid rgba(white / 69%);
}

.pict {
  height: 100%;
  aspect-ratio: 1;
}

.text {
  flex-grow: 1;
}

</style>
