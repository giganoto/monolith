/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gigaRed: "#D90B28",
        btnOrange: "#FF4820",
        techColor: "#4B6BFB",
        custom1: "#4B6BFB",
        blogCardBG: "#181A2A",
        topicBG: "#1B1E34",
        blogUserName: "#97989F",
      },
    },
  },
  plugins: [],
};
