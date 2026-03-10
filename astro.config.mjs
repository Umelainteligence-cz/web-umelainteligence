// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.umelainteligence.cz',
  output: 'static',

  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'cs',
        locales: {
          cs: 'cs-CZ',
          en: 'en-US',
        },
      },
    }),
  ],

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});
