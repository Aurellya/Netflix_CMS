/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#080808",
        "secondary-color": "#E61B1F",
        "tertiary-color": "#2C2C2C",
        "neutral-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
