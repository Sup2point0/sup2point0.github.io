export type int = number;

/** A unique identifier for any entity. */
export type shard = string;

/** A filepath for an asset. */
export type filepath = string;

/** A fully-qualified, usually external URL. */
export type url = string;


/** A non-specific point in time. */
export type Datepoint = number | string | "childhood" | "present";

/** A single date, or 2 endpoints of a date range. */
export type Dates = Datepoint | [Datepoint, Datepoint];

/** A single-line or multi-line description. */
export type Description = string | string[];

/** A multi-line description. */
export type ProperDescription = string[];

/** CSS styles passed as an argument to a component. */
export type Style = string | Record<string, any>;

/** A measure of how much I love something. */
export type Love = 3 | 2 | 1 | null;


/** An object whose keys group arrays of items. */
export type Groups<Type> = Record<string, Type[]>;

/** A collection of keys grouping arrays of items. */
export type Grouped<Type> = Array<[string, Type[]]>;

/** An object whose keys are states of toggles. */
export type States = Record<string, boolean>;
