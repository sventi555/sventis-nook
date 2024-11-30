/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: {
        50: '#DAE2EF',
        100: '#CBD7E9',
        200: '#AFC1DD',
        300: '#92AAD0',
        400: '#7694C4',
        500: '#597EB8',
        600: '#466AA3',
        700: '#395786',
        800: '#2D456A',
        900: '#21324D',
        950: '#192539',
      },
      turquoise: {
        50: '#F7F9F9',
        100: '#EBF0F1',
        200: '#D4DFDF',
        300: '#BCCDCE',
        400: '#A5BBBD',
        500: '#8DAAAB',
        600: '#76989A',
        700: '#5C7A7C',
        800: '#445B5C',
        900: '#2C3B3C',
        950: '#202B2C',
      },
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
