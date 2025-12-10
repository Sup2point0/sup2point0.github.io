import type { DatePoint } from "#scripts/types";


export function datepoint_to_date(date: DatePoint | DatePoint[] | undefined): number | number[]
{
  if (date === undefined) {
    return -1;
  }

  if (Array.isArray(date)) {
    return date.map(datepoint_to_date) as number[];
  }

  if (typeof date === "string") {
    let [season, year] = date.split(" ");

    if (season === "childhood") {
      return 0;
    }
    if (season === "present") {
      return 3000;
    }

    let prec: number;
    switch (season) {
      case "winter": prec = 8; break;
      case "fall":   prec = 6; break;
      case "summer": prec = 4; break;
      case "spring": prec = 2; break;
      default:       prec = 0; break;
    }

    return Number(year) + prec / 10;
  }

  return date
}


export function display_date(date: DatePoint | DatePoint[]): string
{
  if (Array.isArray(date)) {
    if (date.length > 1) {
      return `${date[0].toString().toUpperCase()} – ${date[1].toString().toUpperCase()}`;
    }

    return date[0].toString().toUpperCase();
  }

  return date.toString().toUpperCase();
}
