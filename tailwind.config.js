/** @type {import('tailwindcss').Config} */
module.exports = {
  // We are changing this "content" line to be
  // extremely specific, to remove any errors.
  content: [
    "./src/App.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}