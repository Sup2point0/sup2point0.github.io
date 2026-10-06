import { partial_ratio } from "fuzzball";

import { SearchFilter } from "#scripts/search";
import { pick_random, date_to_prec, DATE_PREC_MAJOR } from "#scripts/utils";
import { Genre, Vibe, type ArtistData } from "#scripts/types/music";


const DISCOVERED = [
	"childhood",
	"StarlingEDM",
	"NCS",
	"YouTube Music",
	"YouTube",
	"CHUNITHM",
	"Arcaea",
	"Phigros",
];


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

		this.groupers_specific =
		{
			"year": artist =>
				Math.floor(date_to_prec(artist.date) / DATE_PREC_MAJOR),

			"genre": artist =>
				pick_random(artist.genres ?? [undefined]),

			"discovered": artist =>
				DISCOVERED.find(source => artist.discovered?.includes(source)) ?? "other",
		}
	}


	protected override sort_default(artists: ArtistData[]): ArtistData[]
	{
		return super.sort(artists, {
			scorer: ((artist: ArtistData) => Math.max(
				partial_ratio(this.query, artist.name),
				artist.desc ? partial_ratio(this.query, artist.desc.join(" ")) : 0,
				artist.genres ? partial_ratio(this.query, artist.genres.join(" ")) : 0,
			)),
		});
	}
}
