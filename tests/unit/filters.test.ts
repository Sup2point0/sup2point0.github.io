import { expect, test } from "vitest";

import { SearchFilter } from "#scripts/search";
import type { Searchable, FlatResults, GroupedResults } from "#scripts/search";
import type { Groups } from "#scripts/types";


const test_data: Groups<Searchable> = {
	group1: [
		{ name: "t" },
		{ name: "a" },
		{ name: "z" },
	],
	group2: [
		{ name: "1" },
		{ name: "7" },
		{ name: "3" },
	],
	group3: [
		{ name: "-" },
		{ name: "." },
		{ name: "=" },
	],
};


test("count results grouped", () =>
{
	let filter = new SearchFilter();
	let filtered = filter.apply(test_data) as GroupedResults<Searchable>;

	expect(filtered.is_grouped).toBe(true);
	expect(filter.count_results(filtered)).toBe(9);
});

test("count results flat", () =>
{
	let filter = new SearchFilter();
	filter.sort_by = "name";
	filter.dirtiness++;

	let filtered = filter.apply(test_data) as GroupedResults<Searchable>;

	expect(filtered.is_grouped).toBe(false);
	expect(filter.count_results(filtered)).toBe(9);
});


test("filter sort by name", () =>
{
	let filter = new SearchFilter();
	filter.sort_by = "name";
	filter.dirtiness++;

	let filtered = filter.apply(test_data) as FlatResults<Searchable>;
	expect(filtered.is_grouped).toBe(false);

	let results = filtered.data;
	expect(results.length).toBe(9);
	
	for (let i = 0; i < results.length - 1; i++) {
		expect(results[i].name.localeCompare(results[i+1].name)).toBe(-1);
	}
});

test("filter reverse sort by name", () =>
{
	let filter = new SearchFilter();
	filter.sort_by = "name";
	filter.reverse_sort = true;
	filter.dirtiness++;

	let filtered = filter.apply(test_data) as FlatResults<Searchable>;
	expect(filtered.is_grouped).toBe(false);

	let results = filtered.data;
	expect(results.length).toBe(9);
	
	for (let i = 0; i < results.length - 1; i++) {
		expect(results[i].name.localeCompare(results[i+1].name)).toBe(1);
	}
});
