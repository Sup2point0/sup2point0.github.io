<script>

import ProfileLink from "./ProfileLink.svelte";

</script>


<section id="links">
  <ProfileLink
    id="github" title="GitHub" desc="@Sup2point0"
    pict="icons/github.svg" link="https://github.com/Sup2point0" />
  <ProfileLink
    id="soundcloud" title="SoundCloud" desc="@Sup2point0"
    pict="icons/soundcloud.svg" link="https://soundcloud.com/Sup2point0" />
  <ProfileLink
    id="reddit" title="reddit" desc="u/Sup2pointO"
    pict="icons/reddit.svg" link="https://reddit.com/u/Sup2pointO" />
  <ProfileLink
    id="youtube" title="YouTube" desc="@suppetysup"
    pict="icons/youtube.svg" link="https://youtube.com/@suppetysup" />
</section>


<style lang="scss">

section#links {
  max-width: max(80vw, 400px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>
