/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      main: "#EAC7C7",
      secondary: "#A0C3D2",
      ter: "#F7F5EB",
      quart: "#EAE0DA",
    },
  },
  // screens: {
  //   desktop: "1440px",
  // },
  extend: {
    // colors: {
    //   main: "#EAC7C7",
    //   secondary: "#A0C3D2",
    //   ter: "#F7F5EB",
    //   quart: "#EAE0DA",
    // },
  },
  plugins: [],
};
