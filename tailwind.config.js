/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: "#247297",
        bluecol: "#0D1282",
        darkblue: "#02065C",
        customorange: "#FF8A00",
        btncol: "#247297",
        golden:"#926900"
      },
      height: {
        "h-2px": "2px",
      },
    },
  },
  plugins: [],
};
