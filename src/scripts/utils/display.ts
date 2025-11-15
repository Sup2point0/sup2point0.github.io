import type { DatePoint } from "#scripts/types";


export function display_date(date: DatePoint | DatePoint[]): string
{
  if (Array.isArray(date)) {
    if (date.length > 1) {
      return `${date[0].toString().toUpperCase()} – ${date[1].toString().toUpperCase()}`;
    }
    else {
      return date[0].toString().toUpperCase();
    }
  }
  else {
    return date.toString().toUpperCase();
  }
}
