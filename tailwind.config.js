/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        glitch: {
          '0%': { textShadow: '2px 0 red, -2px 0 blue' },
          '20%': { textShadow: '-2px 0 red, 2px 0 blue' },
          '40%': { textShadow: '2px 0 red, -2px 0 blue' },
          '60%': { textShadow: '-2px 0 red, 2px 0 blue' },
          '80%': { textShadow: '2px 0 red, -2px 0 blue' },
          '100%': { textShadow: '-2px 0 red, 2px 0 blue' },
        },
      },
      animation: {
        glitch: 'glitch 0.7s infinite',
      },
      colors: {
        'sand': {
          DEFAULT: '#e1b382',
          'shadow': '#c89666',
        },
        'night': {
          DEFAULT: '#2d545e',
          'shadow': '#12343b',
        },
      },
    },
  },
  plugins: [],
}

