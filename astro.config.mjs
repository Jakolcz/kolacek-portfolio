// @ts-check
import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://kolacek.dev',
    integrations: [tailwind(), sitemap({
        i18n: {
            defaultLocale: 'en',
            locales: {
                en: 'en-US',
                cs: 'cs-CZ',
            }
        }
    })],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'cs'],
        routing: {
            prefixDefaultLocale: false, // English at /, Czech at /cs/
        },
    },
});