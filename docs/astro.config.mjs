import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.cabanaui.com',
  integrations: [
    vue(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    sitemap(),
  ],
});
