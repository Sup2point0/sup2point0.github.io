import { partial_ratio } from "fuzzball";

import {
  shardify, datepoint_to_prec,
  shuffle,
  all, any, sum, map_grouped,
} from "#scripts/utils";

import type {
  int, shard,
  Groups, Grouped, States,
} from "#scripts/types";


type SortBy = "default" | "date" | "name" | string;
type Sorter<Entity> = (entities: Entity[]) => Entity[];
type Grouper<Entity, Key extends PropertyKey> = (entity: Entity) => Key;


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
export type SearchResults<Entity>
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

  sort_by:      SortBy  = $state("default");
  reverse_sort: boolean = $state(false);

  show_all: boolean = $state(false);

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
  groups: string[] = ["default", "none"];

  /**
   * Properties by which the user can sort search results, such as date or name.
   */
  sorts: string[] = ["default", "date", "name"];

  /* NOTE: This may mask type checking */
  // FIXME why do we need this?
  [prop: string]: any;


  /**
   * Lookup dictionary for sorting algorithms to apply depending on `.sort-by`.
   */
  protected sorters_specific: Record<string, Sorter<Entity>>;

  /**
   * Lookup dictionary for groupers to apply depending on `.group-by`.
   */
  protected groupers_specific: Record<string, Grouper<Entity, any>> = {};


  constructor()
  {
    this.sorters_specific = {
      "random": source => shuffle(source),
      "date":   source => this.sort(source, { scorer: each => datepoint_to_prec(each.date) }),
      "name":   source => source.toSorted((l, r) => l.name.localeCompare(r.name)),
    };
  }


  /**
   * Are the search filters (effectively) untouched by the user? (i.e. Should the default initial filters be applied?)
   */
  get is_clear(): boolean {
    return this.query === "" && this.dirtiness === 0;
  }


  /**
   * Apply the search filters to the provided `data` to produce search results.
   * 
   * Both the input and output may be grouped or ungrouped.
   */
  apply(data: Entity[] | Groups<Entity>): SearchResults<Entity>
  {
    /* If the filters are untouched, return the data as-is. */
    if (this.is_clear) {
      if (Array.isArray(data)) {
        return SearchFilter.FlatResults(
          data.filter(each => !this.exclude_default(each))
        );
      }
      else {
        return SearchFilter.GroupedResults(
          map_grouped(data, source => source.filter(each => !this.exclude_default(each)))
        );
      }
    }

    let entities = Array.isArray(data) ? data : Object.values(data).flat();
    let filtered = this.filter(entities, this.exclude_default.bind(this));

    if (this.group_by !== "default" && this.group_by !== "none") {
      return SearchFilter.GroupedResults(this.sort_grouped(filtered));
    }
    else if (this.sort_by !== "default" || this.query) {
      return SearchFilter.FlatResults(this.sort_ungrouped(filtered));
    }
    else {
      return SearchFilter.FlatResults(filtered);
    }
  }


  // == FILTER == //

  /**
   * Returns `true` if `entity` should be filtered out by default.
   * 
   * Deriving classes may wish to provide their own set of base filters.
   */
  protected exclude_default(entity: Entity): boolean
  {
    return entity.is_shown === false && !this.show_all;
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

        for (let [toggle, enabled] of Object.entries(states)) {
          if (!enabled) continue;

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
   * 
   * Either a comparer or scorer should be supplied. If neither is present, no sorting is performed.
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
    let grouper = this.groupers_specific[this.group_by] ?? this.group_default;

    return this.group(source, {
      grouper: grouper.bind(this),
      entity_sorter: this.sort_ungrouped.bind(this),
    })
  }

  /**
   * The default sorter to apply when `.sort-by` is `"default"`, usually a sort by relevance.
   * 
   * This method can be overridden by child classes, which may wish to `switch`-`case` on their own additions to `.sort_by`.
   */
  protected sort_default(source: Entity[]): Entity[]
  {
    if (this.query) {
      return this.sort(source, {
        scorer: each => partial_ratio(this.query, each.name ?? each.shard ?? "")
      });
    }
    
    return source;
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
      grouper: Grouper<Entity, Key>,
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
        ([group, entities]) => {
          let sorted = entity_sorter(entities);
          if (this.reverse_sort) sorted.reverse();
          return [group, sorted];
        }
      );
    }
    
    if (group_sorter) out = group_sorter(out);
    if (this.reverse_group) out.reverse();

    return out;
  }

  /**
   * This method can be overridden by child classes.
   */
  protected group_default(entity: Entity): string
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


  // == STATIC == //
  // TODO private some?

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

  static FlatResults<Entity>(results: Entity[]): FlatResults<Entity> {
    return { is_grouped: false, data: results };
  }

  static GroupedResults<Entity>(results: Grouped<Entity>): GroupedResults<Entity> {
    return { is_grouped: true, data: results };
  }

  static count_results<Entity>(results: SearchResults<Entity>): int
  {
    if (results.is_grouped) {
      return sum(results.data.map(([group, entities]) => entities.length));
    } else {
      return results.data.length;
    }
  }
}
