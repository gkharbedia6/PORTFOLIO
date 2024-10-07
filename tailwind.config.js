/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        monaco: ["Monaco", "monospace"],
        helveticaNeueBold: ["HelveticaNeueBold", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      screens: {
        lg: "1000px",
        md: "700px",
      },
      colors: {
        cursor_blue: "#0000FF",
        light_gray: "#c3c3c3",
        rich_silver: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
