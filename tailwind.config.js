/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"futura-light": ["Futura PT Light", "sans-serif"],
				"futura-normal": ["Futura PT Book", "sans-serif"],
				"futura-medium": ["Futura PT Medium", "sans-serif"],
				"futura-semibold": ["Futura PT Demi", "sans-serif"],
				"futura-heavy": ["Futura PT Heavy", "sans-serif"],
				"futura-bold": ["Futura PT Bold", "sans-serif"],
				"futura-extrabold": ["Futura PT Extra Bold", "sans-serif"],
			},
			colors: {
				calamansi: "#fbffa7",
				"pinkish-orange": "#ff764d",
				"night-snow": "#b1c5ff",
				"pure-blue": "#0000ff",
				lavender: "#d5b3ff",
				"light-mint": "#b6ffc0",
			},
		},
	},
	plugins: [],
};
