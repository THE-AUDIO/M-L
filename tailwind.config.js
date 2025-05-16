/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2F0EC',   // beige
        secondary: '#302624', // brown
        accent: '#858482',    // grey
      },
    },
  },
  plugins: [],
}
