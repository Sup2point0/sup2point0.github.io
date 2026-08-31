import { expect, test } from "@playwright/test";

import { routes_list } from "#src/routes";


test("visit all pages and scroll", async ({ page }) =>
{
	for (let { link: route } of routes_list)
	{
		console.log(`route =`, route);
		let status = await page.goto(route);
		expect(status?.ok(), `Failed to access \`${route}\``).toBe(true);

		await page.getByText("crafted with").scrollIntoViewIfNeeded();
	}
});

test("visit `/dev`", async ({ page }) =>
{  
	let status = await page.goto("/sup/dev");
	expect(status?.ok(), `Failed to access \`/sup/dev\``).toBe(true);
});
