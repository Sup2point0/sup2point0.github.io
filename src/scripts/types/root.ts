/** A unique identifier for any entity. */
export type Shard = string;


/** A non-specific point in time. */
export type DatePoint = number | string | "childhood" | "present";


/** An object whose keys group arrays of items into categories. */
export type Groups<Type> = Record<string, Type[]>;
