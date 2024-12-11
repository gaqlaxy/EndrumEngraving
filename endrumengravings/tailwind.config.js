/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'golden-silver': 'linear-gradient(to right, #C2C3C7, #D4AF37)',
      },
    },
  },
  plugins: [],
}