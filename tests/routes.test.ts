import { expect, test } from "@playwright/test";


test("visit all pages and scroll", async ({ page }) =>
{
  for (let route of routes) {
    let status = await page.goto(route);
    expect(status?.ok(), `Failed to access \`${route}\``).toBe(true);

    await page.getByText("crafted with").scrollIntoViewIfNeeded();
  }
});


const routes = [
  "/sup/info",
];
