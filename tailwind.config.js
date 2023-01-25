/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        maincolor: "#D6E3EB",
        secondcolor: "#FB5C01",
        textcolor: "#717F88",
      },
    },
  },
  plugins: [],
};
