import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./stories/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			Vazirmatn: ["Vazirmatn", "sans-serif"],
		},
		extend: {
			container: {
				padding: "1.25rem",
				center: true,
			},
			maxWidth: {
				"4xl": "52rem",
			},
			spacing: {
				"112": "26rem",
				"116": "30rem",
				"120": "36rem",
				"150": "50rem",
				"2/7": "51%",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				fade: "fade 1s ease-in-out forwards",
			},
			keyframes: {
				fade: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
		},
	},
	plugins: [],
};
export default config
