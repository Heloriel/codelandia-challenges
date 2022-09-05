/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      "merriweather": ['Merriweather', 'serif'],
      "lato": ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        "main-purple": "#D7D4FF",
      }
    },
  },
  plugins: [],
}
