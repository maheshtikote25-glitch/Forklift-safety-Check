/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2F6FED",
          blueDark: "#2557C7",
          navy: "#0B1830",
          navyLight: "#132A4D",
          teal: "#0E5A5A",
          tealDark: "#0A4646",
        },
        surface: {
          light: "#F5F8FC",
          card: "#FFFFFF",
          border: "#E4E9F1",
        },
        status: {
          pass: "#2E9E5B",
          fail: "#E4544A",
          na: "#E8A63B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.08)",
        floating: "0 20px 40px -10px rgba(11, 24, 48, 0.35)",
      },
    },
  },
  plugins: [],
};
