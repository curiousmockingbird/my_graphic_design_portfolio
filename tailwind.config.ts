import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
      }
    },
    colors: {
      'tahiti': '#3ab7bf',
      'orange': '#fb923c',
      'gray': '#f9fafb',
      'transparent': 'rgba(255, 255, 255, 0)',
      'white': '#f8fafc',
      'black': '#000000',
    },
  },
  plugins: [],
}
export default config
