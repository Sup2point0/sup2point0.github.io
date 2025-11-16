/** A unique identifier for any entity. */
export type Shard = string;


/** A non-specific point in time. */
export type DatePoint = number | string | "childhood" | "present";


/** An object mapping string keys to values of `Type`. */
export interface Keyed<Type> {
  [key: string]: Type;
}

/** An object whose keys group arrays of items into categories. */
export type Groups<Type> = Keyed<Type[]>;
