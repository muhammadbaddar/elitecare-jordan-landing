/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        eliteGold: "#C9A24E",
        eliteNavy: "#0B1728",
      },
      fontFamily: {
        cairo: ["Cairo", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl2: "1.25rem",
      }
    },
  },
  plugins: [],
}