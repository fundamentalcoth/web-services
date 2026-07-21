import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';

// https://astro.build/config
export default defineConfig({
  // `site` is required for canonical URLs, sitemap.xml and absolute OG URLs.
  site: SITE.url,
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets to cut render-blocking requests on this
    // near-static single page.
    inlineStylesheets: 'auto',
  },
  image: {
    // Only local assets are used; keeps the build hermetic.
    domains: [],
  },
});
