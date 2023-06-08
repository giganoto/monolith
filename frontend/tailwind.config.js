/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gigaRed: '#D90B28',
        btnOrange: '#FF4820',
      },
    },
  },
  plugins: [],
}

