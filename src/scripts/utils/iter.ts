import type { Groups, Grouped, States } from "#scripts/types";


export function any<Type>(
  iterable: Type[] | Record<any, boolean>,
): boolean
{
  if (Array.isArray(iterable)) {
    return iterable.some(s => s);
  }
  else {
    return Object.values(iterable).some(s => s);
  }
}

export function all<Type>(
  iterable: Type[] | Record<any, boolean>,
): boolean
{
  if (Array.isArray(iterable)) {
    return iterable.every(s => s);
  }
  else {
    return Object.values(iterable).every(s => s);
  }
}

export function zip<X,Y>(left: X[], right: Y[]): [X,Y][]
{
  if (right.length >= left.length) {
    return left.map((each, i) => [each, right[i]]);
  } else {
    return right.map((each, i) => [left[i], each]);
  }
}

export function sum(iterable: number[]): number
{
  return iterable.reduce((acc, n) => acc + n, 0);
}


export function get_enabled(
  object: States,
): string[]
{
  return (
    Object.entries(object)
    .filter(([prop, state]) => state)
    .map(([prop, state]) => prop)
  );
}

/**
 * (out-of-place) Apply `mapper` to each value in `obj`.
 */
export function map_values<
  K extends string | number | symbol,
  V,
  T,
>(
  obj: Record<K,V>,
  mapper: (each: V) => T,
): Record<K,T>
{
  return Object.fromEntries(
    Object.entries(obj).map(
      ([key, value]) => [key, mapper(value as V)]
    )
  ) as Record<K,T>;
}

export function map_grouped<Type>(
  groups: Groups<Type>,
  mapper: (collection: Type[]) => Type[],
): Grouped<Type>
{  
  return Object.entries(groups).map(
    ([group, entities]) => [
      group,
      mapper(entities),
    ]
  )
}
