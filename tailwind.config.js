const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      tedxRed: "#FF2B06",
      tedxRedDarker: '#E12200',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: "#EEEEEE",
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
