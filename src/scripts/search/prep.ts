import { shardify } from "#scripts/utils";
import type { Groups } from "#scripts/types";

import type { Searchable } from "./searchable";


/**
 * Preprocess an incomplete collection of searchable entities to be ready for searching.
 */
export function prep_groups<Entity extends Searchable>(
  data: Groups<Entity>,
  process?: (entity: Entity) => void,
): Groups<Entity>
{
  for (let [collection, entities] of Object.entries(data))
  {
    for (let entity of entities)
    {
      entity.shard ??= shardify(entity.name);
      entity.collection = collection;
      entity._score = 0;
      process?.(entity);
    }
  }

  return data;
}
