<script>

import { socials_list } from "./socials";

import ProfileLink from "./link.profile.svelte";

</script>


<div class="root">
  <div class="anim-container">
    {#each socials_list as { title, capt, icon, link }, i}
      <ProfileLink {title} {capt} {icon} {link} frac={i / socials_list.length} />
    {/each}
  </div>
</div>


<style lang="scss">

.root {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.anim-container {
  $anim:      42s linear infinite spinny;
  $anim-slow: 60s linear infinite reverse spinny;

  width: 400px;
  height: 400px;
  animation: $anim, $anim-slow paused;
  animation-composition: add;

  &:hover {
    animation: $anim, $anim-slow;
  }

  @keyframes spinny {
    from { transform: rotate(0); }
    to   { transform: rotate(1turn); }
  }
}

</style>
