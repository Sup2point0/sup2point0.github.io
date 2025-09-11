
import type { Shard, Daw } from "./index";


export interface TrackData {
  feat?: boolean;

  shard: Shard;
  name: string;
  date?: string;
  
  audio?: string;
  cover?: string;
  album?: string;

  genres?: string[];
  vibes?: string[];

  desc?: string | string[];
  is_preview?: boolean;
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
