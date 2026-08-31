import type { Grouped } from "#scripts/types";


/**
 * Results returned from a search filter, which may be grouped or ungrouped (a flat collection).
 * 
 * This functions as a tagged union, discriminated by `.is_grouped` (`true` for `Grouped<Entity>`).
 */
export type SearchResults<Entity>
	= FlatResults<Entity>
	| GroupedResults<Entity>
;

/**
 * An ungrouped list of search results.
 */
export interface FlatResults<Entity> {
	is_grouped: false;
	data: Entity[];
}

/**
 * A grouped collection of search results.
 */
export interface GroupedResults<Entity> {
	is_grouped: true;
	data: Grouped<Entity>;
}
