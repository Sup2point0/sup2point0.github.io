import type { Searchable } from "#scripts/search";
import type { Datepoint } from "#scripts/types";


export interface DevEntity extends Searchable {  
  date:      Datepoint;
  versions?: string[];

  love:     3 | 2 | 1 | null;
  fluency?: Fluency;

  colour?:  string;
  related?: string[];

  details?:  string | string[];
  describe?: string;
  capt?:     string;
  desc?:     string | string[];
  lore?:     string | string[];

  has_projects?: boolean;
}


export interface LangData extends DevEntity {
  name: string;

  icon: string;
}


export interface TechData extends DevEntity {
  name: string;

  icon: string;
}


export enum Fluency {
  LEARN  = "Would Like to Learn",
  TIER_1 = "Newbie",
  TIER_2 = "Comfortable",
  TIER_3 = "Absolutely Comfortable",
  TIER_4 = "Beyond Comfortable",
}

export enum Flavour {
  DEV = "software",
  ACADEMIC = "academic",
  PERSONAL = "personal",
}

export enum Kind {
  GENERAL     = "general",
  WEBSITE     = "website",
  GAME        = "game",
  APPLICATION = "application",
  LIBRARY     = "library",
  FRAMEWORK   = "framework",
  TOOL        = "tool",
  PROGRAM     = "program",
  EXTENSION   = "extension",
  WIKI        = "wiki",
  LANGUAGE    = "language",
  WORLD       = "worldbuilding",
  WRITING     = "writing",
  GRAPHIC     = "graphic design",
}

export enum State {
  ETERNAL = "eternal",
  DEVELOPING = "developing",
  MAINTAINING = "maintaining",
  HIATUS = "on hiatus",
  INDETERMINATE = "indeterminate",
  ARCHIVED = "archived",
}
