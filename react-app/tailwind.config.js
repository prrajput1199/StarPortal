/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-opacity-0': 'rgba(255, 255, 255, 0)',
        'white-opacity-7': 'rgba(255, 255, 255, 0.07)',
        'white-opacity-12': 'rgba(255, 255, 255, 0.12)',
        'white-opacity-15': 'rgba(255, 255, 255, 0.15)',
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)',
        'white-opacity-40': 'rgba(255, 255, 255, 0.4)',
        'white-opacity-80': 'rgba(255, 255, 255, 0.8)',
        'white-opacity-5': 'rgba(255, 255, 255, 0.05)',
        'icon-colour': 'rgba(60, 32, 140,0.2)',
        "button":'rgb(100, 53, 233)'
      }
    },
  },
  plugins: [],
}