import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kushalkumarsaha.com",
  integrations: [
    tailwind(), 
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
      entryLimit: 20000,
      customPages: [
        "https://www.kushalkumarsaha.com/cv/CV-KushalKumarSaha.pdf",
        "https://www.kushalkumarsaha.com/banner/kushal_banner.png",
      ]
    })
  ]
});