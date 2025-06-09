// @ts-check
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://umbrai.xyz',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});

// deploy to cf: npx astro build,  npx wrangler pages deploy ./dist 