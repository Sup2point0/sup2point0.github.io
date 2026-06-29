import {
  shardify, datepoint_to_prec,
  shuffle,
  all, any, sum,
} from "#scripts/utils";

import type {
  int, shard,
  Groups, Grouped, States,
} from "#scripts/types";


type SortBy = "default" | "date" | "name" | string;
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

  /** Should this entity be shown? */
  is_shown?: boolean;
  
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
 * Results returned from a search filter, which may be grouped or ungrouped (a flat collection).
 * 
 * This functions as a tagged union, discriminated by `.is_grouped` (`true` for `Grouped<Entity>`).
 */
export type FilterResults<Entity>
  = FlatResults<Entity>
  | GroupedResults<Entity>
;

export interface FlatResults<Entity> {
  is_grouped: false;
  data: Entity[];
}

export interface GroupedResults<Entity> {
  is_grouped: true;
  data: Grouped<Entity>;
}


/**
 * Base class for a search filter, with support for grouping, filtering and sorting.
 * 
 * To use the filter, call `.apply()` and provide the data to filter.
 * 
 * The most important methods for deriving classes to override are `.sort_default()` and `.grouper()`, which `.apply()` will call.
 */
export class SearchFilter<Entity extends Searchable>
{
  dirtiness: number = $state(0);
  query:     string = $state("");

  group_by:      string  = $state("default");
  reverse_group: boolean = $state(false);

  filter_by:     States = $state({});

  sort_by:       SortBy  = $state("default");
  reverse_sort:  boolean = $state(false);

  show_all: boolean = $state(false);

  /**
   * If the user has not interacted with any filters, should entities in each collection be shuffled by default?
   */
  shuffle_by_default: boolean = false;

  /**
   * Which search filters should show their current state beneath the search bar, as an immediate visual reminder to the user (even when they don't have the filters opened).
   */
  previews: [string, string][] = [];

  /**
   * Which search filters can have individual states toggled, and their corresponding state object.
   * 
   * For instance, a media search filter might return `{ genres: <States> }`, allowing the user to enable/disable individual genres in the search results.
   */
  toggles: Record<string, States> = {};

  /**
   * Groups by which the user can group search results, such as date or love.
   */
  groups: string[] = ["default"];

  /**
   * Properties by which the user can sort search results, such as date or name.
   */
  sorts: string[] = ["default", "date", "name"];

  /* NOTE: This may mask type checking */
  // FIXME why do we need this?
  [prop: string]: any;


  /**
   * Are the search filters (effectively) untouched by the user? (i.e. Should the default initial filters be applied?)
   */
  get is_clear(): boolean {
    return this.query === "" && this.dirtiness === 0;
  }


  /**
   * Lookup dictionary for sorting algorithms to apply depending on `.sort-by`.
   */
  protected sorters_specific: Record<string, Sorter<Entity>>;


  constructor()
  {
    this.sorters_specific = {
      "date":   source => this.sort(source, { scorer: each => datepoint_to_prec(each.date) }),
      "name":   source => source.toSorted((l, r) => l.name.localeCompare(r.name)),
      "random": source => shuffle(source),
    };

  }


  flat_results(results: Entity[]): FlatResults<Entity> {
    return { is_grouped: false, data: results };
  }

  grouped_results(results: Grouped<Entity>): GroupedResults<Entity> {
    return { is_grouped: true, data: results };
  }

  count_results(results: FilterResults<Entity>): int
  {
    if (results.is_grouped) {
      return sum(results.data.map(([group, entities]) => entities.length));
    } else {
      return results.data.length;
    }
  }


  /**
   * Apply the search filters to the provided `date` to produce search results, which may be grouped or ungrouped.
   */
  apply(data: Groups<Entity>): FilterResults<Entity>
  {
    if (this.is_clear) {
      return this.grouped_results(this.filter_mandatory(data));
    }

    let entities = Object.values(data).flat();
    let filtered = this.filter(entities);

    if (this.group_by !== "default") {
      return this.grouped_results(this.sort_grouped(filtered));
    }
    else if (this.sort_by !== "default" || this.query) {
      return this.flat_results(this.sort_ungrouped(filtered));
    }
    else {
      return this.flat_results(filtered);
    }
  }


  // == FILTER == //

  /**
   * (out-of-place) Apply a base set of filters to collections of entities.
   */
  // TODO private
  filter_mandatory(source: Groups<Entity>): Grouped<Entity>
  {
    return Object.entries(source).map(([group, entities]) => [
      group,
      entities.filter(each => this.show_all || each.is_shown !== false)
    ]);
  }

  /**
   * (out-of-place) Filter a list of entities.
   */
  filter(
    source: Entity[],
    exclude_if?: (entity: Entity) => boolean,
  ): Entity[]
  { 
    let out = source.filter(each => {
      each._score = 0;
      let filtered = false;

      if (exclude_if?.(each)) return false;

      for (let [prop, states] of Object.entries(this.toggles)) {
        /* If the user hasn't made any choice, don't activate any filters. */
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


  // == SORT == //

  /**
   * (out-of-place) Sort a list of entities.
   */
  protected sort(
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

  /**
   * (out-of-place) Sort `source` by applying the search filters, producing ungrouped results.
   */
  sort_ungrouped(source: Entity[]): Entity[]
  {
    let sorter = this.sorters_specific[this.sort_by]?.bind(this);
    let sorted = sorter ? sorter(source) : this.sort_default(source);

    if (this.reverse_sort) sorted.reverse();

    return sorted;
  }

  /**
   * (out-of-place) Group then sort `source` by applying the search filters, producing grouped results.
   */
  sort_grouped(source: Entity[]): Grouped<Entity>
  {
    return this.group(source, {
      grouper: this.grouper.bind(this),
      entity_sorter: this.sort_ungrouped.bind(this),
    })
  }

  /**
   * The default sorter to apply when `.sort-by` is `"default"`.
   * 
   * This method should be overridden by child classes.
   */
  protected sort_default(source: Entity[]): Entity[]
  {
    return source;
  }

  /**
   * This method should be overridden by child classes.
   */
  protected grouper(entity: Entity): string
  {
    let value = entity[this.group_by];
    return Array.isArray(value) ? value[0] : value;
  }
  

  // FIXME remove
  protected sort_date(source: Entity[]): Entity[]
  {
    return this.sort(source, {
      scorer: each => {
        if (Array.isArray(each.date)) {
          return datepoint_to_prec(each.date);
        }
        return datepoint_to_prec(each.date) as number;
      }
    })
  }

  // FIXME remove
  protected sort_name(source: Entity[]): Entity[]
  {
    return source.toSorted((prot, deut) => prot.name.localeCompare(deut.name));
  }


  // == GROUP == //

  /**
   * Group a list of entities.
   * 
   * For `grouper` and `group_sorter`, a default implementation is used if they are not provided. If `entity_sorter` is not provided, entities in each group will be in an arbitrary order.
   * 
   * @param source List of entities to group.
   * @param grouper Grouper function applied to each entity to assign it a group.
   * @param entity_sorter Sorter function applied to each group to sort the entities inside it.
   * @param group_sorter Function applied to each group name to assign it a score used for sorting groups.
   */
  group<Key extends PropertyKey>(
    source: Entity[],
    options: {
      grouper: (entity: Entity) => Key,
      entity_sorter?: Sorter<Entity>,
      group_sorter?: Sorter<[Key, Entity[]]>,
    },
  ): [Key, Entity[]][]
  {
    let {
      grouper,
      entity_sorter,
      group_sorter = this.default_group_sort.bind(this),
    } = options;
    
    let groups = Object.groupBy(source, grouper) as Groups<Entity>;
    let out    = Object.entries(groups)          as [Key, Entity[]][];
    
    if (entity_sorter) {
      out = out.map(
        // FIXME elim iife
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


  // == STATIC == //

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
}
