/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        mini: '0.56rem'
      } 
    },
    fontFamily: {
      rale: ['Raleway'],
      timesNewRoman: ['nyt-cheltenham,georgia,times new roman,times,serif'],
      subtitle: ['nyt-imperial,georgia,times new roman,times,serif'],
      mini: ["nyt-franklin,helvetica,arial,sans-serif"],
      title: ["nyt-cheltenham,georgia,'times new roman',times,serif;"]
    },
  },
  plugins: [],
}
