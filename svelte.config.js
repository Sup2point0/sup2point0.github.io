import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";


const config = {
	kit: {
		adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: "",
    },
    alias: {
      "#src": "./src/",
      "#parts": "./src/parts/",
      "#styles": "./src/styles/",
      "#scripts": "./src/scripts/",
    },
    prerender: {
      handleHttpError: "warn",
    },
	},

  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `
          @use './src/styles/globals.scss' as *;
        `
      },
    })
  ]
};

export default config;
