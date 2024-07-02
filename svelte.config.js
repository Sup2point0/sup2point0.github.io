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
      handleHttpError: "warn",
    },
	},

  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `
          @use './src/styles/~nova' as *;
          @use './src/styles/~variables' as *;
          @use './src/styles/~fonts' as *;
          @use './src/styles/~anim' as *;
        `,
      }
    })
  ]
};

export default config;
