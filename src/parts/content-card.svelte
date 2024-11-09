<script lang="ts">

import { base } from "$app/paths";

export let title: string = "";
export let body: string = "";
export let pict: string | undefined = undefined;
export let link: string | undefined = undefined;
  export let intern: string | undefined = undefined;
  export let extern: string | undefined = undefined;
export let flags: string[] = [];

</script>


<a class="content-card {flags.join(" ")}"
  target={extern ? "_blank" : "_self"}
  href={extern ?? link ?? `${base}/${intern}`}
>
  <div class="content-inner"
    style:flex-direction={flags.includes("right") ? "row-reverse" : "row"}
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
  </div>
  
  {#if extern || link}
    <span class="material-symbols-rounded">
      open_in_new
    </span>
  {/if}
</a>


<style lang="scss">

.content-card {
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  color: white;
  text-decoration: none;
  background-color: $col-card;
  border-radius: 1rem;

  transition: all 0.2s ease-out;

  &.depr {
    opacity: 50%;
  }

  &:hover {
    background: $col-card-hover;
    box-shadow: 0 0 10px $col-prot;

    span.material-symbols-rounded {
      color: $col-prot;
    }
  }

  &.dev:hover {
    box-shadow: 0 0 12px $col-deut;
  }
  &.depr:hover {
    box-shadow: 0 0 12px $col-trit;
  }
}

.content-inner {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}

img.project-icon {
  min-width: 100px;
  width: 100%;
  max-width: 15vh;
  aspect-ratio: 1;
  margin: 0 1rem;
}

.content-text {
  padding: 0 1rem;
  flex-grow: 1;
}

span.material-symbols-rounded {
  transition: color 0.2s ease-out;
}


h3 {
  margin-bottom: 0.5em;
  @include font-ui;
  font-size: 150%;
}

</style>
