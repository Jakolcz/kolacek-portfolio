/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#10b77f',
                'primary-dark': '#059669',
                'slate-950': '#020617',
                'zinc-900': '#18181b',
                'zinc-800': '#27272a',
                'zinc-400': '#a1a1aa',
            },
            fontFamily: {
                sans: ['Inter Variable', 'sans-serif'],
                mono: ['JetBrains Mono Variable', 'monospace'],
            },
            transitionProperty: {
                'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
            },
            transitionDuration: {
                DEFAULT: '300ms',
            },
            transitionTimingFunction: {
                DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [],
}