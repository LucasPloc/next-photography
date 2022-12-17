const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bcg-img': "url('/photography-bg.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-expletus)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
