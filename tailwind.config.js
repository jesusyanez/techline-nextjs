/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#303030",

          secondary: "#D9D9D9",

          accent: "#BAB9B9",

          neutral: "#272626",

          "base-100": "#D9D9D9",

          info: "#4176FF",

          success: "#f0a500",

          warning: "#FFFF00",

          error: "#FF0000",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
