/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily:
    {
      'b612': 'B612, sans-serif',
    },
    extend: {
      colors:{
        'challenge-green': '#628E75',
        'challenge-blue': '#1A4855',
      }
    },
  },
  plugins: [],
}
