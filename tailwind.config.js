const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        screens: {
            'xs': '390px',
            ...defaultTheme.screens,
        },

        extend: {
          screens: {
            'lg': '1200px',
            // => @media (min-width: 1200px) { ... }
          },

          fontFamily: {
            'BebasNeue': ['Bebas Neue', 'cursive'],
            'CrimsonPro': ['Crimson Pro', 'serif'],
            'Rye': ['Rye', 'cursive'],
            'Vidaloka': ['Vidaloka', 'serif'],
          }
        }
    },

    plugins: [
        plugin(function({ addBase, theme }) {
            addBase({
              'h1': { fontSize: theme('fontSize.6xl') },
              'h2': { fontSize: theme('fontSize.5xl') },
              'h3': { fontSize: theme('fontSize.4xl') },
              'h4': { fontSize: theme('fontSize.3xl') },
              'h5': { fontSize: theme('fontSize.2xl') },
              'h6': { fontSize: theme('fontSize.xl') },
            })
          })
    ],
  }