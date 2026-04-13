import type { Datepoint } from "#scripts/types";


export function datepoint_to_date(date: Datepoint | Datepoint[] | undefined): number | number[]
{
  if (date === undefined) {
    return -1;
  }

  if (Array.isArray(date)) {
    return date.map(datepoint_to_date) as number[];
  }

  if (typeof date === "string") {
    let [spec, year] = date.split(" ");

    if (spec === "childhood") {
      return 0;
    }
    if (spec === "present") {
      return 3000;
    }

    let prec: number;
    switch (spec.toLowerCase()) {
      case "late":      prec = 90; break;
      case "winter":    prec = 85; break;
      case "december":  prec = 80; break;
      case "november":  prec = 75; break;
      case "october":   prec = 70; break;
      case "fall":      prec = 65; break;
      case "september": prec = 60; break;

      case "summer": prec = 55; break;
      case "august": prec = 50; break;
      case "july":   prec = 45; break;
      case "june":   prec = 40; break;

      case "may":      prec = 35; break;
      case "spring":   prec = 30; break;
      case "april":    prec = 25; break;
      case "march":    prec = 20; break;
      case "february": prec = 15; break;
      case "january":  prec = 10; break;
      case "early":    prec = 5; break;
      default:         prec = 0; break;
    }

    return Number(year) + prec / 100;
  }

  return date
}


export function display_date(date: Datepoint | Datepoint[]): string
{
  if (Array.isArray(date)) {
    if (date.length > 1) {
      return `${date[0].toString().toUpperCase()} – ${date[1].toString().toUpperCase()}`;
    }

    return date[0].toString().toUpperCase();
  }

  return date?.toString().toUpperCase() ?? "UNKNOWN DATE";
}
