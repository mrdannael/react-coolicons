/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'coolred': '#f53d7a',
				'coolnavy': "#49526a",
				'coolrose': "#724a69"
			},
		},
	},
	plugins: [],
}
