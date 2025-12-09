import type { Shard, Groups } from "#scripts/types";


export type FilterResults<Entity> = Entity[] | [string, Entity[]][];


export interface Searchable {
  shard?: Shard;
  collection?: string;
  _score_?: number;

  [prop: string]: any;
}


export class SearchFilter<Entity extends Searchable>
{
  dirtiness: number = $state(0);
  query:     string = $state("");

  group_by:      string  = $state("default");
  reverse_group: boolean = $state(false);

  filter_by:     Record<string, boolean> = $state({});

  sort_by:       string  = $state("default");
  reverse_sort:  boolean = $state(false);

  [prop: string]: any;


  get previews(): [string, string][]
  {
    return [];
  }

  get toggles(): Record<string, Record<string, boolean>>
  {
    return {};
  }

  get sorts(): string[]
  {
    return [
      "default",
      "date",
      "name",
    ];
  }


  /**
   * Sort a list of entities (out-of-place).
   * @param source List of entities.
   * @param scorer Function applied to each entity to assign it a score used for sorting.
   * @returns Sorted list of entities.
   */
  sort(
    source: Entity[],
    scorer: (entity: Entity) => number,
  ): Entity[]
  {
    if (this.query === "") return source;

    let out = [...source];

    for (let each of out) {
      each._score_ = scorer(each);
    }

    out.sort((prot, deut) => (deut._score_ ?? 0) - (prot._score_ ?? 0));

    if (this.reverse_sort) {
      out.reverse();
    }

    return out;
  }

  /**
   * Group a list of entities.
   * @param source List of entities to group.
   * @param grouper Grouper function applied to each entity to assign it a group.
   * @param sorter Function applied to each group name to assign it a score used for sorting groups.
   * @returns List of groups of entities.
   */
  group(
    source: Entity[],
    grouper: (entity: Entity) => string,
    sorter?: (group: string) => number,
  ): [string, Entity[]][]
  {
    let groups = Object.groupBy(source, grouper) as Groups<Entity>;
    let out = Object.entries(groups);
    
    if (sorter) {
      out.sort(([group, entities]) => sorter(group));
    }

    if (this.reverse_group) {
      out.reverse();
    }

    return out;
  }
}
