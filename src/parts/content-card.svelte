<script lang="ts">

import { base } from "$app/paths";

export let title: string = "";
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
      <img alt={title} src={pict} />
    {/if}

    <div>
      <h3> {title} </h3>
      <slot />
    </div>
  </div>
</a>


<style lang="scss">

img {
  aspect-ratio: 1;
}


.content-card {
  margin: 0;
  padding: 0.5rem;
  display: block;
  background: rgba(black, 60%);

  &:hover {}

  &:active {}
}

.content-inner {
  display: flex;
}

</style>
