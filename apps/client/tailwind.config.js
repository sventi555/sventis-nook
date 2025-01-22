/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      cube: {
        1: '#2D456A',
        2: '#395786',
        3: '#466AA3',
        4: '#597EB8',
        5: '#AFC1DD',
      },
      background: '#192539',
      selection: '#F4D427',
      separator: '#171611',
      text: {
        DEFAULT: '#F0EEE8',
        sub: '#B6B4AE',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      rubik: ['Rubik'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
