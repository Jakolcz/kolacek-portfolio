// @ts-check
import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// import cloudflare from '@astrojs/cloudflare';

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
    // Adapter commented out because it generates _worker.js which disables the functions/ directory on Cloudflare Pages.
    // To use the adapter, you must migrate functions/api/contact.ts to src/pages/api/contact.ts.
    // adapter: cloudflare(),
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'cs'],
        routing: {
            prefixDefaultLocale: false, // English at /, Czech at /cs/
        },
    },
});