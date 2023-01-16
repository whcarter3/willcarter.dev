/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#5ADBFF',
          yellow: '#FFDD4A',
          orange: '#FE9000',
          dark: '#3C6997',
          darker: '#094074',
        },
      },
    },
  },
  plugins: [],
};
