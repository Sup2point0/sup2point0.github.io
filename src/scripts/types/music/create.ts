import type { Searchable } from "#scripts/search";
import type { shard, Dates, Datepoint } from "#scripts/types";


export interface TrackData extends Searchable {
	feat?:       boolean;
	is_preview?: boolean;

	shard: shard;
	name:  string;
	date?: Dates;
	
	audio?: string;
	cover?: string;
	album:  AlbumData;

	genres?: string[];
	vibes?:  string[];

	desc?: string;
}


export interface AlbumData {
	is_preview?: boolean;
	
	shard: shard;
	name:  string;
	date?: Datepoint | Datepoint[];

	cover?: string;
	daw?:   Daw | Daw[];

	desc?:  string | string[];
	tracks: TrackData[];
}


export enum Daw {
	FL         = "FL Studio",
	GarageBand = "GarageBand",
	MuseScore  = "MuseScore 3",
}
