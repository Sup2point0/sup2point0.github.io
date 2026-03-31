export type int = number;

/** A unique identifier for any entity. */
export type shard = string;

/** A filepath for an asset. */
export type filepath = string;

/** A single-line or multi-line description. */
export type Description = string | string[];

/** CSS styles passed as an argument to a component. */
export type Style = string | Record<string, any>;


/** A non-specific point in time. */
export type DatePoint = number | string | "childhood" | "present";

/** A single date, or 2 endpoints of a date range. */
export type Dates = DatePoint | [DatePoint, DatePoint];


/** A measure of how much I love something. */
export type Love = 3 | 2 | 1 | null;


/** An object whose keys group arrays of items into categories. */
export type Groups<Type> = Record<string, Type[]>;

/** An object whose keys are states of toggles. */
export type States = Record<string, boolean>;
