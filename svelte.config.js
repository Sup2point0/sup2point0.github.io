import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from "svelte-preprocess";


const config = {
	kit: {
		adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "error.html",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
    },
    alias: {
      "#src": "./src/",
      "#parts": "./src/parts/",
      "#styles": "./src/styles/",
      "#modules": "./src/modules/",
    },
    prerender: {
      entries: [
        "*",
        "/issues",
        "/issues/1",
      ],
      handleHttpError: "warn",
    },
	},

  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `
          @import './src/styles/nova';
          @import './src/styles/variables';
          @import './src/styles/fonts';
          `,
      }
    })
  ]
};

export default config;
