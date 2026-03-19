import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";


export default defineConfig({
  plugins: [sveltekit()],
  server: {
    open: process.env.BROWSER = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  },
});
