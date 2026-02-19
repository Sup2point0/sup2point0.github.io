/** A unique identifier for any entity. */
export type Shard = string;


/** A non-specific point in time. */
export type DatePoint = number | string | "childhood" | "present";

/** A single date, or 2 ends of a date range. */
export type Dates = DatePoint | [DatePoint, DatePoint];


/** A measure of how much I love something. */
export type Love = 3 | 2 | 1 | null;


/** An object whose keys group arrays of items into categories. */
export type Groups<Type> = Record<string, Type[]>;

/** An object whose keys are states of toggles. */
export type States = Record<string, boolean>;
