/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		extend: {
			height: {
				'128': '32rem', // altura personalizada, equivalente a 128px
				'160': '40rem', // altura personalizada, equivalente a 160px
				'192': '48rem', // altura personalizada, equivalente a 192px
			}
		},
	},
	plugins: [
		// eslint-disable-next-line no-undef
		require('flowbite/plugin'),
	],
}
