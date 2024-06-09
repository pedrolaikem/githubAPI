/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blackA': 'rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}