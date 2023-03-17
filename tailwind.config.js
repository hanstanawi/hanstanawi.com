/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        basic: ['-apple-system', 'Roboto', 'sans-serif'],
      },
      colors: {
        tealGreen: '#04A2B9',
        dark: '#23272F',
        darkV2: '#161615',
        darkV3: '#1F2937',
        darkV4: '#0A1930',
        darkV5: '#191B22',
      },
      transitionProperty: {
        top: 'top',
      },
    },
  },
  plugins: [],
};
