/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        blue: "#3575E2",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".flex-grow-2": {
          "flex-grow": 2,
        },
        ".flex-grow-4": {
          "flex-grow": 4,
        },
        ".flex-grow-3": {
          "flex-grow": 3,
        },
      });
    },
  ],
};
