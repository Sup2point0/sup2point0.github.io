import type { Searchable } from "#scripts/search";
import type { shard, Dates, Datepoint } from "#scripts/types";


export interface MyTrackData extends Searchable {
	feat?:       boolean;
	is_preview?: boolean;

	shard: shard;
	date?: Dates;
	
	audio?: string;
	cover?: string;
	album:  AlbumData;

	genres?: string[];
	vibes?:  string[];

	desc?: string;
}


export interface AlbumData extends Searchable {
	is_preview?: boolean;
	
	shard: shard;
	date?: Datepoint | Datepoint[];

	cover?: string;
	daw?:   Daw | Daw[];

	desc?:  string | string[];
	tracks: MyTrackData[];
}


export enum Daw {
	FL         = "FL Studio",
	GarageBand = "GarageBand",
	MuseScore  = "MuseScore 3",
}
