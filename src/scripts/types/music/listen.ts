import type { GenreKind, Genre, Vibe } from "#scripts/types/music";
import type { Searchable } from "#scripts/search";
import type { shard, filepath, url, Datepoint, Dates, Description } from "#scripts/types";


export interface TrackData extends Searchable
{
  shard:   shard;
  name:    string;
  artists: shard[];

  date?:  Dates;
  cover?: filepath;

  genres?: Genre[];
  vibes?:  Vibe[];
  
  links?: {
    [platform: string]: url;
  };

  discovered?: string;
  desc?:       Description;
}


export interface ArtistData {
  shard: shard;
  name:  string;

  date?: Datepoint;
  icon:  string;
  
  genres?: Genre[];
  vibes?:  Vibe[];
  track?:  ExternalTrackData | ExternalTrackData[];

  links?: {
    [platform: string]: url;
  };

  discovered?: string;
  desc?:       string[];
}

interface ExternalTrackData {
  name:  string;
  link?: url;
}


export interface GenreData extends Searchable {
  fav?: boolean;
  
  name:  string;
  kind?: GenreKind;
  
  artists?: string[];
  tracks?:  string | string[];
  desc?:    Description[];
}
