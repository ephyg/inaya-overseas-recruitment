/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        skyblue:"#247297",
        bluecol:"#0D1282"
      }
    },
  },
  plugins: [],
}