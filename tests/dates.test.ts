import { expect, test } from "@playwright/test";

import { datepoint_to_prec } from "#scripts/utils";


test("convert date", () =>
{
  expect(datepoint_to_prec("2025")).toBe(20250000);
  expect(datepoint_to_prec("January 2025")).toBe(20251000);
  expect(datepoint_to_prec("1 January 2025")).toBe(20251001);

  expect(
    datepoint_to_prec("1 April 2020") < datepoint_to_prec("2 April 2024")
  ).toBeTruthy();
});
