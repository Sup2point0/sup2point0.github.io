
import type { Shard, Daw } from "./index";


export interface TrackData {
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
  name: string;
  date?: string;

  track?: string | string[];
  genres?: string[];
  discovered?: string;
}
