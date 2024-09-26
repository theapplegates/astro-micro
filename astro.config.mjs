import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: imageService({
      fallbackService: "netlify",
      placeholder: "blurhash",
      // This is the default
      layout: "constrained",
    }),
  },
  site: "https://nano.paulapplegate.com",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});