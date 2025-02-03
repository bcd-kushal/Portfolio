import type { Config } from "tailwindcss"
import { COLOR_PALLETTES } from "./src/common/themes/pallette"
import { HEIGHT_MARGINS, WIDTH_MARGINS } from "./src/common/themes/margins"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				geist: ["Geist"]
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				...COLOR_PALLETTES,
			},
			height: HEIGHT_MARGINS,
			minHeight: HEIGHT_MARGINS,
			maxHeight: HEIGHT_MARGINS,
			width: WIDTH_MARGINS,
			minWidth: WIDTH_MARGINS,
			maxWidth: WIDTH_MARGINS,
			transitionDelay: {
				5000: "5000ms"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				"auto-scroll": "auto-scroll 60s linear infinite backwards" ,
				"for-client": "for-client 5s linear infinite"
			},
			keyframes: {
				"auto-scroll": {
					"0%": { transform: "translate(0)" },
					"100%": { transform: "translate(-100%)" }
				},
				"for-client": {
					"0%": { filter: "blur(5px)", scale: "0.4", opacity: "0%" },
					"6%": { filter: "blur(0px)", scale: "1", opacity: "100%" },
					"94%": { filter: "blur(0px)", scale: "1", opacity: "100%" },
					"100%": { filter: "blur(5px)", scale: "0.4", opacity: "0%" }
				}
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
}

export default config
