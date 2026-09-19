import type { Searchable } from "#scripts/search"
import type { shard, Dates, Description, Arrayable } from "#scripts/types"


/** Data for a track I created. */
export interface MyTrackData extends Searchable
{
	feat?:       boolean
	is_preview?: boolean

	shard: shard
	date?: Dates
	
	audio?: string
	cover?: string
	album:  AlbumData

	genres?: string[]  // TODO use enum?
	vibes?:  string[]  // TODO use enum?

	desc?: Description
}


/** Data for an album of my tracks. */
export interface AlbumData extends Searchable
{
	is_preview?: boolean
	
	shard: shard
	date?: Dates

	cover?: string
	daw?:   Arrayable<Daw>

	desc?:  Description
	tracks: MyTrackData[]
}


export enum Daw {
	FL         = "FL Studio",
	GarageBand = "GarageBand",
	MuseScore  = "MuseScore 3",
}
