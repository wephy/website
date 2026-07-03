import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.wephy.com',

  // Served at the domain root → '/'. If you ever deploy to a project page
  // like https://wephy.github.io/website/, change this to '/website' and
  // every internal link keeps working (they all go through withBase()).
  base: '/',

  integrations: [sitemap()],

  markdown: {
    // $inline$ and $$block$$ math (incl. \begin{align*}) → KaTeX HTML.
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: 'htmlAndMathml', strict: false }]],
    shikiConfig: {
      // Code blocks are highlighted with the real Vitesse themes (shipped by
      // Shiki, maintained by the same author). Dual themes swap with the site.
      themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
      wrap: true,
    },
  },
});
