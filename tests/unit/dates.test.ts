import { expect, test } from "vitest";

import { date_to_prec } from "#scripts/utils";


test("convert date", () =>
{
	expect(date_to_prec("2025")).toBe(20250000);
	expect(date_to_prec("January 2025")).toBe(20251000);
	expect(date_to_prec("1 January 2025")).toBe(20251001);

	expect(
		date_to_prec("1 April 2020") < date_to_prec("2 April 2024")
	).toBeTruthy();
});
