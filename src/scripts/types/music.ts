
import type { Shard, Daw } from "./index";


export interface TrackData {
  feat?: boolean;

  shard: Shard;
  name: string;
  
  audio: string;
  cover?: string;

  genres?: string[];

  desc?: string | string[];
  is_preview?: boolean;
}


export interface AlbumData {
  shard: Shard;
  name: string;
  year?: string;

  daw?: Daw | Daw[];
  cover?: string;

  tracks: TrackData[];

  desc?: string | string[];
  is_preview?: boolean;
}
