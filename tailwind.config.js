/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f19",
        surface: "#121826",
        accent: "#22d3ee",
        accent2: "#3b82f6"
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(34,211,238,0.35)"
      }
    }
  },
  plugins: [],
};