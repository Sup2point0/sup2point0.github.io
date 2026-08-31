import { expect, test } from "@playwright/test";


test("use portal", async ({ page }) =>
{
	await page.keyboard.down("Control");
	await page.keyboard.down("/");
	await page.keyboard.up("Control");
	await page.keyboard.down("Backspace");
	await page.keyboard.down("/");
	// TODO
});
