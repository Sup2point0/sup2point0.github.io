<script>

import ProfileLink from "./link.profile.svelte";

</script>


<div class="root">
  <ProfileLink
    title="GitHub"
    desc="@Sup2point0"
    pict="github.svg"
    link="https://github.com/Sup2point0"
    transform="translateX(4rem) translateY(4rem)"
  />
  <ProfileLink
    title="SoundCloud"
    desc="@Sup2point0"
    pict="soundcloud.svg"
    link="https://soundcloud.com/Sup2point0"
    transform="translateX(6rem) translateY(-2rem)"
  />
  <ProfileLink
    title="reddit"
    desc="u/Sup2pointO"
    pict="reddit.svg"
    link="https://reddit.com/u/Sup2pointO"
    transform="translateX(-12rem) translateY(-6rem)"
  />
  <ProfileLink
    title="YouTube"
    desc="@SuppetySup"
    pict="youtube.svg"
    link="https://youtube.com/@suppetysup"
    transform="translateX(-15rem) translateY(3rem)"
  />
</div>


<style lang="scss">

.root {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

</style>
