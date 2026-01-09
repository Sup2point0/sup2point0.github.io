import type { States } from "#scripts/types";


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
