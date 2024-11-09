<script lang="ts">

import { base } from "$app/paths";

export let title: string = "";
export let body: string = "";
export let pict: string | undefined = undefined;
export let link: string | undefined = undefined;
  export let intern: string | undefined = undefined;
  export let extern: string | undefined = undefined;
export let side: "left" | "right" = "left";

</script>


<a class="content-card {side}"
  target={extern ? "_blank" : "_self"}
  href={extern ?? link ?? `${base}/${intern}`}
>
  <div class="content-inner"
    style:flex-direction={side == "right" ? "row-reverse" : "row"}
  >
    {#if pict}
      <img class="project-icon"
        alt={title} src={pict}
      />
    {/if}

    <div class="content-text">
      <h3> {title} </h3>
      <p> {@html body} </p>
    </div>

    {#if extern || link}
      <span class="material-symbols-rounded">
        open_in_new
      </span>
    {/if}
  </div>
</a>


<style lang="scss">

.content-card {
  margin: 1rem 0;
  padding: 1rem;
  display: block;
  color: white;
  text-decoration: none;
  background: $col-card;
  border-radius: 1rem;

  transition: all 0.2s ease-out;

  &:hover {
    background: $col-card-hover;
  }

  &:active {}
}

.content-inner {
  display: flex;
  flex-direction: row;
}

img.project-icon {
  min-width: 100px;
  max-width: 20vw;
  aspect-ratio: 1;
  margin: 0 1rem;
}

.content-text {
  padding: 0 1rem;
  flex-grow: 1;
}


h3 {
  margin-bottom: 0.5em;
  @include font-ui;
  font-size: 150%;
}

</style>
