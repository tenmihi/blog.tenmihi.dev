import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import addClasses from 'rehype-add-classes'

const rehypeAddClass = () => addClasses({
  p: 'my-4 text-base text-slate-700 dark:text-white',
  li: 'my-4 text-base text-slate-700 dark:text-white',
  ul: 'list-disc',
  img: 'mx-auto my-8 w-3/4 md:w-5/6',
})

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [
      rehypeAddClass
    ]
  }
});