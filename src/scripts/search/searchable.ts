import type { shard } from "#scripts/types";


/**
 * An entity that forms part of a searchable collection.
 */
export interface Searchable
{
  /** Permanent unique identifier for the entity, used as keys, link anchors, etc. */
  shard?: shard;

  /** Which 'collection' this entity belongs to. */
  collection?: string;

  /** Should this entity be shown? */
  is_shown?: boolean;
  
  /** A cached score for how relevant this entity is for a given search query. */
  _score?: number;

  [prop: string]: any;
}
