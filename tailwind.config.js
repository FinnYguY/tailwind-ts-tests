/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        "light-gray": "#e6e6e6",
      },
      dropShadow: {
        small: "1px 1px 1px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
