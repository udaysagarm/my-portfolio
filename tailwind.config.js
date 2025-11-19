/** @type {import('tailwindcss').Config} */
module.exports = {
  // We are changing this "content" line to be
  // extremely specific, to remove any errors.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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