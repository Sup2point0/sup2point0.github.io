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
