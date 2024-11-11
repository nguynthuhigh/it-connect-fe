/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bor-color-grey": "#BDBDBD",
        forgotten: "#0075FF",
        "blue-main": "#0094FF",
        "blue-extra": "#E7F5FF",
        "gray-main": "#757575",
        "white-grey": "#F8FAFC",
        "light-grey":"#B8BCCA"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    plugins: [],
  },
};
