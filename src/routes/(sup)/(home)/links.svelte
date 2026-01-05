<script>

import ProfileLink from "./link.profile.svelte";

</script>


<div class="root">
  <div class="anim-container">
    <ProfileLink idx={1} entities={5}
      title="GitHub" desc="@Sup2point0"
      pict="github.svg" link="https://github.com/Sup2point0"
    />
    <ProfileLink idx={2} entities={5}
      title="SoundCloud" desc="@Sup2point0"
      pict="soundcloud.svg" link="https://soundcloud.com/Sup2point0"
    />
    <ProfileLink idx={3} entities={5}
      title="reddit" desc="u/Sup2pointO"
      pict="reddit.svg" link="https://reddit.com/u/Sup2pointO"
    />
    <ProfileLink idx={4} entities={5}
      title="YouTube" desc="@VengeanceVanguard"
      pict="youtube.svg" link="https://youtube.com/@VengeanceVanguard"
    />
    <ProfileLink idx={5} entities={5}
      title="Discord" desc="@sup2.0"
      pict="discord.svg" link="https://discord.com/users/752972078579449888"
    />
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
