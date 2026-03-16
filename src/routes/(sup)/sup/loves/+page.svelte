<script lang="ts">

import Cards       from "#parts/core/cards.svelte";
import Main        from "#parts/core/main.svelte";
import Block       from "#parts/ui/block.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import LinkCard    from "#parts/ui/card.link.svelte";
import Adventure   from "#parts/special/adventure.svelte";

</script>


<svelte:head>
  <title> Loves × Sup#2.0 </title>
  <meta name="description" content="All the things I love." />
</svelte:head>


<Breadcrumbs levels={[
  { text: "loves" },
]} />

<Main>
  <Block>
    <p> Sometimes, I feel like I have too many interests. </p>

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
      capt="so much it has its own tab ;)"
      picts={[
        "icons/artists/camellia.png",
        "icons/artists/pikasonic.jpg",
        "icons/artists/silentroom.jpg",
        "icons/artists/vexento.jpg",
        "icons/artists/wing.jpg",
      ]}
      aspect="square"
    />

    <LinkCard
      link="/sup/loves/games"
      text="Games"
      capt="rhythm games, tower defence"
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
      link="/sup/loves"
      text="Puzzles"
      capt="Coming soon!"
    />

    <LinkCard
      link="/sup/loves/films"
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
      link="/sup/loves/series"
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
      link="/sup/loves/anime"
      text="Anime"
      capt="wish I could watch more"
      picts={[
        "covers/anime/oshi-no-ko.webp",
        "covers/anime/pokemon-xyz.jpg",
        "covers/anime/suzume.jpg",
        "covers/anime/ygo-arc-v.jpg",
      ]}
    />
    
    <LinkCard
      link="/sup/loves"
      text="Manga / Webtoon"
      capt="Coming soon!"
    />

    <LinkCard
      link="/sup/loves/book-series"
      text="Book Series"
      capt="losing my soul in fictional worlds"
      picts={[
        "covers/books/legend.jpg",
        "covers/books/oblivion.jpg",
        "covers/books/half-blood-prince.jpg",
        "covers/books/red-queen.jpg",
      ]}
    />
    
    <LinkCard
      link="/sup/loves/youtube"
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
      text="Mathematics"
      capt="Coming soon!"
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
