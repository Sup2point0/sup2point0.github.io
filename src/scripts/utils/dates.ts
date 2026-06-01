import type { Dates } from "#scripts/types";


export function datepoint_to_prec(date: Dates | undefined): number | number[]
{
  if (date === undefined) {
    return -1;
  }

  if (Array.isArray(date)) {
    return date.map(datepoint_to_prec) as number[];
  }

  if (typeof date !== "string") return 0;
  let parts = date.split(" ");

  let day:  string = "0";
  let spec: string = "";
  let year: string;
  
  switch (parts.length) {
    case 1:
      [year] = parts;

      if (year === "childhood") {
        return 0;
      }
      if (year === "present") {
        return 3000;
      }

      break;
    
    case 2: [spec, year] = parts; break;
    case 3: [day, spec, year] = parts; break;

    default: return -1;
  }
  
  let coarse: number = 0;

  switch (spec.toLowerCase()) {
    // FIXME "early/late 20xx" does not follow "20xx <month>" pattern
    case "late":      coarse = 90; break;
    case "winter":    coarse = 85; break;
    case "december":  coarse = 80; break;
    case "november":  coarse = 75; break;
    case "october":   coarse = 70; break;
    case "fall":      coarse = 65; break;
    case "september": coarse = 60; break;

    case "summer": coarse = 55; break;
    case "august": coarse = 50; break;
    case "july":   coarse = 45; break;
    case "june":   coarse = 40; break;

    case "may":      coarse = 35; break;
    case "spring":   coarse = 30; break;
    case "april":    coarse = 25; break;
    case "march":    coarse = 20; break;
    case "february": coarse = 15; break;
    case "january":  coarse = 10; break;
    case "early":    coarse = 5; break;
    default:         coarse = 0; break;
  }

  return (
      10000 * Number(year)
    + 100 * coarse
    + Number(day)
  );
}


export function display_date(date: Dates): string
{
  if (Array.isArray(date)) {
    if (date.length > 1) {
      return `${date[0].toString().toUpperCase()} – ${date[1].toString().toUpperCase()}`;
    }

    return date[0].toString().toUpperCase();
  }

  return date?.toString().toUpperCase() ?? "UNKNOWN DATE";
}
