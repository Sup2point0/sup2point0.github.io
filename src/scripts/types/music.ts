import type { Shard } from "./index";
import type { Searchable } from "#scripts/search-filter.svelte";


export enum Daw {
  FL = "FL Studio",
  GarageBand = "GarageBand",
  MuseScore = "MuseScore 3",
}


export interface TrackData extends Searchable {
  feat?: boolean;

  shard: Shard;
  name: string;
  date?: string;
  
  audio?: string;
  cover?: string;
  album: AlbumData;

  genres?: string[];
  vibes?: string[];

  desc?: string | string[];
  is_preview?: boolean;

  _score_: number;
}


export interface AlbumData {
  shard: Shard;
  name: string;
  date?: string;

  cover?: string;
  daw?: Daw | Daw[];

  desc?: string | string[];
  is_preview?: boolean;

  tracks: TrackData[];
}


export interface ArtistData {
  shard: string;
  name: string;

  date?: number | string;
  discovered?: string;

  icon: string;
  
  genres?: string[];
  track?: ExternalTrackData | ExternalTrackData[];
  links?: {
    [platform: string]: string;
  };
}


interface ExternalTrackData {
  name: string;
  link?: string;
}
