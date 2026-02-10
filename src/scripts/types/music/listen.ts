import type { GenreKind, Genre, Vibe } from "#scripts/types/music";
import type { Searchable } from "#scripts/search-filter.svelte";
import type { Shard, DatePoint } from "#scripts/types";


type Url = string;


export interface TrackData extends Searchable
{
  shard:   Shard;
  name:    string;
  artists: Shard[];

  date?: DatePoint | [DatePoint, DatePoint];
  cover?: string;

  genres?: Genre[];
  vibes?:  Vibe[];
  
  links?: {
    [platform: string]: Url;
  };

  discovered?: string;
  desc?:       string | string[];
}


export interface ArtistData {
  shard: Shard;
  name:  string;

  date?: number | string;
  icon:  string;
  
  genres?: Genre[];
  vibes?:  Vibe[];
  track?:  ExternalTrackData | ExternalTrackData[];

  links?: {
    [platform: string]: string;
  };

  discovered?: string;
}

interface ExternalTrackData {
  name:  string;
  link?: string;
}


export interface GenreData extends Searchable {
  fav?: boolean;
  
  name:  string;
  kind?: GenreKind;
  
  artists?: string[];
  tracks?:  string | string[];
  desc?:    string | string[];
}
