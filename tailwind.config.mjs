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
                purple: 'hsl(241, 61%, 57%)',
                darkPurple: 'hsl(241, 61%, 40%)',
                lightPurple: 'hsl(240, 61%, 70%)',
                darkYellow: 'hsl(42, 100%, 40%)',
                yellow: 'hsl(42, 100%, 48%)',
                lightYellow: 'hsl(42, 100%, 95%)',
                pink: 'hsl(354, 68%, 78%)'
            }
        },
	},
	plugins: [],
}
