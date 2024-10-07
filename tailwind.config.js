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
        rich_silver: "#C0C0C0",
        akira_red: "#E12120",
      },
    },
  },
  plugins: [],
};
