import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";


const config = {
	kit: {
		adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    alias: {
      "#src": "./src/",
      "#routes": "./src/routes/",
      "#parts": "./src/parts/",
      "#styles": "./src/styles/",
      "#scripts": "./src/scripts/",
      "#sup": "./src/routes/(sup)/sup",
    },
    prerender: {
      handleHttpError: "warn",
      handleMissingId: "warn",
      entries: [
        "/",
        "/assort",
        "/sup",
      ],
    },
	},

  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `
          @use './src/styles/globals' as *;
          @use './src/styles/mixins' as *;
          @use './src/styles/fonts' as *;
        `
      },
    })
  ]
};

export default config;
