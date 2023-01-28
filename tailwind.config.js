/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      main: "#EAC7C7",
      secondary: "#A0C3D2",
      ter: "#F7F5EB",
      quart: "#EAE0DA",
    },
    screens: {
      desktop: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
