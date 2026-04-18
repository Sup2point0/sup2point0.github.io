import {
  shardify, datepoint_to_prec,
  all, any, sum,
} from "#scripts/utils";

import type { shard, Groups, States } from "#scripts/types";


export type FilterResults<Entity> = Entity[] | [string, Entity[]][];

type Sorter<Entity> = (entities: Entity[]) => Entity[];


/**
 * An entity that forms part of a searchable collection.
 */
export interface Searchable
{
  /** Permanent unique identifier for the entity, used as keys, link anchors, etc. */
  shard?: shard;

  /** Which 'collection' this entity belongs to. */
  collection?: string;

  /** Should this entity be hidden by default? */
  is_hidden?: boolean;
  
  /** A cached score for how relevant this entity is for a given search query. */
  _score?: number;

  [prop: string]: any;
}


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


/**
 * Base class for a search filter.
 */
export class SearchFilter<Entity extends Searchable>
{
  dirtiness: number = $state(0);
  query:     string = $state("");

  group_by:      string  = $state("default");
  reverse_group: boolean = $state(false);

  filter_by:     States = $state({});

  sort_by:       string  = $state("default");
  reverse_sort:  boolean = $state(false);

  show_hidden: boolean = $state(false);

  [prop: string]: any;


  get previews(): [string, string][] {
    return [];
  }

  /**
   * Which search filters can have individual states toggled, and their corresponding state object.
   * 
   * For instance, a media search filter might return `{ genres: <States> }`, allowing the user to enable/disable individual genres in the search results.
   */
  get toggles(): Record<string, States> {
    return {};
  }

  get sorts(): string[] {
    return ["default", "date", "name"];
  }


  /**
   * Construct a state object with the members of an enum `states`, initialising each state to `init_state` (`true` by default).
   * */
  static init_states(states: object, init_state?: boolean): States
  {
    return {
      ...Object.fromEntries(
        Object.values(states)
        .map(s => [s, init_state ?? true])
      )
    };
  }

  static init_shard_states(states: Record<shard, Searchable>, init_state?: boolean): States
  {
    return {
      ...Object.fromEntries(
        Object.values(states)
        .filter(s => s._show !== false)
        .map(s => [s.shard, init_state ?? true])
      )
    };
  }


  /**
   * Filter a list of entities (out-of-place).
   */
  filter(
    source: Entity[],
    exclude_if?: (entity: Entity) => boolean,
  ): Entity[]
  {
    let out = source.filter(each => {
      each._score = 0;
      let filtered = false;

      if (!this.show_hidden && each.is_hidden) return false;
      if (exclude_if?.(each)) return false;

      for (let [prop, states] of Object.entries(this.toggles)) {
        /** If the user hasn't made any choice, don't activate any filters. */
        if (all(states) || !any(states)) continue;

        let hit = false;

        for (let [toggle, state] of Object.entries(states)) {
          if (state) {
            if (Array.isArray(each[prop])) {
              let matches = each[prop].filter(p => p === toggle).length;
              if (matches > 0) {
                hit = true;
                each._score += matches ** 2;
              }
            }
            else if (each[prop] === toggle) {
              hit = true;
              each._score++;
            }
          }
        }

        if (!hit) return false;
        filtered = true;
      }

      return (each._score > 0 || !filtered);
    });

    /* If filtering removes all results, bail out and return the original. */
    if (out.length === 0 && this.query) {
      return source;
    }

    return out;
  }


  /**
   * Sort a list of entities (out-of-place).
   * @param source List of entities.
   * @param comparer Function applied to pairs of entities to determine their order relative to each other.
   * @param scorer Function applied to each entity to assign it a score used for sorting.
   * @returns Sorted list of entities.
   */
  sort(
    source: Entity[],
    options: {
      comparer?: (e1: Entity, e2: Entity) => number,
      scorer?: (entity: Entity) => number,
    }
  ): Entity[]
  {
    let out = [...source];
    let { comparer, scorer } = options;

    if (comparer) {
      out.sort(comparer);
    }
    else if (scorer) {
      for (let each of out) {
        each._score = scorer(each);
      }
      out.sort((prot, deut) => (deut._score ?? 0) - (prot._score ?? 0));
    }

    if (this.reverse_sort) out.reverse();

    return out;
  }

  sort_date(source: Entity[]): Entity[]
  {
    return this.sort(source, {
      scorer: each => {
        if (Array.isArray(each.date)) {
          return Math.min(...datepoint_to_prec(each.date) as number[]);
        }
        return datepoint_to_prec(each.date) as number;
      }
    })
  }

  sort_name(source: Entity[]): Entity[]
  {
    return source.toSorted((prot, deut) => prot.name.localeCompare(deut.name));
  }


  /**
   * Group a list of entities.
   * 
   * For `grouper` and `group_sorter`, a default implementation is used if they are not provided. If `entity_sorter` is not provided, entities in each group will be in an arbitrary order.
   * 
   * @param source List of entities to group.
   * @param grouper Grouper function applied to each entity to assign it a group.
   * @param entity_sorter Sorter function applied to each group to sort the entities inside it.
   * @param group_sorter Function applied to each group name to assign it a score used for sorting groups.
   * @returns List of groups of entities.
   */
  group<Key extends PropertyKey>(
    source: Entity[],
    options: {
      grouper?: (entity: Entity) => Key,
      entity_sorter?: Sorter<Entity>,
      group_sorter?: Sorter<[Key, Entity[]]>,
    },
  ): [Key, Entity[]][]
  {
    let {
      grouper = this.default_group.bind(this),
      entity_sorter,
      group_sorter = this.default_group_sort.bind(this),
    } = options;

    /* @ts-ignore SAFETY: `.groupBy()` expects a callback returning a `Key`, idky TypeScript thinks it should be `string` ¯\_(ツ)_/¯ */
    let groups = Object.groupBy(source, grouper) as Groups<Entity>;
    let out    = Object.entries(groups)          as [Key, Entity[]][];
    
    if (entity_sorter) {
      out = out.map(
        ([group, entities]) => [
          group,
          (() => {
            let sorted = entity_sorter(entities);
            if (this.reverse_sort) sorted.reverse();
            return sorted;
          })()
        ]
      );
    }
    
    if (group_sorter) out = group_sorter(out);
    if (this.reverse_group) out.reverse();

    return out;
  }

  default_group(entity: Entity): string
  {
    let value = entity[this.group_by];
    return Array.isArray(value) ? value[0] : value;
  }

  default_group_sort<Key extends PropertyKey>(
      groups: [Key, Entity[]][],
    ): [Key, Entity[]][]
    {
      if (this.group_by === "date" && (this.sort_by === "date" || this.sort_by === "default")) {
        return groups.toSorted(
          ([g1, e1], [g2, e2]) => (g2 as number) - (g1 as number)
        );
      }
  
      if (this.dirtiness > 1) {
        return groups.toSorted(
          ([group, media]) => {
            if (this.query) {
              return sum(
                media.map(each => each._score ?? 0)
              );
            }
            return media.length;
          }
        );
      }
  
      let toggles = Object.keys(this.toggles);
  
      if (toggles.includes(this.group_by)) {
        return groups.toSorted(
          ([g1, e1], [g2, e2]) => {
            let prot = Object.keys(this[this.group_by]).indexOf(g1 as string);
            let deut = Object.keys(this[this.group_by]).indexOf(g2 as string);
  
            if (prot === -1 && deut !== -1) return 1;
            if (prot !== -1 && deut === -1) return -1;
            return prot - deut;
          }
        )
      }
  
      return groups;
    }
}
