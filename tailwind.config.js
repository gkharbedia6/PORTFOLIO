/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        monaco: ["Monaco", "monospace"],
        helveticaNeueBold: ["HelveticaNeueBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
