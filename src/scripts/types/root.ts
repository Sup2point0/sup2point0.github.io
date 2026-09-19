export type int = number;

/** A unique stable identifier for any entity. */
export type shard    = string & { readonly __brand?: unique symbol };

/** A filepath for an asset. */
export type filepath = string & { readonly __brand?: unique symbol };

/** A fully-qualified, usually external URL. */
export type url      = string & { readonly __brand?: unique symbol };

/** A CSS colour string, such as a hex code or `oklch()` call. */
export type colour   = string & { readonly __brand?: unique symbol };


/** A non-specific point in time. */
export type Datepoint = number | string | "childhood" | "present";

/** A single date, or 2 endpoints of a date range. */
export type Dates = Datepoint | [Datepoint, Datepoint];

/** A single-line or multi-line description. */
export type Description = Arrayable<string>;

/** A multi-line description. */
export type ProperDescription = string[];

/** CSS styles passed as an argument to a component. */
export type Style = string | Record<string, any>;

/** A measure of how much I love something. */
export type Love = 3 | 2 | 1 | null;


/** Either a single item, or an array of items. */
export type Arrayable<Type> = Type | Type[];

/** An object whose keys group arrays of items. */
export type Groups<Type> = Record<string, Type[]>;

/** A collection of keys grouping arrays of items. */
export type Grouped<Type> = Array<[string, Type[]]>;

/** An object whose keys are states of toggles. */
export type States = Record<string, boolean>;
