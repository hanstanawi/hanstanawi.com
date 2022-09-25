/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        basic: ['-apple-system', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
