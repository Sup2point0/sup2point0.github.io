import { expect, test } from "@playwright/test";


test("visit all pages and scroll", async ({ page }) =>
{
  for (let route of routes)
  {
    console.log("route =", route);
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


const routes = [
  "/",
  "/sup/info",
  "/sup/projects",

  "/sup/loves",
  "/sup/loves/games",
  "/sup/loves/films",
  "/sup/loves/series",
  "/sup/loves/anime",
  "/sup/loves/book-series",
  "/sup/loves/youtube",

  "/sup/music",
  "/sup/music/listen",
  "/sup/music/listen/chronicle",
  "/sup/music/listen/artists",
  "/sup/music/listen/genres",
  "/sup/music/create",
  "/sup/music/create/tracks",
  "/sup/music/create/albums",
  "/sup/music/create/albums/singles",
  "/sup/music/create/albums/algo-origins",
  "/sup/music/create/albums/algo-roots",
  "/sup/music/create/albums/algo-vision",
  "/sup/music/create/albums/elysion",
  "/sup/music/create/albums/cortex",
  "/sup/music/create/albums/integral",
  "/sup/music/create/albums/stranded",
  "/sup/music/create/albums/archives/garageband",
  "/sup/music/create/albums/archives/musescore",
];
