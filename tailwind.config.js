/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "clg": "1200px",
        "tfxl": "1050px",
        "mmd": "880px"
      }
    },
  },
  plugins: [],
}