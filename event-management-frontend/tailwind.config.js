/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#0F172A",
        background: "#F8FAFC",
        success: "#22C55E"
      }
    },
  },
  plugins: [],
}