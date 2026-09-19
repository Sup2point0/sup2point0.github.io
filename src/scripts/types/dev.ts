import type { Searchable } from "#scripts/search";
import type { Datepoint, Description, Love } from "#scripts/types";


export interface DevEntity extends Searchable
{
	_style?: "round"

	date:      Datepoint
	versions?: Description

	love:     Love
	fluency?: Fluency

	colour?:  string
	related?: string[]

	details?:  Description
	describe?: string
	capt?:     string
	desc?:     Description
	lore?:     Description
}

export interface LangData extends DevEntity {
	icon: string;
}

export interface TechData extends DevEntity {
	icon: string;
}


export enum Fluency {
	LEARN  = "Would Like to Learn",
	TIER_1 = "Newbie",
	TIER_2 = "Comfortable",
	TIER_3 = "Absolutely Comfortable",
	TIER_4 = "Beyond Comfortable",
}

export enum Flavour {
	DEV = "software",
	ACADEMIC = "academic",
	PERSONAL = "personal",
}

export enum Kind {
	GENERAL     = "general",
	WEBSITE     = "website",
	GAME        = "game",
	APPLICATION = "application",
	LIBRARY     = "library",
	FRAMEWORK   = "framework",
	TOOL        = "tool",
	PROGRAM     = "program",
	EXTENSION   = "extension",
	WIKI        = "wiki",
	LANGUAGE    = "language",
	WORLD       = "worldbuilding",
	WRITING     = "writing",
	GRAPHIC     = "graphic design",
}

export enum State {
	ETERNAL = "eternal",
	DEVELOPING = "developing",
	MAINTAINING = "maintaining",
	HIATUS = "on hiatus",
	INDETERMINATE = "indeterminate",
	ARCHIVED = "archived",
}
