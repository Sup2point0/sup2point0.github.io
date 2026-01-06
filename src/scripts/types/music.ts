import type { Searchable } from "#scripts/search-filter.svelte";
import type { Shard } from "./index";


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

  desc?: string;
  is_preview?: boolean;

  _score: number;
}


export interface AlbumData {
  shard: Shard;
  name: string;
  date?: string;

  cover?: string;
  daw?: Daw | Daw[];

  desc?: string;
  is_preview?: boolean;

  tracks: TrackData[];
}


export interface ArtistData {
  shard: string;
  name: string;

  date?: number | string;
  discovered?: string;

  icon: string;
  
  genres?: Genre[];
  vibes?: Vibe[];
  track?: ExternalTrackData | ExternalTrackData[];
  links?: {
    [platform: string]: string;
  };
}

interface ExternalTrackData {
  name: string;
  link?: string;
}


export enum GenreKind {
  GENRE = "genre",
  VIBE  = "vibe",
}

export interface GenreData extends Searchable {
  fav?: boolean;
  
  name: string;
  kind?: GenreKind;
  
  artists?: string[];
  tracks?: string | string[];
  desc?: string;
}


export enum Genre {
  STEP200      = "200step",
  ALT_POP      = "alternative pop",
  ALT_PUNK_ROCK = "alternative punk rock",
  ANIME        = "anime",
  ARCADE       = "arcade",
  ARTCORE      = "artcore",
  BASS         = "bass",
  BEATBOX      = "beatbox",
  BREAKCORE    = "breakcore",
  CAMELLIACORE = "Camelliacore",
  CINEMATIC    = "cinematic",
  COLOUR_BASS  = "colour bass",
  COMEDY       = "comedy",
  COMPLEXTRO   = "complextro",
  CPOP         = "c-pop",
  DOWNTEMPO    = "downtempo",
  DRUM_N_BASS  = "drum & bass",
  DUBSTEP      = "dubstep",
  EDM          = "EDM",
  ELECTRONIC   = "electronic",
  FULL_FLAVOUR = "full flavour",
  FUTURE_BASS  = "future bass",
  FUTURE_CORE  = "future core",
  GAME         = "game",
  GOTHIC_HARDCORE = "gothic hardcore",
  GUITAR       = "guitar",
  HARDCORE     = "hardcore",
  HITECH       = "hi-tech",
  HOUSE        = "house",
  JCORE        = "j-core",
  JPOP         = "k-pop",
  KPOP         = "k-pop",
  MUSIC        = "music",
  NEUROFUNK    = "neurofunk",
  ORCHESTRAL   = "orchestral",
  ORIENTAL     = "oriental",
  PIANO        = "piano",
  POP          = "pop",
  PUNK         = "punk",
  RAP          = "rap",
  RHYTHM       = "rhythm",
  ROCK         = "rock",
  TECHNO       = "techno",
  TRANCE       = "trance",
  TRANSCENDENTAL = "transcendental",
  TRAP         = "trap",
  VOCALOID     = "vocaloid",
}

export enum Vibe {
  CHILLOUT  = "chillout",
  DISCO     = "disco",
  EMOTIONAL = "emotional",
  HEROIC    = "heroic",
  WAR       = "war",
}

export enum Daw {
  FL         = "FL Studio",
  GarageBand = "GarageBand",
  MuseScore  = "MuseScore 3",
}
