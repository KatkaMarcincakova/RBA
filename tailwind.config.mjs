/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
            xxs: '340px',
            xs: '410px',
            sm: '480px',
            s: '590px',
            md: '720px',
            m: '850px',
            lg: '976px',
            l: '1200px',
            xl: '1440px'
        },
        extend: {
            colors: {
                primary: 'hsl(216, 78%, 7%)',
                secondary: 'hsl(182, 96%, 42%)',
                contrast: 'hsl(33, 86%, 45%)',
                light: 'hsl(180, 5%, 96%)',
            }
        },
	},
	plugins: [],
}
