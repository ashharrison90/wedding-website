import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // github pages config
  site: "https://ashanna.wedding",

  trailingSlash: "never",
  integrations: [icon()],
});