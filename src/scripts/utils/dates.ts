import type { Dates } from "#scripts/types";


export const DATE_PREC_MAJOR = 10000;
export const DATE_PREC_MINOR = 100;


/**
 * Convert a `Dates` value of any precision to a score used for sorting.
 * 
 * `resolve` describes how to resolve a date range: if `start`, the earlier date is taken, if `end`, the later date is taken.
 */
export function date_to_prec(date: Dates | undefined, resolve?: "start" | "end"): number
{
  if (date === undefined) {
    return -1;
  }

  if (typeof date === "number") return DATE_PREC_MAJOR * date;

  if (Array.isArray(date)) {
    let resolver = (resolve === "end") ? Math.max : Math.min;
    return resolver(...date.map(d => date_to_prec(d, resolve)));
  }

  if (typeof date !== "string") return 0;
  let parts = date.toLowerCase().split(" ");

  let day:  string = "0";
  let spec: string = "";
  let year: string;
  
  switch (parts.length) {
    case 1:
      [year] = parts;

      switch (year) {
        case "retired":   return -3;
        case "childhood": return 0;
        case "present":   return DATE_PREC_MAJOR * 3000;
      }

      break;
    
    case 2: [spec, year] = parts; break;
    case 3: [day, spec, year] = parts; break;

    default: return -1;
  }
  
  let coarse: number = 0;

  switch (spec.toLowerCase()) {
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
      DATE_PREC_MAJOR * Number(year)
    + DATE_PREC_MINOR * coarse
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
