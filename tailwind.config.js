/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')
module.exports = withMT({
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'primary': '#9818D6',
      'greenColor': '#4caf50',
      'orangeColor': '#eb622c',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      orange: colors.orange,
      purple: colors.purple,
      blue: colors.blue,
      'pink': '#ff49db',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'fontBlack': '#3c4858',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '32px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'xlarge': '16px',
    },
    
    extend: {
      backgroundImage: {
        'module-pattern': "url('../public/img/pattern.png')",
        'breadcump-pattern': "url('../public/img/backdrop-pattern.svg')",
      },
      fontFamily: {
        'IranSans': ['IranSans'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
})
