import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // github pages config
  site: "https://ashanna.wedding",

  trailingSlash: "never",
  integrations: [react()],
});