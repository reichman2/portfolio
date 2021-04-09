const colors = require('tailwindcss/colors');


module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // teal: {
        //   50: "#F0FDFA",
        //   100: "#CCFBF1",
        //   200: "#99F6E4",
        //   300: "#5EEAD4",
        //   400: "#2DD4BF",
        //   500: "#14B8A6",
        //   600: "#0D9488",
        //   700: "#0F766E",
        //   800: "#115E59",
        //   900: "#134E4A",
        // }, 
        // cyan: {
        //   50: "#ECFEFF",
        //   100: "#CFFAFE",
        //   200: "#A5F3FC",
        //   300: "#67E8F9",
        //   400: "#22D3EE",
        //   500: "#06B6D4",
        //   600: "#0891B2",
        //   700: "#0E7490",
        //   800: "#155900",
        //   900: "#164E63",
        // },
        teal: colors.teal,
        cyan: colors.cyan
      },
      fontFamily: {
        raleway: ['Raleway', 'Helvetica', 'Arial', 'sans-sserif'],
        mono: ['Roboto Mono', 'monospace']
      },
      borderWidth: {
        '1.5': '1.5px'
      },
      width: {
        '0.25': '0.0625rem',
        '1.5': '1.5px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
