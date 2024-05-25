import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.kushalkumarsaha.com',
  integrations: [sitemap()],
  prefetch: true
});