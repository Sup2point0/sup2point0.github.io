import { expect, test } from "vitest";

import { SearchFilter, type Searchable } from "#scripts/search-filter.svelte.ts";
import type { Groups } from "#scripts/types";


const test_data: Groups<Searchable> = {
  group1: [
    { name: "a" },
    { name: "t" },
    { name: "z" },
  ],
  group2: [
    { name: "1" },
    { name: "3" },
    { name: "7" },
  ],
  group3: [
    { name: "-" },
    { name: "." },
    { name: "=" },
  ],
};


test("filter sort by name", () =>
{
  let filter = new SearchFilter();
  filter.sort_by = "name";

  let filtered = filter.apply(test_data);

  expect(filtered.is_grouped).toBeTruthy();
  expect(Object.keys(filtered.data).length).toBe(3);
});
