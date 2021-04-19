
const { FaLessThanEqual } = require('react-icons/fa')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: {
        '50': '#eafbfc',
        '100': '#abf1f4',
        '200': '#81eaef',
        '300': '#57e3ea',
        '400': '#2EDCE5',
        '500': '#29c6ce',
        '600': '#24b0b7',
        '700': '#209aa0',
        '800': '#1b8489',
        '900': '#176e72',
      },
      teal:colors.teal,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
