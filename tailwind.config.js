/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D4C92', // Warna biru utama logo
        secondary: '#1A1A1A', // Warna teks hitam
        'accent-yellow': '#FFF59D',
        'accent-green': '#C8E6C9',
        'accent-blue': '#BBDEFB',
        'accent-pink': '#F8BBD0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Pastikan import font ini di index.css atau Google Fonts
      }
    },
  },
  plugins: [],
}