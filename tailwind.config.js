/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      'lexend': ['Lexend Deca', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'post': 'box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05)',
      }
    }
  },
  plugins: [],
}
