import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search";
import { date_to_prec, DATE_PREC_MAJOR } from "#scripts/utils";
import { Genre, Vibe, type ArtistData } from "#scripts/types/music";


export class ArtistSearchFilter extends SearchFilter<ArtistData>
{
  genres = $state(SearchFilter.init_states(Genre));
  vibes  = $state(SearchFilter.init_states(Vibe));


  constructor()
  {
    super();

    this.toggles = {
      genres: this.genres,
      vibes:  this.vibes,
    };

    this.groups.push("year", "genre", "discovered")

    this.groupers_specific = {
      "year": artist => Math.floor(date_to_prec(artist.date) / DATE_PREC_MAJOR),

      "genre": artist => artist.genres?.[Math.floor(Math.random() * artist.genres.length)],

      "discovered": artist => (
          artist.discovered?.includes("childhood")     ? "childhood"
        : artist.discovered?.includes("StarlingEDM")   ? "StarlingEDM"
        : artist.discovered?.includes("NCS")           ? "NCS"
        : artist.discovered?.includes("YouTube Music") ? "YouTube Music"
        : artist.discovered?.includes("YouTube")       ? "YouTube"
        : artist.discovered?.includes("CHUNITHM")      ? "CHUNITHM"
        : artist.discovered?.includes("Arcaea")        ? "Arcaea"
        : artist.discovered?.includes("Phigros")       ? "Phigros"
        : "other"
      ),
    }
  }


  protected override sort_default(artists: ArtistData[]): ArtistData[]
  {
    return super.sort(artists, {
      scorer: ((artist: ArtistData) => Math.max(
        partial_ratio(this.query, artist.name),
        artist.desc ? partial_ratio(this.query, artist.desc.join(" ")) : 0,
        artist.genres ? partial_ratio(this.query, artist.genres.join(" ")) : 0,
      )).bind(this),
    });
  }
}
