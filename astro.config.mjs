// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  build: {
    assets: 'static'
  },

  //Deploy normal project
  // base: '/project-1168/',
  // site: 'https://20essentials.github.io/project-1168/'

  //Deploy 20 Projects
  // base: '/20-projects-with-css/',
  // site: 'https://20essentials.github.io/20-projects-with-css/'

  //Localhost
  site: 'http://localhost:4321/',

  adapter: vercel()
});