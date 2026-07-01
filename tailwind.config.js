/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aks-white': '#FFFFFF',
        'aks-blue': {
          DEFAULT: '#0056b3',
          light: '#337ab7',
          dark: '#003d7a',
        },
        'aks-yellow': '#ffc107',
        'aks-orange': '#fd7e14',
        'aks-red': '#dc3545',
        'aks-green': '#28a745',
      }
    },
  },
  plugins: [],
}
