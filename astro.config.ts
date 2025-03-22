import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  // github pages config
  site: "https://ashanna.wedding",

  trailingSlash: "never",

  adapter: node({
    mode: "standalone",
  }),
});