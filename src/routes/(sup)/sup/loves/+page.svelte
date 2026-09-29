<script lang="ts">

import { i } from "#scripts/utils";

import { Cards, Main } from "#parts/core";
import { Block, Breadcrumbs, LinkCard } from "#parts/ui";
import { Adventure } from "#parts/special";

</script>


<svelte:head>
  <title> Loves × Sup#2.0 </title>
  <meta name="description" content="All the things I love." />
</svelte:head>


<Breadcrumbs />

<Main>
  <Block>
    <p>  </p>

    <Adventure routes={[
      [1, `Sometimes, I feel like I have too many interests.`],

      [1, `If I had to say what huamnity’s purpose is, there are 2 strongest candidates for me. (1) Discover the secrets of the universe; and (2) create and enjoy art.`],

      [1, `Here you’ll find some of the media I’m into. I’m sure you can find something we have in common! :0`],
    ]} />

    <Adventure routes={[
      [1, `I’ll be gradually adding more stuff here, for now it’s just the content I consume ^v^`],

      [1, `What can I say, the world is wonderful, and there is so much to love.`],

      [1, `Like, I’ll interact with, admire and fall in love with anything and everything. Anything and everything interests me.`],
    ]} />
  </Block>

  <Cards>
    <LinkCard
      link="/sup/music"
      text="Music"
      capt={[
        [1, `so much it has its own tab ;)`],
        [1, `my life and soul`],
      ]}
      picts={[
        "icons/artists/camellia.png",
        "icons/artists/pikasonic.jpg",
        "icons/artists/silentroom.jpg",
        "icons/artists/stessie.jpg",
        "icons/artists/vexento.jpg",
      ]}
      aspect="square"
    />

    <LinkCard
      link="loves/games"
      text="Games"
      capt={[
        [1, `rhythm games, tower defence, exploration`],
        [1, `even if no time, I’ll ${i`make`} time for them`],
      ]}
      picts={[
        "icons/games/bloons-td6.png",
        "icons/games/diep-io.webp",
        "icons/games/manifold-garden.png",
        "icons/games/master-duel.webp",
        "icons/games/phigros.webp",
        "icons/games/outer-wilds.jpg",
      ]}
      aspect="square"
    />
    
    <LinkCard
      link="loves/puzzles"
      text="Puzzles"
      capt="Coming soon!"
    />

    <LinkCard
      link="loves/films"
      text="Films"
      capt="sci-fi, dystopian, romance"
      picts={[
        "covers/films/dune-part-1.jpg",
        "covers/films/ne-zha-1.jpg",
        "covers/films/rogue-one.jpg",
        "covers/films/spider-man-homecoming.jpg",
        "covers/films/wild-robot.jpg",
      ]}
    />

    <LinkCard
      link="loves/series"
      text="Shows / Series"
      capt="heart-wrenching soul-wrecking sagas"
      picts={[
        "covers/series/arcane-s1.jpg",
        "covers/series/andor-s1.webp",
        "covers/series/the-kings-avatar.png",
        "covers/series/the-mandalorian.jpg",
      ]}
    />

    <LinkCard
      link="loves/anime"
      text="Anime"
      capt={[
        [2, `wish I could watch more`],
        [1, `a dangerous indulgence`],
      ]}
      picts={[
        "covers/anime/oshi-no-ko.webp",
        "covers/anime/pokemon-xyz.jpg",
        "covers/anime/suzume.jpg",
        "covers/anime/ygo-arc-v.jpg",
      ]}
    />
    
    <LinkCard
      link="loves/webtoons"
      text="Webtoon"
      capt="coloured manga is the best!"
      picts={[
        "covers/webtoons/youre-no-good.jpg",
        "covers/webtoons/our-secret-alliance.jpg",
        "covers/webtoons/nice-to-meet-you.jpg",
        "covers/webtoons/maybe-meant-to-be.webp",
      ]}
    />

    <LinkCard
      link="loves/books"
      text="Books"
      capt="losing my soul in fictional worlds"
      picts={[
        "covers/books/alchemised.jpg",
        "covers/books/legend.jpg",
        "covers/books/oblivion.jpg",
        "covers/books/half-blood-prince.jpg",
        "covers/books/red-queen.jpg",
      ]}
    />
    
    <LinkCard
      link="loves/youtube"
      text="YouTube"
      capt="best of the internet"
      picts={[
        "icons/youtube/3b1b.jpg",
        "icons/youtube/grian.jpg",
        "icons/youtube/in-the-mix.jpg",
        "icons/youtube/kevin-fang.jpg",
        "icons/youtube/kevinu.jpg",
        "icons/youtube/no-boilerplate.jpg",
      ]}
      aspect="square"
    />
    
    <LinkCard
      link="/sup/loves"
      text="Miscellaneous"
      capt="Coming soon!"
    />
  </Cards>

  <Block kind="fun">
    <p> For more, head over to <a target="_blank" href="https://sup2point0.github.io/Assort"><em>Assort</em></a> ;D </p>
  </Block>
</Main>


<style lang="scss">

a {
  @include link;
}

</style>
