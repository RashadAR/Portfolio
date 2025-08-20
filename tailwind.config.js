/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#023047',
        cream: '#dad7cd',
        primaryBg: '#140F23',
        accent: '#16f2b3',
        surface: '#10172d',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        900: '900ms',
      },
      textUnderlineOffset: {
        3: '3px',
        6: '6px',
      },
      textDecorationThickness: {
        3: '3px',
      }
    },
  },
  plugins: [],
}

