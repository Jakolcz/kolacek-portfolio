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
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}