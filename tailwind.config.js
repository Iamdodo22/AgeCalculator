/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors:{
        pblack:" hsl(0, 0%, 8%)",
       pwhite:" hsl(0, 0%, 100%",
       plgray:" hsl(0, 0%, 86%)",
       psgray: " hsl(0, 1%, 44%)",
       ppurple: " hsl(259, 100%, 65%)",
       pred: "  hsl(0, 100%, 67%)",
      }
    },
  },
  plugins: [],
}

