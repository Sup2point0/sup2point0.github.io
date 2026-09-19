import { prep_groups } from "#scripts/search";
import { a, i, h } from "#scripts/utils";
import { Genre, Theme, type MediaData } from "#scripts/types/media";
import type { Groups } from "#scripts/types";


/**
 * Data for an anime/manga series.
 */
export interface AnimeData extends MediaData
{
  /** What order did I consume the animanga in? */
  order?: string[]
}


const data: Groups<AnimeData> =
{
  "Favourites": [
    {
      name:   "Suzume no Tojimari",
      date:   2022,
      cover:  "suzume.jpg",
      genres: [Genre.FANTASY, Genre.ADVENTURE],
      desc: [
        `This film sprung anime onto me, and gave me an experience of all time.`,

        `My family suddenly decided to go see it (we rarely watch films together) – maybe my mum knew Makoto Shinkai – and I didn’t even know what film we were watching until we walked into the cinema. lmao.`,

        `Holy mackerel, I was pleasantly surprised. I was totally immersed in the story and art and world. It made me feel all kinds of emotions. It was incredibly beautiful.`,

        `Lowkey in retrospect the actual story is a bit of a mess, but it’s amazing watching the characters interact and explore. I can’t even remember much about the plot, it’s all just the feeling. It was a very unique blend of escapism, nostalgia, sadness and heartmelt.`,

        `After this film, I realised I should really start watching anime beyond ${h`Yu-Gi-Oh`}. So that’s what I slowly started doing!`,
      ],
    },
    {
      name:   "【推しの子】",
        translation: "Oshi no Ko",
      date:   [2023, "present"],
      cover:  "oshi-no-ko.webp",
      genres: [Genre.DRAMA, Genre.MYSTERY, Genre.ROMANCE, Genre.SLICE_OF_LIFE],
      order:  ["anime S1 (sub)", "manga", "anime S2, S3 (sub)"],
      desc: [
        `${i`OnK`} was the first ‘anime’ anime I watched. (By that, I mean not ${h`Yu-Gi-Oh`} or ${h`Pokémon`}.) I got into it because of the opening ${h`Idol`}, which I loved and still consider a masterpiece.`,

        `I’m less rose-tinted about it now after watching some other animes, but yeah, for an intro to wider anime and manga, it was pretty fun. It’s got a fair bit of slice-of-life, which I realise I’ve come to quite like.`,

        `The art style is very pretty, and I like a lot of the visual storytelling. Aqua, Ruby and Akane are my favourites. I find the twincest extremely funny, but I’m glad they didn’t go through with it. I guess I don’t like Arima Kana and MEM-Cho too much. Not that they’re badly written, I just don’t vibe with them.`,
      ],
    },
    {
      name:   "Domestic na Kanojo",
        translation: "Domestic Girlfriend",
      date:   "summer 2026",
      cover:  "dome-kano.webp",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE, Genre.COMING_OF_AGE, Genre.EROTICA],
      themes: [Theme.TRAGEDY, Theme.FORBIDDEN_LOVE],
      order:  ["anime (sub)", "manga"],
      desc: [
        `This series... really broke me.`,

        `To set the scene, before watching this, I’d basically not touched an anime or manga in well over a year, maybe even 2. The last series I’d consumed was ${a("Arcane", "series#arcane", true)}. One night, I randomly remembered anime exists, so I searched up “degenerate anime for laughs” on reddit, and got this recommended.`,

        `I ended up binging the anime in one night, then finishing the entire manga in under 24h. Other than eating and sleeping (5h), all I did was read. This is a personal record, and I have never been so enraptured. It was truly, truly diabolical. I would highly recommend.`,

        `I don’t think I’ve ever been so affected by a piece of media before. The fallout from DomeKano was insane. The best way I can describe it, is it felt like a toned-down version of my first breakup. A sadness and emptiness that eats away at you and renders you completely unable to do anything, until all you want to do is curl up and die.`,

        `I’m not even sure why I was so sad. It was a combination of losing Natsuo and Rui, bittersweet farewells, the story itself ending, and perhaps most deeply, I felt like I had lived a lifetime through these characters. We watched them grow from stupid immature kids, to graduation, university, meeting new people, chasing dreams, and becoming adults.`,

        `The most intense moment was when Rui told Natsuo they should break up. Holy mackerel. My heart hurt, I couldn’t breathe – it was like ${i`I`} was Natsuo, receiving this out of nowhere. I guess this stuff hits way harder after you’ve been through it, eh?`,

        `There’s a lot more I could talk about that I can’t fit here, but I do want to say... as cursed as the premise is, this animanga was truly incredible. And regardless of quality, trashiness, or any other ‘objective’ measure – it made me ${i`feel`}; it moved me. That alone, to me, makes it a beautiful piece of art.`,
      ],
    },
  ],
  "Yu-Gi-Oh": [
    {
      name:   "Yu-Gi-Oh! ARC-V",
      date:   [2014, 2017],  // FIXME
      cover:  "ygo-arc-v.jpg",
      genres: [Genre.ADVENTURE],
      order:  ["anime S1 (dub)", "anime S2, S3 (sub)"],
      desc: [
        `When returning to ${h`Yu-Gi-Oh`} around lockdown, I decided I’d watch an anime to get back into the swing of things. After all, I’d learnt much about the game through just watching the anime when I was younger. I’d also always known about these new series, and wanted to watch them someday.`,

        `I picked ${i`ARC-V`} cuz it had the coolest name, nothing more to it. (It’s so cool.) Somehow ...a lot of my decisions in how I consume media magically end up being perfect. ARC-V was the best reintroduction to modern Yu-Gi-Oh I could’ve asked for. I didn’t even realise they’d cover every single Summoning technique! And holy crap, the archetypes and monsters were so awesome. My first modern deck was a Raidraptor deck ;)`,

        `Shun Kurosaki is my favourite character by far (sick name). All 3 of the Xyz Dimension characters were epic, I just wish we got to see more Ruri. Xyz remains my favourite technique. I sense a pattern.`,

        `y’know, I really got spoiled by ARC-V. 150 damn episodes, such a long journey. It makes the 12-episode animes painfully short in comparison TvT`,
      ],
    },
    {
      name:   "Yu-Gi-Oh! VRAINS",
      date:   [2017, 2019],  // FIXME
      cover:  "ygo-vrains.jpg",
      genres: [Genre.ADVENTURE],
      desc: [
        `${i`VRAINS`} was the next series I watched after ARC-V, I suppose mainly because I was curious how Link Monsters came to be. (It also has the second coolest name :P)`,

        `It was pretty enjoyable. A different vibe to previous Yu-Gi-Oh series, I’d say. Not quite as carefree or wholesome, our protagonist was very cold and focused, and didn’t really have any friends. Yusaku is pretty sick tho, he’s got my favourite hair of all the Yu-Gi-Oh protagonists. And he and Ai were pretty funny together.`,

        `Some of the characters and decks were rather strange, and didn’t feel like they fit with the whole cybernetic theme – but Playmaker’s Code Talkers and Ai’s @Ignisters were brilliant. I loved the theming. OH WAIT, AND REVOLVER. Never mind, his are the best. The flavour on Varrett and Varrel is top-tier. And the Topologic monsters are wicked.`,

        `I’m writing this a little late so much of the details are lost to time. From what I can remember, I think I felt a little unsatisfied after watching this one. It was building up a cool world and interesting story, but I wasn’t too sold on Ai’s defection. I approve of the time skips, they allowed the series to cover a much wider timespan.`,
      ],
    },
    {
      name:   "Yu-Gi-Oh! Battle City",
      date:   "childhood",
      cover:  "ygo-battle-city.webp",
      genres: [Genre.ADVENTURE],
    },
    {
      name:   "Yu-Gi-Oh! ZEXAL",
      date:   [2011, 2014],  // FIXME
      cover:  "ygo-zexal.webp",
      genres: [Genre.ADVENTURE],
    },
  ],
  "Pokémon": [
    {
      name:   "Pokémon: XY",
      date:   "childhood",
      cover:  "pokemon-xy.jpg",
      genres: [Genre.ADVENTURE, Genre.SLICE_OF_LIFE, Genre.FANTASY],
    },
    {
      name:   "Pokémon: XYZ",
      date:   "childhood",
      cover:  "pokemon-xyz.jpg",
      genres: [Genre.ADVENTURE, Genre.SLICE_OF_LIFE, Genre.FANTASY],
    },
  ],
  "Fun": [
    {
      name:   "Shikimori’s Not Just a Cutie",
      date:   "2026 September",
      cover:  "shikimori.jpg",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE],
      themes: [Theme.WHOLESOME],
    }
  ],
  "Guilty Pleasures": [
    {
      name:   "Kanojo, Okarishimasu",
        translation: "Rent-a-Girlfriend",
      date:   "fall 2024",
      cover:  "kano-kari.webp",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE, Genre.COMEDY],
      order:  ["anime S1, S2, S3"],
      desc: [
        `Stupid, facepalming fun, what can I say ;)`,

        `My guy Kazuya is a total wreck but I’m just rooting for him. I guess I’m just a sucker for trashy romance. I don’t like harem, tho, so it’s a bit exasperating watching him with so many girls lmao. And I don’t ${i`especially`} love any of them (Sumi’s cute, Mizuhara’s basic, they’re fine; Mami and Ruka are annoying). We all know the best character is the fish (what was his name again?)`,

        `This anime did manage to make me cry. No no, no joke. Full-on tears, while I was in bed. It was the scene with Chizuru’s grandma speaking to Kazuya. Grandmas, too OP man.`,

        `Speaking of OP, ${h`Centimeter`} is a lovely opening, and the ending is... a work of art, nuff said.`,

        `Anyway, I’m happy with where it ended, and I’ve heard the manga does weird stuff and drags it out, so I don’t plan on reading it!`,
      ],
      is_shown: false,
    },
    {
      name:   "Yosuga no Sora",
      date:   "spring 2024",
      cover:  "yosuga-no-sora.jpg",
      genres: [Genre.ROMANCE, Genre.EROTICA],
      themes: [Theme.FORBIDDEN_LOVE],
      is_shown: false,
    },
    {
      name:   "My Stepmom’s Daughter Is My Ex",
      date:   "summer 2026",
      cover:  "ex.jpg",
      genres: [Genre.ROMANCE, Genre.SLICE_OF_LIFE],
      themes: [Theme.FORBIDDEN_LOVE, Theme.ENEMIES_TO_LOVERS],
      is_shown: false,
    },
  ],
};

prep_groups(data);
export const animes_data: Groups<AnimeData> = data;
export const animes_list: AnimeData[] = Object.values(data).flat();
