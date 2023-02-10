import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  base: '/cv',
  integrations: [mdx()],
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
