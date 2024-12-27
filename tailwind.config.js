/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HeadingFont: ['"Kalam", cursive']
      },
      colors: {
        'yellowtheme': '#F5BF02',
        'blacktheme': '#1A2421',
        'lightblacktheme': '#232B2B',
        'whitetheme': '#fff',
        'ParaColor': 'rgb(184 184 184)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

