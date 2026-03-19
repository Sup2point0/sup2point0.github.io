<!-- @component Tunes

The site-wide music player!
-->

<script lang="ts">

import { tunes } from "#scripts/state";

</script>


<audio src="/audio/{tunes.track?.shard}.m4a"
  bind:this={tunes.audio}
>
</audio>


<style lang="scss">

audio {
  display: none;
}

</style>
