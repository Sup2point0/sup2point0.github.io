import type { Searchable } from "#scripts/search";
import type { filepath, Dates, ProperDescription } from "#scripts/types";


export enum Genre {
	ACTION        = "action",
	ADVENTURE     = "adventure",
	CARTOON       = "cartoon",
	COMEDY        = "comedy",
	COMING_OF_AGE = "coming of age",
	DRAMA         = "drama",
	DYSTOPIAN     = "dystopian",
	EPIC          = "epic",
	FANTASY       = "fantasy",
	FAIRYTALE     = "fairytale",
	HISTORY       = "history",
	MYSTERY       = "mystery",
	ROMANCE       = "romance",
	SCI_FI        = "sci-fi",
	SEXUAL        = "sexual",
	SLICE_OF_LIFE = "slice of life",
	SPACE_OPERA   = "space opera",
	SUPERHERO     = "superhero",
}

export enum Theme {
	APOCALYPSE        = "apocalypse",
	COMING_OF_AGE     = "coming of age",
	ENEMIES_TO_LOVERS = "enemies to lovers",
	ESPORTS           = "esports",
	FAMILY            = "family",
	FORBIDDEN_LOVE    = "forbidden love",
	GRIT              = "grit",
	MAGIC             = "magic",
	MYTHOLOGY         = "mythology",
	OCCULT            = "occult",
	SOCIETY           = "society",
	SPACE             = "space",
	TRAGEDY           = "tragedy",
}


export interface MediaData extends Searchable
{
	name:  string;
	date?: Dates;

	genres?: Genre[];
	themes?: Theme[];

	cover?: filepath;

	fields?: {};

	desc?: ProperDescription;
}
