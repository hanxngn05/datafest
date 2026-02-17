/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        title: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      colors: {
        white: '#ffffff',
        black: '#1a1c1e',
        indigo: {
          DEFAULT: '#3f41e0',
          light: '#6365e8',
          dark: '#2f31b0',
        },
        bubblegum: {
          DEFAULT: '#f16fbd',
          light: '#f48fc9',
          dark: '#d64fa3',
        },
        dragonfruit: {
          DEFAULT: '#e3488e',
          light: '#e966a4',
          dark: '#c93a7a',
        },
        // Keep primary for backward compatibility, map to indigo
        primary: {
          50: '#e8e9f9',
          100: '#d1d2f3',
          200: '#a3a5e7',
          300: '#7578db',
          400: '#474bcf',
          500: '#3f41e0',
          600: '#3234b3',
          700: '#252786',
          800: '#191a5a',
          900: '#0c0d2d',
        },
      },
    },
  },
  plugins: [],
}
